import { LockKeyhole, EyeOff, Eye, Mail, Phone, User } from "lucide-react";
import { useState } from "react";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [eye, setEye] = useState(false)

    return (
        <>
            <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
                <form className="w-full max-w-sm flex flex-col gap-4 mx-auto items-center">
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
                        RightIcon={eye ? Eye : EyeOff}
                        onRightIconClick={()=> setEye(!eye)}
                        type={eye ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="w-60 max-w-sm h-14 bg-black text-white rounded-full font-medium hover:bg-gray-800 cursor-pointer transition-colors duration-200">
                        Login
                    </button>

                    <Link to="/signup" className="hover:text-red-500 cursor-pointer transition-colors duration-200">Don't have an account?</Link>
                </form>
            </div>
        </>
    );
}

export default LoginPage;
