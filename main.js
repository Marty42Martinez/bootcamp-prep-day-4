function greetMe() {
    console.log('greetMe function called');

    // get the inputs by id
    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');
    //get values out of inputs
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    //make the greeting
    var greeting = 'Hello ' + firstName + ' ' + lastName + '!';
    console.log(greeting);

    //display greeting

    //remmove prompt
}

//TODO: validate anme inputs
//TODO: clear inputs after greet?
//TODO: other features that I want to add


