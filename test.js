// Express Routing

const PORT = 80;
let express = require('express'),



    app = express()
bodyPaser = require('body-parser')
cookieParser = require('cookie-parser')
session = require('express-session')



app.use(express.static('./public'))
app.use(cookieParser('foobar'))
app.use(session({
    secret: 'Jan',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
}))



let urlencodedParser = bodyPaser.urlencoded({ extended: false });

let sess;

app.use((req, res, next) => {

     sess = req.session
    sess = (sess.views) ? ++sess.views : 1
    console.log(sess.views)
    next()

})

app.get('/getViews', (req, res) => {

    res.send('This page is Loaded :  ' + req.session.views)

})

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


