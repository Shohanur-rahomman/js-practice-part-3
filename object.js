
const products = [
    { name: 'opo', price: 200, color: 'black', ram: '4gb' },
    { name: 'iphone', price: 1000, color: 'black', ram: '8gb' },
    { name: 'samsung', price: 800, color: 'black', ram: '8gb' },
    { name: 'vivo', price: 500, color: 'black', ram: '4gb' },
    { name: 'opo', price: 200, color: 'black', ram: '2gb' }
]

const newOne = { name: 'opo', price: 300, color: 'white', ram: '3gb' }

// let newProducts = [...products, newOne];
// console.log(newProducts);

const remainingPhone = products.filter(product => product.price === 200 || product.ram === '8gb');

const newResult = remainingPhone.map(phone => phone.price);
const totalPrice = newResult.reduce((sum,price) => sum + price,0)//+ - * / all can
// console.log(totalPrice);
