const mongoose = require('mongoose');

// MongoDB Atlas connection string
const dbURI = 'mongodb+srv://jdruiz365:London-17@cluster0.rwrji.mongodb.net/your-database-name?retryWrites=true&w=majority';

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connect to MongoDB Atlas
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas!');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    process.exit(1);  // Exit process with failure
  }
};

module.exports = connectDB;
