import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import React, { useState } from 'react';

const AddExecutive = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

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
    attachdocs: [] as { name: string; url: string }[],
    alternatephonenumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'attachdocs') {
      if (files) {
        const docsArray = Array.from(files).map((file) => ({
          name: file.name,
          url: URL.createObjectURL(file), // Create a temporary URL for each file
        }));
        setFormData((prevState) => ({
          ...prevState,
          attachdocs: docsArray,
        }));
      }
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files ? files[0] : value,
      }));
    }
  };

  const convertFileToBase64 = (
    file: File,
  ): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const apiEndpoints = {
    Sales:
      'https://solar-project-delta.vercel.app/api/auth/registersalesmanager',
    Licensing:
      'https://solar-project-delta.vercel.app/api/auth/registerlicensemanager',
    Project:
      'https://solar-project-delta.vercel.app/api/auth/registerprojecthandler',
    Stock:
      'https://solar-project-delta.vercel.app/api/auth/registerstoremanager',
    Maintenance:
      'https://solar-project-delta.vercel.app/api/auth/registermaintainanecemanager',
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = localStorage.getItem('token'); // Retrieve the token from local storage

    // Convert profile photo
    const profilephotoBase64 = formData.profilephoto
      ? await convertFileToBase64(formData.profilephoto)
      : null;

    // Convert attach docs to base64
    const attachdocsBase64 = await Promise.all(
      formData.attachdocs.map(async (doc) => {
        // Fetch file from the temporary URL
        const response = await fetch(doc.url);
        const blob = await response.blob();
        const base64 = await convertFileToBase64(blob as File);
        return {
          name: doc.name,
          url: base64 as string,
        };
      }),
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
        latitude: 1234,
        longitude: -12343,
      },
    };

    // Debugging: Print JSON data
    console.log('JSON Data:', jsonData);

    try {
      const apiUrl = apiEndpoints[selectedOption];
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
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

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-full">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Full address
                    </label>
                    <input
                      type="text"
                      name="fulladdress"
                      placeholder="Enter full address"
                      value={formData.fulladdress}
                      onChange={handleChange}
                      className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      placeholder="Enter State"
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
                      placeholder="Enter District"
                      value={formData.district}
                      onChange={handleChange}
                      className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Sub-district
                    </label>
                    <input
                      type="text"
                      name="subdistrict"
                      placeholder="Enter Sub-District"
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
                      placeholder="Enter Village or City"
                      value={formData.villageorcity}
                      onChange={handleChange}
                      className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Pincode
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      placeholder="Enter Pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Alternate phone number
                    </label>
                    <input
                      type="number"
                      name="alternatephonenumber"
                      placeholder="Enter Alternate number"
                      value={formData.alternatephonenumber}
                      onChange={handleChange}
                      className="w-full rounded border-[1.5px] h-10 border-stroke bg-transparent py-3 px-2 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                
                  
                    <label className="mb-2.5 block text-black dark:text-white">
                      Add Executive
                    </label>
                    <select
                      value={selectedOption}
                      onChange={(e) => {
                        setSelectedOption(e.target.value);
                        changeTextColor();
                      }}
                      className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-2 px-2 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary ${
                        isOptionSelected ? 'text-black dark:text-white' : ''
                      }`}
                    >
                      <option
                        value=""
                        disabled
                        className="text-body dark:text-bodydark"
                      >
                        Select Executive
                      </option>
                      <option
                        value="Sales"
                        className="text-body dark:text-bodydark"
                      >
                        Sales
                      </option>
                      <option
                        value="Licensing"
                        className="text-body dark:text-bodydark"
                      >
                        Licensing
                      </option>
                      <option
                        value="Project"
                        className="text-body dark:text-bodydark"
                      >
                        Project
                      </option>
                      <option
                        value="Stock"
                        className="text-body dark:text-bodydark"
                      >
                        Stock
                      </option>
                      <option
                        value="Maintenance"
                        className="text-body dark:text-bodydark"
                      >
                        Maintenance
                      </option>
                    </select>
                  
                </div>

                <div className="mb-4.5 mt-2 flex flex-col   gap-6 xl:flex-row">
                  <div className="w-full xl:w-full">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Attach documents
                    </label>
                    <input
                      type="file"
                      name="attachdocs"
                      onChange={handleChange}
                      multiple
                       className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm focus:border-green-600 file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                    />
                  </div>
                </div>
                


                <button
                  className="inline-flex items-center justify-center rounded-md bg-green-500 py-2 px-4 font-semibold text-white transition-all hover:bg-opacity-90"
                  type="submit"
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

export default AddExecutive;
