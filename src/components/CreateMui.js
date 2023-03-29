import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const CreateMui = () => {
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
          />
          <TextField
            id='outlined-multiline-static'
            label='Caption'
            multiline
            rows={4}
            defaultValue='Enter the caption'
          />
          <input id='fileInput' type='file' />
        </div>
      </Box>
    </>
  );
};

export default CreateMui;
