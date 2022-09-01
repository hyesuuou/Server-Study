// <>

let myName: any = "혜수"
let myNameLength: number = (<string>myName).length

console.log(myName.type)
console.log(myNameLength)

// as

myName = "하잉zzzzz"
console.log((myName as string).length)