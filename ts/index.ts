import { ElementRoot, WRAPPER } from  './constants';
import { fetchTodosAndRender } from './functions';

export default () => {
  if (ElementRoot !== null){
        ElementRoot!.innerHTML = WRAPPER;
        fetchTodosAndRender();
    };
}

