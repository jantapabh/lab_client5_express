// Express Routing

const PORT = 80;
let express = require('express'),



    app = express()
    app.use( () => console.log('app.use()'))

    app.use('/use', () => console.log('Use'))

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


     