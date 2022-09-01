
if (true) {
    var x = "var"
}

console.log(`var: ${x}`) // 블록 밖에서도 접근 가능 (var: Function scope)

if (true) {

    // let: 블록 내부에서만 유효 (block scope)
    let k = "let"
    console.log(`블록 내부: ${k}`)
}

/*
console.log(`블록 외부 let: ${k}`) // [Error] k is not defined.
*/