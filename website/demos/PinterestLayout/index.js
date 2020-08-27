import Layout from './components/Layout'

import config from './config'
import records from './dummy/records.json'

function PinterestLayout() {
  const items = records.items

  return (
    <Layout
      items={items}
      maximumRowItems={config.maximumRowItems}
      containerWidth={config.containerWidth}
    />
  )
}

export default PinterestLayout
