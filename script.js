// This div containers will be used if the inputboxes 
// have errors and they will be appended with another div

const firstName = document.querySelector('.first-name');
const secondName = document.querySelector('.second-name');
const email = document.querySelector('.email');
const queryReminder = document.querySelector('.error-position');
const message = document.querySelector('.textbox');
const checkboxReminder = document.querySelector('.checkbox-error');

const successPrompt = document.querySelector('.success-result');

// Variables connected to the input boxes for checking values

const inputTextbox1 = document.querySelector('.input-text-box1');
const inputTextbox2 = document.querySelector('.input-text-box2');

const emailBox = document.querySelector('.email-box');

const radioBtn1 = document.querySelector('.radio-btn1');
const radioBtn2 = document.querySelector('.radio-btn2');

const checkBox = document.querySelector('.check-box');

const messageBox = document.querySelector('.message-box');

// Will be used if the condition of Name input is empty

const nameError1 = document.createElement('div');
nameError1.setAttribute('class', 'error-msg');

const nameError2 = document.createElement('div');
nameError2.setAttribute('class', 'error-msg');

// Will be used if the condition of email is empty or not a proper email

const emailError = document.createElement('div');
emailError.setAttribute('class', 'error-msg');

// Will be used if the condition of either of query button is unchecked or checked

const queryError = document.createElement('div');
queryError.setAttribute('class', 'error-msg');

// Will be used if the condition if the consent box is unchecked

const consentError = document.createElement('div');
consentError.setAttribute('class', 'error-msg');

// Will be used if the condition of either of query button is unchecked or checked

const messageError = document.createElement('div');
messageError.setAttribute('class', 'error-msg');

const success = document.createElement('div');
success.setAttribute('class', 'success');

// Functions that will activate if the input boxes are having missing values or error inputs!

function checkName1(){
    if(inputTextbox1.value.trim() == ''){
        firstName.appendChild(nameError1);
        nameError1.innerHTML = `
        This field is required!
        `;
    } else {
        nameError1.innerHTML = '';
    }
}

function checkName2(){
    if (inputTextbox2.value.trim() == '') {
        secondName.appendChild(nameError2);
        nameError2.innerHTML = `
        This field is required!
        `;
    } else {
        nameError2.innerHTML = '';
    }
}

function checkEmail(){
    const emailInput = emailBox.value.trim();
    const checker =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // This is for checking if the email input is a proper email address

    if (emailInput == '') {
        email.appendChild(emailError);
        emailError.innerHTML = `
        This field is required!
        `;
    } else if (!checker.test(emailInput)){
            email.appendChild(emailError);
            emailError.innerHTML = `
            Please enter a valid email address
            `;
    } else {
        emailError.innerHTML = '';
    }
}

function checkRadio(){
    if(!radioBtn1.checked && !radioBtn2.checked){
        queryReminder.appendChild(queryError);
        queryError.innerHTML = `
        Please select a query type
        `;
    }
}

function checkMessage(){
    if(messageBox.value.trim() == ''){
        message.appendChild(messageError);
        messageError.innerHTML = `
        This field is required!
        `;
    } else {
        messageError.innerHTML = '';
    }
}

function checkConsent(){
    if(!checkBox.checked){
        checkboxReminder.appendChild(consentError);
        consentError.innerHTML = `
        To submit this form, please consent to being contacted
        `;
    } else {
        consentError.innerHTML = '';
    }
}

function submitBtn(){
    if(inputTextbox1.value.trim() == '' || inputTextbox2.value.trim() == '' || emailBox.value.trim() == '' || !radioBtn1.checked || !radioBtn2.checked || messageBox.value.trim() == '' || !checkBox.checked){
        checkName1();
        checkName2();
        checkEmail();
        checkRadio();
        checkMessage();
        checkConsent();
    } else {

        successPrompt.appendChild(success);
        success.innerHTML = `Message Sent! Thanks for completing the form. We'll be in touch soon!`;
    }
}

// Message Sent! Thanks for completing the form. We'll be in touch soon!