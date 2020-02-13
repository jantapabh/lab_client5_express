// Express Routing

const PORT = 80;
let express = require('express'),



    app = express()
    bodyPaser = require('body-parser')
    app.use(express.static('./public'))
    let urlencodedParser = bodyPaser.urlencoded({ extended: false });

    app.post('/add', urlencodedParser, (req, res) => {

        // console.log('a: ',req.body.a)
        // console.log('a: ',req.body.b)

        let result = parseInt(req.body.a) + parseInt(req.body.b)

        res.send('Result : ' + result)

    }) 

app.listen(80, () => {

    console.log('Server is runnig at: ', PORT)


}
)


