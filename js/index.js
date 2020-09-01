// Constants
const API_URL = 'https://api.gohardstudy.gq';
const ROOT = document.getElementById('ROOT');

// Variables
let isTodosLoaded = false;

// Instruments
const inputName = (id) => `input_${id}`;
const buttonName = (id) => `button_${id}`;

ROOT.innerHTML = `
  <header class='header'>
    Hello bro, i am a header.
  </header>
  <main id="TODOS" class='todos'>
    LOADING...
  </main>
  <footer class='footer'>
    Hello bro, i am a footer.
  </footer>
`;

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
    >
      ${todo.isCompleted ? 'Completed' : 'In Progress'}
    </button>
  </div>
`), '');

const addEventListenersToTodosButtons = (todosButtons) => void todosButtons.forEach((todoButton) => {
  todoButton.addEventListener('click', (event) => {
    alert(`click on ${event.target.id}`); // Continue here bro...
  })
})

const fetchTodosAndRender = async () => {
  try {
    const TODOS = document.getElementById('TODOS');
    const response = await fetch(`${API_URL}/todos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const todos = await response.json();

    setTimeout(() => { // Just for delay loading.
      TODOS.innerHTML = createTodoListHTML(todos);

      addEventListenersToTodosButtons(document.querySelectorAll('.todoButton'))
    }, 1000);
  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("DOMContentLoaded", fetchTodosAndRender);

