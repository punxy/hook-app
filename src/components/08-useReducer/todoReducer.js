export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return [ ...state, action.payload ];
        
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        
        case 'TOGGLE_TODO':
            // return state.map(todo => {
            //     if(todo.id === action.payload){
            //         return {
            //             ...todo,
            //             done: !todo.done
            //         } 
            //     }

            //     return todo;
            // });

            return state.map(todo => 
                (todo.id === action.payload) 
                    ? { ...todo, done: !todo.done } 
                    : todo
            )
    
        default:
            return state;
    }
};