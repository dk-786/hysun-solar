// import { Product } from '../../types/product';
// import ProductOne from '../../images/product/product-01.png';
// import ProductTwo from '../../images/product/product-02.png';
// import ProductThree from '../../images/product/product-03.png';
// import ProductFour from '../../images/product/product-04.png';
// import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
// import { Link, useNavigate } from 'react-router-dom'
// import { CiSquarePlus } from 'react-icons/ci';

// const productData: Product[] = [
//     {
//       image: ProductOne,
//       name: 'Apple Watch Series 7',
//       category: 'Electronics',
//       price: 296,
//       sold: 22,
//       profit: 45,
//     },
//     {
//       image: ProductTwo,
//       name: 'Macbook Pro M1',
//       category: 'Electronics',
//       price: 546,
//       sold: 12,
//       profit: 125,
//     },
//     {
//       image: ProductThree,
//       name: 'Dell Inspiron 15',
//       category: 'Electronics',
//       price: 443,
//       sold: 64,
//       profit: 247,
//     },
//     {
//       image: ProductFour,
//       name: 'HP Probook 450',
//       category: 'Electronics',
//       price: 499,
//       sold: 72,
//       profit: 103,
//     },
//   ];
  
//   const StockManager = () => {
//     const navigate = useNavigate();
//     return (
//         <>
//         <Breadcrumb pageName="StockManager" />
//        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//        <div className="flex justify-between items-center py-6 px-4 md:px-6 xl:px-7.5">
//          <h4 className="text-xl font-semibold text-black dark:text-white">
//            Top Products
//          </h4>
//          <Link to="/addStockmanager">
//             <button className="flex items-center justify-center gap-1">
//               <CiSquarePlus />
//               <span>Add StokeManager</span>
//             </button>
//           </Link>
//        </div>
   
//        <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
//          <div className="col-span-3 flex items-center">
//            <p className="font-medium">Product Name</p>
//          </div>
//          <div className="col-span-2 hidden items-center sm:flex">
//            <p className="font-medium">Category</p>
//          </div>
//          <div className="col-span-1 flex items-center">
//            <p className="font-medium">Price</p>
//          </div>
//          <div className="col-span-1 flex items-center">
//            <p className="font-medium">Sold</p>
//          </div>
//          <div className="col-span-1 flex items-center">
//            <p className="font-medium">Profit</p>
//          </div>
//        </div>
   
//        {productData.map((product, key) => (
//          <div
//            className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
//            key={key}
//          >
//            <div className="col-span-3 flex items-center cursor-pointer"  onClick={() => { navigate("/profile") }}>
//              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
//                <div className="h-12.5 w-15 rounded-md">
//                  <img src={product.image} alt="Product" />
//                </div>
//                <p className="text-sm text-black dark:text-white">
//                  {product.name}
//                </p>
//              </div>
//            </div>
//            <div className="col-span-2 hidden items-center sm:flex">
//              <p className="text-sm text-black dark:text-white">
//                {product.category}
//              </p>
//            </div>
//            <div className="col-span-1 flex items-center">
//              <p className="text-sm text-black dark:text-white">
//              ₹{product.price}
//              </p>
//            </div>
//            <div className="col-span-1 flex items-center">
//              <p className="text-sm text-black dark:text-white">{product.sold}</p>
//            </div>
//            <div className="col-span-1 flex items-center">
//              <p className="text-sm text-meta-3">₹{product.profit}</p>
//            </div>
//          </div>
//        ))}
//      </div>
//       </>
//     )
//   }
  
//   export default StockManager
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { CiSquarePlus } from 'react-icons/ci';

const ImagePopup = ({ images, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg max-w-3xl w-full">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-xl font-bold">&times;</button>
        </div>
        <div className="flex overflow-x-auto gap-4 p-4">
          {images.map((image, index) => (
            <img key={index} src={image.url} alt={image.doc} className="w-64 h-64 object-cover" />
          ))}
        </div>
      </div>
    </div>
  );
};

