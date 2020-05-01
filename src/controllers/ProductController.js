const mongoose = require("mongoose");

const Product = mongoose.model('Product');

module.exports = {
    //Listar todos os produtos
    async index(req, res) {
        const { page } = req.query;
        const products = await Product.paginate({}, { page, limit: 5 });

        return res.json(products);
    },

    //Criação
    async store(req, res) {
        const product = await Product.create(req.body);
        return res.json(product);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(product);
    },

    async delete(req, res) {
        const product = await Product.findByIdAndDelete(req.params.id);
        return res.json(product);
    },
};