
/**
 * Pending (최초 생성)
 * 
 * new Promise() 
 * 
 * resolve (결과를 올바르게 줄 수 있음)
 * reject (동작 실패)
 */

const condition: boolean = false;

const promise = new Promise((resolve, reject) => {

    if (condition) {
        resolve('성공');
    }
    else {
        reject(new Error("condition false"))
    }
});

promise
    .then((data): void => console.log(`우왕 then ${data}`))
    .catch(err => console.log("오마갓", err));