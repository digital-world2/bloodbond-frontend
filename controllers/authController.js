const userModel = require("../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerController = async (req, res) => {
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: 'User Already Exists',
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const userData = {
      ...req.body,
      password: hashedPassword,
      bloodReportImage: req.file ? req.file.filename : null,
    };

    const user = new userModel(userData);
    await user.save();


    return res.status(201).send({
      success: true,
      message: 'User Registered Successfully',
      user,
    });
  } catch (error) {
    console.log("Register Error:", error);
    res.status(500).send({
      success: false,
      message: 'Error in Register API',
      error,
    });
  }
};


//login call back
const loginController = async (req,res) =>{
    try {
        const user = await userModel.findOne({email:req.body.email})
        if(!user){
            return res.status(404).send({
                success:false,
                message: "Invalid Credentials",
            })
        }
        //CHECK ROLE
        if(user.role !== req.body.role){
            return res.status(500).send({
                success:false,
                message:'Role Doesnt Match'
            })
        }

        // ✅ Check if user is verified
    // if (user.role === 'donor' && user.verified === false) {
    //   return res.status(403).send({
    //     success: false,
    //     message: "Your profile has been marked unverified by admin"
    //   });
    // }
        //compare password
        const comparePassword = await bcrypt.compare(req.body.password, user.password)
        if(!comparePassword){
            return res.status(500).send({
                success:false,
                message: "Invalid Credentials",
            })
        }
        const token = jwt.sign({userId:user._id },process.env.JWT_SECRET, {expiresIn:'1d'})
        return res.status(200).send({
            success:true,
            message: "Login Successfully",
            token,
            user,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message: "Error in Login API",
            error
        })
    }
};

//GET CURRENT USER
const currentUserController = async(req,res) => {
    try{
        const user =  await userModel.findOne({_id:req.body.userId})
        return res.status(200).send({
            success:true,
            message: 'User Fetched Successfully',
            user,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: 'Unable to get User',
            error,
        })
    }
};



module.exports = { registerController, loginController, currentUserController};

