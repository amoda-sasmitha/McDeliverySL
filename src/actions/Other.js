
  export const Remove_Fav = (id , items) => {
    let filtered = items.filter( i => i != id )
    return dispatch => dispatch({ type : "UPDATE_FAV"  , payload : filtered });
}
  export const Clear_FAV = () => {
    return dispatch => dispatch({ type : "UPDATE_FAV"  , payload : [] });
}