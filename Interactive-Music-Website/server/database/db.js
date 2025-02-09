
import mongoose from 'mongoose';

const Connection = async () => {
    const URL = `MongoDb Connection string`;

    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
