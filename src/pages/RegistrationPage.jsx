import { useState } from "react"
import InputField from "../components/InputField"
import { Link, useNavigate } from "react-router-dom"
import { LockKeyhole, Mail, Phone, User } from "lucide-react"
import toast from "react-hot-toast"

function SignUp() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState()
    const [cpass, setCpass] = useState("")
    const [pass, setPass] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        const existingUsers = JSON.parse(localStorage.getItem("users")) || []

        const alreadyExists = existingUsers.find(u => u.email === email)

        if (alreadyExists) {
            toast.error("User already exists!")
            return
        }

        const newUser = { username, email, phone, password: pass }
        localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]))

        toast.success("Registration successful!")
        navigate("/")
    }

    return (
        <>
            <div className="w-full min-h-screen flex items-center justify-center">

                <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-4 mx-auto items-center">

                    <h1 className="text-2xl font-bold">Welcome to Sign Up page!</h1>

                    <InputField
                        LeftIcon={User}
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />


                    <InputField
                        LeftIcon={Mail}
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <InputField
                        LeftIcon={Phone}
                        type="tel"
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <InputField
                        LeftIcon={LockKeyhole}
                        type="password"
                        placeholder="New Password"
                        value={cpass}
                        onChange={(e) => setCpass(e.target.value)}
                    />

                    <InputField
                        LeftIcon={LockKeyhole}
                        type="password"
                        placeholder="Confirm Password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />

                    <button
                        className="w-60 max-w-sm h-14 bg-black text-white rounded-full font-medium hover:bg-gray-800 cursor-pointer transition-colors duration-200"
                        type="submit"
                    >
                        Sign Up
                    </button>

                    <Link to="/" className="hover:text-red-500 transition-colors duration-200 cursor-pointer">Already have an account?</Link>
                </form>
            </div>
        </>
    )
}

export default SignUp