require('dotenv').config()

const sstk = require("shutterstock-api");
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const computerVisionApi = new sstk.ComputerVisionApi();

function generateBody(base64File) {
  const body = new sstk.ImageCreateRequest(base64File);

  return body
}

module.exports = {
  computerVisionApi,
  generateBody
}