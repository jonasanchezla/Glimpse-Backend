import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express(); 


app.use(cors())
app.use(bodyParser.json({limit: '30mb', extended :true }))
app.use(bodyParser.urlencoded({limit: '30mb', extended :true }))


app.use('/posts', postRoutes)

app.get('/', (req, res) => {
    res.send('App is running!!!')
})

const CONNECTION_URL= "mongodb+srv://glimpse123:glimpse123@glimpse.5zhiu9h.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`))).catch((error) => console.log(error.message))

