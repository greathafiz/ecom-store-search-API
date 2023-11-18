const connectDB = require('./db/connect')
const Product = require('./models/Product')

const jsonProducts = require('./products.json')

const start = async () => {
    try {
        await connectDB()
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log('Products added to DB successfully');
        process.exit()
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}

start()

