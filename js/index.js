document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById('ROOT')
    .innerHTML = WRAPPER;

  fetchTodosAndRender();
});

