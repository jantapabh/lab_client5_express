// Express Routing

const PORT = 80;
let express = require('express'),



    app = express()
app.use((req, res, next) => {

    console.log('app.use()')
    next()

})

app.use('/use', (req, res, next) => {

    console.log('app.use()')

    next()
})

app.get('/', (req, res) => {

    res.send('Hello World')



})

app.get('/foo', (req, res) => {

    res.send('Foo Hello')


})



app.listen(80, () => {

    console.log('Server is runnig at: ', PORT)


}
)


