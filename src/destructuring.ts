// Object Destruturing
// Array Destruturing


const myInfo ={
    name: "Pritom Chakma",
    age: 24,
    favouriteColour : "black",
    brothers :{
        firstBrother: "Shagotom Chakma",
        secondBrother: "Goutom Chakma"
    },
    institute : "Port City International University",
    homTwon : "Rangamati"
}

const {name, brothers} = myInfo

// console.log(name, brothers.firstBrother, brothers.secondBrother);



// Array Distructuring 

const friends = ["Milu", "Raju", "Noyon"]

const [, , C] = friends

// console.log(C);