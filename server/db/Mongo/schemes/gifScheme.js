import mongoose from 'mongoose';
const gifScheme = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    user: {
        _id: mongoose.Schema.Types.ObjectId,
        name: {
            type: String,
            required: true
        }
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    src: {
        type: String,
        required: true
    }
});

const Gif = mongoose.model('Gif', gifScheme);

export default Gif;