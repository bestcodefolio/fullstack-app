const usersQueries = {
    getAll() {
        return `SELECT * FROM users`;
    },
    getOne(id) {
        return `SELECT user_name FROM users WHERE user_id = ${id}`;
    },
    add(username) {
        return `INSERT INTO users (user_name})
                VALUES ('${username}')`;
    },
    update(id, username) {
        return `UPDATE gifs
                SET user_name='${username}'
                WHERE user_id='${id}'`;
    },
    delete(id) {
        return `DELETE FROM users WHERE user_id='${id}'`;
    }
}

export default usersQueries;