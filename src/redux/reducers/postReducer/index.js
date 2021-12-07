import { getPost } from "./producer"

const initialState = {
    post:[{title:""}],
}

const postReducer = (state = initialState,action) => {
    switch(action.type){
        case "GET_POST" :
            return getPost(state,action);
        default :
            return state;
    }
}

export default postReducer;