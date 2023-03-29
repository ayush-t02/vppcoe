import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const CreateMui = () => {
  const [title, setTitle] = new useState("");
  const [caption, setCaption] = new useState("");
  const [img, setImage] = new useState(null);

  console.log(title);
  console.log(caption);
  console.log(img);

  return (
    <>
      <Box
        component='form'
        sx={{
          "& .MuiTextField-root": { m: 1, width: "90vw" },
        }}
        noValidate
        autoComplete='off'>
        <div className='post-main text-center'>
          <h1 style={{ marginBottom: "2rem" }}>Create post</h1>
          <TextField
            id='outlined-multiline-static'
            label='Title'
            multiline
            rows={1}
            defaultValue='Enter the title'
            onChange={setTitle}
          />
          <TextField
            id='outlined-multiline-static'
            label='Caption'
            multiline
            rows={4}
            defaultValue='Enter the caption'
            onChange={setCaption}
          />
          <input
            id='fileInput'
            type='file'
            onChange={(event) => {
              let file = event.target.files[0];
              setImage(URL.createObjectURL(file));
            }}
          />
        </div>
      </Box>
    </>
  );
};

export default CreateMui;
