function findMinimumHeight(columns) {
  const keys = Object.keys(columns)
  const output = {
    height: Number.MAX_SAFE_INTEGER,
    column: 0,
  }

  keys.forEach(key => {
    if (output.height > columns[key]) {
      output.height = columns[key]
      output.column = parseInt(key)
    }
  })

  return output
}

function calcHeightDimensions(items, maximumRowItems) {
  const firstRow = calcFirstRowHeightParams(items, maximumRowItems)

  const sliceArray = items.slice(maximumRowItems)
  const rowsData = calcRowHeightParams(
    sliceArray,
    firstRow.columns,
    firstRow.containerHeight,
  )

  const listItems = firstRow.listItems.concat(rowsData.listItems)

  return {
    listItems,
    containerHeight: rowsData.containerHeight,
    columns: rowsData.columns,
  }
}

function calcFirstRowHeightParams(items, maximumRowItems) {
  let top = 0
  let left = 0
  let containerHeight = 0
  const columns = {}

  const firstRowItems = []

  let iteration = maximumRowItems
  if (maximumRowItems > items.length) {
    iteration = items.length
  }

  for (let i = 0; i < iteration; i++) {
    const item = items[i]
    left = i * item.width
    columns[i] = item.height

    if (item.height > containerHeight) {
      containerHeight = item.height
    }

    firstRowItems.push({
      top,
      left,
      ...item,
    })
  }

  return {
    listItems: firstRowItems,
    containerHeight,
    columns,
  }
}

function calcRowHeightParams(items, externalColumns, containerHeight) {
  let top = 0
  let left = 0
  let columns = {...externalColumns}

  const listItems = items.map(function (item, i) {
    const output = findMinimumHeight(columns)
    const key = output.column
    left = key * item.width
    top = output.height

    const columnHeight = top + item.height
    columns[key] = columnHeight

    if (columnHeight > containerHeight) {
      containerHeight = columnHeight
    }

    return {
      top,
      left,
      ...item,
    }
  })

  return {
    listItems,
    columns,
    containerHeight,
  }
}

function calcWidthProperties(screenWidth, columnWidth) {
  const containerWidth = Math.floor(screenWidth / columnWidth) * columnWidth
  const maximumRowItems = Math.floor(containerWidth / columnWidth)

  return {
    containerWidth,
    maximumRowItems,
  }
}

function getLayoutParams(items, screenWidth, columnWidth) {
  const widthProperties = calcWidthProperties(screenWidth, columnWidth)
  const heightProperties = calcHeightDimensions(
    items,
    widthProperties.maximumRowItems,
  )

  return {
    items: heightProperties.listItems,
    columns: heightProperties.columns,
    containerHeight: heightProperties.containerHeight,
    containerWidth: widthProperties.containerWidth,
    maximumRowItems: widthProperties.maximumRowItems,
  }
}

export {
  findMinimumHeight,
  calcHeightDimensions,
  calcWidthProperties,
  calcRowHeightParams,
}

export default getLayoutParams
