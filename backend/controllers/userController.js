import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import {v2 as cloudinary} from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentModel.js";

//API for user register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing Details" });
    }
    //validating the email
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Missing Details" });
    }
    //validating the password
    if (password.length < 8) {
      return res.json({ success: false, message: "Enter a strong password" });
    }

    //hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedpassword,
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid Credentials" });
    }
  } catch {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API to get user profile data

const getProfile = async (req, res) => {
  try {
    const userId = req.userId;

    const userData = await userModel.findById(userId).select("-password");

    res.json({ success: true, userData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// //API to update user profile data

// const updateProfile = async (req, res) => {
//   try {
//     const { userId, name, phone, address, dob, gender } = req.body;
//     const imageFile = req.file;

//     if (!name || !phone || !dob || !gender) {
//       return res.json({ success: false, message: "Missing Details" });
//     }
//     await userModel.findByIdAndUpdate(userId, {
//       name,
//       phone,
//       address: JSON.parse(address),
//       dob,
//       gender,
//     });

//     if(imageFile){
//       //upload image to cloudinary
//       const imageUpload=await cloudinary.uploader.upload(imageFile.path, {
//         resource_type: "image",
//     })
//     const imageUrl = imageUpload.secure_url;

//       await userModel.findByIdAndUpdate(userId,{image:imageUrl})
//   }

//   res.json({ success: true, message: "Profile updated successfully" });


//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

const updateProfile = async (req, res) => {
  try {
    const userId = req.userId; // ✅ use userId from auth middleware
    const { name, phone, address, dob, gender } = req.body;
    const imageFile = req.file;

    if (!name || !phone || !dob || !gender) {
      return res.json({ success: false, message: "Missing Details" });
    }

    const parsedAddress = typeof address === "string" ? JSON.parse(address) : address;

    const updateData = {
      name,
      phone,
      address: parsedAddress,
      dob,
      gender,
    };

    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      updateData.image = imageUpload.secure_url;
    }

    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, runValidators: true }
    ).select("-password");

    res.json({ success: true, message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API to book appointment
 const bookAppointment=async(req,res)=>{
  try {
   const {
    docId,
    slotDate,
    slotTime
  }=req.body

  const userId = req.userId; 
   
   const docData=await doctorModel.findById(docId).select('-password')

   if(!docData.available){
    return res.json({success:false,message:'Doctor not available'})
   }

   let slots_booked =docData.slots_booked

   //checking for slot availability

   if(slots_booked[slotDate]){
    if(slots_booked[slotDate].includes(slotTime)){
      return res.json({success:false,message:'Slot not available'})
    }
    else{
      slots_booked[slotDate].push(slotTime)
    }
   }else{
    slots_booked[slotDate]=[]
    slots_booked[slotDate].push(slotTime)
   }

  //  const userData=await userModel.findById(userId).select('-password')

  const userData = await userModel.findById(userId).select('name email phone');

  delete docData.slots_booked

  const appointmentData={
    userId,
    docId,
      userdata: {                      
        name: userData.name,
        email: userData.email,
        phone: userData.phone
    },
       docData: {                       
        name: docData.name,
        speciality: docData.speciality
    },
    amount:docData.fees,
    slotTime,
    slotDate,
    date:Date.now()
  }

  const newAppointment=new appointmentModel(appointmentData)
  await newAppointment.save()

  //save new slots data in docData
  await doctorModel.findByIdAndUpdate(docId,{slots_booked})

  res.json({success:true,message:'appointment Booked'})

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
 }

export { registerUser, loginUser, getProfile ,updateProfile,bookAppointment};
