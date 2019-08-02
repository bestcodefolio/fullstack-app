import createQuery from '../SQL/createQuery'
import gifsQueries from '../SQL/queries/gifsQueries'

const gifsDAO = {
    getOne(id) {
        return createQuery(gifsQueries.getOne(id))
                .then(result => result.recordset);
    },
    getAll(query, limit) {
        return createQuery(gifsQueries.getAll(query, limit))
                .then(result => result.recordset);
    },
    add(id, title, description, publicationDate) {
        return createQuery(gifsQueries.add(id, title, description, publicationDate));
    },
    update(id, title, description) {
        return createQuery(gifsQueries.update(id, title, description));
    },
    delete(id) {
        return createQuery(gifsQueries.delete(id));
    }
}

export default gifsDAO;