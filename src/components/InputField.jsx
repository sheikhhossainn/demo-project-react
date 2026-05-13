function InputField({LeftIcon, RightIcon, value, placeholder, onChange, type="text", onRightIconClick}){
    return (
        <>
           <div className="flex items-center gap-3 px-4 py-3 rounded-full border border-gray-300 w-full max-w-sm h-14">

                {LeftIcon && <LeftIcon />}

                <input
                    className="flex-1 outline-none border-none bg-transparent" 
                    type={type} value={value} placeholder={placeholder} onChange={onChange}
                />

                {RightIcon && <RightIcon onClick={onRightIconClick} className="cursor-pointer" />}
            </div> 
        </>
    )
}

export default InputField