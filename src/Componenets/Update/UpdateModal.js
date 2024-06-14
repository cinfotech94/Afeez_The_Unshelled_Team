// src/UpdatePostModal.js

import React, { useState } from 'react';

const UpdatePostModal = ({ post, onUpdate, onCancel }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSubmit = () => {
    const updatedPost = {
      ...post,
      title,
      body
    };
    onUpdate(updatedPost);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded">
        <h2 className="text-2xl font-bold mb-4">Update Post</h2>
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Body</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={onCancel} className="mr-4 px-4 py-2 bg-gray-500 text-white rounded">
            Cancel
          </button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-green-500 text-white rounded">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePostModal;
