const {Author} = require("../models/author.model")

module.exports.index = (req, res) =>{
    res.json(
        "This is a test"
    );
}

module.exports.getAllAuthors = (req, res) => {
    Author.find({})
        .then(authors => res.json(authors))
        .catch(err => res.status(400).json(err))
}

module.exports.getOneAuthors = (req, res) => {
    Author.findOne({_id:req.params.id})
        .then(authors => res.json(authors))
        .catch(err => res.status(400).json(err))
}

module.exports.createAuthors = (req, res) => {
    Author.create(req.body)
        .then(authors => res.json(authors))
        .catch(err => res.status(400).json(err))
}

module.exports.updateAuthors = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators: true})
        .then(updateAuthor => res.json(updateAuthor))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthors = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deleteAuthor => res.json(deleteAuthor))
        .catch(err => res.status(400).json(err))
}