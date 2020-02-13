let express = require('express')

app = express()


app.set('views', './views')

app.set('view engine', 'ejs')


app.get('/', (requestAnimationFrame, res) => {

res.render( 'fruit',{ foo : 'bar', fruit: ['apple', 'banana', 'Maongo']} )

})

app.listen(80)
