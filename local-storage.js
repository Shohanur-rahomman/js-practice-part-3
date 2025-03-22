
const handleSubmit = () => {
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    // localStorage.setItem(name,email)
    const data = { name, id };
    localStorage.setItem(id, JSON.stringify(data))
    
}

const jData = localStorage.getItem('15');
// console.log(JSON.parse(jData));


const handleClear = () => {
    localStorage.clear()
}



const person4 = {
    name: 'boy',
    age: 20,
    'hello-boy': 10
}
const personCount = person4['hello-boy']//braked notation
console.log(personCount);