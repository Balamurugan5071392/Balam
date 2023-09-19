///<reference types="@types/google.maps" />
import { CustomMap } from './CustomMap'
import { User } from './User'
import { Company } from './company'
new google.maps.InfoWindow()
const user = new User()
const company = new Company();
const customMap = new CustomMap('map')
customMap.addMarker(user)
customMap.addMarker(company)


/*const user = new User()
console.log(user)

const company = new Company()
console.log(company)

const map = new google.maps.Map(document.getElementById('map') as HTMLElement,{
    zoom:1,
    center:{
        lat:10,
        lng:10
    }
    
})*/

//console.log(map)


