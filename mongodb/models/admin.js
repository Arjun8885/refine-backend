import mongoose from "mongoose";
const AdminSchema = new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String, required:true}
});
const AdminModal=mongoose.model('Admin',AdminSchema);
export default AdminModal;