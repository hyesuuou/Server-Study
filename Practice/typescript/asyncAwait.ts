/**
 * Async
 * - 암묵적으로 Promise를 반환
 * 
 * Await
 * - Promise를 기다림 (resolve, reject)
 * - async 정의된 내부에서만 사용
 */

/**
 * Async 함수 형태
 */

// 함수 표현식
// const asyncFuncion1 = async() => {

// }

// // 함수 선언식
// async function asyncFunction2() {

// }

let asyncFunc1 = (msg: string): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`asyncfunc1 - ${msg}`);
        }, 1000);
    });
};

let asyncFunc2 = (msg: string): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`asyncFunc2 - ${msg}`);
        }, 1500); 
    });
};

const promiseMain1 = (): void => {
    asyncFunc1('hi')
        .then((result) => {
            console.log(result);
            return asyncFunc2('hello');
        })
        .then((result) => {
            console.log(result);
        });
};

asyncFunc1('hi')
.then((result) => {
    console.log(result);
    return asyncFunc2('hello');
})
.then((result) => {
    console.log(result);
});

const asyncMain = async (): Promise<void> => {
    let result = await asyncFunc1('hi');
    console.log(result);
    result = await asyncFunc2('hello');
    console.log(result);
}