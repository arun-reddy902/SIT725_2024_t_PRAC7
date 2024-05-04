let model = require('../cats/cats');
const insertCat = async function(req, res) {
    let cat = req.body;
    return model.insertCat(cat);
}
const getAllCats = async function(req, res) {
    return model.getAllCats();
}
module.exports = {insertCat, getAllCats}