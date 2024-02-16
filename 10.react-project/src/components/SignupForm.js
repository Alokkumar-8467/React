import React, {useState} from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import {toast} from 'react-hot-toast';
import {  useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

    const [formData, setFormData] = useState( {firstName:"", lastname:"", email:"", password:"", confirmPassword:""} )

    const [showPassword, setShowPassword] = useState(false);

    const [accountType, setAccountType] = useState("student");

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
        <div className='flex bg-slate-700 p-1 gap-x-1 my-6 rounded-full max-w-max'>

            <button
                className={`${accountType === "student"
                ?
                    "bg-slate-900 text-slate-500"
                    : "bg-transparent text-slate-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={ ()=> setAccountType("student")}>
                    Student
                </button>


            <button 
            className={`${accountType === "instructor"
            ?
                "bg-slate-900 text-slate-500"
                : "bg-transparent text-slate-200"} py-2 px-5 rounded-full transition-all duration-200`}
                onClick={ ()=> setAccountType("instructor")}>
                Instructor</button>
        </div>


        <form onSubmit={submitHandler}>
            <div className='flex gap-x-4 mt-[20px]'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]'>First Name <sup className='text-red-800'>*</sup></p>
                    <input
                        required
                        type='text'
                        name='firstName'
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        value={FormDataEvent.firstName}
                        className='bg-slate-600 rounded-[0.5rem] text-slate-100 w-full p-[12px]'
                    />
                </label>

                <label className='w-full'>
                    <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]'>Last Name <sup className='text-red-800'>*</sup></p>
                    <input
                        required
                        type='text'
                        name='lastname'
                        onChange={changeHandler}
                        placeholder='Enter last Name'
                        value={FormDataEvent.lastName}
                        className='bg-slate-600 rounded-[0.5rem] text-slate-100 w-full p-[12px]'
                    />
                </label>
            </div>
            <div className='mt-[20px]'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]'>Email Address<sup className='text-red-800'>*</sup></p>
                    <input
                        required
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter Email Address'
                        value={formData.email}
                        className='bg-slate-600 rounded-[0.5rem] text-slate-100 w-full p-[12px]'
                    />
                </label>
            </div>

            <div className='w-full flex gap-x-4 mt-[20px]'>
                <label className='relative w-full'>
                    <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]'>Create Password<sup className='text-red-800'>*</sup></p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        name='password'
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        value={formData.password}
                        className='bg-slate-600 rounded-[0.5rem] text-slate-100 w-full p-[12px]'
                    />
                     <spam 
                        className="absolute right-3 top-[40px] cursor-pointer "
                        onClick = { () => setShowPassword( (prev) => !prev ) }>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                    </spam>
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-slate-100 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-red-800'>*</sup></p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        name='confirmPassword'
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                        value={formData.confirmPassword}
                        className='bg-slate-600 rounded-[0.5rem] text-slate-100 w-full p-[12px]'
                    />
                <spam 
                    className="absolute right-3 top-[40px] cursor-pointer "
                    onClick = { () => setShowPassword( (prev) => !prev ) }>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                </spam>
                </label>
            </div>

           <button className='w-full bg-yellow-400 rounded-md px-[12px] py-[12px] font-medium mt-6'>
            Create Account
           </button>

        </form>
    </div>
  )
}

export default SignupForm