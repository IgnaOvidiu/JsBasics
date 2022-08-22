const createUser = (user) => {
    if(!isUserValid(user)) return;

    const formattedName = `${user.firstName} ${user.lastName}`;
    
    hashPassword();
    saveUserToDb(user);
    
    return {
        name: formattedName,
        success: true
    }
}


const isUserValid = (user) => {
    if(user.firstName.lenght === 0) return false;
    if(user.lastName.lenght === 0) return false;
    if(user.password.lenght === 0) return false;
    if(user.country.lenght === 0) return false;
    if(user.age <= 18) return false;
    if(user.hasAgreed) return false;
    if(user.country != "Romania") return;

    return true;
}




