const config = {
  maxItems: 50,
  maximumRowItems: 5,
  item: {
    width: 200,
    height: {
      min: 50,
      max: 399,
    },
  },
  pages: 10,
}

config['containerWidth'] = config.maximumRowItems * config.item.width

module.exports = config
