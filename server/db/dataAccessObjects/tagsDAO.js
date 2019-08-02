import createQuery from '../SQL/createQuery'
import tagsQueries from '../SQL/queries/tagsQueries'

const tagsDAO = {
    saveTags(tags) {
        createQuery(tagsQueries.saveTags(tags));
    },
    saveGifsTags(id, tags) {
        createQuery(tagsQueries.saveGifsTags(id, tags));
    }
}

export default tagsDAO;