import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { addError, removeError } from '../error/inputError';

const EMAIL_FORMAT = /^([a-z\d\.-]+)@([a-z]+)\.([a-z]{2,8})$/

function Form({process}) {

    const navigate = useNavigate();

    const [ inputs, setInputs ] = useState({
        name : '',
        email : '',
        password : '',
    })

    const [ showError, setShowError ] = useState({
        name : '',
        email : '',
        password : '',
    });

    const [ showPassword, setShowPassword ] = useState(false);

    function setError(errorMessage) {
        setShowError({...showError, ...errorMessage});
    }

    function handleSubmit(e) {
        e.preventDefault()
        
        let inputVariable = inputs;
        if (process === 'SIGN IN') {
            inputVariable = {email : inputs.email, password : inputs.password}
        }
        const result = validInputs(inputVariable, process);
        if (result !== true) {
            addError(e.target[result], result, setError);
            return false;
        }
        toast.success("SUCCESSFULL");
        
        navigate('/tasks');
        return true

    }

    function validInputs(inputs, process) {
        
        for(let field in inputs) {
            if ( !inputs[field] || !inputs[field].replaceAll(' ', '')) {
                return field;
            }
        }

        if (!EMAIL_FORMAT.test(inputs.email)) {
            return 'email';
        }
        
        // if (process === 'SIGN IN') {
            // checkUser()
        // }

        
        return true;
    } 


    return (
        <>
            <form className="process-form" onSubmit={handleSubmit}>

                { process === 'SIGN UP' ? 
                      <div className="field-container">
                      <label className="input-label">Name</label>
                      <input name="name" type="text" className="input-field" placeholder="Enter your name"
                        value={inputs.name} onChange={(e) => {
                            removeError(e.target, setError);
                            setInputs({...inputs, name : e.target.value})
                            }} autoComplete="off" />
                        <div className="error-message">{showError.name}</div>
                      </div> : ''
                      
                }
              
                <div className="field-container">
                    <label className="input-label">Email Address</label>
                    <input name="email" type="text" className="input-field" placeholder="Enter your email address"
                        value={inputs.email} onChange={(e) => {
                            removeError(e.target, setError);
                            setInputs({...inputs, email : e.target.value})
                            }} autoComplete="off" />
                    <div className="error-message">{showError.email}</div>
                </div>

                <div className="field-container">
                    <label className="input-label">Password</label>
                    <div className="container-password ">
                        <input name="password" type={ showPassword ? "text" : "password" } className="input-field password-field" placeholder="Enter your password"
                            value={inputs.password} onChange={(e) => {
                                removeError(e.target, setError);
                                setInputs({...inputs, password : e.target.value})
                                }} autoComplete="off" />
                        <div className="container-password-show-icon">
                            { showPassword ? 
                                <FaEye onClick={() => setShowPassword(!showPassword)} className="password-show-icon"/>
                                    :
                                <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className="password-show-icon"/>
                            }                            
                        </div>
                    </div>
                    <div className="error-message">{showError.password}</div>
                </div>


                <div className="container-process-button">
                    <button className="process-button pt" type="submit">{process}</button>
                </div>

                <div className="container-process-change">
                    {process === 'SIGN UP' ?
                        <span>I have an account? <Link to="/signin" className="process-change-link">Sign In</Link></span>
                        :
                        <span>Don't have an account? <Link to="/signup" className="process-change-link">Sign Up</Link></span>
                    }
                </div>

            </form>
        </>
    )
}


export default Form;