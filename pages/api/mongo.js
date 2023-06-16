import { MongoClient } from 'mongodb';

export default async function MongoDB(_req, res) {
  try {
    const mongoClient = new MongoClient(process.env.MONGODB_CONNECTIONSTR);
    const product = mongoClient.db('Products');
    const cigarette = await product.collection('Cigarette').find().toArray();

    res.json(cigarette);
  } catch (e) {
    console.error(e);
  }
}
