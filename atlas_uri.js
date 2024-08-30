require('dotenv').config();
DB_USERNAME=process.env.DB_USERNAME;
DB_PASSWORD=process.env.DB_PASSWORD;

module.exports = {
    uri: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.zhm2f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&tls=true`
}