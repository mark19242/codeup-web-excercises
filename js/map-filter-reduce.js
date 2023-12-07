const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const usersWithAtLeast3Languages = users.filter((user, index, array) => {
    return user.languages.length >= 3;
});

console.log(usersWithAtLeast3Languages);

// TODO: Use .map to create an array of strings where each element is a user's email address
const userEmails = users.map((user, index, array) => {
    return user.email;
});

console.log(userEmails);

// TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const averageYears = users.reduce((accumulator, user, index) => {
    if (index === users.length - 1) {
        return (accumulator + user.yearsOfExperience) / users.length;
    }
    return accumulator + user.yearsOfExperience;
}, 0);
console.log("Average years => ", averageYears);



// TODO: Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce((accumulator, user, index, array) => {
    if (accumulator.length < user.email.length) {
        return user.email;
    } else {
        return accumulator;
    }
}, users[0].email);
console.log("Longest email => ", longestEmail);



// TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const getUserNamesString = (users) => {
    return users.reduce((namesString, user, index) => {
        if (index === users.length - 1) {
            return namesString + user.name + '.';
        } else {
            return namesString + user.name + ', ';
        }
    }, 'Your instructors are: ');
};

const instructorsString = getUserNamesString(users);
console.log(instructorsString);

// BONUS: Use .reduce to get the unique list of languages from the list of users.
const languagesKnown = users.reduce((accumulator, user) => {
    for (let language of user.languages) {
        if (accumulator.includes(language)) {
            continue;
        } else {
            accumulator.push(language);
        }
    }
    return accumulator;
}, []);
console.log("All languages known => ", languagesKnown);
})();





