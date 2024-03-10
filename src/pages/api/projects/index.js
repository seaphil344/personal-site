import { MongoClient } from 'mongodb';

export default async function handler(req, res) {

  const client = await MongoClient.connect(process.env.MONGODB_URI, { });
  const db = client.db('test'); // Make sure to replace 'test' with your actual database name

  switch (req.method) {
    case 'GET':
      try {
        const projects = await db.collection('projects').find().toArray();

        if (!projects.length) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: projects });
      } catch (error) {
        console.error(error);  // Log the error to console for debugging
        res.status(400).json({ success: false });
      } finally {
        client.close();  // Close the MongoDB connection
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
