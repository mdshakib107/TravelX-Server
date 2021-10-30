const express = require('express')
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();
const cors = require('cors');

const app = express()
const port = process.env.PORT || 5000;

//Midelewere
app.use(cors());
app.use(express.json());
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ns2tb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


async function run() {
    try {
        await client.connect();
        const database = client.db('allPackages');
        const packageCollection = database.collection('packages');
        const ordersCollection = database.collection("orders");
        // GET API
        app.get('/package', async (req, res) => {
            const cursor = packageCollection.find({});
            const package = await cursor.toArray();
            res.send(package);
        });

        // GET Single Service
        app.get('/singlePackage/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const package = await packageCollection.findOne(query);
            res.json(package);
        })

        // POST PACKAGE API
        app.post('/package', async (req, res) => {
            const package = req.body;
            const result = await packageCollection.insertOne(package);
            res.json(result)
        });
        // POST PLACE ORDER API
        app.post('/placeorder', async (req, res) => {
            const order = req.body;
            const result = await ordersCollection.insertOne(order);
            res.json(result)
        });
        // GET PLACE ORDER API
        app.get("/myOrders/:email", async (req, res) => {

            const email = req.params.email;
            const query = { userEmail: email };
            const package = await ordersCollection.find(query).toArray();
            res.json(package);
        });



        // DELETE API
        app.delete('/deleteProduct/:id', async (req, res) => {
            const id = req.params.id;
            // console.log(id)
            const query = { _id: ObjectId(id) };
            const result = await ordersCollection.deleteOne(query);
            console.log(result)
            res.json(result);

        })

    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})