// Set up three arrays of messages to be returned randomly
const firstMessage = ['Drink plenty of water.', 'Get outdoor sunlight at the start of the day.', 
    'Spend time in nature.', 'Move your body every day.', 'Spend time with your favourite people.'];
const secondMessage = ['Eat food that supports your health', 'Get plenty of sleep', 
    'Do things to help others', 'Appreciate the beauty in the world', 'Spend time being creative'];
const thirdMessage = ['Learn new skills.', 'Manage your stress.', 'Eat plenty of fruit & veg.', 
    'Remember to enjoy life.', 'Play and have fun!'];

// Set up a function to return a random item for each of the three arrays, and assign it to a variable//
let randomNum = array => {
    return Math.floor(Math.random() * array.length);
};
// console.log(randomNum(firstMessage));

// Set up a function to get a message from an array using the previously set up random function
let randomString = array => {
    for (let i = 0; i < array.length; i++) {
        return array[randomNum(array)];
    }
};
// console.log(randomString(firstMessage));

// Set up a function to run randomString for each of the 3 arrays, assigning the result to a variable
let lifeTips = () => {
    let msg1 = (array1) => {
        return randomString(array1);
    }
    console.log(msg1(firstMessage));
    let msg2 = (array2) => {
        return randomString(array2);
    }
    console.log(msg2(secondMessage));
    let msg3 = (array3) => {
        return randomString(array3);
    }
    console.log('and ' + msg3(thirdMessage));
}

lifeTips();