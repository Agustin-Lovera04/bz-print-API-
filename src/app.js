import express from 'express';
import __dirname from './utils.js'
import { router as viewsRouter} from './routes/viewsRouter.js';
import {engine} from 'express-handlebars'
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'))
        
//Handlebars configuracion
app.engine('handlebars', engine({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))
app.set('view engine', 'handlebars')//setea el motor de vistas
app.set('views',  __dirname + '/views')//donde se encontraran las vistas


app.use('/', viewsRouter)


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
