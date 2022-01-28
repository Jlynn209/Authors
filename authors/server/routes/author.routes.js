const AuthorController = require('../controllers/author.controller');

module.exports = function(app) {
    app.get("/api", AuthorController.index)
    app.get("/api/authors/", AuthorController.getAllAuthors)
    app.get("/api/authors/:id", AuthorController.getOneAuthors)
    app.post("/create/authors/", AuthorController.createAuthors)
    app.put("/api/authors/:id", AuthorController.updateAuthors)
    app.delete("/api/authors/:id", AuthorController.deleteAuthors)
}