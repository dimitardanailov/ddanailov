import Layout from './components/Layout'

import config from './config'
import records from './dummy/records.json'

import {calcHeightDimensions} from './helper'

function PinterestLayout() {
  const {items} = records['page0']
  const response = calcHeightDimensions(items, config.maximumRowItems)

  return (
    <Layout
      items={response.listItems}
      containerHeight={response.containerHeight}
      containerWidth={config.containerWidth}
    />
  )
}

export default PinterestLayout
