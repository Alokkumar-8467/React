import React, {useState} from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import {toast} from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

    const [formData, setFormData] = useState( {firstName:"", lastname:"", email:"", password:"", confirmPassword:""} )

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    function changeHandler(event){

        setFormData ( (prevData) => (
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
         ) )
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !==  formData.confirmPassword){
            toast.error("Passwords do not match");
        return ;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");

        const accountData ={
            ...formData
        };
        console.log("Printing account data");
        console.table(accountData);

        navigate("/dashboard");
    }


  return (
    <div>
        <div>
            <button>Student</button>
            <button>Instructor</button>
    </div>
        <form onSubmit={submitHandler}>
            <div>
                <label>
                    <p>First Name <sup>*</sup></p>
                    <input
                        required
                        type='text'
                        name='firstName'
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        value={FormDataEvent.firstName}
                    />
                </label>

                <label>
                    <p>Last Name <sup>*</sup></p>
                    <input
                        required
                        type='text'
                        name='lastname'
                        onChange={changeHandler}
                        placeholder='Enter last Name'
                        value={FormDataEvent.lastName}
                    />
                </label>
            </div>

            <label>
                    <p>Email Address<sup>*</sup></p>
                    <input
                        required
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter Email Address'
                        value={formData.email}
                    />
                </label>

                <label>
                    <p>Create Password<sup>*</sup></p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        name='password'
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        value={formData.password}
                    />
            <spam onClick = { () => setShowPassword( (prev) => !prev ) }>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye />)}
            </spam>
            </label>

                <label>
                    <p>Confirm Password<sup>*</sup></p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        name='confirmPassword'
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                        value={formData.confirmPassword}
                    />
            <spam onClick = { () => setShowPassword( (prev) => !prev ) }>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye />)}
            </spam>
           </label>

           <button>
            Create Account
           </button>

        </form>
    </div>
  )
}

export default SignupForm