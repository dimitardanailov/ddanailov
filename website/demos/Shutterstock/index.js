require('dotenv').config()

const sstk = require("shutterstock-api");

sstk.setAccessToken(process.env.SHUTTERSTOCK_API_TOKEN);

const imagesApi = new sstk.ImagesApi();

const popular = 'random'

// const queryParams = simpleQuery()
// const queryParams = conditionalAndQuery()
// const queryParams = conditionalOrQuery()
// const queryParams = conditionalNotQuery()
// const queryParams = conditionalPerPage()
// const queryParams = sortQuery(popular)

// const queryParams = esLocalizingSearches()
const queryParams = queryByCategory('People', popular)

imagesApi.searchImages(queryParams)
  .then(({ data }) => {
    data.forEach(elements => {
      console.log('elements', elements);
    });
  })
  .catch((error) => {
    console.error(error);
  });

function simpleQuery() {
  const queryParams = {
    "query": "family",
    "image_type": "photo",
    "orientation": "vertical",
    "people_number": 2
  };

  return queryParams;
}

// AND is added implicitly between each search keyword. Therefore, searching for dog AND cat is equivalent to searching for dog cat.
function conditionalAndQuery() {
  const queryParams = {
    "query": "dog AND cat",
    "image_type": "photo",
    "orientation": "vertical",
  }

  return queryParams;
}

// OR searches for results that include any of the specified keywords, such as dog OR cat OR mouse
function conditionalOrQuery() {
  const queryParams = {
    "query": "dog OR cat OR mouse",
    "image_type": "photo",
    "orientation": "vertical",
  }

  return queryParams;
}

// NOT searches exclude keywords from search results, such as dog NOT hot dog. You can also use NOT in the contributor search field.
function conditionalNotQuery() {
  const queryParams = {
    "query": "mountain NOT camping",
    "image_type": "photo",
    "orientation": "vertical",
  }

  return queryParams
}

function conditionalPerPage() {
  const queryParams = {
    "query": "giraffes",
    "image_type": "photo",
    "orientation": "vertical",
    "page": "2",
    "per_page": "5"
  }

  return queryParams
}

/**
 * Sort params:
 *  - "newest": Sort by when the image was added.
 *  - "popular": Sort by the popularity of the image or video, returning images or videos that are often downloaded as a result of searches with similar keywords.
 *  - "random": Return the search results in random order.
 *  - "relevance": Sort by how well the result matches the keywords. Relevance also takes into account the age of the media and the popularity of the media.
 */
function sortQuery(sortParam) {
  const queryParams = {
    "query": "family",
    "image_type": "photo",
    "orientation": "vertical",
    "sort": sortParam,
    "people_number": 2,
    "page": "1",
    "per_page": "1"
  };

  return queryParams;
}

function esLocalizingSearches() {
  const queryParamsFr = {
    "query": "naturaleza", // Hi
    "language": "es",
    "region": "fr"
  };

  return queryParamsFr;
}

/**
 * Category: The category of the image, such as "People," "Science," or "Holidays." 
 * For a full list of categories, see List image categories.
 * 
 * @param {String} category 
 */
function queryByCategory(category, sortParam) {
  const queryParams = {
    "query": "family",
    "image_type": "photo",
    "orientation": "vertical",
    "sort": sortParam,
    "people_number": 2,
    "page": "1",
    "per_page": "1",
    "category": category
  };

  return queryParams;
}