const addForm = document.querySelector('.add');
const ulList = document.querySelector('.list-group');
const searchInput = document.querySelector('.search input')

// TEMPLATE FOR LI
const generateTemplate = (userInputTodo) => {
  const newLi = `<li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${userInputTodo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>`;
        ulList.innerHTML += newLi;
}

// ADDING NEW <LI></LI>

addForm.addEventListener('submit', e =>{
  e.preventDefault();
  const userInputTodo = addForm.add.value.trim()
  if(userInputTodo.length > 0 && userInputTodo.length < 40){
    generateTemplate(userInputTodo)
    addForm.reset()
  } else if(userInputTodo.length <= 0){
    alert("Your text is too short")
  } else if (userInputTodo.length > 40){
    alert("Your text is too long")
  }
})

// DELETING CHOSEN <LI></LI>

ulList.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove()
  };
})

//FILTER INPUT

searchInput.addEventListener('keyup', () => {
  const text = searchInput.value.toLowerCase().trim()
  filterFunc(text)
})

const filterFunc = text =>{
  Array.from(ulList.children)
    .filter(elem => !elem.textContent.toLowerCase().includes(text))
    .forEach(elem => elem.classList.add('filtered')) 

  Array.from(ulList.children)
    .filter(elem => elem.textContent.toLowerCase().includes(text))
    .forEach(elem => elem.classList.remove('filtered')) 
}
