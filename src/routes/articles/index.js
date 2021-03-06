
import { delArticle, getArticles, id, postArticle, schemaArticles, schemaPost } from "./articles.js";

export async function articleRoute(app) {
    app.get('/articles', getArticles);
    app.get('/articles/:id', { schema: schemaArticles }, id);
    app.post('/articles', { schema: schemaPost }, postArticle);
    app.delete('/articles/:id', { schema: schemaArticles }, delArticle);
}