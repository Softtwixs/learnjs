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
 
const APPEND_DIV = `
    <div class="todo">
        <input
            class="todoInput"
            id="add_input_title"
            value=""
        >
        <button
            id="add_button_todo"
            class="appendButton"
        >
        Append
        </button>
    </div>
`;