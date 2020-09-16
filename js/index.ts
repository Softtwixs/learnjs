import './contracts';
import './vars';
import './functions';

document.addEventListener("DOMContentLoaded", () => {
 
  if (ElementRoot !==null){
    ElementRoot.innerHTML = WRAPPER;

  fetchTodosAndRender();
  };

});

