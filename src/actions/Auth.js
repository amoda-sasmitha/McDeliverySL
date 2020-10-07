export const login = ( username , password ) => {
    return dispatch =>
      new Promise( (resolve, reject) => {
         
                  if ( username == 'amoda29@gmail.com' && password == "Admin"  ){
           
                    dispatch({
                      type: "USER_DETAILS",
                      payload : {
                          name : 'Amoda Sasmitha',
                          email : 'amoda29@gmail.com'
                      }
                    });
                    dispatch({
                      type: "IS_AUTHENTICATED",
                      payload: true
                    });

                    return  resolve({ type : 'success' , message : "Successfully loged in" });

                    }else{
                        return  reject({ type : 'failed' , message : "Log in failed"  });
                    }        

              }).catch( error => {
                reject({ message : "failed"});
              })
  };


  export const logout = () => {
      console.log('called');
      return dispatch => dispatch({ type : "RESET" });
  }