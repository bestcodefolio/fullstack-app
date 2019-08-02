const caseChanger = data => {
    return data.map(item => {
        const changedItem = item;
        for (const key in changedItem) {
            const keyLower = key.substring(key.indexOf('_') + 1, key.length);
            if (keyLower !== key) {
                const temp = changedItem[key];
                delete changedItem[key];
                changedItem[keyLower] = temp;
            }
        }
        return changedItem;
    })
}

export default caseChanger;

