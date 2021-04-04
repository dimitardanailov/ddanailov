require('dotenv').config()

const sstk = require("shutterstock-api");
const fs = require("fs");
const image = require('./_computerVisionImages');
console.log('image', image)

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const computerVisionApi = new sstk.ComputerVisionApi();

const imageFile = fs.readFileSync(image);
const base64File = Buffer.from(imageFile).toString("base64");

const body = new sstk.ImageCreateRequest(base64File);

computerVisionApi.uploadImage(body)
  .then((data) => {
    console.log(data.upload_id);
    return computerVisionApi.getKeywords(data.upload_id);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
