let store = {
  todos: []
};

// Constants
const API_URL = 'https://api.gohardstudy.gq';
const WRAPPER = `
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

// Instruments
const inputName = (id) => `input_${id}`;
const buttonName = (id) => `button_${id}`;

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

const addEventListenersToTodosButtons = (todosButtons) => 
  void todosButtons.forEach((todoButton) => 
    void todoButton.addEventListener('click', (event) => {
      // Continue here bro...
      alert(`click on ${event.target.id}`);
    }));

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
      .innerHTML = createTodoListHTML(todos);

    addEventListenersToTodosButtons(document.querySelectorAll('.todoButton'));
  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById('ROOT')
    .innerHTML = WRAPPER;

  fetchTodosAndRender();
});

