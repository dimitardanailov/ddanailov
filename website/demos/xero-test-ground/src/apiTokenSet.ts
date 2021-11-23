const path = __dirname.replace('/src', '')
const env = process.env.NODE_ENV
export const tokenPath = `${path}/xero-tokens/${env}-tokenSet.json`
