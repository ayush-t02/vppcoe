import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = new useState("");
  const [caption, setCaption] = new useState("");
  const [img, setImage] = new useState(null);

  console.log(title);
  console.log(caption);
  console.log(img);

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-md-offset-2'>
            <h1>Create post</h1>

            <form action='' method='POST'>
              <div classNameName='form-group'>
                <label for='title'>
                  Title <span className='require'>*</span>
                </label>
                <input
                  type='text'
                  className='form-control'
                  name='title'
                  onChange={setTitle}
                />
              </div>

              <div className='form-group'>
                <label for='description'>Caption</label>
                <textarea
                  rows='5'
                  className='form-control'
                  name='description'
                  onChange={setCaption}></textarea>
              </div>

              <div className='form-group'>
                <p>
                  <span className='require'>*</span> - required fields
                </p>
              </div>

              <div className='form-group' style={{ marginBottom: "2rem" }}>
                <input
                  id='fileInput'
                  type='file'
                  onChange={(event) => {
                    let file = event.target.files[0];
                    setImage(URL.createObjectURL(file));
                  }}
                />
              </div>

              <div className='form-group'>
                <button type='submit' className='btn btn-primary'>
                  Create
                </button>
                <button className='btn btn-default'>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
