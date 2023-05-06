/* Type alias */
type School = {
    name: string,
    location: string,
    admit: (info: object) => boolean
}

type Student = {
    name: string,
    age: number,
    phoneNo:number
}

type Teacher = {
    name: string,
    age: number,
    phoneNo:number,
    designation:string
}

/* Examples */
const school: School = {
    name: "University of Melbourne",
    location: "Melbourne",
    admit: (info: object) => info ? true : false
}

const school2: School = {
    name: "University of Dhaka",
    location: "Dhaka",
    admit: (info: object) => info ? true : false
}
