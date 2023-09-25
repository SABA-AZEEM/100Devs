import express from 'express';
//create an instance of express router
const router=express.Router()
import homeController from '../controllers/home.js';

router.get('/',homeController.getIndex);

export default router;

