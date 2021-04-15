const imagesApi = require('./_imagesApi')

const body = {
  "text": "Abstract dark blue and magenta texture with gold inclusions background. Digital Illustration imitating oil painting on canvas"
};

console.log('body', body)

imagesApi.postImageEntities(body)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });