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
  let firstRowItems = 0
  let top = 0
  let left = 0
  let columns = {}
  let containerHeight = 0

  const listItems = items.map(function (item, i) {
    if (firstRowItems === maximumRowItems) {
      const output = findMinimumHeight(columns)
      const key = output.column
      left = key * item.width
      top = output.height

      const columnHeight = top + item.height
      columns[key] = columnHeight

      if (columnHeight > containerHeight) {
        containerHeight = columnHeight
      }
    }

    if (firstRowItems < maximumRowItems) {
      left = firstRowItems * item.width
      columns[i] = item.height
      firstRowItems++

      if (item.height > containerHeight) {
        containerHeight = item.height
      }
    }

    return {
      top,
      left,
      ...item,
    }
  })

  return {
    listItems,
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
    containerHeight: heightProperties.containerHeight,
    containerWidth: widthProperties.containerWidth,
    maximumRowItems: widthProperties.maximumRowItems,
  }
}

export {findMinimumHeight, calcHeightDimensions, calcWidthProperties}

export default getLayoutParams
