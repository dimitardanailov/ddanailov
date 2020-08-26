import getItems from './dummy/getItems'

import Layout from './components/Layout'

function PinterestLayout() {
  const items = getItems()

  return <Layout items={items} />
}

export default PinterestLayout
