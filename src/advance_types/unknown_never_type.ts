/* unknown type */
function hello(info: unknown) {
    if (typeof info === 'string') console.log(info.length);
    if(Array.isArray(info)) console.log(info)
}
hello([])

/* never type */
function hello2():never{
    // return ''
    while(true){
        
    }
}

console.log(hello2());
console.log('reached');


/* void */
/* 
    => almost similar with never. void means this function not returns anything. 
    On the other hand never means this function will never ever return anything.
*/