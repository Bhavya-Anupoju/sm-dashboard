import { useState } from "react";
import { useTheme } from "../Components/Theme";

export const Profile = () => {
    const {theme, toggleTheme} = useTheme();

    const [formData, setFormData] = useState({
        name : '',
        email : '',
        password: '',
        phoneNumber: ''
    })

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = validate();
        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors);
        }else{
            console.log(formData);
            setErrors({})
        }
    }

    const validate = () => {
        const errors = {};
        if(!formData.email){
            errors.email = "Email is required"
        }
        if (!formData.name) errors.name = "Full Name is required";
        if (!formData.password) errors.password = "Password is required";

        return errors;
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    
    return (
        <>
            <form onSubmit={handleSubmit} className={`flex items-center flex-col justify-center h-screen ${theme === "light" ? "bg-white" : "bg-gray-800 text-white"}`}>
                <h2 className={`text-3xl font-bold ${theme === "light" ? "text-blue-700" : "text-white"} mb-2`}>Profile</h2>

                <div className={`p-8 rounded-lg shadow-md w-full max-w-md ${theme === "light" ? "bg-white" : "bg-gray-900"}`}>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="name" className={`font-semibold ${theme === "light" ? "text-blue-700" : "text-white"}`}>
                            Full Name<span className="text-red-500">*</span>
                        </label>
                        <input id="name" type="text" placeholder="Enter your Name" name="name" onChange={handleChange} value={formData.name} className={`focus:outline-none ${theme === "light" ? "bg-white" : "bg-gray-900 text-white"}`} />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="phone-number" className={`font-semibold ${theme === "light" ? "text-blue-700" : "text-white"}`}>Phone Number</label>
                        <input id="phone-number" type="Number" placeholder="Phone Number" name="phoneNumber" onChange={handleChange} value={formData.phoneNumber} className={`focus:outline-none ${theme === "light" ? "bg-white" : "bg-gray-900 text-white"}`} />
                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="email" className={`font-semibold ${theme === "light" ? "text-blue-700" : "text-white"}`}>
                            Email<span className="text-red-500">*</span>
                        </label>
                        <input id="email" type="email" placeholder="Email" name="email" onChange={handleChange} value={formData.email} className={`focus:outline-none ${theme === "light" ? "bg-white" : "bg-gray-900 text-white"}`} />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div className="flex flex-col mb-4">
                        <label htmlFor="password" className={`font-semibold ${theme === "light" ? "text-blue-700" : "text-white"}`}>
                            Password<span className="text-red-500">*</span>
                        </label>
                        <input id="password" type="password" placeholder="Password" name="password" onChange={handleChange} value={formData.password} className={`focus:outline-none ${theme === "light" ? "bg-white" : "bg-gray-900 text-white"}`} />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>

                    <button type="submit" className={`p-2 rounded-lg ${theme === "light" ? "bg-blue-700 text-white" : "bg-blue-500 text-white"}`}>Update</button>
                    <button onClick={toggleTheme} className={`p-2 mx-2 rounded-lg ${theme === "light" ? "bg-blue-700 text-white" : "bg-blue-500 text-white"}`}>
                Toggle to {theme === "light" ? "Dark" : "Light"} Theme
            </button>
                </div>
            </form>
        </>
    );

}