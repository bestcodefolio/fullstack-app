const tagsQueries = {
    saveTags(tags) {
        return tags.map(tag => `INSERT INTO tags (tag_title) VALUES ('${tag}')`).join(' ');
    },
    saveGifsTags(id, tags) {
        return tags.map(tag => {
                return `INSERT INTO gifs_tags (gif_id, tag_id) VALUES ('${id}', 
                (SELECT tag_id FROM tags WHERE tag_title='${tag}'))`;
            }).join(' '); 
    }
}

export default tagsQueries;