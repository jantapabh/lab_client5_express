// 

const PORT = 80;
let express = require('express'),



    app = express()


    app.get('/', (req, res) => {

        res.send('Hello World')


    })

    app.listen(80, () => {

       console.log('Server is runnig at: ', PORT)


    }
     )