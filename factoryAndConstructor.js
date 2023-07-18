function createAddress(street,city,zipCode){
    return{
        street,
        city,
        zipCode
    }
}

console.log(createAddress('nolan','tuty',123456))

function CreateAddress(street,city,zipCode){
    this.street = street,
    this.city  = city,
    this.zipCode = zipCode
}

console.log(createAddress('nolan','tuty',123456))