const {create} = require("ipfs-http-client");
const express = require("express");
const multer  = require('multer')

const app = express();
const upload = multer();


const ipfs = create('http://127.0.0.1:5001');

app.post('/ipfs-upload-file', upload.single('image'), async function (req, res) {
    console.log(req.file);
    const fileUpload = await ipfs.add(req.file.buffer);
    res.send(fileUpload);
  });


app.listen(3000,() =>{
    console.log('App running in 3000 port');
});