const my_express=require('express')
const my_path=require('path')
const insertRouter = require('./routers/insert1')
const loginRouter = require('./routers/loginRouter')
const t = require('./t')
const my_cors=require('cors')


const app=my_express();
app.use(my_cors())

// app.set('views', my_path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(my_express.json())
app.use(my_express.urlencoded({ extended: false }));
app.use('/', insertRouter);
app.use('/l', loginRouter);
app.use('/r', t);
           
app.listen(4001, ()=>{
    console.log('4001');
})