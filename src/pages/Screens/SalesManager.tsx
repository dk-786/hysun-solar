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

const SalesManager = () => {
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
          'https://solar-project-delta.vercel.app/api/sales/all',
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
      <Breadcrumb pageName="SalesManager" />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex justify-between items-center py-6 px-4 md:px-6 xl:px-7.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Sales Managers
          </h4>
          {/* <Link to="/addsalesmanager">
            <button className="flex items-center justify-center gap-1">
              <CiSquarePlus />
              <span>Add Sales Manager</span>
            </button>
          </Link> */}
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

export default SalesManager;
