// src/DeleteConfirmationModal.js

import React from 'react';

const DeleteConfirmationModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded">
        <h2 className="text-2xl font-bold mb-4">Confirm Delete</h2>
        <p>Are you sure you want to delete this post?</p>
        <div className="flex justify-end mt-4">
          <button onClick={onCancel} className="mr-4 px-4 py-2 bg-gray-500 text-white rounded">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
