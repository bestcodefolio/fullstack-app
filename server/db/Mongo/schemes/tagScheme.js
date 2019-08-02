import mongoose from 'mongoose';
const tagScheme = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    gifs: Array
})

const Tag = mongoose.model('Tag', tagScheme);

export default Tag;