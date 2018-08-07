import express from 'express'
import bodyParser from 'body-parser'

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))

app.get('/test', (req, res) => {
    console.log('/test')
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log('listening on port: ', port)
});



