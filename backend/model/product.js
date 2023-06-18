const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    title: String,
    price: String,
    image:String

})

const PRODUCT = mongoose.model('Product', productSchema)

module.exports = PRODUCT