import { LockKeyhole, EyeOff, Eye, Mail, Phone, User } from "lucide-react";
import { useState } from "react";
import InputField from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Profile from "./ProfilePage";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()


    function handleSubmit(e) {
        e.preventDefault()

        const users = JSON.parse(localStorage.getItem("users")) || []
        const found = users.find(u => u.email === email && u.password === password)

        if (found) {
            localStorage.setItem("currentUser", JSON.stringify(found))
            toast.success("Welcome back " + found.username + "!")
            navigate("/profile")
        } else {
            toast.error("Invalid credentials!")
        }
    }
    return (
        <>
            <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
                <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-4 mx-auto items-center">
                    <h1 className="text-[2rem] font-bold">Welcome to Login page!</h1>
                    <InputField
                        LeftIcon={Mail}
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <InputField
                        LeftIcon={LockKeyhole}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="w-60 max-w-sm h-14 bg-black text-white rounded-full font-medium hover:bg-gray-800 cursor-pointer transition-colors duration-200"
                    >
                        Login
                    </button>

                    <Link to="/signup" className="hover:text-red-500 cursor-pointer transition-colors duration-200">Don't have an account?</Link>
                </form>
            </div>
        </>
    );
}

export default LoginPage;
