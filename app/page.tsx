'use client';

import {useState} from 'react'

export default function userForm() {
    const [submittedUserData, setUserData] = useState({
        user: '',
        email: '',
        password:''
    })
    
    function userForm(formData: FormData) {
        const user = formData.get("user") as string;
        const password = formData.get("password") as string;
        const email = formData.get("email") as string;
        
        setUserData({user, email, password})
    }
    
    return (
        <>
            <form action={userForm} className="flex flex-col items-center p-5">
                <div className="flex items-center">
                    <label htmlFor="user" className="w-20 text-left">Username: </label>
                    <div className="border border-gray-200 ml-2">
                        <input name="user"/>
                    </div>    
                </div>
                <div className="flex items-center">
                    <label htmlFor="password" className="w-20 text-left">Password: </label>
                    <div className="border border-gray-200 m-2">
                        <input name="password"/>
                    </div>
                </div>
                <div className="flex items-center">
                    <label htmlFor="email" className="w-20 text-left">Email: </label>
                    <div className="border border-gray-200 ml-2">
                        <input name="email"/>
                    </div>
                </div>
                <div className="flex border rounded-xl border-gray-200 p-1 m-4 hover:bg-gray-200 hover:text-black">
                    <button type="submit">Enter</button>
                </div>

            </form>
            <div className="flex flex-col items-center p-5">
                <h1 className="text-left">User Information</h1>
                <p className="text-left">Username: {submittedUserData.user}</p>
                <p className="text-left">Password: {submittedUserData.password}</p>
                <p className="text-left">Email: {submittedUserData.email}</p>
            </div>
        </>
    );
}