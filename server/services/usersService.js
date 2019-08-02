import usersDAO from '../db/dataAccessObjects/usersDAO';

const usersService = {
    getOne(id) {
        return usersDAO.getOne(id);
    },
    getAll() {
        return usersDAO.getAll();
    },
    add(username) {
        return usersDAO.add(username);
    },
    update(id, username){
        return usersDAO.update(id, username);
    },
    delete(id) {
        return usersDAO.delete(id);
    }
}

export default usersService;