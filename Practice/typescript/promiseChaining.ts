/**
 * Promise Chaining
 * 여러 개의 프로미스를 연결해서 사용한다.
 * 
 * promise.then()
 * 
 * promise.catch()
 */

const cook = (callback: () => void, timeout: number) => {
    setTimeout(callback, timeout);
};

const randomRecipe = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        cook(() => {
            console.log("[라면 진행상황]");
            resolve("[라면 만들기 시작]");
        }, 1000);
    });
};

const boilWater = (progress: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        console.log("[라면] 1. 물끓이기 시작");
        cook(() => {
            resolve(`${progress} -> 물끓이기`);
        }, 2000)
    })
}

const putTheRamenAndSoup = (progress: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        console.log("[라면] 2. 라면과 스프넣기 완료, 3분간 끓이기 시작");
        cook(() => {
            resolve(`${progress} -> 면, 스프 넣기`);
        }, 1000);
    });
};

const delayThreeMinutes = (progress: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        console.log("[라면] 3. 3분간 대기");
        cook(() => {
            resolve(`${progress} -> 완성`);
        }, 3000);
    });
};

randomRecipe()
    .then(progress => boilWater(progress))
    .then(progress => putTheRamenAndSoup(progress))
    .then(progress => delayThreeMinutes(progress))
    .then(progress => console.log(progress))