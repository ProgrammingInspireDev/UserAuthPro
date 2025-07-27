import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

    const {register, handleSubmit, formState: { errors }, reset} = useForm();

    const onSubmit = (data) => {
     console.log("Form Submitted successfully");
     console.log("Form Data", data);
    reset();
    }


    return (
        <div className='border flex flex-col w-2xl justify-center items-center mt-20 ml-100'>
        <h1 className='mb-10'>Login Form</h1>

        <form className='flex flex-col gap-5' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email: </label>
                <input className={`border p-2 ${errors.email ? 'border-red-500' : 'border-gray-300'}`} type='email' placeholder='Enter your email' {...register('email', {required : "Email is required", pattern:{value:  /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid Email Type"}})}/>
                {errors.email && <p className='text-red-700'>{errors.email.message}</p> }
            </div>
             <div>
                <label>Password: </label>
                <input  className={`border p-2 ${errors.password ? 'border-red-500' : 'border-gray-300'}`} type='password' placeholder='Enter your password' {...register('password', {required: "Password is required", minLength: {value: 6, message: "Password should be more thatn 6 character"}})}/>
                {errors.password && <p className='text-red-700'>{errors.password.message}</p>}
            </div>

            <button type='submit' className='border w-50 h-10 mb-10 bg-amber-700 '>Submit</button>
        </form>
        </div>
    )
}


export default Login;