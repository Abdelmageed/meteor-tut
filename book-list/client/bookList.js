import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Books } from '../imports/api/books.js';
import './main.html';

//Template.bookList.onCreated(function helloOnCreated() {
  // counter starts at 0
//  this.counter = new ReactiveVar(0);
//  this.books = new ReactiveVar([ 
      
//]);

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
