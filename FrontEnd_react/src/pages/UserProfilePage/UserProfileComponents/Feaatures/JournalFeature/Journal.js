import React, { useState } from "react";
import "./journal.css";

function Journal() {
  const [posts, setPosts] = useState([]);

  const addPost = () => {
    const newPost = {
      description: "",
      images: [],
    };
    setPosts([...posts, newPost]);
  };

  const handleDescriptionChange = (event, index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].description = event.target.value;
    setPosts(updatedPosts);
  };

  const handleImageUpload = (event, index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].images.push(URL.createObjectURL(event.target.files[0]));
    setPosts(updatedPosts);
  };

  const handleDeletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  const handleDeleteImage = (postIndex, imageIndex) => {
    const updatedPosts = [...posts];
    updatedPosts[postIndex].images.splice(imageIndex, 1);
    setPosts(updatedPosts);
  };

  return (
    <div className="journalMainContainer">
      <div className="journal-container">
        <h1 className="journal-title">Journal</h1>
        {posts.map((post, index) => (
          <div key={index} className="post">
            <textarea
              className="description-textarea"
              value={post.description}
              onChange={(event) => handleDescriptionChange(event, index)}
              placeholder="Write your description here..."
              rows={3}
            />
            <div className="image-container">
              {post.images.map((image, imageIndex) => (
                <div key={imageIndex} className="image-item">
                  <img src={image} alt={`Image ${imageIndex}`} />
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteImage(index, imageIndex)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
            <div className="button-container">
              <label
                htmlFor={`image-upload-${index}`}
                className="image-upload-button"
              >
                Add Images
              </label>
              <input
                id={`image-upload-${index}`}
                className="image-input"
                type="file"
                accept="image/*"
                onChange={(event) => handleImageUpload(event, index)}
              />
              <button
                className="clear-all-button"
                onClick={() => handleDeletePost(index)}
              >
                Delete Post
              </button>
            </div>
          </div>
        ))}
        <button className="add-post-button" onClick={addPost}>
          Add New Post
        </button>
      </div>
    </div>
  );
}

export default Journal;
