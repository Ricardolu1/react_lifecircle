let div = document.createElement('div')

let app = document.querySelector('#app')

app.appendChild(div)

let state = 0

div.innerHTML = `
  <p>${state}</p>
  <button>+1</button>
  
` 
document.querySelector('div>button').onclick= ()=>{
  state+=1
  document.querySelector('div>p').innerText=state
}
















