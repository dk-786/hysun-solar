import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CiSquarePlus } from 'react-icons/ci';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb'; // Ensure this path is correct
import axios from 'axios';

type Order = {
  _id: string;
  userid: {
    cords: {
      latitude: number;
      longitude: number;
    };
    _id: string;
    name: string;
    email: string;
    phonenumber: string;
    fulladdress: string;
    state: string;
    district: string;
    subdistrict: string;
    villageorcity: string;
    pincode: string;
    coins: number;
    referralCode: string;
    referredUsers: string[];
    createdAt: string;
    updatedAt: string;
    referredBy: string;
  } | null; // userid can be null
  images: string[];
  lightbill: string;
  SalesManager: {
    managerid: string | null;
    managerModel: string;
    status: string;
    message: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
  };
  LicenseManager: {
    managerid: string | null;
    managerModel: string;
    status: string;
    message: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
  };
  ProjectManager: {
    managerid: string | null;
    managerModel: string;
    status: string;
    message: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
  };
  MaintainaneceManager: {
    managerid: string | null;
    managerModel: string;
    status: string;
    message: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
  };
  StoreManager: {
    managerid: string | null;
    managerModel: string;
    status: string;
    message: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
  };
  kilowatt: number;
  createdAt: string;
  updatedAt: string;
};

type ApiResponse = {
  data: Order[];
  message: string;
  status: boolean;
};

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve token from local storage
        if (!token) {                                                                                                 
          console.error('No token found in local storage');
          return;
        }

        const response = await axios.get<ApiResponse>('https://solar-project-delta.vercel.app/api/order/', {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in the request headers
          },
        });
        setOrders(response.data.data);
      } catch (error) {
        console.error('There was an error fetching the orders!', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
    <Breadcrumb pageName="Orders" />
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ">
      <div className="flex justify-between items-center py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">Top Orders</h4>
        <Link to="/addorders">
          <button className="flex items-center justify-center gap-1">
            <CiSquarePlus />
            <span>Add Orders</span>
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Phone Number</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">City</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Photos</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Bill Amount</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Kilowatt</p>
        </div>
      </div>

      {orders && orders.length > 0 ? (
        orders.map((order, key) => (
          <div
            className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div
              className="col-span-3 flex items-center cursor-pointer"
              onClick={() => navigate('/profile')}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="h-12.5 w-12 rounded-md">
                  <img src={order.images[0]} alt="User" />
                </div>
                <p className="text-sm text-black dark:text-white">{order.userid ? order.userid.name : 'Unknown User'}</p>
              </div>
            </div>
            
            <div className="col-span-2 hidden items-center sm:flex">
              <p className="text-sm text-black dark:text-white">{order.userid ? order.userid.phonenumber : 'N/A'}</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-black dark:text-white">{order.userid ? order.userid.villageorcity : 'N/A'}</p>
            </div>
            <div className="col-span-1 flex items-center">
              {order.images && order.images.length > 0 ? (
                <img className="h-12.5 w-12 rounded-md" src={order.images[0]} alt="Photos" />
              ) : (
                <p className="text-sm text-black dark:text-white">No photos</p>
              )}
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-black dark:text-white">₹{order.lightbill}</p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-black dark:text-white">{order.kilowatt} kW</p>
            </div>
          </div>
        ))
      ) : (
        <div className="py-4.5 px-4 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">No orders available</p>
        </div>
      )}
    </div>
  </>
  );
};

export default Orders;
