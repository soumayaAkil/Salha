const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ports = process.env.PORT || 3000;
const femmeRoutes = require('./routes/femme');
const gouvRoutes = require('./routes/gouvernorat');
const produitRoutes = require('./routes/produit');
const uniteRoutes = require('./routes/unite');
const errorController = require('./controllers/error')

const productionRoutes = require('./routes/prodRoutes');




app.use(bodyParser.json());
app.use((req, res, next) => {
res.setHeader('Access-Control-Allow-Origin','*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST ,PUT , DELETE');
res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
next();
});
app.use('/femmes',femmeRoutes);
app.use('/gouvernorat',gouvRoutes);
app.use('/produit',produitRoutes);
app.use('/unite',uniteRoutes);

app.use('/prod',productionRoutes);



app.use('/uploads',express.static('./images'));




app.use(errorController.get404);
app.use(errorController.get500);
app.listen(ports, () => console.log('listenning on port '+ ports));


