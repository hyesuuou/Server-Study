
/**
 * Pending (최초 생성)
 * 
 * new Promise() 
 * 
 * resolve (결과를 올바르게 줄 수 있음)
 * reject (동작 실패)
 */

const condition: boolean = true;

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


const secondPromise = new Promise(function(resolve, reject) {
    if (condition) {
        resolve('ㅋㅋ 성공~ 이거전달?');
    } 
    else {
        reject(new Error("에러..^^"));
    }
})

secondPromise
    .then((data) => {
        
        // 작업 성공
        console.log(data)
    })
    .catch((err) => {

        // 작업 실패
        console.log(err)
    })