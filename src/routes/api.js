import express from 'express';
import * as UserController from '../controllers/UsersController.js';
import * as TaskController from '../controllers/TaskController.js';
import AuthVerifyMiddleware from "../middleware/AuthVerifyMiddleware.js";

const router = express.Router();

router.post('/registration', UserController.registration );
router.post('/login', UserController.login );
router.post('/profileUpdate',AuthVerifyMiddleware, UserController.profileUpdate);

router.post('/createTask',AuthVerifyMiddleware, TaskController.createTask);
router.delete('/deleteTask/:id',AuthVerifyMiddleware, TaskController.deleteTask);
router.get('/updateTask/:id/:status',AuthVerifyMiddleware, TaskController.updateTask);
router.get('/listTaskByStatus/:status',AuthVerifyMiddleware, TaskController.listTaskByStatus);
router.get('/taskStatusCount',AuthVerifyMiddleware, TaskController.taskStatusCount);


export default router;