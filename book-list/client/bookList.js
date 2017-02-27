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

Template.bookList.events({
  'submit .add-book'(event, instance) {
    event.preventDefault();
    Meteor.call('addBook', {
      title: event.target.title.value,
      author: event.target.author.value});
  },
});
