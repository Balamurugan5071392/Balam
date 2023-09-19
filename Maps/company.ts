import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";
export class Company implements Mappable
{
    companyName:string
    catchPhrase:string
    location:{
        lat:number
        lng:number
    }
    color:string = 'blue'
    constructor(){
        this.companyName = faker.company.name()
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat:faker.location.latitude(),
            lng: faker.location.longitude()
        }
    }
    markerContent():string{
        return `
        <div>
            <h1>Company Name:${this.companyName}</h1>
            <h2>Catchphrase:${this.catchPhrase}</h2>
        </div>
        `
    }
}