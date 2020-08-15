import * as functions from 'firebase-functions'
import server from './server'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const app = functions.https.onRequest(server)
