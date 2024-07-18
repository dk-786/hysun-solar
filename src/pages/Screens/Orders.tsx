import { Product } from '../../types/product';

import UserOne from '../../images/user/user-01.png';
import UserOne1 from '../../images/user/user-02.png';
import UserOne2 from '../../images/user/user-03.png';
import UserOne3 from '../../images/user/user-04.png';
import UserOne4 from '../../images/user/user-05.png';
import UserOne5 from '../../images/user/user-06.png';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Link, useNavigate } from 'react-router-dom';
import { CiSquarePlus } from 'react-icons/ci';

const productData = [
  {
    image: UserOne,
    name: 'Kiratan Patel',
    phonenumber: 917693538209,
    city: 'Ahmedabad',
    photos: 'photos',
    billamount: 45,
    kilowatt: '1kw',
  },
  {
    image: UserOne1,
    name: 'Hetvi Patel',
    phonenumber: 917638638206,
    city: 'Surat',
    photos: 'photos',
    billamount: 10,
    kilowatt: '2kw',
  },
  {
    image: UserOne2,
    name: 'Jay Patel',
    phonenumber: 919353538202,
    city: 'Rajkot',
    photos: 'photos',
    billamount: 150,
    kilowatt: '10kw',
  },
  {
    image: UserOne3,
    name: 'Sonal Patel',
    phonenumber: 913863538205,
    city: 'Gandhinagar',
    photos: 'photos',
    billamount: 76,
    kilowatt: '23kw',
  },
  {
    image: UserOne4,
    name: 'Umang Patel',
    phonenumber: 917658438201,
    city: 'Amreli',
    photos: 'photos',
    billamount: 67,
    kilowatt: '24kw',
  },
  {
    image: UserOne5,
    name: 'Hashmukh Patel',
    phonenumber: 917693538209,
    city: 'Mumbai',
    photos: 'photos',
    billamount: 87,
    kilowatt: '14kw',
  },
];

const Orders = () => {
  const navigate = useNavigate();
  return (
    <>
      <Breadcrumb pageName="Orders" />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className=" flex justify-between items-center py-6 px-4 md:px-6 xl:px-7.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Top Orders
          </h4>
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
            <p className="font-medium">Kilowattt</p>
          </div>
        </div>

        {productData.map((product, key) => (
          <div
            className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div
              className="col-span-3 flex items-center cursor-pointer"
              onClick={() => {
                navigate('/profile');
              }}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="h-12.5 w-12 rounded-md">
                  <img src={product.image} alt="Product" />
                </div>
                <p className="text-sm text-black dark:text-white">
                  {product.name}
                </p>
              </div>
            </div>
            <div className="col-span-2 hidden items-center sm:flex">
              <p className="text-sm text-black dark:text-white">
                +{product.phonenumber}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-black dark:text-white">
                {product.city}
              </p>
            </div>
            <div className="h-12.5 w-12 rounded-md">
              <img src={product.image} alt="Product" />
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-black dark:text-white">
                ${product.billamount}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p className="text-sm text-black dark:text-white ">
                {product.kilowatt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Orders;
