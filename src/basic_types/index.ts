/* build in types 

Javascript => number,string,boolean,null,undefined,object,
TypeScript => any,unknown,never,enum,tuple

*/

const num: number = 0;
const str: string = "hello";
const bool: boolean = true;
const null_value: null = null;
const obj: object = { hi: 'Hola!' }

let anything: any;
let unk: unknown;
// function neverFunc():never{
//     return 0;
// }
enum Sizes {
    SMALL, //default value start with 0
    MEDIUM,
    LARGE
}

const tuple_type: [number, string, boolean] = [1, 'hello', true];  //fixed length array