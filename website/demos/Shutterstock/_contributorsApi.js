require('dotenv').config()

const sstk = require("shutterstock-api");
sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const contributorsApi = new sstk.ContributorsApi();

module.exports = contributorsApi