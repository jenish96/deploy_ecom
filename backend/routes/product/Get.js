const Product = require('../../model/Product');

exports.Get = async (req, res) => {
    const result = await Product.find();
    res.send(result);
}