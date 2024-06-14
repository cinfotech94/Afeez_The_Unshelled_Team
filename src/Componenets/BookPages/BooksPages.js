import React, { useState, useEffect } from 'react';
import Header from '../Headers/Header';
import PostModal from '../Book/Book';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const postsPerPage = 12;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const openModal = (postId) => {
    setSelectedPostId(postId);
  };

  const closeModal = () => {
    setSelectedPostId(null);
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-lg text-red-500">Error: {error.message}</div>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg shadow-lg p-4 bg-white cursor-pointer"
              onClick={() => openModal(post.id)}
            >
              <div className="text-gray-700 text-3xl justify-center items-center">{post.id}</div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            </div>
          ))}
        </div>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        {selectedPostId && <PostModal postId={selectedPostId} onClose={closeModal} />}
      </div>
    </>
  );
};

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-8">
      <ul className="flex justify-center">
        {pageNumbers.map((number) => (
          <li key={number} className={`mx-1 ${currentPage === number ? 'text-blue-500 font-bold' : ''}`}>
            <button
              onClick={() => paginate(number)}
              className="px-3 py-1 border rounded-lg hover:bg-gray-200"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Posts;