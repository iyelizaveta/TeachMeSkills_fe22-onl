// 1. Создать строку из имен пользователей через запятую
// 2. Посчитать общее количнство машин у пользователей
// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

interface User {
  name: string;
  phone: string;
  email: string;
  animals: string[];
  cars: string[];
  hasChildren: boolean;
  hasEducation: boolean;
}

const users: Partial<User>[] = [
  {
    name: "Harry Felton",
    phone: "(09) 897 33 33",
    email: "felton@gmail.com",
    animals: ["cat"],
    cars: ["bmw"],
    hasChildren: false,
    hasEducation: true,
  },
  {
    name: "May Sender",
    phone: "(09) 117 33 33",
    email: "sender22@gmail.com",
    hasChildren: true,
    hasEducation: true,
  },
  {
    name: "Henry Ford",
    phone: "(09) 999 93 23",
    email: "ford0@gmail.com",
    cars: ["bmw", "audi"],
    hasChildren: true,
    hasEducation: false,
  },
];

//1
function userNames(arr: Partial<User>[]): void {
  const strings: string = arr.map((item) => item.name).join(", ");
  console.log(`User names are: ${strings}`);
}

userNames(users);

//2
function numOfCars(arr: Partial<User>[]): void {
  let result: number = 0;
  arr.forEach((element) => {
    if (element.cars) {
      let value = element.cars.length;
      result += value;
    }
  });
  console.log(`Total cars: ${result}`);
}

numOfCars(users);

//3
function filterByEducation(arr: Partial<User>[]) {
  const newUsers = arr.filter((user) => user.hasEducation);
  console.log(newUsers);
}

filterByEducation(users);

//4
function filterByAnimals(arr: Partial<User>[]) {
  const newUsers = arr.filter((user) => user.animals);
  console.log(newUsers);
}

filterByAnimals(users);

//5
function stringOfCars(arr: Partial<User>[]) {
  const newArr = arr
    .map((user) => user.cars)
    .filter((car) => car)
    .join(", ");
  console.log(newArr);
}
stringOfCars(users);
