// Express Routing

const PORT = 80;
let express = require('express'),



    app = express()
    bodyPaser = require('body-parser')
    cookieParser = require('cookie-parser')



    app.use(express.static('./public'))
    app.use( cookieParser('foobar'))


    let urlencodedParser = bodyPaser.urlencoded({ extended: false });


    app.get('/getCook', (req, res) => {

        // console.log( req.query.foo);

        res.send(' ' + req.cookies.name + ' ' + req.cookies.Surname + ' ' + req.query.foo + ' ' + req.params.name)
    })

    app.get('/setCook', (req, res) => {

        res.cookie('name', 'John')
        res.cookie('Surname', 'Bin')
        res.send('Set Cookie done! ')

    })

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


