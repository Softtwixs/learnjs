export enum EventType {
  add='add_', 
  update ='upd_',
  delete = 'del_'
};  
 
export const API_URL: string = 'https://api.gohardstudy.gq';
export const WRAPPER: string = `
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
 
export const APPEND_DIV: string = `
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
export const ElementRoot = document.getElementById('ROOT');
export const ElementTodos = document.getElementById('TODOS');
export const ElementButtonTodo = document.getElementById('add_button_todo');
