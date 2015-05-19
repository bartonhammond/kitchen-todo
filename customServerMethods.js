Meteor.methods({
  clearCompleted: function () {
    Todos.remove({completed: true});
  }
});
