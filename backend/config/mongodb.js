// import mongoose from "mongoose";

// const connectDB= async () => {

//   mongoose.connection.on('connected',()=>console.log("Database connected"))
    
//   await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)
// }
// export default connectDB



import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("✅ Database connected"));

        await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`, {
            writeConcern: { w: "majority" },
        });
    } catch (error) {
        console.error("❌ Database connection error:", error);
        process.exit(1);
    }
};

export default connectDB;
