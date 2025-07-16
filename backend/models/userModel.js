const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    role:{
        type:String,
        required:[true,'role is required'],
        enum:['admin','donor','recipient']
    },
    verified: {
    type: Boolean,
    default: true
  },
    name:{
        type:String,
        required: function() {
            if(this.role === 'donor' || this.role === 'recipient'){
                return true;
            }
            return false;
        }
    },
    adminName:{
        type:String,
        required: function() {
            if(this.role === 'admin'){
                return true;
            }
            return false;
        }
    },
    bloodGroup:{
        type:String,
        required: function() {
            if(this.role === 'donor'){
                return true;
            }
            return false;
        },
        enum:[ '','A+','A-','B+','B-','AB+','AB-','O+','O-']
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true
    },
    phonenumber:{
        type:String,
        required:[true,'number is required'],
    },
    address:{
        type:String,
        required:[true,'nearabout hospital is required'],
    },
    password:{
        type:String,
        required:[true,'password is required'],
    },
    bloodReportImage: {
  type: String,
  default: null,
   required: function() {
            if(this.role === 'donor'){
                return true;
            }
            return false;
        },
},
available: {
  type: Boolean,
  default: true, // or false, based on your logic
}
}, {timestamps:true});

module.exports = mongoose.model('users', userSchema);