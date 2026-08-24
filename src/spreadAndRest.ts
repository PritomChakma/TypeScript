// Spread Operator

const friends = ["Rahim", "Karim"];

const schoolFriends = ["Milu", "Noyon"];

const collegeFriends = ["Joti", "Khokon"];

friends.push(...schoolFriends, ...collegeFriends);
// console.log(friends);



// on Object Spread Operators
const myName = {
    name : "Pritom Chakma",
    age: 24,
    hobby : "Traveling"
}

const otherInfo ={
    institute : "Port City International University",
    subject: "Computer Science and Engineering",
    Grade : 3.11
}

// console.log(myName);
// console.log(otherInfo);

const myInfo = {...myName, ...otherInfo}
// console.log(myInfo);

// Rest Operator

const invitation = (...friends: string[]) =>{
    friends.forEach(friend => {
        console.log(`Send the invitation ${friend}`);
    });
}

invitation("Azmol", "Rahim", "Karim", "Pritom");
