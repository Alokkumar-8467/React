import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ( {setIsLoggedIn} ) => {

    const [formData, setFormData] = useState( {email:"", password:"" } )

    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate();

    function changeHandler(event) {
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ) )
    }
  
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true); 
        toast.success("Logged In");
        navigate("/dashboard");
    }

  return (
    <form onSubmit={submitHandler}>
        <label>
            <p>
                Email Address<sup>*</sup>
            </p>

            <input
                required
                type='email'
                value = {formData.email}
                onChange={changeHandler}
                placeholder='Enter email id'
                name='email'
            />
        </label>

        <label>
            <p>
                Password<sup>*</sup>
            </p>

            <input
                required
                type= {showPassword ? ("text") : ("password")}
                value = {formData.password}
                onChange={changeHandler}
                placeholder='Enter Password'
                name='password'
            />

            <spam onClick = { () => setShowPassword( (prev) => !prev ) }>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye />)}
            </spam>

            <Link to ="#"><p>Forget Password</p></Link>

        </label>

        <button>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm;