const test = 'rohim';

// test ? console.log('it is true') : console.log('not true');


const num = 5;

// (num >= 10 && num <= 40) ? console.log('it is big') : console.log('it is small');


const isActive = false;

// (isActive === true) ? console.log('you can message now') : console.log('now your user not available');


const user = false;

const show = ()=> console.log('user Active');
// const notActive = () => console.log('user Not Active');

// user ? show() : notActive()

user && show() //ternary operator you can wright like this
// user || notActive() //if user false then this code run