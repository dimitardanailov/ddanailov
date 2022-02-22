const tableWidth = columnDimensions => {
  let total =
    100 -
    parseFloat(columnDimensions.coin.width) -
    parseFloat(columnDimensions.usd.price.width) -
    parseFloat(columnDimensions.usd.priceChanged.width) -
    parseFloat(columnDimensions.btc.price.width) -
    parseFloat(columnDimensions.btc.priceChanged.width) -
    parseFloat(columnDimensions.eth.price.width) -
    parseFloat(columnDimensions.eth.priceChanged.width)

  console.log(total)
}

tableWidth(columnDimensions)
