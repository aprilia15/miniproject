$("#button").click(function() {
  let data = {
    email: $("#email").val(),
    password: $("#password").val().toString()
  }

  fetch('/api/v1/auth/login', {
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
        return document.cookie = `token=${response.data}`;
      }

      alert(response.errors);
    })
    .catch(err => {
      console.log(err);
    })
})
