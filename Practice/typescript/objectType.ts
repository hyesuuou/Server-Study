
/**
 *  object: 원시타입 제외한 나머지 받을 수 있다.
 */
const foo = (obj: object): void => {
    // obj 받아서 void 리턴 
    console.log(obj);
}

/**
 *
 * Obj: javascript의 모든 타입이 할당될 수 있다.
 */

const boo = (obj: Object): void => {
    console.log(obj)
}


// foo('바보') //Argument of type 'string' is not assignable to parameter of type 'object'.
boo("바보 ㅋ")