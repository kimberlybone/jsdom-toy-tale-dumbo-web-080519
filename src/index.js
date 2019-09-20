const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false
let toyDiv = document.querySelector("#toy-collection")
let newToy = document.querySelector(".add-toy-form")

toyDiv.addEventListener('click', function(evt){
  evt.preventDefault()
  let id = evt.target.id

  if(evt.target.tagName === 'BUTTON'){
    let toy = document.querySelector()
    fetch(`http://localhost:3000/toys/${id}`, {

      method: 'PATCH',
      headers:  {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body:  JSON.stringify({
        "likes":  + 1
      })
    })
    .then(res => res.json())
    .then(handleToy)
  }
  debugger
})



// YOUR CODE HERE
fetch("http://localhost:3000/toys")
  .then(res => res.json())
  .then(resObj => {
    resObj.forEach((toy) => {handleToy(toy)})
  })

function handleToy(toy){
    toyDiv.innerHTML += `<div class="card" id="${toy.id}"><h2>${toy.name}</h2>
    <img src="${toy.image}" class="toy-avatar" />
    <p>${toy.likes} Likes </p>
    <button class="like-btn" id="like-${toy.id}">Like <3</button>
  </div>`
}

function toyLike(evt){
    toyDiv.innerHTML += `<div class="card"><h2>${toy.name}</h2>
    <img src="${toy.image}" class="toy-avatar" />
    <p>${toy.likes} Likes </p>
    <button class="like-btn">Like <3</button>
  </div>`

  let toyLikeBtn = document.querySelector(".like-btn")
  let likeBtn = evt.target
  debugger
  // let likes = document.querySelector()


}

// let toyLayout = `<div class="card"><h2>${toy.name}</h2>
//     <img src="${toy.image}" class="toy-avatar" />
//     <p>${toy.likes} Likes </p>
//     <button class="like-btn">Like <3</button>
//   </div>`


newToy.addEventListener('submit', function(evt){
  evt.preventDefault()

  let newToyName = evt.target.name.value
  let newToyImage = evt.target.image.value

  fetch("http://localhost:3000/toys", {
    method: 'POST',
    headers:  {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    body:  JSON.stringify({
        "name": newToyName,
        "image": newToyImage,
        "likes": 0
      })
  })
  .then(res => res.json())
  .then(handleToy)
})






addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
  } else {
    toyForm.style.display = 'none'
  }
})


// OR HERE!
