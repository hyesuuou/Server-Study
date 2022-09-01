// swift 구조체 같다 .. ?는 옵셔널..신기하다

interface Person {
    name: string;
    age: number;
    school?: string;
}

const people: Person[] = [
    {
        name: '김혜수', 
        age: 25,
        school: 'sookmyung'
    }, 
    {
        name: '남지윤',
        age: 23,
        school: 'sookmyung'
    }, 
    {
        name: '안현주', 
        age: 23,
        school: 'sookmyung'
    }, 
    {
        name: '김바보', 
        age: 27
    }
]

console.log(people)