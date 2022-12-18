const express = require("express");
const router = express.Router();
const { registerUser, loginUser, updateUser, deleteUser, getMe, getOther, getManagers, getEmployees, follow, getAllUsers } = require('../controllers/userController')
const { protect, leaderProtect, managerProtect } = require('../middlewares/authMiddleware')
const { uploadProfile } = require('../middlewares/uploadMiddleware')

// http://localhost:9000/api/users

router.route('/').post(leaderProtect, registerUser).get(protect, getAllUsers)  //uploadProfile.single('profilePicture'),
router.post('/login', loginUser )
router.get('/me', protect, getMe )
router.get('/managers', protect, getManagers)
router.get('/employees', protect, getEmployees)
router.route('/:id').delete(leaderProtect, deleteUser).put( updateUser).get(protect, getOther) //uploadProfile.single('profilePicture'),
router.put('/follow/:id', protect, follow)

module.exports = router;
