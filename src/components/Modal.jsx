import React from 'react';

const Modal = ({ selectedImage }) => {
  if (!selectedImage) {
    return null; // Don't render the modal if no image is selected
  }

  return (
    // Your modal code here
    <div>
      <img src={selectedImage.url} alt={selectedImage.alt} />
    </div>
  );
};

export default Modal;