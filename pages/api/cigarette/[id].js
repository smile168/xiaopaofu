import { MongoClient, ObjectId } from 'mongodb';

export default async function Cigarette(req, res) {
  const mongoClient = new MongoClient(process.env.MONGODB_CONNECTIONSTR);
  const product = mongoClient.db('Products');
  const cigarettes = product.collection('Cigarette');
  const { id } = req.query;
  const cigarette = await cigarettes.findOne({
    _id: new ObjectId(id.toString()),
  });
  mongoClient.close;
  res.json(cigarette);
}
