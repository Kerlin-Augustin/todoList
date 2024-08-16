const submit = document.querySelector('.submit')
const ul = document.querySelector('ul')
const addItem = document.querySelector('.addItem')

submit.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(addItem.addItem.value)
  let item = addItem.addItem.value
  let li = document.createElement('li')
  li.innerText = item
  ul.append(li)
})

ul.addEventListener('click', (e) => {
  if(e.target.tagName === 'LI'){
    e.target.remove()
  }
})

