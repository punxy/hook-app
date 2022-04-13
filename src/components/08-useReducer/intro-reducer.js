 console.log('Intro useReducer');

 const initialState = [{
    id: 1,
    todo: 'Comprar leche',
    done: false
 }];

 const todoReducer = (state = initialState, action) => {

    if(action?.type === 'ADD_TODO'){
        return [
            ...initialState,
            action.payload
        ]
    }

    return state;
 }

 // 'todos' sería el nuevo State
 let todos = todoReducer();


 const newTodo = {
    id: 2,
    todo: 'Comprar Pan',
    done: false
 };

 const action = {
     type: 'ADD_TODO',
     payload: newTodo
 }

todos = todoReducer(todos, action);

console.log(todos);