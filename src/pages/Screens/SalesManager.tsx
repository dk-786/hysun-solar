import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { CiSquarePlus } from 'react-icons/ci';

const SalesManager = () => {

  const dummyData = [
    {
      photo: 'https://via.placeholder.com/50', // Placeholder image URL
      name: 'sahil khan ',
      phoneNumber: '1234567890',
      address: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, eveniet?',
      city: 'New York',
      state: 'NY',
      pincode: '10001',
      documents: 'doc1, doc2',
      email: 'john.doe@example.com',
    },
    {
      photo: 'https://via.placeholder.com/50',
      name: 'Jane Smith',
      phoneNumber: '234-567-8901',
      address: '456 Elm St',
      city: 'Los Angeles',
      state: 'CA',
      pincode: '90001',
      documents: 'doc3, doc4',
      email: 'jane.smith@example.com',
    },
    {
      photo: 'https://via.placeholder.com/50',
      name: 'Mike Johnson',
      phoneNumber: '345-678-9012',
      address: '789 Oak St',
      city: 'Chicago',
      state: 'IL',
      pincode: '60601',
      documents: 'doc5, doc6',
      email: 'mike.johnson@example.com',
    },
    {
      photo: 'https://via.placeholder.com/50',
      name: 'Emily Davis',
      phoneNumber: '456-789-0123',
      address: '101 Pine St',
      city: 'Houston',
      state: 'TX',
      pincode: '77001',
      documents: 'doc7, doc8',
      email: 'emily.davis@example.com',
    },
    {
      photo: 'https://via.placeholder.com/50',
      name: 'David Wilson',
      phoneNumber: '567-890-1234',
      address: '202 Maple St',
      city: 'Phoenix',
      state: 'AZ',
      pincode: '85001',
      documents: 'doc9, doc10',
      email: 'david.wilson@example.com',
    },
  ];

  return (
    <>
      <Breadcrumb pageName="SalesManager" />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex justify-between items-center py-6 px-4 md:px-6 xl:px-7.5">
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Sales Managers
          </h4>
          <Link to="/addsalesmanager">
            <button className="flex items-center justify-center gap-1">
              <CiSquarePlus />
              <span>Add Sales Manager</span>
            </button>
          </Link>
       
        </div>
        <hr/>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-700">
                <th className="py-3 px-5 text-left font-medium text-black dark:text-white">Photo</th>
                <th className="py-3 px-5 text-left font-medium text-black dark:text-white">Name</th>
                <th className="py-3 px-5 text-left font-medium text-black dark:text-white hidden sm:table-cell">Phone Number</th>
                <th className="py-3 px-5 text-left font-medium text-black dark:text-white hidden sm:table-cell">Address</th>
                <th className="py-3 px-5 text-left font-medium text-black dark:text-white">City</th>
                <th className="py-3 px-5 text-left font-medium text-black dark:text-white">State</th>
                <th className="py-3 px-5 text-left font-medium text-black dark:text-white">Pincode</th>
                <th className="py-3 px-5 text-left font-medium text-black dark:text-white">Documents</th>
                <th className="py-3 px-5 text-left font-medium text-black dark:text-white">Email</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((manager, index) => (
                <tr className="border-t" key={index}>
                  <td className="py-4 px-5 text-black dark:text-white whitespace-nowrap">
                    <img src={manager.photo} alt={manager.name} className="h-12 w-12 rounded-full" />
                  </td>
                  <td className="py-4 px-5 text-black dark:text-white whitespace-nowrap">{manager.name}</td>
                  <td className="py-4 px-5 text-black dark:text-white hidden sm:table-cell whitespace-nowrap">{manager.phoneNumber}</td>
                  <td className="py-2 px-2 text-black dark:text-white hidden sm:table-cell max-w-xs whitespace-normal break-words">{manager.address}</td>
                  <td className="py-4 px-5 text-black dark:text-white whitespace-nowrap">{manager.city}</td>
                  <td className="py-4 px-5 text-black dark:text-white whitespace-nowrap">{manager.state}</td>
                  <td className="py-4 px-5 text-black dark:text-white whitespace-nowrap">{manager.pincode}</td>
                  <td className="py-4 px-5 text-black dark:text-white whitespace-nowrap">{manager.documents}</td>
                  <td className="py-4 px-4 text-black dark:text-white whitespace-nowrap">{manager.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SalesManager;
