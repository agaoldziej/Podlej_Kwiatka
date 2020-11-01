const validate = (event) => {
    event.preventDefault();
    let result = "";
    result += validateName();
    result += validateEmail();
    result += validatePassword();
    result += validateTerms();

    if (result === '') {
        return true;
    }
    alert('Validation result: \n\n' + result);
};

const validateName = () => {
    const name = document.getElementById('name').value;
if (name.length < 3) {
    return 'Name should be at least 3 characters. \n';
}
return ""
}

const validateEmail = () => {
    const email=document.getElementById('email').value;
    const repeatedEmail=document.getElementById('email_repeat');

    if (email.indexOf ('@') == -1) {
        return 'Email should be valid. \n';
    }
    if (email !== repeatedEmail) {
        return 'Emails should be the same. \n';
    }
    return "";
}

const validatePassword = () => {
    const password=document.getElementById('password').value;
    const repeatedPassword=document.getElementById('passsword_repeat')
    if (password.length < 6) {
        return "Password needs to be longer. \n";
    }
    if (password !== repeatedPassword) {
        return "Your passwords should match. \n";
    }
    return ""
}

const validateTerms = () => {
    const terms=document.getElementById('terms').checked;
    if (!terms) {
        return "You cannot turn down those terms. \n"
    }
    return ""
}