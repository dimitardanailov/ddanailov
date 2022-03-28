async function createNewKeyPair(keyType: string) {
  const keyId = 'e0002792-fc17-48e2-950e-5998c599a368'
  const publicKey =
    '04068ae3cc66d3a9ef317c0bf7ead9d3474b64910a117df2860b8211ffc5e895f960a5d5211f23552f02dd07496ceb8d1234fc61c35e7217e361b94c80cfeb2916'

  return {
    keyId,
    publicKey,
  }
}

export default createNewKeyPair
