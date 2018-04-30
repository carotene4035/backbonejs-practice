/** backbone.js もどきのようなものを実装 */
function View(viewOptions) {
  /** 描画のみ担当 */
	this.el = viewOptions.el;
	this.events = viewOptions.events;
	this.initEvents();
};

View.prototype.initEvents = function() {
	this.events.forEach(function(event, index) {
		$(event.target).on(event.name, event.callback);
	});
}

/** viewに渡すオプション */
var viewOptions = {
	el: $('li'),
	events: [
		{
			name: 'click',
			target: '.text',
			callback: function() {
				console.log('on click');
			}
		},
		{
			name: 'click',
			target: '.text',
			callback: function() {
				console.log('on click2')
			}
		}
	]
}

new View(viewOptions);


/**
var button = document.getElementById('button');
button.addEventListener('click', function() {
	console.log('hello');
});
button.addEventListener('click', function() {
	console.log('hello2');
});
button.addEventListener('click', function() {
	console.log('hello3');
});
button.addEventListener('keydown', function() {
	console.log('llll');
});

*/
