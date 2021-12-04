export const getPost = (state,action) => {
    const stateClone = {...state};
    stateClone.post = [action.payload];
    return stateClone;
}
