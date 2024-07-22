// import { Link } from 'react-router-dom';
// import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
// import { FaArrowLeftLong } from "react-icons/fa6";

// const AddMaintenanceManager = () => {
//   return (
//     <>
//     <Breadcrumb pageName="Form Layout" />

//     <div>
//         <div className="flex flex-col gap-5">
//             {/* <!-- Contact Form --> */}
//             <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//                 <div className="border-b  flex justify-between items-center border-stroke py-4 px-6.5 dark:border-strokedark">
//                     <h3 className="font-medium text-black dark:text-white">
//                         Contact Form
//                     </h3>
//                     <Link to="/maintenance">
//                         <button className="flex items-center justify-center gap-1">
//                             <FaArrowLeftLong />
//                             <span>Go Back</span>
//                         </button>
//                     </Link>
//                 </div>
//                 <form action="#">
//                     <div className="p-6.5">
//                         <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//                             <div className="flex flex-col gap-5.5 p-6.5">
//                                 <label className="mb-3 block h-1 text-black dark:text-white">
//                                     Profile photo
//                                 </label>
//                                 <input
//                                     type="file"
//                                     className="w-full rounded-md border  border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm focus:border-green-600 file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
//                                 />
//                             </div>
//                         </div>
//                         <div className="mb-4.5 flex flex-col gap-6 xl:flex-row mt-3">
//                             <div className="w-full xl:w-full">
//                                 <label className="mb-2.5 block text-black dark:text-white">
//                                     Name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="Enter your first name"
//                                     className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                                 />
//                             </div>
//                         </div>

//                         <div className="mb-4.5">
//                             <label className="mb-2.5 block text-black dark:text-white">
//                                 Email <span className="text-meta-1">*</span>
//                             </label>
//                             <input
//                                 type="email"
//                                 placeholder="Enter your email address"
//                                 className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                             />
//                         </div>

//                         <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
//                             <div className="w-full xl:w-1/2">
//                                 <label className="mb-2.5 block text-black dark:text-white">
//                                     Phone number
//                                 </label>
//                                 <input
//                                     type="number"
//                                     placeholder="Enter your number"
//                                     className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                                 />
//                             </div>

//                             <div className="w-full xl:w-1/2">
//                                 <label className="mb-2.5 block text-black dark:text-white">
//                                     Password
//                                 </label>
//                                 <input
//                                     type="password"
//                                     placeholder="Enter your password"
//                                     className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                                 />
//                             </div>
//                         </div>

//                         <div className="mb-4.5">
//                             <label className="mb-2.5 block text-black dark:text-white">
//                                 Address <span className="text-meta-1">*</span>
//                             </label>
//                             <input
//                                 type="text"
//                                 placeholder="Enter your address"
//                                 className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                             />
//                         </div>


//                         <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
//                             <div className="w-full xl:w-1/2">
//                                 <label className="mb-2.5 block text-black dark:text-white">
//                                     State
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="Enter your state"
//                                     className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                                 />
//                             </div>

//                             <div className="w-full xl:w-1/2">
//                                 <label className="mb-2.5 block text-black dark:text-white">
//                                     District
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="Enter your district"
//                                     className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                                 />
//                             </div>
//                         </div>
//                         <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
//                             <div className="w-full xl:w-1/2">
//                                 <label className="mb-2.5 block text-black dark:text-white">
//                                     Subdistrict
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="Enter your subdistrict"
//                                     className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                                 />
//                             </div>

//                             <div className="w-full xl:w-1/2">
//                                 <label className="mb-2.5 block text-black dark:text-white">
//                                     Village or City
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="Enter your village or city"
//                                     className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                                 />
//                             </div>
//                         </div>


//                         <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
//                             <div className="w-full xl:w-1/2">
//                                 <label className="mb-2.5 block text-black dark:text-white">
//                                     Pincode
//                                 </label>
//                                 <input
//                                     type="number"
//                                     placeholder="Enter your pincode"
//                                     className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
//                                 />
//                             </div>
//                         </div>



//                         <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//                             <div className="flex flex-col gap-5.5 p-6.5">
//                                 <label className="mb-3 block h-1 text-black dark:text-white">
//                                     Attach file
//                                 </label>
//                                 <input
//                                     type="file"
//                                     className="w-full rounded-md border  border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm focus:border-green-600 file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
//                                 />
//                             </div>
//                         </div>

//                         <button className="flex w-full mt-2 justify-center rounded bg-[#57B33E] p-3 font-medium text-gray hover:bg-opacity-90">
//                             Send Message
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
// </>  )
// }

// export default AddMaintenanceManager


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { FaArrowLeftLong } from "react-icons/fa6";

