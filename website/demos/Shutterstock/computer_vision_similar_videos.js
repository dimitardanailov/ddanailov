/**
 * Documentation:
 * https://api-reference.shutterstock.com/#computer_vision-list-similar-videos
 */
const fs = require("fs");


const { computerVisionApi, generateBody } = require('./_computerVisionApi.js')
const image = require('./_computerVisionImages')

console.log('Image ->', image)

const imageFile = fs.readFileSync(image);
const base64File = Buffer.from(imageFile).toString("base64");

const body = generateBody(base64File)

computerVisionApi.uploadImage(body)
  .then((data) => {
    console.log(data.upload_id);
    return computerVisionApi.getSimilarVideos(data.upload_id);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });