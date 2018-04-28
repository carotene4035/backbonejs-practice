/** Backbone jsの拡張を行っている */
var Task = Backbone.Model.extend({
  defaults: {
    title: '',
    closed: false
  },
  validate: function(attrs) {
    if(_.isEmpty(attrs.title)) {
      return 'タスク名が指定されていません';
    }
  }
});
var task = new Task();

/*
 * ここでイベントの登録を行っている.
 * onってイベントリスナだ!
 */
task.on("invalid", function(model, error) {
  alert(error);
});

console.log(task);
