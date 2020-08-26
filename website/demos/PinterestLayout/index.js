import Layout from './components/Layout'

import records from './dummy/records.json'

function PinterestLayout() {
  const items = records.items

  return <Layout items={items} />
}

export default PinterestLayout
