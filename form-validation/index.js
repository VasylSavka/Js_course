const regExValidation = {
    email: /^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,3}$/g,
    password: /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g,
}

const validationError = {
    emptyField: 'is required',
    email: 'is incorrect',
    password: 'Password must acontait at least 8 symbols, one digit and one special character',
    confirmPasswordEmpty: 'Confirmation password is required',
    confirmPasswordNotMatch: 'Confirmation password is not match',
}

const inputList = document.querySelectorAll('.form-control')

function getInput() {
    for (const item of inputList) {
        item.addEventListener('blur', (event) => {
            handleInput(event);
        })
    }
}

function handleInput(event) {
    switch (event.target.id) {
        case 'email':
            return emailValidation(event.target);
            break;
        case 'password':
            return passwordValidation(event.target);
        case 'passwordConfirm':
            return passwordConfirmValidation(event.target);
            break;
        default:
            break;
    }
}

function useValidation(input, regex, validationInput) {

    if (!input.value.length) {
        input.classList.remove('valid');
        input.classList.add('invalid');
        input.nextElementSibling.innerText = validationError.emptyField;
    } else if (!regex.test(input.value)) {
        input.classList.remove('valid');
        input.classList.add('invalid');
        input.nextElementSibling.innerText = validationInput;
    } else {
        input.classList.remove('invalid');
        input.nextElementSibling.innerText = '';
        input.classList.add('valid');
    }
}

function emailValidation(input) {
    useValidation(input, regExValidation.email, validationError.email);
}

function passwordValidation(input) {
    useValidation(input, regExValidation.password, validationError.password);
}

function passwordConfirmValidation(input) {
    const passwordInput = document.querySelector('.password');
    if (!input.value.length) {
        input.classList.remove('valid');
        input.classList.add('invalid');
        input.nextElementSibling.innerText = validationError.confirmPasswordEmpty;
    } else if (passwordInput.value !== input.value) {
        input.classList.remove('valid');
        input.classList.add('invalid');
        input.nextElementSibling.innerText = validationError.confirmPasswordNotMatch;
    } else {
        input.classList.remove('invalid');
        input.nextElementSibling.innerText = '';
        input.classList.add('valid');
    }

}

getInput();