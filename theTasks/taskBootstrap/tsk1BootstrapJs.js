function changeToGreen(button) {
	$(button).addClass('list-group-item-success');
}

function changeToYellow(button) {
	$(button).addClass('list-group-item-warning');
}

function changeToBlue(button) {
	$(button).addClass('list-group-item-primary');
}

function revertBack(button) {
	setTimeout(function () {
		$(button).removeClass(
			'list-group-item-success list-group-item-warning list-group-item-primary'
		);
	}, 1000);
}
