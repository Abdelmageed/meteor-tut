import { Mongo } from 'meteor/mongo';

export const Books = new Mongo.Collection('books');

if (Meteor.isServer){
  Meteor.publish('books', function booksPublication() {
    return Books.find({userId: this.userId});
  });
}

Meteor.methods({
  addBook: (data)=> {
    if (!this.userId)
      return;
    data.userId = this.userId;
    return Books.insert(data)
  }
})