const AddMaintenanceManager = () => {
    const [formData, setFormData] = useState({
        profilephoto: null as File | null,
        name: '',
        email: '',
        phonenumber: '',
        password: '',
        fulladdress: '',
        state: '',
        district: '',
        subdistrict: '',
        villageorcity: '',
        pincode: '',
        attachdocs: [] as { name: string, url: string }[], 
        alternatephonenumber: ''
       
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        if (name === 'attachdocs') {
            if (files) {
                const docsArray = Array.from(files).map(file => ({
                    name: file.name,
                    url: URL.createObjectURL(file) // Create a temporary URL for each file
                }));
                setFormData(prevState => ({
                    ...prevState,
                    attachdocs: docsArray
                }));
            }
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: files ? files[0] : value
            }));
        }
    };

    const convertFileToBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const token = localStorage.getItem('token'); // Retrieve the token from local storage

        // Convert profile photo
        const profilephotoBase64 = formData.profilephoto ? await convertFileToBase64(formData.profilephoto) : null;

        // Convert attach docs to base64
        const attachdocsBase64 = await Promise.all(
            formData.attachdocs.map(async doc => {
                // Fetch file from the temporary URL
                const response = await fetch(doc.url);
                const blob = await response.blob();
                const base64 = await convertFileToBase64(blob as File);
                return {
                    name: doc.name,
                    url: base64 as string
                };
            })
        );

        const jsonData = {
            profilephoto: profilephotoBase64,
            name: formData.name,
            email: formData.email,
            phonenumber: formData.phonenumber,
            password: formData.password,
            fulladdress: formData.fulladdress,
            state: formData.state,
            district: formData.district,
            subdistrict: formData.subdistrict,
            villageorcity: formData.villageorcity,
            pincode: formData.pincode,
            attachdocs: attachdocsBase64, // Attach docs in the required format
            alternatephonenumber: formData.alternatephonenumber,
          
            cords: {
                "latitude": 1234,
                "longitude": -12343
              },
        };  

        // Debugging: Print JSON data
        console.log('JSON Data:', jsonData);

        try {
            const response = await fetch('https://solar-project-delta.vercel.app/api/auth/registermaintainanecemanager', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jsonData)
            });

            const result = await response.json();
            console.log(result);

            if (!response.ok) {
                console.error('Server Error:', result);
            }

        } catch (error) {
            console.error('Network Error:', error);
        }
    };

    return (
        <>
            <Breadcrumb pageName="Form Layout" />

            <div>
                <div className="flex flex-col gap-5">
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b flex justify-between items-center border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Contact Form
                            </h3>
                            <Link to="/maintenance">
                                <button className="flex items-center justify-center gap-1">
                                    <FaArrowLeftLong />
                                    <span>Go Back</span>
                                </button>
                            </Link>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="p-6.5">
                                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                                    <div className="flex flex-col gap-5.5 p-6.5">
                                        <label className="mb-3 block h-1 text-black dark:text-white">
                                            Profile photo
                                        </label>
                                        <input
                                            type="file"
                                            name="profilephoto"
                                            onChange={handleChange}
                                            className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm focus:border-green-600 file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row mt-3">
                                    <div className="w-full xl:w-full">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Email <span className="text-meta-1">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                </div>

                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Phone number
                                        </label>
                                        <input
                                            type="number"
                                            name="phonenumber"
                                            placeholder="Enter your number"
                                            value={formData.phonenumber}
                                            onChange={handleChange}
                                            className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Enter your password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Address <span className="text-meta-1">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fulladdress"
                                        placeholder="Enter your address"
                                        value={formData.fulladdress}
                                        onChange={handleChange}
                                        className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                </div>

                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            State
                                        </label>
                                        <input
                                            type="text"
                                            name="state"
                                            placeholder="Enter your state"
                                            value={formData.state}
                                            onChange={handleChange}
                                            className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            District
                                        </label>
                                        <input
                                            type="text"
                                            name="district"
                                            placeholder="Enter your district"
                                            value={formData.district}
                                            onChange={handleChange}
                                            className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Sub District
                                        </label>
                                        <input
                                            type="text"
                                            name="subdistrict"
                                            placeholder="Enter your sub district"
                                            value={formData.subdistrict}
                                            onChange={handleChange}
                                            className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Village or City
                                        </label>
                                        <input
                                            type="text"
                                            name="villageorcity"
                                            placeholder="Enter your village or city"
                                            value={formData.villageorcity}
                                            onChange={handleChange}
                                            className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Pin code <span className="text-meta-1">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="pincode"
                                        placeholder="Enter your pincode"
                                        value={formData.pincode}
                                        onChange={handleChange}
                                        className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                </div>
                               
                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Alternate Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        name="alternatephonenumber"
                                        placeholder="Enter alternate phone number"
                                        value={formData.alternatephonenumber}
                                        onChange={handleChange}
                                        className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                    />
                                </div>
                                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                                    <div className="flex flex-col gap-5.5 p-6.5">
                                        <label className="mb-3 block h-1 text-black dark:text-white">
                                            Attach Documents
                                        </label>
                                        <input
                                            type="file"
                                            name="attachdocs"
                                            multiple
                                            onChange={handleChange}
                                            className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm focus:border-green-600 file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                                        />
                                        <div className="">
                                            {formData.attachdocs.map((doc, index) => (
                                                <div key={index} className="mb-2">
                                                    <p className="text-black dark:text-white">{doc.name}</p>
                                                   
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                

                                <button
                                    type="submit"
                                    className="w-full rounded bg-[#57B33E] py-2 text-white"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddMaintenanceManager;
