let store:object = {
    todos: Array<string>()
  };
enum EventType {add='add_', update ='upd_', delete = 'del_'};  
 
const API_URL:string = 'https://api.gohardstudy.gq';
const WRAPPER:string = `
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
 
const APPEND_DIV:string = `
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
const ElementRoot = document.getElementById('ROOT');
const ElementTodos = document.getElementById('TODOS');
const ElementButtonTodo = document.getElementById('add_button_todo');
