import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='relative border border-gray-300 dark:border-gray-700 rounded-lg p-6 m-4 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300'>
      {/* Book Title */}
      <div className='flex items-center gap-x-2 mb-4'>
        <PiBookOpenTextLight className='text-red-400 dark:text-red-500 text-3xl' />
        <h2 className='text-xl font-semibold text-gray-800 dark:text-gray-200'>{book.title}</h2>
      </div>

      {/* Author */}
      <div className='flex items-center gap-x-2 mb-4'>
        <BiUserCircle className='text-blue-400 dark:text-blue-500 text-3xl' />
        <h3 className='text-lg text-gray-600 dark:text-gray-400'>{book.author}</h3>
      </div>

      {/* Publish Year */}
      <div className='flex items-center gap-x-2 mb-4'>
        <span className='text-lg font-semibold text-gray-800 dark:text-gray-200'>📅</span>
        <h3 className='text-lg text-gray-600 dark:text-gray-400'>{book.publishYear}</h3>
      </div>

      {/* Action Buttons */}
      <div className='flex justify-between items-center gap-x-4 mt-6'>
        <BiShow
          className='text-3xl text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-500 cursor-pointer transition-colors duration-200'
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className='text-3xl text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-500 transition-colors duration-200' />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className='text-3xl text-yellow-500 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-500 transition-colors duration-200' />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className='text-3xl text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-500 transition-colors duration-200' />
        </Link>
      </div>

      {/* Modal */}
      {showModal && <BookModal book={book} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default BookSingleCard;