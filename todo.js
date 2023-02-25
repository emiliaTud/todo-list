const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
const header = document.querySelector('header');
const nameBut = document.querySelector('.name-button');
const nameInput = document.querySelector('.name');
const alegeri = document.querySelector('.alegeri');

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);
nameBut.addEventListener('click',greatIng);


function addTodo(e) {
    e.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    const completedButton = document.createElement('button');
    completedButton.innerHTML ='<i class ="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    const trashButton = document.createElement('button');
    trashButton.innerHTML ='<i class ="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    todoList.appendChild(todoDiv);
    todoInput.value ='';
    const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');

selectImage.addEventListener('click', function () {
	inputFile.click();

})

inputFile.addEventListener('change', function () {
	const image = this.files[0]
	if(image.size < 2000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea.appendChild(img);
			imgArea.classList.add('active');
			imgArea.dataset.img = image.name;
		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 2MB");
	}
})

}
function deleteCheck(e){
    const item = e.target;
if(item.classList[0] ==='trash-btn'){
    const todo = item.parentElement;
    todo.classList.add('fall');
    
    
    todo.addEventListener('transitioned', function(){
        todo.remove();
    })
}
 if(item.classList[0] === 'complete-btn'){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
}
}

function filterTodo(e) {
const todos = todoList.childNodes;
todos.forEach(function(todo){
    switch(e.target.value){
        case 'all':
            todo.style.display = 'flex';
            break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                } else {todo.style.display ='none';         
   } 
break;
   case 'uncompleted':
    if(!todo.classList.contains('completed')){
        todo.style.display ='flex';    
    } else {
        todo.style.display ='none';
    } break;
}
})
}
function greatIng(e){
   e.preventDefault(); 
   if(nameInput.value === ''){
    nameBut.removeEventListener('click');
    } else {
    header.innerText = `Hello, ${nameInput.value} . This is your to-do list ! 📋`;
    header.classList.add('newvar');
    }
}

const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');

selectImage.addEventListener('click', function () {
	inputFile.click();
})

inputFile.addEventListener('change', function () {
	const image = this.files[0]
	if(image.size < 2000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea.appendChild(img);
			imgArea.classList.add('active');
			imgArea.dataset.img = image.name;
		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 2MB");
	}
})
 const photo = document.querySelector('.photo');
 const chenar = document.querySelector('.container');
  photo.addEventListener('click', function(e) {
e.preventDefault();
chenar.classList.add('cadran');
chenar.classList.remove('container');
  })

