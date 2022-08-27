const userPass = document.getElementById('password');
const userPassMatch = document.getElementById('password-confirm')
const passErrorMessage = document.getElementById('pass_error')

userPass.addEventListener('change', () =>
    userPass.addEventListener('input', event => checkForMatch(userPass.value)))


userPassMatch.addEventListener('input', event => checkForMatch(userPassMatch.value))

function checkForMatch(userInput) {
    // console.log(userInput);
    if (userPass.value !== userInput || userPassMatch.value !== userInput) {
        userPass.classList.add('invalid')
        userPassMatch.classList.add('invalid')
        passErrorMessage.classList.remove('invisible')
    } else {
        userPass.classList.remove('invalid')
        userPassMatch.classList.remove('invalid')
        passErrorMessage.classList.add('invisible')
    }
}