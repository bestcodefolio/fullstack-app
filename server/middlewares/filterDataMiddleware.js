const filterData = (data, params) => {
    return data.map(item => {
        const changedItem = item;
        for (const key in changedItem) {
            if (!params.includes(key)) {
                delete changedItem[key];
            }
        }
        return changedItem;
    })
}

export default filterData;