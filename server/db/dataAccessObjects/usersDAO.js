import createQuery from '../SQL/createQuery';
import usersQueries from '../SQL/queries/usersQueries';

const usersDAO = {
    getOne(id) {
        return createQuery(usersQueries.getOne(id))
                .then(result => result.recordset);
    },
    getAll() {
        return createQuery(usersQueries.getAll())
                .then(result => result.recordset);
    },
    add(username) {
        return createQuery(usersQueries.saveUser(username));
    },
    update(id, username) {
        return createQuery(usersQueries.update(id, username));
    },
    delete(id) {
        return createQuery(usersQueries.delete(id));
    }
}

export default usersDAO;