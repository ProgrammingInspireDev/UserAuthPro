import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SignUp = () => {
  
      const {register, handleSubmit, formState: { errors }, reset, watch} = useForm();
  
      const onSubmit = async (data) => {
        try{
            const response = await axios.post('http://localhost:5000/api/register', {
                name: data.name,
                email: data.email,
                password: data.password,
            });

            console.log("backend response", response.data);
            alert("User registered successfully");
            reset();
        } catch(error) {
            console.log("Register failed", error.response?.data?.message || error.message);
            alert(error.response?.data?.message || "Registration failed");
        }
      }
  
  
      return (
          <div className='border flex flex-col w-2xl justify-center items-center mt-20 ml-100'>
          <h1 className='mb-10'>SignUp Form</h1>
  
          <form className='flex flex-col gap-5' onSubmit={handleSubmit(onSubmit)}>
            <div>
                  <label>Name </label>
                  <input className={`border p-2 ${errors.name ? 'border-red-500' : 'border-gray-300'}`} type='text' placeholder='Enter your name' {...register('name', {required: "Name is required"})}/>
                  {errors.name && <p className='text-red-700'>{errors.name.message}</p> }
              </div>
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
               <div>
                  <label>Confirmation Password: </label>
                  <input  className={`border p-2 ${errors.confirmpassword ? 'border-red-500' : 'border-gray-300'}`} type='password' placeholder='Confirm Your password' {...register('confirmpassword', {required: "Confirm Password is required", validate: (value) => value === watch('password') || 'password do not match'} )}/>
                  {errors.confirmpassword && <p className='text-red-700'>{errors.confirmpassword.message}</p>}
              </div>
  
              <button type='submit' className='border w-50 h-10 mb-10 bg-amber-700 '>Submit</button>
          </form>
          </div>
      )
}

export default SignUp;