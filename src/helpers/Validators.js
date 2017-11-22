var Validators = {
  isEmail: validateEmail
}

function validateEmail(str) {
  if (str === null || str === "") return { validation: false, error: "Email is blank"};
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(str)) return { validation: false, error: "Email format is not valid" }

  return {
    validation: true,
    error: ""
  }
}


export default Validators;
