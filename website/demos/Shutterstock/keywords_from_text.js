const imagesApi = require('./_imagesApi')

const body = {
  "text": "The beach is a wonderful place to visit. It has beautiful sand and ocean waves."
};

imagesApi.postImageEntities(body)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });