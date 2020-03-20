import { createStore } from 'redux';

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span");


// * reducer : a function that modifies the data(state)
const countModifier = (count = 0, action) => {
    if(action.type === "ADD"){
        return count + 1;
    }else if(action.type === "MINUS"){
        return count - 1;
    }else {
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


// a way of communicating with a reducer is to dispatch, sending a action!
const handleAdd = () => {
    countStore.dispatch({type: "ADD"});
}

const handleMinus = () => {
    countStore.dispatch({type: "MINUS"});
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);