require('dotenv').config()

const sstk = require("shutterstock-api");
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi = new sstk.ImagesApi();

module.exports = imagesApi