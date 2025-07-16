const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");
//CREATE INVENTORY
const createInventoryController = async(req,res) => {
    try{
        const {email,inventoryType} = req.body
       //validation
       const user = await userModel.findOne({email})
       if(!user) {
        throw new Error('User Not Found')
       }
       if(inventoryType === 'in' && user.role !== 'admin') {
        throw new Error('Not Valid Role')
       }
       if(inventoryType === 'out' && user.role !== 'admin') {
        throw new Error('Not Valid Role')
       }
       //Save Inventory
       const inventory = new inventoryModel(req.body)
       await inventory.save()
       return res.status(201).send({
        success:true,
        message:'New Blood Record Added'
       })
    } catch(error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message: 'Error in Create Inventory API',
            error
        })
    }
};

//GET ALL BLOOD RECORDS
const getInventoryController = async(req,res) => {
    try{
        const inventory = await inventoryModel.find({})
        return res.status(200).send({
            success:true,
            message:'Get All Records Successfully',
            inventory,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Error in get all inventory',
            error,
        })
    }
}

module.exports = {createInventoryController, getInventoryController};