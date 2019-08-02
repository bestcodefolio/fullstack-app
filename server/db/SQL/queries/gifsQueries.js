const GIFS_COLUMNS = 'gif_title, gif_description, gif_publicationdate, gif_src';

const gifsQueries = {
    getAll(query, limit) {
        return `SELECT TOP ${limit} g.gif_id, ${GIFS_COLUMNS}
                FROM gifs g
                JOIN gifs_tags gt ON g.gif_id=gt.gif_id
                WHERE tag_id=(SELECT tag_id FROM tags WHERE tag_title='${query}')`;
    },
    getOne(id) {
        return `SELECT gif_id, ${GIFS_COLUMNS} FROM gifs
                WHERE gif_id='${id}'`
    },
    add(id, title, description, publicationdate) {
        return `INSERT INTO gifs (gif_id, user_id, ${GIFS_COLUMNS})
                VALUES ('${id}', 1, '${title}', '${description}', '${publicationdate}', '/files/${id}.gif')`
    },
    update(id, title, description) {
        return `UPDATE gifs
                SET gif_title='${title}', gif_description='${description}'
                WHERE gif_id='${id}'`
    },
    delete(id) {
        return `DELETE FROM gifs_tags WHERE gif_id='${id}'
                DELETE FROM gifs WHERE gif_id='${id}'`
    }
}

export default gifsQueries;