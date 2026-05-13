import { useState } from "react"
import InputField from "../components/InputField"
import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

function Profile() {
    const user = JSON.parse(localStorage.getItem("currentUser"))
    const navigate = useNavigate()

    function handleLogout(){
        localStorage.removeItem("currentUser")
        toast.success("Logged out!")
        navigate("/")
    }

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold">Welcome back {user.username}!</h1>


            <button className="w-60 h-14 bg-black text-white rounded-full font-medium hover:bg-gray-800 cursor-pointer transition-colors duration-200"
                onClick={handleLogout}            
            >
                Logout
            </button>
        </div>

    )
}

export default Profile