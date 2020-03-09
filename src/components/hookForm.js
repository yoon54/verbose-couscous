import React, { useState } from 'react';
const HookForm = props => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        submitted: false
    })
    const onChangeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }
    const onSubmitHandler = event => {
        event.preventDefault();
        setFormState({
             ...formState,
            submitted: true
})
    }
    let message;
    if(formState.submitted){
        message=<h1>You have submitted the form</h1>;
    }else{
        message=<h1>You have not yet submitted the form</h1>;
    }
    // if(formState.firstName.length > 2){
    //     message=<h1>first name is submited!</h1>;
    // }else{
    //     message=<h1>first name needs to be longer than 2</h1>;
    // }
    return(
        <>
            <div>
                <p>{message}</p>
                <form onSubmit={onSubmitHandler}>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={onChangeHandler}/>
                    <br/>        
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={onChangeHandler}/>
                    <br/>        
                    <label>Email</label>
                    <input type="email" name="email" onChange={onChangeHandler}/>
                    <br/>        
                    <label>Password</label>
                    <input type="password" name="password" onChange={onChangeHandler}/>
                    <br/>        
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                    <br/>   
                    <input type="submit" />     
                </form>
                <p>First Name: {formState.firstName}</p>
                {formState.firstName.length < 2 && <h4>first name should be 2 characters</h4> && formState.firstName.length > 0 ? <h4>first name should be 2 characters</h4> :true}
                <p>Last Name: {formState.lastName}</p>
                {formState.lastName.length < 2 && <h4>last name should be 2 characters</h4> && formState.lastName.length > 0? <h4>last name should be 2 characters</h4> :true}
                <p>Email: {formState.email}</p>
                {formState.email.length < 2 && <h4>email should be 2 characters</h4> && formState.email.length > 0? <h4>email should be 2 characters</h4> :true}
                <p>Password: {formState.password}</p>
                {formState.password.length < 8 && <h4>password should be 8 characters</h4> && formState.password.length > 0 ? <h4>password should be 8 characters</h4> :true}
                <p>Confirm Password: {formState.confirmPassword}</p>
                {formState.confirmPassword != formState.password && <h4>password should match</h4> ? <h4>password should match</h4> :true}
            </div>
        </>
    );
}

export default HookForm;