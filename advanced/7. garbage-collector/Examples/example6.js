
let list = [];
function addToList() {
    list.push({name: "Jaber"})
}
addToList()

console.log(list[0])
// Output: { name: 'Jaber' }

list = null;
console.log(list) // Output: null

// Now the reference function is garbage

