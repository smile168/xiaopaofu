import { MongoClient, ObjectId } from 'mongodb';

export default async function paymentsHandler(req, res) {
  const mongoClient = new MongoClient(process.env.MONGODB_CONNECTIONSTR);
  const paymentsDb = mongoClient.db('Products').collection('Payments');
  const payments = await paymentsDb.find().toArray();
  mongoClient.close();
  res.status(200).json(payments);
}
