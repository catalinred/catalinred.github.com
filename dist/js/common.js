var form=document.querySelector(".email-form");form.onsubmit=function(e){e.preventDefault();var e={name:"",email:document.querySelector(".email-form__text").value},a=new XMLHttpRequest;a.open("POST","https://api.elevatrapp.com/actions/forms/submissions/ba6be879-6c30-462e-8905-1eab9ad492b5",!0),a.setRequestHeader("Content-Type","application/json; charset=UTF-8"),a.onreadystatechange=function(){4===a.readyState&&(201===a.status?(document.querySelector(".email-form__message")&&document.querySelector(".email-form__message").remove(),form.insertAdjacentHTML("afterend",'<div class="email-form__message email-form__message--success">Thanks for signing up!</div>')):(document.querySelector(".email-form__message")&&document.querySelector(".email-form__message").remove(),form.insertAdjacentHTML("afterend",'<div class="email-form__message email-form__message--error">Uh, oh. Something went wrong!</div>')))},a.send(JSON.stringify(e))};