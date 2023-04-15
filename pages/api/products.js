import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export default async function productsHandler(req, res) {
  const client = new S3Client({
    region: process.env.AWS_S3_REGION,
    accessKeyId: process.env.AWS_S3_ACCESSKEYID,
    secretAccessKey: process.env.AWS_S3_SECRETACCESSKEY,
  });
  const command = new GetObjectCommand({
    Key: 'venmo.jpg',
    Bucket: 'xiaopaofu',
  });
  let url;
  try {
    url = await getSignedUrl(client, command, { expiresIn: 3600 });
  } catch (error) {
    console.log(`'ERRER HERE' + error`);
  }
  res.status(200).json(url);
}
