import { Mongo } from 'meteor/mongo';

export const Books = new Mongo.Collection('books');

if (Meteor.isServer){
  Meteor.publish('books', function booksPublication() {
    return Books.find({}, {limit: 3});
  });
}

