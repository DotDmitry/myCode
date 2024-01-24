let _let;
_let = 10;

//console.log(_let);

/* const con=20; //constanta


console.log(typeof _let);

console.log(5**4); // power

let userName ='Jack';

let userName1 ="Jack    \"Metro\"";

let text='hello\n';

console.log(text.length); */

// let bool = true;

// console.log(Boolean(20));//true

// console.log(Boolean(0));//false

// console.log(Boolean(NaN));//false

// console.log(Boolean("Hello"));//true

// console.log(Boolean("\n"));//true

// console.log(Boolean(""));//false

let fruits = 'Apple,Banana,Pear';

console.log(fruits.slice(0, 5));

const myCar = {
    make: "Honda",
    'car model': 'Civic',
    popular: true
}
//delete(myCar.popular);
const myCar2 = {
    make: "Honda",
    model: 'Civic',
    popular: true,
    info: {
        year: 2000,
        color: red
    },
}

//let color=myCar2["info"]["color"];

//let copy_myCar2=Object.assign({},myCar2);//COPY!!!! only hight level

//let copy_myCar2={...myCar2};//COPY!!!! only hight level

let copy_myCar2 = JSON.stringify(myCar2);//to JSON
copy_myCar2 = JSON.parse(copy_myCar2);//to Object

const userName = 'Vasja';
const friends = 100;

const profile = {
    // name: userName,
    // friends: friends,
    userName,
    friends,
    check: true,
}

const button = {
    width: 200,
    text: 'Buy'
}

const buttonRed = {
    ...button,
    color: 'red',

}

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Array.isArray(numArr);

numArr.forEach(num => {
    console.log(num ** 2);
})

numArr.push(10); //Add

let removed = numArr.pop();//remove last

numArr.unshift(0);//insert to 0

let val=numArr.shift();//removed from 0




