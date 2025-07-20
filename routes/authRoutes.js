const express = require('express');
const { registerController, loginController, currentUserController } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const upload = require('../middlewares/upload');
// const { updateDonorProfileController } = require('../controllers/donorController');

const router = express.Router()

//routes
//REGISTER || POST
router.post('/register', upload.single('bloodReportImage'), registerController);

//LOGIN || POST
router.post('/login', loginController);

//GET CURRENT USER || GET
router.get('/current-user', authMiddleware, currentUserController);

// router.put('/update-profile', authMiddleware, updateDonorProfileController);


module.exports = router;