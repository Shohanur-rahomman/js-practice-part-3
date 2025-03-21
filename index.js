

function duplicateNumber(numbers) {
    let uniqNumber = [];
    for (let i = 0; i < number.length; i++) {
        if (uniqNumber.indexOf(numbers[i]) === -1) {
            uniqNumber.push(numbers[i]);
        }

    }
    return uniqNumber;
}
const number = [1, 2, 3, 3, 4, 4, 5, 6, 6,];

const result = duplicateNumber(number);
// console.log(result);


function friends(friend) {
    let newFriend = [];
    for (let i = 0; i < friend.length; i++) {
        if (newFriend.indexOf(friend[i]) === -1) {
            newFriend.push(friend[i]);
        }
    }
    return newFriend;
}

const myFriend = ['joy', 'joy', 'khalek', 'don', 'don'];
const res = friends(myFriend);
// console.log(res);

function flitterNum(num) {
    let newNumber = [];
    for (let i = 0; i < num.length; i++) {
        if (newNumber.indexOf(num[i]) === -1) {
            newNumber.push(num[i])
        }
    }
    return newNumber;
}

const num1 = [30, 50, 60, 60];
const resultFinal = flitterNum(num1);
console.log(resultFinal);

function uniqMember(member) {
    let newMember = [];
    for (let mem of member) {
        if (!newMember.includes(mem)) {
            newMember.push(mem)
        }
    }
    return newMember;
}

const member = ['rohim', 'rohim', 'korim'];
const finalMember = uniqMember(member);
// console.log(finalMember);

