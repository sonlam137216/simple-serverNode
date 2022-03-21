import app from './server.js';
import mongodb from 'mongodb';
import dotenv from 'dotenv';
import MoviesDAO from './DAO/movieDAO.js'


async function main() {
  dotenv.config();
  const client = new mongodb.MongoClient(process.env.MONGODB_URI);
  const port = process.env.PORT || 8000;

  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log('MongoDB connected');
    await MoviesDAO.injectDB(client);
    app.listen(port, () => {
      console.log('Server is running on port: ' + port);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}
main().catch(console.error);
