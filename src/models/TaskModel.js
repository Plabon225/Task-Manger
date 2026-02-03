import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    status: {type: String},
    email: {type: String},
    createdDate: {type: Date, default: Date.now},
}, {versionKey: false});
const TaskModel = mongoose.model('Task', TaskSchema);
export default TaskModel;