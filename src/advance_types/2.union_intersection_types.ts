type Student_ = {
    name: string,
    age: number,
    phoneNo: number
}

type Teacher_ = {
    name: string,
    age: number,
    phoneNo: number,
    designation: string
}

/* Union type */
type Team = Student_ | Teacher_
let union: Team = {
    name: "John",
    age: 20,
    phoneNo: 1234567890,
}

/* Intersection type */
type School_ = Student_ & Teacher_

