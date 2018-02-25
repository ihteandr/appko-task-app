import * as uuid from 'uuid';

export default class BaseApi {
    constructor(backend) {
        this.backend = backend;
        this.currentRaces = [];
    }
    withPreventingRaceCondition(url, func){
        let race = {
            url: url,
            id: uuid.v4(),
            time: Date.now()
        };
        this.currentRaces = this.currentRaces.filter((c_race)=>{
            return c_race.url !== race.url;
        });
        this.currentRaces.push(race);
        return new Promise((resolve, reject)=>{
            func().then((response)=>{
                if(this.currentRaces.find((c_race)=>c_race.id === race.id)){
                    resolve(response);
                }
            },reject);
        });
    }
}
