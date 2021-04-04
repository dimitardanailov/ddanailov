/**
 * Resource: https://api-reference.shutterstock.com/#contributors
 */
const contributorsApi = require('./_contributorsApi')

const queryParams = {
  "id": [
    800506,
    1653538
  ]
};

contributorsApi.getContributorList(queryParams)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });