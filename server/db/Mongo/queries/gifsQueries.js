import Gif from '../schemes/gifScheme';
import Tag from '../schemes/tagScheme';
import mongoose, { mongo } from 'mongoose';

mongoose.connect('mongodb://localhost:27017/gifsdb', { useNewUrlParser: true });

const gif = new Gif({
    _id: new mongoose.Types.ObjectId(),
    title: 'hey man gif',
    user: { name: 'admin' },
    description: 'hey hi',
    src: '/files/hello'
})

gif.save()
    .then(doc => {
        console.log(doc);
        mongoose.disconnect();
    })
    .catch(err => {
        console.error(err);
        mongoose.disconnect();
    })

const gifsQueries = {
    getAll(query, limit) {
        Tag.find( {title: title} )
            .then(gifs => {
                return gifs.map(gif => Gif.findById(gif));
            })
            .catch(err => {
                console.error(err);
                mongoose.disconnect();
            })
    },
    getOne(id) {
        return Gif.findById(id)
                    .then(doc => {
                        console.log(doc);
                        mongoose.disconnect();
                    })
                    .catch(err => {
                        console.error(err);
                        mongoose.disconnect();
                    })
    },
    add(id, title, description, src) {
        const gif = new Gif({
            _id: id,
            user: { name : 'admin' },
            title: title,
            description: description,
            src: src
        })
        return gif.save()
                .then(doc => {
                    console.log(doc);
                    mongoose.disconnect();
                })
                .catch(err => {
                    console.error(err);
                    mongoose.disconnect();
                })
    },
    update(id, title, description) {
    },
    delete(id) {
        
    }
}

export default gifsQueries;