// src/PostModal.js

import React, { useState, useEffect } from 'react';
import UpdatePostModal from '../Update/UpdateModal';
import DeleteConfirmationModal from '../Delete/DeleteConfirmation';

const PostModal = ({ postId, onClose }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const authToken = 'your-auth-token'; // Replace with actual token

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [postId, authToken]);

  const handleDelete = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(() => {
        onClose(); // Close the modal after successful deletion
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleUpdate = (updatedPost) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedPost),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ${authToken}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setPost(data); // Update the post state with the updated data
        setShowUpdateModal(false); // Close the update modal
      })
      .catch((error) => {
        setError(error);
      });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded">
          <div className="text-center text-lg">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded">
          <div className="text-center text-lg text-red-500">Error: {error.message}</div>
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded">
        <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
        <p className="mb-4">{post.body}</p>
        <div className="text-gray-500 text-sm">
          <p>User ID: {post.userId}</p>
          <p>Post ID: {post.id}</p>
        </div>
        <button onClick={() => setShowUpdateModal(true)} className="mt-4 ml-4 px-4 py-2 bg-green-500 text-white rounded">
          Edit
        </button>
        <button onClick={() => setShowDeleteModal(true)} className="mt-4 ml-4 px-4 py-2 bg-blue-500 text-white rounded">
          Delete
        </button>
        <button onClick={onClose} className="mt-4 ml-4 px-4 py-2 bg-red-500 text-white rounded">
          Close
        </button>
      </div>
      {showDeleteModal && (
        <DeleteConfirmationModal
          onConfirm={handleDelete}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
      {showUpdateModal && (
        <UpdatePostModal
          post={post}
          onUpdate={handleUpdate}
          onCancel={() => setShowUpdateModal(false)}
        />
      )}
    </div>
  );
};

export default PostModal;