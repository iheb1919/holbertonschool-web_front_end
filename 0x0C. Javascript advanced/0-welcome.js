function welcome (firstname, lastname) {
    let fullname = firstname + " " + lastname;
    function displayFullName () {
        alert("welcome "+fullname + "!");
    }
    displayFullName();
}