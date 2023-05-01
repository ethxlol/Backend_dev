// Task 1

// $('document').ready(function () {
// 	$('.classA').css('background-color', 'green');
// 	$('div p').css('font-size', '30px');
// 	$('#para4').css('padding-left', '10px');
// });

// Task 2

// $('document').ready(function () {
// changing the background color of all classes in the html
// 	$('[class]').css('background-color', 'green');
// changing the font size of all the p nodes in the div element
// 	$('div > p').css('font-size', '30px');
// adding some padding to all even p elements with the lang set to it
// 	$('p[lang]:even').css('padding-left', '20px');
// adding some top padding to all the p's that are even from the children of the parent
// 	$('p:even[lang]').css('padding-top', '40px');
// });

// Task3
// filtering to change the background color of the first  p with Th in it
// $('document').ready(function () {
// 	$('p:contains("Th"):first-of-type').css('background-color', 'yellow');
// });

// Task 4
// traversing to change the background of 2 p's
// $('document').ready(function () {
// 	var elem = $('#para3');
// 	elem.prev().prev().css('background-color', 'yellow');
// 	elem.next().css('background-color', 'blue');
// });

// Task 5
// Making an image appear on all the p with a lang set to it
// function button1Click(params) {
// 	$('p[lang]').html(
// 		"<img src='https://cdn.pixabay.com/photo/2018/04/13/16/13/pixel-3316924_960_720.png' width='235' height='220'/>"
// 	);
// }
// making a new button appear after the first of the button types
// function button2Click(params) {
// 	$('<button>Empty Button</button>').insertAfter('button:first-of-type');
// }
// adding the para1 text child node to all the of p
// function button3Click(params) {
// 	$('p').append($('#para1').text());
// }

// Task 6
// when we click the p in the browser they will hide
// $(function name(params) {
// 	$('p').click(function () {
// 		$(this).hide();
// 	});
// });

// Task 7
// makes your mouse click an eraser for the p elements in the html upon click it will hide the p
// the off button will turn this off
// $(function (params) {
// 	$('#onButton').click(function () {
// 		$('p').click(hide);
// 	});
// 	$('#offButton').click(function () {
// 		$('p').off('click', hide);
// 		console.log('triggerd');
// 	});
// 	function hide(params) {
// 		$(this).hide();
// 	}
// });

// Task 8
// we are making the button slowly fadeTo a lower opacity on dblclick
// $(function (params) {
// 	$('#button1').dblclick(function (params) {
// 		$(this).fadeTo('slow', 0.4);
// 	});
// });

// Task 9
// making the button slide up and away on hover
// $(function (param) {
// 	$('#button1').hover(function () {
// 		$(this).slideUp();
// 	});
// });

// Task 10
// making the button wider in 500ms after clicking it
$(function (params) {
	$('#button1').click(function () {
		$(this).animate(
			{
				width: '200px',
			},
			500
		);
	});
});
