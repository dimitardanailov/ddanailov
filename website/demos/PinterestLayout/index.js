import Layout from './components/Layout'

import config from './config'
import records from './dummy/records.json'

import getLayoutParams from './getLayoutParams'

function PinterestLayout() {
  const {items} = records['page0']

  const width = 670
  const params = getLayoutParams(items, width, config.item.width)

  return (
    <Layout
      initialItems={params.items}
      initialContainerHeight={params.containerHeight}
      initialColumns={params.columns}
      containerWidth={params.containerWidth}
      maximumRowItems={params.maximumRowItems}
    />
  )
}

export default PinterestLayout
