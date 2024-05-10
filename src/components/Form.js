import React from 'react'
import {useState} from 'react';
import Image from "../assets/img.png";

export default function Form () {
    const [formData,setFormData] = useState({
        name:"",email:"",comment:""
    });
    function changeHandler (event) {
        setFormData ((prev) => (
            {
                ...prev,
                [event.target.name] : event.target.value
            }
        ))
    }
    
  return (
    <div className='flex'>
        <div>
            <div className='flex gap-6'>
                <button className='bg-gray-700 hover:bg-gray-400 text-white font-bold py-2 px-8 rounded inline-flex items-center'>VIA SUPPORT CHAT</button>
                <button className='bg-gray-700 hover:bg-gray-400 text-white font-bold py-2 px-8 rounded inline-flex items-center'>VIA CALL</button>
            </div>
            <div className='py-6'>
                <button className='bg-white hover:bg-gray-400 text-grey-700 font-bold py-2 px-28 rounded inline-flex items-center border border-black'>VIA EMAIL FORM</button>
            </div>
            <form className="flex flex-col" action="">
                <label className="flex flex-col" htmlFor="">First Name
                    <input 
                    required
                    type="text" 
                    placeholder='Enter name'
                    name="name" 
                    onChange = {changeHandler}
                    value={formData.name}
                    className='border border-black rounded-sm w-[22rem] '
                     />
                </label>
                <br/>

                <label className="flex flex-col" htmlFor="">E-mail
                    <input 
                    required
                    type="email" 
                    name="email" 
                    placeholder='Enter email address'
                    onChange = {changeHandler}
                    value={formData.email} 
                    className='border border-black rounded-sm w-[22rem] '
                    />
                </label>
                <br/>
                <label className="flex flex-col" htmlFor="">Comment
                    <textarea
                    required
                    type="textarea" 
                    name="comment" 
                    placeholder='Comment'
                    onChange = {changeHandler}
                    value= {formData.comment}
                    className='border border-black rounded-md w-[22rem] '
                    />
                </label>
                <br />
                <button className='bg-black hover:scale-105 text-white font-bold py-2 px-8 rounded transition-all duration-200'>Submit</button>
            </form>
            {/* <img src="" alt="" /> */}
        </div>
        <div>
            <img src={Image} alt="" className='w-[500px] h-[400px] pl-11'/>
        </div>
    </div>
  )
}
