const imagesApi = require('./_imagesApi');

const queryParams = {
  "embed": "share_url",
  "type": "photo",
  "asset_hint": "2x"
};

imagesApi.getFeaturedLightboxList(queryParams)
  .then(({data}) => {
    data.forEach(elements => {
      console.log('elements', elements);
    });
  })
  .catch((error) => {
    console.error(error);
  });