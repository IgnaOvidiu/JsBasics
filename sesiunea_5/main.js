


const userFirstName = document.querySelector("#firstName")
const userLastName = document.querySelector("#lastName")
const userDateOfBirth = document.querySelector("#dateOfBirth")
const userHeight = document.querySelector("#height")
const userWeight = document.querySelector("#weight")
const userEmail = document.querySelector("#email")
const userPhoneNumber = document.querySelector("#phoneNumber")
const userSubmit = document.querySelector("#submitForm")



userSubmit.addEventListener('click', (e) => {
    submitData()
})


class User {
    constructor(firstName, lastName, dateOfBirth, height, weight, email, phoneNumber) {
        this.name = `${firstName} ${lastName}`;
        this.dateOfBirth = dateOfBirth;
        this.height = height;
        this.weight = weight;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.userCreated = false; 
    }

    createUser() {
        console.log(`User Was Created Successfully 👤`);
    }
}


function submitData() {
    const Users = new User(userFirstName.value, userLastName.value, userDateOfBirth.value, userHeight.value, userWeight.value, userEmail.value, userPhoneNumber.value)
    console.log(Users)

    const userlist = document.querySelector(".userlist")

    userlist.innerHTML = `<li>${userFirstName.value} ${userLastName.value} ${userDateOfBirth.value} ${userEmail.value} ${userPhoneNumber.value}</li>`
    Users.createUser();

    const message = document.querySelector(".message")

    message.innerHTML = "User Created Successfully."
}

function createUser() {
    console.log(`User Was Created Successfully 👤`)
}
