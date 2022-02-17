function checkPassword () {
    // capture the user entered passowrd from our input element
    var passwordBoxObject = document.getElementById("passwordBox");
    var passwordEntered = 
    passwordBoxObject.value;
    console.log("User entered password:" , passwordEntered);
    //  check if the password is correct
    var sitepassword = "codeclub"; 
    if (passwordEntered == sitepassword) {
        // allow navigation
        console.log("Allow!");
        window.location.assign
        ("members.html");
    } else {
        // block navigation
        console.log ("Block!");

        //  add a new style tp the incorrect-password element
        document.getElementById
        ("incorrect-password").style.color = "red";
        // add text to the incorrect-password element 

        document.getElementById
        ("incorrect-password").
        innerHTML = "Incorrect passoword. Please try again..." ;
           }

    //  allow or block user navigation to the members page 
    }