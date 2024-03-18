import React, { useState } from "react";
import "./journal.css";

function Journal() {
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleImageUpload = (event) => {
    const newImages = [...images, URL.createObjectURL(event.target.files[0])];
    setImages(newImages);
  };

  const handleDeleteImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  const handleClearAll = () => {
    setDescription("");
    setImages([]);
  };

  const handleImageClick = (index) => {
    setSelectedImage(images[index]);
  };

  const handleClosePreview = () => {
    setSelectedImage(null);
  };

  return (
    <div className="journalMainContainer">
      <div className="journal-container">
        <h1 className="journal-title">Journal</h1>
        <textarea
          className="description-textarea"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Write your description here..."
          rows={3}
        />
        <div className="image-container">
          {images.map((image, index) => (
            <div
              key={index}
              className="image-item"
              onClick={() => handleImageClick(index)}
            >
              <img src={image} alt={`Image ${index}`} />
              <button
                className="delete-button"
                onClick={(event) => {
                  event.stopPropagation();
                  handleDeleteImage(index);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="button-container">
          <label htmlFor="image-upload" className="image-upload-button">
            Add Images
          </label>
          <input
            id="image-upload"
            className="image-input"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <button className="clear-all-button" onClick={handleClearAll}>
            Clear All
          </button>
        </div>
        {selectedImage && (
          <div className="image-preview">
            <img src={selectedImage} alt="Preview" />
            <button
              className="close-preview-button"
              onClick={handleClosePreview}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Journal;
