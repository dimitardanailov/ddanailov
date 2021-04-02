require('dotenv').config()

const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi = new sstk.ImagesApi();

const queryParams = {
  "query": "family",
  "image_type": "photo",
  "orientation": "vertical",
  "people_number": 2
};

imagesApi.searchImages(queryParams)
  .then(({ data }) => {
    data.forEach(elements => {
      console.log('elements', elements);
    });
    // console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });