$("#button").click(function() {
  let data = {
    email: $("#email").val(),
    password: $("#password").val()
  }

  fetch('/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
      'Accept':'application/json'
    },
    body: JSON.stringify(data) 
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      if (response.success) {
        document.cookie = `token=${response.data};`;
        localStorage.setItem('token', response.data)
        return window.location.replace('/');
      }

      alert(response.errors);
    })
    .catch(err => {
      console.log(err);
    })
})
