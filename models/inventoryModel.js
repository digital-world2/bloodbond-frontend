const mongoose = require('mongoose');
const inventorySchema = new mongoose.Schema({
    inventoryType:{
        type:String,
        required:[true,'Inventory Type Required'],
        enum:['in','out']
    },
    bloodGroup:{
        type:String,
        required:[true, 'Blood Group is required'],
        enum:['A+','A-','B+','B-','AB+','AB-','O+','O-']
    },
    quantity:{
        type:Number,
        required:[true, 'Quantity is Required']
    },
    admin:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: function () {
            return this.inventoryType === "in";
        },
    },
}, {timestamps: true} );

module.exports = mongoose.model('Inventory', inventorySchema)