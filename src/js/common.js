var form = document.querySelector(".email-form");

form.onsubmit = function (e) {
  // stop the regular form submission
  e.preventDefault();

  // choose what to send further
  var input = document.querySelector(".email-form__text").value;
  var data = {"name": "", "email": input}

  // construct an HTTP request
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://api.elevatrapp.com/actions/forms/submissions/ba6be879-6c30-462e-8905-1eab9ad492b5', true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  
  // Check response and show message accordingly
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
      if(xhr.status === 201) {
        if(document.querySelector(".email-form__message")) {
          document.querySelector(".email-form__message").remove();
        }	    
        form.insertAdjacentHTML('afterend', '<div class="email-form__message email-form__message--success">Thanks for signing up!</div>')
      }
      else {
        if(document.querySelector(".email-form__message")) {
          document.querySelector(".email-form__message").remove();
        }
        form.insertAdjacentHTML('afterend', '<div class="email-form__message email-form__message--error">Uh, oh. Something went wrong!</div>');
      }		  
    }	
  };  

  // send the form data as JSON
  xhr.send(JSON.stringify(data));
};