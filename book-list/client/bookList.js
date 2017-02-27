import { Template } from 'meteor/templating';
import { Books } from '../imports/api/books.js';
import './main.html';

Template.bookList.onCreated(function bookListOnCreated() {
  Meteor.subscribe('books');
});

Template.bookList.helpers({
  books() {
    return Books.find({});
  }
});

//Template.bookList.events({
//  'click button'(event, instance) {
//    // increment the counter when button is clicked
//    instance.counter.set(instance.counter.get() + 1);
//  },
//});
