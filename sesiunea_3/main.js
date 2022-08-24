const users = [];

const createUser = (user) => {
    if(!isUserValid(user)) return;

    const fullName = `${user.firstName} ${user.lastName}`;

    const formatedUser = {
        name: fullName,
        age: user.age,
        success: true

    }

    users.push(formatedUser);

    return fullName;
}


const isUserValid = (user) => {
    if(user.firstName.lenght === 0) return false;
    if(user.lastName.lenght === 0) return false;
    if(user.password.lenght === 0) return false;
    if(user.country.lenght === 0) return false;
    if(user.age <= 18) return false;
    if(user.country != "Romania") return;

    return true;
}

const Ovidiu = createUser ({
    firstName: "Igna",
    lastName: "Ovidiu",
    password: "test",
    country: "Romania",
    age: 29,
    hasAgreed: "Yes",
});

createUser ({
    firstName: "Igna",
    lastName: "Ovidiu",
    password: "test",
    country: "Romania",
    age: 29,
    hasAgreed: "Yes",
});
createUser ({
    firstName: "Igna",
    lastName: "Ovidiu",
    password: "test",
    country: "Romania",
    age: 29,
    hasAgreed: "Yes",
});
createUser ({
    firstName: "Igna",
    lastName: "Ovidiu",
    password: "test",
    country: "Romania",
    age: 29,
    hasAgreed: "Yes",
});


console.log(users)




function sum(x,y,z) {
    console.log(x)
    console.log(y)
    console.log(z)
    return x+y+z;
}

console.log(sum(1,2,3));






