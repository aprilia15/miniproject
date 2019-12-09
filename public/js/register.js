$("#button").click(function() {
  let password = $("#password").val();
  let passwordConfirmation = $("#passwordConfirmation").val();

  if (password != passwordConfirmation) return alert("Password doesn't match");

  let data = {
    email: $("#email").val(),
    password: $("#password").val().toString()
  }

  fetch('/api/v1/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(data) 
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      if (response.success) {
        return window.location.replace('/');
      }

      alert(response.errors);
    })
    .catch(err => {
      console.log(err);
    })
})
