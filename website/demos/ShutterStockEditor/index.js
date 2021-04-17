function ShutterStockLayout() {
  if (typeof window !== 'undefined') {
    const editor = window.Editor({
      apiKey: 'XDj5YViial3ibnnevAfmGi14', // This key can only be used for testing purposes
      licenseRequestCallback: ({sstkId, size = 'medium'}) => {
        return yourLicensingLogic(sstkId).then(licensedUrl => {
          return {
            url: 'theResultingGatekeeperUrl',
          }
        })
      },
    })
    editor.launch()
  }

  return (
    <div>
      Hello world!
      <script src="https://www.shutterstock.com/editor/image/assets/integration_next.js"></script>
    </div>
  )
}

export default ShutterStockLayout
