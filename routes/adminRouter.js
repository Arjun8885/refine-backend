import express from 'express'; 
import { createAdmin } from '../controllers/adminController.js';
const router = express.Router();
router.route('/').post(createAdmin);


export default router;
