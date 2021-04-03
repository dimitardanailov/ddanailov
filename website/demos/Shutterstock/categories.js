require('dotenv').config()

const sstk = require("shutterstock-api");
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi = new sstk.ImagesApi();

const queryParams = {
  "language": "en"
};

imagesApi.getImageCategories(queryParams)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
