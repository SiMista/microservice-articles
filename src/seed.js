require('dotenv').config();
const mongoose = require('mongoose');
const Article = require('./models');

mongoose.connect(process.env.MONGO_URI, {}).then(() => console.log('✅ Connecté à MongoDB'))
  .catch(err => console.error('❌ Erreur MongoDB :', err));

const articles = [
    { title: "Introduction à Node.js", content: "Node.js est un runtime JavaScript...", author: "Alice" },
    { title: "MongoDB pour les débutants", content: "MongoDB est une base de données NoSQL...", author: "Bob" },
    { title: "Les promesses en JavaScript", content: "Les promesses permettent de gérer l'asynchronisme...", author: "Charlie" },
    { title: "Comment utiliser Express.js", content: "Express.js est un framework minimaliste...", author: "David" },
    { title: "REST vs GraphQL", content: "Les API REST et GraphQL sont souvent comparées...", author: "Emma" }
];

const seedDB = async () => {
    try {
        await Article.deleteMany(); // Supprime les anciens articles
        await Article.insertMany(articles); // Insère les nouveaux
        console.log("✅ Données insérées avec succès !");
    } catch (err) {
        console.error("❌ Erreur lors de l’insertion :", err);
    } finally {
        mongoose.connection.close();
    }
};

seedDB();
