// A helper function to assert the request ID param is valid
// and convert it to a number (since it comes as a string by default)
function getIdParam(req) {
    const id = req.params.id;
    if (/^\d+$/.test(id)) {
        return Number.parseInt(id, 10);
    }
    throw new TypeError(`Invalid ':id' param: "${id}"`);
}
// Helper function to determine the limit and page amount for limiting amount of data
// for the front-end
const getPagination = (page, size) => {
    const limit = size ? +size : 25;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

// Helper function to determine the limit and page amount for limiting amount of data
// for the front-end
const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: monsters } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil((totalItems/200) / limit);

    return { totalItems, monsters, totalPages, currentPage };
};



module.exports = { getIdParam , getPagination, getPagingData};