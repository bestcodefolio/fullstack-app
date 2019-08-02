import mongoose from 'mongoose';
const userScheme = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        default: 'admin'
    }
});

const User = mongoose.model('User', userScheme);

export default User;