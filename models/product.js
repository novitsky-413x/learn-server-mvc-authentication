const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

module.exports = mongoose.model('Product', productSchema);

// const mongodb = require('mongodb');
// const getDb = require('../util/database').getDb;

// class Product {
//     constructor(title, description, price, imageUrl, id, userId) {
//         this.title = title;
//         this.description = description;
//         this.price = price;
//         this.imageUrl = imageUrl;
//         this._id = id ? mongodb.ObjectId.createFromHexString(id) : null;
//         this.userId = userId;
//     }

//     save() {
//         const db = getDb();
//         let dbOp;
//         if (this._id) {
//             // Update the product
//             console.log('test', this._id);
//             dbOp = db.collection('products').updateOne({ _id: this._id }, { $set: this });
//         } else {
//             // Create a new product
//             dbOp = db.collection('products').insertOne(this);
//         }
//         return dbOp
//             .then((result) => {
//                 console.log(result);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }

//     static fetchAll() {
//         const db = getDb();
//         return db
//             .collection('products')
//             .find()
//             .toArray()
//             .then((products) => {
//                 console.log(products);
//                 return products;
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }

//     static findById(prodId) {
//         const db = getDb();
//         return db
//             .collection('products')
//             .find({ _id: mongodb.ObjectId.createFromHexString(prodId) })
//             .next()
//             .then((product) => {
//                 console.log(product);
//                 return product;
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }

//     static deleteById(prodId) {
//         const db = getDb();
//         return db
//             .collection('products')
//             .deleteOne({ _id: mongodb.ObjectId.createFromHexString(prodId) })
//             .then((result) => {
//                 console.log('Deleted');
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }
// }

// module.exports = Product;
