import { Link } from 'react-router-dom';
import { CiSquarePlus } from 'react-icons/ci';
interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    // <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    //   <h2 className="text-title-md2 font-semibold text-black dark:text-white">
    //     {pageName}
    //   </h2>

    //   {/* <nav>
    //     <ol className="flex items-center gap-2">
    //       <li>
    //         <Link className="font-medium" to="/">
    //           Dashboard /
    //         </Link>
    //       </li>
    //       <li className="font-medium text-green-600">{pageName}</li>
    //     </ol>
    //   </nav> */}
    //   <Link to='/addorders'>
    //   <button className="flex items-center justify-center gap-1">
    //     <CiSquarePlus />
    //     <span>Add Orders</span>
    //   </button>
    //   </Link>
    // </div>
    <>
    </>
  );
};

export default Breadcrumb;
