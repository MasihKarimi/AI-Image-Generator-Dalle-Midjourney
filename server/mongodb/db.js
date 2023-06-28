// import mongoose from 'mongoose';


// const  connectDB = async () => {
//     mongoose.set('strictQuery', true);

//     const connect = await mongoose.connect(process.env.MONGO_URL)
//     .then(() => console.log("MongoDB connected!"))
//     .catch((err) => console.log(err))
// }
// export default connectDB;


 import mongoose from 'mongoose'



const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected successfully on host : ${connect.connection.host}`);
    } catch (error) {
        console.log(`Error occurred while connecting to the database ${error.message}`);
         console.log(process.env.MONGO_URL)
    }
}

export default connectDB;