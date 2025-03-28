import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/books')
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='flex flex-col justify-start items-center min-h-screen p-6 bg-blue-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200'>
      {/* Toggle Buttons */}
      <div className='flex justify-center items-center gap-x-4 mb-6'>
        <button
          className={`px-6 py-2 rounded-lg shadow-md transition-all duration-300 ${
            showType === 'table'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
          onClick={() => setShowType('table')}
        >
          Table View
        </button>
        <button
          className={`px-6 py-2 rounded-lg shadow-md transition-all duration-300 ${
            showType === 'card'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
          onClick={() => setShowType('card')}
        >
          Card View
        </button>
      </div>

      {/* Header Section */}
      <div className='flex flex-col items-center mb-6'>
        <h1 className='text-4xl font-bold mb-4'>Books List</h1>
        <Link
          to='/books/create'
          className='flex items-center gap-x-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300'
        >
          <MdOutlineAddBox className='text-2xl' />
          <span>Add Book</span>
        </Link>
      </div>

      {/* Content Section */}
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;