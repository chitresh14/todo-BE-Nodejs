export const envConfig = {
    port: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/todo'
}