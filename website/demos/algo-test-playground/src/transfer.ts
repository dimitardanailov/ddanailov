import {transfer} from './services/algorand'
;(async () => {
  const regExp = new RegExp(/\,/, 'g')
  const mnemonic = 'final, equal, social, attack, chimney, spend, swear, civil, sad, jungle, dumb, assault, metal, feature, monitor, marriage, fly, depart, ill, shed, burger, census, swift, absent, garlic'.replace(
    regExp,
    '',
  )
  const toAddress = 'REYCTDA3AWAFPXTN5IEFFCA5LGCJN74RPKSJCFU3GTMZYXX2AWYJIZRGJY'
  const amountWei = '1000000'
  const tokenCategory = ''
  const transactionId = ''
  const keystoreId = ''
  const signRequest = ''

  await transfer(
    mnemonic,
    toAddress,
    amountWei,
    tokenCategory,
    transactionId,
    keystoreId,
    signRequest,
  )
})()
