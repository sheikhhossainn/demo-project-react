import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

function InputField({LeftIcon, RightIcon, value, placeholder, onChange, type="text", onRightIconClick}){
    
    const [showPassword, setShowPassword] = useState(false)

    const inputType = type === "password" ? (showPassword ? "text" : "password") : type
    const RightIconToShow = type === "password" ? (showPassword ? Eye : EyeOff) : RightIcon
    const handleRightIconClick = type === "password" ? () => setShowPassword(!showPassword) : onRightIconClick

    return (
        <>
           <div className="flex items-center gap-3 px-4 py-3 rounded-full border border-gray-300 w-full max-w-sm h-14">

                {LeftIcon && <LeftIcon />}

                <input
                    className="flex-1 outline-none border-none bg-transparent" 
                    type={inputType}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                />

                {RightIconToShow && <RightIconToShow onClick={handleRightIconClick} className="cursor-pointer" />}
            </div> 
        </>
    )
}

export default InputField