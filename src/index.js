import { createStore } from 'redux';

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

// * reducer : a function that modifies the data(state)
const countModifier = (count = 0, action) => {
    switch (action.type) {
        case ADD:
            return count + 1;
        case MINUS:
            return count - 1;
        default:
            return count;
    }
};


const countStore = createStore(countModifier);

const onChange = () => {
    console.log("there was a change on the store.");
    number.innerHTML = countStore.getState();
}

// subscribe : to allow us listen for changes in our stroe.
countStore.subscribe(onChange);

// action : a way of communicating with a reducer is to dispatch, sending a action!
const handleAdd = () => {
    countStore.dispatch({type: ADD });
}

const handleMinus = () => {
    countStore.dispatch({type: MINUS });
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);