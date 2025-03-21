const person = {
    name: 'joy',
    age: 20,
    // 10: car,
    friend: ['rayhan', 'kumar', 'nobi'],
    family: {
        fatherName: 'joynal'
        
    }
};

const jsonData = JSON.stringify(person);//object to json

const jsonDAtaNormal = JSON.parse(jsonData);//json to object

const objectKey = Object.keys(person);//object only keys

const objectValue = Object.values(person);//object only value

// console.log(objectValue);

