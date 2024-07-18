import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableTwo from '../components/Tables/TableTwo';
import LicesingManager from './Screens/LicesingManager';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableTwo />
      
      </div>
    </>
  );
};

export default Tables;
