
const LoginForm = ({setStateUserName,stateUserName, handleFormSubmit }) => {

    const handleChange = (event) => {
        let copiedUserName = {...stateUserName}
        copiedUserName = event.target.value
        setStateUserName(copiedUserName)
    }

    return (  

        <form id="login-form" onSubmit={handleFormSubmit}>
        <h3>Log-in!</h3>
        <label htmlFor="user">Username:</label>
        <input 
        id= "user"
        name= "userName"
        type="text"
        placeholder="Enter username"
        onChange={handleChange}
        value={stateUserName}
        className='text-box'/>
        <input 
        type='submit' 
        value= "Login"  
        id = "login-button" 
        className='button-old'/>            
        </form>
    );

 }
 
export default LoginForm;