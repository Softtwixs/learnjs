
// Instruments
const inputName:TypeTodoElementID = (id) => `input_${id}`;
const buttonName:TypeTodoElementID = (id) => `button_${id}`;
const upbuttonName:TypeTodoElementID = (id) => `upd_button_${id}`;
const delbuttonName:TypeTodoElementID = (id) => `del_button_${id}`;

const createTodoListHTML:TypeTodoList = (todos) => todos.reduce((acc:string, todo) => acc.concat(`
  <div class="todo">
    <input
      class="todoInput"
      id="${inputName(todo.id)}"
      value="${todo.text}"
    >
    <button
      id="${buttonName(todo.id)}"
      class="todoButton"
      value="${todo.id}"
    >
      ${todo.isCompleted ? 'Completed' : 'In Progress'}
    </button>
    <button
        id="${upbuttonName(todo.id)}"
        class="todoButton"
        value="${todo.id}"
    >
        Update
    </button>
    <button
        id="${delbuttonName(todo.id)}"
        class="todoButton"
        value="${todo.id}"
    >
        Delete
    </button>
  </div>
`), '');


const addEventListenersToTodosButtons = (todosButtons:NodeListOf<Element>) => 
  void todosButtons.forEach((todoButton) => 
    void todoButton.addEventListener('click', (event) => {
     
      switch ((<HTMLButtonElement>event.target).id.substring(0, 4)) {
        case EventType.update:
            MyUpdateTodo((<HTMLButtonElement>event.target).value);  
            break;
        case EventType.delete:
            MyDeleteTodo((<HTMLButtonElement>event.target).value)
            break;
        default:
            alert(`click on ${(<HTMLButtonElement>event.target).id}`);
      }   
    }));

// Вопрос! Если я пишу 
// const MyAppendTodo:TypeventWithTodo = async () => { ....
// Получаю ошибку в строке 
// document.getElementById("add_button_todo").addEventListener("click", MyAppendTodo);

const MyAppendTodo = async () => {
    try {
        const response = await fetch(`${API_URL}/todos`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ text: (<HTMLInputElement>document.getElementById("add_input_title")).value }),
        });  
        fetchTodosAndRender();
      } catch (error) {
        console.log(error);
      }
}

const MyUpdateTodo:TypeventWithTodo = async (todoId) => {
    try {
        const response = await fetch(`${API_URL}/todos/${todoId}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ isCompleted: true }),
        }); 
        fetchTodosAndRender();
      } catch (error) {
        console.log(error);
      }
}

const MyDeleteTodo:TypeventWithTodo = async (todoId) => {
    try {
        const response = await fetch(`${API_URL}/todos/${todoId}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include',
        }); 
        fetchTodosAndRender();
      } catch (error) {
        console.log(error);
      }
}

const fetchTodosAndRender = async () => {
  try {
    const response = await fetch(`${API_URL}/todos`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const todos = await response.json();
    let ElementTodos = document.getElementById('TODOS');
    store = {
      ...store,
      todos
    };
    if (ElementTodos!==null){
      ElementTodos.innerHTML = APPEND_DIV + createTodoListHTML(todos) ;
    }
   

    addEventListenersToTodosButtons(document.querySelectorAll('.todoButton'));
    let ElementButtonTodo = document.getElementById('add_button_todo');
    if (ElementButtonTodo!==null){
        ElementButtonTodo.addEventListener("click", MyAppendTodo);
    }
   
   

  } catch (error) {
    console.log(error);
  }
}
