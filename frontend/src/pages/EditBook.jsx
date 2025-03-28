import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check the console');
        console.log(error);
      });
  }, []);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4 bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen'>
      <BackButton />
      <h1 className='text-3xl my-4 text-center font-bold'>Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 dark:border-sky-600 rounded-xl w-[600px] p-4 mx-auto bg-gray-100 dark:bg-gray-800'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 dark:text-gray-300'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 dark:border-gray-600 px-4 py-2 w-full bg-white dark:bg-gray-700 text-black dark:text-white rounded'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 dark:text-gray-300'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 dark:border-gray-600 px-4 py-2 w-full bg-white dark:bg-gray-700 text-black dark:text-white rounded'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500 dark:text-gray-300'>Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 dark:border-gray-600 px-4 py-2 w-full bg-white dark:bg-gray-700 text-black dark:text-white rounded'
          />
        </div>
        <button
          className='p-2 bg-sky-300 dark:bg-sky-700 text-black dark:text-white rounded hover:bg-sky-400 dark:hover:bg-sky-800 m-8'
          onClick={handleEditBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;