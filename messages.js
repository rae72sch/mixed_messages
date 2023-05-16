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

