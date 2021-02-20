function welcomeMessage(fullname) {
    return function () {alert("welcome "+ fullname);}
}
let guillaume = welcomeMessage('guillaume' );
let alex = welcomeMessage('alex');
let fred = welcomeMessage('fred');
