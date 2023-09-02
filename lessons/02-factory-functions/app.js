const personFactory = (name, age) => {
    const sayHello = () => console.log("Hello");
    return { name , age, sayHello}
}

const jeff = personFactory('jeff', 33)

console.log(jeff.name);
console.log(jeff.age);
jeff.sayHello()


const FactoryFunction = string =>  {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`--- ${capitalizeString()} ---`)
    return { printString }
}

const icecream = FactoryFunction('icecream');

// printString();
// capitalizeString();
// icecream.capitalizeString()
icecream.printString()


const counterCreator = () => {
    let count = 0;
    return () => {
      console.log(count);
      count++;
    };
  };
  
  const counter = counterCreator();
  
// console.log(counter); // will output a function

  counter(); // 0
  counter(); // 1
  counter(); // 2
  counter(); // 3