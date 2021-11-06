import mongoose from 'mongoose';
//schema (scheme of data)
const whatsappSchema= mongoose.Schema({
    message: String,
    name: String,
    timeStamp: String,
    received: Boolean,
})
//collection
export default mongoose.model('messagecontents',whatsappSchema);