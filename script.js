
const container = document.getElementById('container')

window.addEventListener('load', function(){
  const url = 'http://jsonplaceholder.typicode.com/users'
  fetch(url, {
  method: 'get'
}).then(res => res.json()).then(users => {
  users.forEach(user => {
    container.innerHTML += `
    <div class="card">
    <div class="profile-pic">
    <img src="" height="300" width="300">
    </div>
      <div class="details">
         <p>name: ${user.name.toUpperCase()} </p>
         <p>email: ${user.email}</p>
         <p>address: ${user.address.suite}, ${user.address.street}, ${user.address.city}</p>
         <p>phone:${user.phone} </p>
         <p>company:${user.company.name} </p>
      </div>
    </div>
    `
  })
})
})