const StockManager = () => {
  const [salesManagers, setSalesManagers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    const fetchSalesManagers = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('No token found in local storage');
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(
          'https://solar-project-delta.vercel.app/api/store/all',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (!response.ok) {
          throw new Error('Failed to fetch sales managers');
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setSalesManagers(data);
        } else if (data && typeof data === 'object') {
          const arrayData = Object.values(data).find((value) =>
            Array.isArray(value),
          );
          if (arrayData) {
            setSalesManagers(arrayData);
          } else {
            throw new Error('Unexpected data structure');
          }
        } else {
          throw new Error('Unexpected data structure');
        }
      } catch (error) {
        console.error('Error fetching sales managers:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSalesManagers();
  }, []);

  const handleImageClick = (images) => {
    setSelectedImages(images);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Breadcrumb pageName="StockManager" />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex justify-between items-center py-6 px-4 md:px-6 xl:px-7.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
          StockManager Managers
          </h4>
          <Link to="/addStockmanager">
            <button className="flex items-center justify-center gap-1">
              <CiSquarePlus />
              <span>Add Stock Manager</span>
            </button>
          </Link>
        </div>
        <hr />
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="py-3 px-5 text-left font-medium text-black dark:text-white">
                  Photo
                </th>
                <th className="py-3 px-5 text-left font-medium text-black dark:text-white">
                  Name
                </th>
                <th className="py-3 px-5 text-left font-medium text-black dark:text-white hidden sm:table-cell">
                  Phone Number
                </th>
                <th className="py-3 px-5 text-left font-medium text-black dark:text-white hidden sm:table-cell">
                  Address
                </th>
                <th className="py-3 px-5 text-left font-medium text-black dark:text-white">
                  City
                </th>
                <th className="py-3 px-5 text-left font-medium text-black dark:text-white">
                  State
                </th>
                <th className="py-3 px-5 text-left font-medium text-black dark:text-white">
                  Pincode
                </th>
                <th className="py-3 px-5 text-left font-medium text-black dark:text-white">
                  Documents
                </th>
                <th className="py-3 px-5 text-left font-medium text-black dark:text-white">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              {salesManagers.map((manager, index) => (
                <tr className="border-t" key={index}>
                  <td className="py-4 px-5 text-black dark:text-white whitespace-nowrap">
                    <img
                      src={
                        manager.profilephoto || 'https://via.placeholder.com/50'
                      }
                      alt={manager.name}
                      className="h-12 w-12 rounded-full"
                    />
                  </td>
                  <td className="py-4 px-5 text-black dark:text-white whitespace-nowrap">
                    {manager.name}
                  </td>
                  <td className="py-4 px-5 text-black dark:text-white hidden sm:table-cell whitespace-nowrap">
                    {manager.phonenumber}
                  </td>
                  <td className="py-2 px-2 text-black dark:text-white hidden sm:table-cell max-w-xs whitespace-normal break-words">
                    {manager.fulladdress}
                  </td>
                  <td className="py-4 px-5 text-black dark:text-white whitespace-nowrap">
                    {manager.villageorcity}
                  </td>
                  <td className="py-4 px-5 text-black dark:text-white whitespace-nowrap">
                    {manager.state}
                  </td>
                  <td className="py-4 px-5 text-black dark:text-white whitespace-nowrap">
                    {manager.pincode}
                  </td>
                  <td className="py-4 px-5 text-black dark:text-white">
                    {manager.attachdocs && manager.attachdocs.length > 0 ? (
                      <div className="relative">
                        <img
                          src={manager.attachdocs[0].url}
                          alt={manager.attachdocs[0].doc}
                          className="w-16 h-16 object-cover cursor-pointer"
                          onClick={() => handleImageClick(manager.attachdocs)}
                        />
                        {manager.attachdocs.length > 1 && (
                          <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-1 text-xs rounded">
                            +{manager.attachdocs.length - 1}
                          </div>
                        )}
                      </div>
                    ) : (
                      'No documents'
                    )}
                  </td>
                  <td className="py-4 px-4 text-black dark:text-white whitespace-nowrap">
                    {manager.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showPopup && (
        <ImagePopup
          images={selectedImages}
          onClose={handleClosePopup}
        />
      )}
    </>
  );
};

export default StockManager
