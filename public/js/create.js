$("#button").click(function() {
  let title = $("#post-title").val();
  let body = $("#post-body").val();

  let token = document.cookie.split(" ").filter(i => {
    return i.indexOf('token') > -1
  })[0].split(";")[0].split("=")[1];

  fetch('/api/v1/posts', {
    method: 'POST',
    headers: {
     'Content-Type':'application/json',
     'Authorization': localStorage.getItem('token') 
    },
    body: JSON.stringify({
      title: title,
      body: body
    })
  })
    .then(response => {
      return response.json()
    })
    .then(response => {
      if (response.success) {
        return window.location.replace('/')
      }

      alert('Failed to create post!')
    })
})
