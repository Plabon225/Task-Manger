import mongoose from 'mongoose';

const DataSchema = new mongoose.Schema({
    email: { type: String, unique: true},
    firstName: { type: String},
    lastName: { type: String},
    mobile: { type: String},
    password: { type: String},
    photo: { type: String},
    createdDate: { type: Date, default: Date.now },
},{versionKey:false});

const UserModel = mongoose.model('Users', DataSchema);
export default UserModel;