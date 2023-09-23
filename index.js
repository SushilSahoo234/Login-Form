const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const country = document.getElementById("country");

form.addEventListener('submit' ,e=>{
e.preventDefault();
validateInputs();
});
const setError = (element,message)=>{
    const inputControl =element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess = element =>{
   const inputControl = element.parentElement;
   const errorDisplay = inputControl.querySelector('.error');
   errorDisplay.innerText='';
   inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const isValidEmail = (email)=>{
    const re =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs = ()=>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const mobileValue = mobile.value.trim();
    const countryValue = country.value.trim();

    if (usernameValue === "") {
        setError(username, 'Username is required');
    } else if (!/^[a-zA-Z\s]+$/.test(usernameValue)) {
        setError(username, 'Username should only contain letters');
    } else {
        setSuccess(username);
    }
    if(emailValue === ""){
        setError(email,'Email is required');
        
    }else if(!isValidEmail(emailValue)){
      setError(email,'Provide a valid email address');        
    }else{
        setSuccess(email);
    }
    if(mobileValue === ""){
      setError(mobile,'Contact is required');
    }else if(mobileValue.length < 10 || mobileValue.length > 10) {
        setError(mobile,'Please enter a valid mobile number');


    }else{
        setSuccess(mobile);
    }
}