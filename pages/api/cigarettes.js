import { MongoClient, ObjectId } from 'mongodb';

export default async function MongoDB(req, res) {
  const mongoClient = new MongoClient(process.env.MONGODB_CONNECTIONSTR);
  const product = mongoClient.db('Products');
  let cigarettes = product.collection('Cigarette');
  if (req.method === 'POST') {
    cigarettes.insertOne(req.body);
    res.status(200).json({ message: 'Post Completed' });
    mongoClient.close;
  } else if (req.method === 'DELETE') {
    try {
      cigarettes.deleteOne({ _id: new ObjectId(req.query.id.toString()) });
      res.status(200).json({ message: 'Delete Completed' });
      mongoClient.close;
    } catch (e) {
      throw e;
    }
  } else if (req.method === 'PUT') {
    cigarettes.updateOne(
      { _id: new ObjectId(req.query.id.toString()) },
      { $set: req.body }
    );

    res.status(200).json({ message: 'Update Completed' });
    mongoClient.close;
  } else {
    cigarettes = await product.collection('Cigarette').find().toArray();
    res.json(cigarettes);
    mongoClient.close;
  }
}
