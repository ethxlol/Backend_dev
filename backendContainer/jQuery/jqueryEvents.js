$(function () {
	// the buttons that will toggle on and off the highlight color when mouseover
	$('#onButton').click(function (event) {
		updateEventDetails(event);
		$('#para1').hover(highlight, highlight);
		console.log('Triggered');
	});
	$('#offButton').click(function (event) {
		updateEventDetails(event);
		$('#para1').off('mouseenter mouseleave', highlight);
		console.log('Triggered');
	});
});
// this is what will toggle the highlight color of the background
function highlight(event) {
	updateEventDetails(event);
	$(this).toggleClass('highlighted');
}

function updateEventDetails(evt) {
	$('li span[id]').text('');
	$('#evtType').text(evt.type);
	$('#evtWhich').text(evt.which);
	$('#evtTarget').text(evt.target.id);
	if (evt.relatedTarget) {
		$('#evtRelated').text(
			evt.relatedTarget.tagName + '#' + evt.relatedTarget.id
		);
	}
	$('#evtPageX').text(evt.pageX);
	$('#evtPageY').text(evt.pageY);
	$('#evtClientX').text(evt.clientX);
	$('#evtClientY').text(evt.clientY);
	$('#evtMetaKey').text(evt.metaKey);
	if (evt.data) {
		$('#evtData').text(evt.data.name);
	}
}
// function that will change the font size of the p in the outerHTML.
$(function () {
	$('#btnOn').click(function () {
		$('p').css('font-size', '30px');
	});

	$('#btnOff').click(function () {
		$('p').removeAttr('style');
	});
});
