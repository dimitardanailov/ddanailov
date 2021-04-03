const imagesApi = require('./_imagesApi')

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