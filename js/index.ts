document.addEventListener("DOMContentLoaded", () => {

  if (ElementRoot !==null){
    ElementRoot.innerHTML = WRAPPER;

  fetchTodosAndRender();
  };

});

