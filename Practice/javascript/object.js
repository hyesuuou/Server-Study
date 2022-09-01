// swift 에서 구조체나 클래스 같은걸까 ..?

// { key: value 형태 }

const person = {
    age: 25, 
    name: '혜수',
    school: 'sookmyung',
    food: ["김치찜", "연어초밥", "육회", "묵은지광어초밥", "삼겹살(with김치)"],

    likeFood: function () {
        this.food.map( food => {
            console.log(`${this.name}이/가 좋아하는 음식은 ${food}임.`)
        })
    }
}

console.log(person.likeFood())
