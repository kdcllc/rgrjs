import fs from 'fs';

import express from 'express';
import Schema from './data/schema';
import GraphQLHTTP from 'express-graphql';

import mongo_express from 'mongo-express/middleware'
import {MongoClient} from 'mongodb';

import mongo_express_config  from './mongo_express_config'

import {graphql} from 'graphql';
import {introspectionQuery} from 'graphql/utilities';

let app = express();

//app.use('/', (req, res) => res.send('hello from nodemon!'));

app.use(express.static('public'));
app.use('/data', mongo_express(mongo_express_config));

(async () => {
    let db = await MongoClient.connect('mongodb://localhost:27017/rgrjs');
    let schema = Schema(db);
    
     app.use('/graphql', GraphQLHTTP({
            schema,
            graphiql: true
    }));
    
     app.listen(3000, () => console.log('Listening on port 3000...'));
     
     //Generate schema.json
    //  let json = await graphql(schema, introspectionQuery);
    //  fs.writeFile('./data/schema.json', JSON.stringify(json,null,2), err => {
    //      if (err) throw err;
    //      console.log('JSON schema created');
    //  });
     
     
})();


// let db;
// 
// MongoClient.connect('mongodb://localhost:27017/rgrjs', (err,database) => {
//        if(err) throw err;
//         
//         db = database;
//         app.use('/graphql', GraphQLHTTP({
//             schema: schema(db),
//             graphiql: true
//     }));
//    app.listen(3000, () => console.log('Listening on port 3000...'));
// });

// app.get('/data/links', (req, res) => {
//       
//    db.collection('links').find({}).toArray((err, links) => {
//        if(err) throw err;
//        
//        res.json(links);
//    })
// });