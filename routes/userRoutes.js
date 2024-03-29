const express = require("express");
const router = express.Router();
const { registerUser, loginUser, updateUser, deleteUser, getMe, getOther, getManagers, getEmployees, follow, getAllUsers, signupUser } = require('../controllers/userController')
const { protect, leaderProtect, managerProtect } = require('../middlewares/authMiddleware')
const { uploadProfile } = require('../middlewares/uploadMiddleware')

// http://localhost:9000/api/users

router.route('/').post( registerUser).get(protect, getAllUsers)  //uploadProfile.single('profilePicture'),
router.post('/login', loginUser )
router.post('/signup', signupUser )
router.get('/me', protect, getMe )
router.get('/managers', protect, getManagers)
router.get('/employees', protect, getEmployees)
router.route('/:id').delete(leaderProtect, deleteUser).put(protect, updateUser).get(protect, getOther) //uploadProfile.single('profilePicture'),
router.put('/follow/:id', protect, follow)

module.exports = router;
