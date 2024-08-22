import { useState } from "react";

export const Profile = () => {

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


    return(
        <>

        <form onSubmit={handleSubmit} className="flex items-center flex-col justify-center h-screen">
        <h2 className="text-3xl font-bold text-blue-700">Profile</h2>

            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

            <div className="flex flex-col mb-4">
            <label htmlFor="name" className="text-blue-700 font-semibold">Full Name<span className="text-red-500">*</span></label>
            <input id="name" type="text" placeholder="Enter your Name" name="name" onChange={handleChange} value={formData.name} className="focus:outline-none" />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="flex flex-col mb-4">
            <label htmlFor="phone-number" className="text-blue-700 font-semibold">Phone Number</label>
            <input id="phone-number" type="Number" placeholder="Phone Number" name="phoneNumber"  onChange={handleChange} value={formData.phoneNumber} className="focus:outline-none"/>
            </div>

            <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-blue-700 font-semibold">Email<span className="text-red-500">*</span></label>
            <input id="email" type="email" placeholder="Email" name="email" onChange={handleChange} value={formData.email} className="focus:outline-none"/>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="flex flex-col mb-4">
            <label htmlFor="password" className="text-blue-700 font-semibold" >Password<span className="text-red-500">*</span>   </label>
            <input id="password" type="password" placeholder="Password" name="password" onChange={handleChange} value={formData.password} className="focus:outline-none"/>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <button type="submit" className="bg-blue-700 text-white p-2 rounded-lg">Update</button>
            </div>
        </form>
        </>
    )
}