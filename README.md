## JS-tips

<h1>let's desscution the difference between the undefined and null 
<hr>

```js
function getPerson(name, age, address) {
  return {
    name: name,
    age: age,
    address: address || null
  };
}

let person1 = getPerson("John Doe", 30, "123 Main St.");
let person2 = getPerson("Jane Smith", 25);

console.log(person1); // Output: {name: "John Doe", age: 30, address: "123 Main St."}
console.log(person2); // Output: {name: "Jane Smith", age: 25, address: null}

```
<mark>here it will give you the _null_ value

