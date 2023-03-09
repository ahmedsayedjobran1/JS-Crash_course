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
<!-- <mark>here it will give you the _null_ value</mark> -->
`this is a new way to adding a styles`


`What was the last new thing you learned?

Perhaps it was a foreign language, like Italian or German. Or maybe it was a graphics editor, like Photoshop. Or a cooking technique or woodworking or an exercise routine. I want you to remember that feeling when you finally got it: the lightbulb moment. When things went from blurry to crystal clear, as you mastered the table saw or understood the difference between masculine and feminine nouns in French. How did it feel? Pretty amazing, right?`