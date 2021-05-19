import app from './server.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'
import RestaurantsDAO from './dao/restaurantsDAO.js'
import ReviewsDAO from './dao/reviewsDAO.js'

dotenv.config()

const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 5000

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        poolSize:50,
        wtimeout:2500
    }
)
.then( async client=>{
    console.log('MongoDB connected ..')
    await RestaurantsDAO.injectDB(client)
    await ReviewsDAO.injectDB(client)
    app.listen(port, console.log(`Listening on port ${port} ..`))
})
.catch(err=>{
    console.error(err.stack,err.message)
    process.exit(1)
})