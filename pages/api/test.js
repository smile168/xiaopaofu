import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export default async function testHandler(req, res) {
  const client = new S3Client({});
  const command = new GetObjectCommand({
    Key: 'zgar-pot/芭乐.jpg',
    Bucket: 'xiaopaofu',
  });
  let url;
  try {
    url = await getSignedUrl(client, command, { expiresIn: 3600 });
  } catch (error) {
    console.log(`'ERRER HERE' + ${error}`);
  }
  res.status(200).json(url);
}
