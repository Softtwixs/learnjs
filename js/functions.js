
// Instruments
const inputName = (id) => `input_${id}`;
const buttonName = (id) => `button_${id}`;
const upbuttonName = (id) => `up_button_${id}`;
const delbuttonName = (id) => `del_button_${id}`;

const createTodoListHTML = (todos) => todos.reduce((acc, todo) => acc.concat(`
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


const addEventListenersToTodosButtons = (todosButtons) => 
  void todosButtons.forEach((todoButton) => 
    void todoButton.addEventListener('click', (event) => {
     
      switch (event.target.id.substring(0, 3)) {
        case 'up_':
            MyUpdateTodo(event.target.value);  
            break;
        case 'del':
            MyDeleteTodo(event.target.value)
            break;
        default:
            alert(`click on ${event.target.id}`);
      }   
    }));

const MyAppendTodo = async () => {
    try {
        const response = await fetch(`${API_URL}/todos`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ text: document.getElementById("add_input_title").value }),
        });  
        fetchTodosAndRender();
      } catch (error) {
        console.log(error);
      }
}

const MyUpdateTodo = async (todoId) => {
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

const MyDeleteTodo = async (todoId) => {
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

    store = {
      ...store,
      todos
    };

    document
      .getElementById('TODOS')
      .innerHTML = APPEND_DIV + createTodoListHTML(todos) ;

    addEventListenersToTodosButtons(document.querySelectorAll('.todoButton'));
    document.getElementById("add_button_todo").addEventListener("click", MyAppendTodo);

  } catch (error) {
    console.log(error);
  }
}
