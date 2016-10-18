/**
 * add additional property to each row object
 */
export const formatResults = (data) => {
    if (!Array.isArray(data)) {
        return;
    }

    return data.map(obj => {
        obj.edit = obj.guid;
        obj.delete = obj.guid;
        return obj;
    })
};