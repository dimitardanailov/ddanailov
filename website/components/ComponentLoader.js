function ComponentLoader(device, DesktopPage, TabletPage, MobilePage) {
  switch (device) {
    case 'desktop':
      return <DesktopPage />
    case 'tablet':
      return <TabletPage />
    case 'mobile':
      return <MobilePage />
    default:
      return null
  }
}

export default ComponentLoader
