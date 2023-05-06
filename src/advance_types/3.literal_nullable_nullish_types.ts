/* Literal types */
type Money = 500 | 1000
function receiveMoney(money: Money): string {
    return money ? 'received' : 'not received';
}
console.log(receiveMoney(500));
// console.log(receiveMoney(null)); //throw error

/* Nullable type */
function receiveMoney2(money: Money | null): string {
    return money ? 'received' : 'not received';
}
console.log(receiveMoney2(null));

/* Nullish  Coalescing (only null or undefined validation) */
function receiveMoney3(money: Money | null): string | Money {
    return money ?? 'not received';
}
console.log(receiveMoney2(null));