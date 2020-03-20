import {createStore} from 'redux';


const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// action creators that returns an object
const addToDo = (text) => {
    return { type: ADD_TODO, text }
}
const deleteToDo = (id) => {
    return { type: DELETE_TODO, id }
}

// NEVER USE MUTATE THE STATE! ALWAYS Return new state!
// state : read-only
// Array.slice() => mutates the old array
// Array.filter(test) => makes a new array
// the only way to change the state is to emit an aciton.
const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            const newToDo = { text: action.text, id: Date.now() };
            return [newToDo, ...state];
        case DELETE_TODO:
            const cleaned = state.filter(toDo => toDo.id !== parseInt(action.id));
            return cleaned;
        default:
            return state;
    }
};


const store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = (text) => {
    store.dispatch(addToDo(text));
}

const dispatchDeleteToDo = (e) => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch(deleteToDo(id));
}

const paintToDos = () => {
    const toDos = store.getState(); // repainting
    ul.innerHTML = "";
    toDos.forEach(toDo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "DEL";
        btn.addEventListener("click", dispatchDeleteToDo);

        li.id = toDo.id;
        li.innerText = toDo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    })
}

store.subscribe(paintToDos);

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    dispatchAddToDo(toDo);
}

form.addEventListener("submit", onSubmit);