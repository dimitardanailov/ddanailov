/**
 * @format
 */
import S3 from 'aws-sdk/clients/s3'
import fs from 'fs'

const bucketName = 'xero-config.propine.com'
const env = process.env.NODE_ENV || ''
const fileName = env + '-token.json'
const region = 'ap-southeast-1'
const accessKeyId = process.env.XERO_AWS_ACCESS_KEY_ID || ''
const secretAccessKey = process.env.XERO_AWS_SECRET_KEY || ''

function init() {
  const s3 = new S3({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  })

  return s3
}

function downloadToken(): Promise<string> {
  const downloadParams = {
    Key: fileName,
    Bucket: bucketName,
  }

  const s3 = init()

  const promise: Promise<string> = new Promise<string>(resolve => {
    s3.getObject(downloadParams, function (_, data) {
      const bucketData: string = data.Body?.toString('utf-8') || ''

      resolve(bucketData)
    })
  })

  return promise
}

function uploadFile(path: string) {
  const fileContent = fs.readFileSync(path)
  // console.log(fileStream)

  const uploadParams = {
    Bucket: bucketName,
    Body: fileContent,
    Key: fileName,
  }

  const s3 = init()

  return s3.upload(uploadParams).promise()
}

export {uploadFile, downloadToken}
