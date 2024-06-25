import React, { useState } from 'react'
import WebView from 'react-native-webview'


function StripeComponent() {


  return (
    <WebView
      originWhitelist={['*']}
      source={{
        html: `<div>
      <iframe src="https://docs.paycomet.com/en/integracion/rest-docs"
            title="iframe Example 1" width="100%" height="100%">
      </iframe>
      </div>` }}
    >

    </WebView>
  )
}

export default StripeComponent
