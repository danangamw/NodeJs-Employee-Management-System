const app = require('./app');
const connectDB = require('./config/connectDB');
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server running ono port ${port}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
