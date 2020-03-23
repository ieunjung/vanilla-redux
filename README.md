# Vanilla Redux

Learning Vanilla Redux

* reducer : a function that modifies the data(state)

* subscribe : to allow us listen for changes in our stroe.

* action : a way of communicating with a reducer is to dispatch, sending a action!

* NEVER use mutate the state! ALWAYS return new state!
    - state : read-only
    - Array.slice() => mutates the old array
    - Array.filter(test) => makes a new array
    - the only way to change the state is to emit an aciton.

* mapStateToProps
* mapDispatchToProps