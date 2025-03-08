const express = require('express');
const Article = require('./models');

const router = express.Router();

// ➕ Ajouter un article
router.post('/articles', async (req, res) => {
    try {
        const article = await Article.create(req.body);
        res.status(201).json(article);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 📋 Récupérer tous les articles
router.get('/articles', async (req, res) => {
    const articles = await Article.find();
    res.json(articles);
});

// 🔍 Récupérer un article par ID
router.get('/articles/:id', async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) return res.status(404).json({ error: "Article non trouvé" });
        res.json(article);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// ✏ Modifier un article
router.put('/articles/:id', async (req, res) => {
    try {
        const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(article);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// ❌ Supprimer un article
router.delete('/articles/:id', async (req, res) => {
    try {
        await Article.findByIdAndDelete(req.params.id);
        res.json({ message: "Article supprimé" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
