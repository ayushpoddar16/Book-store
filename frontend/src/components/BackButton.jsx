import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className='flex items-center gap-x-2 bg-sky-600 dark:bg-sky-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-sky-500 dark:hover:bg-sky-800 transition-all duration-300'
      >
        <BsArrowLeft className='text-xl' />
        <span className='text-lg font-medium'>Back</span>
      </Link>
    </div>
  );
};

export default BackButton;