// Base class for both Staff and DeliveryDriver
class User {
	constructor(data) {
		this.picture = data.picture.thumbnail;
		this.name = data.name.first;
		this.surname = data.name.last;
		this.email = data.email;
		this.status = 'In';
		this.outTime = '';
		this.duration = '';
		this.expectedReturn = '';
	}

	staffOut(durationInMinutes) {
		this.status = 'Out';
		const outDate = new Date();
		this.outTime = `${outDate.getHours()}:${outDate
			.getMinutes()
			.toString()
			.padStart(2, '0')}`;
		this.duration = `${Math.floor(durationInMinutes / 60)} hr : ${
			durationInMinutes % 60
		} min(s)`;
		const returnDate = new Date(outDate.getTime() + durationInMinutes * 60000);
		this.expectedReturn = `${returnDate.getHours()}:${returnDate
			.getMinutes()
			.toString()
			.padStart(2, '0')}`;
	}

	staffIn() {
		this.status = 'In';
		this.outTime = '';
		this.duration = '';
		this.expectedReturn = '';
	}
}

// Subclass for Staff
class Staff extends User {
	constructor(data) {
		super(data); // Call the constructor of the base class (User)
	}
}

// Subclass for DeliveryDriver
class DeliveryDriver extends User {
	constructor(data) {
		super(data); // Call the constructor of the base class (User)
		this.vehicleType = 'Car'; // Default vehicle type
	}

	setVehicleType(vehicleType) {
		this.vehicleType = vehicleType;
	}

	getVehicleType() {
		return this.vehicleType;
	}
}

// Digital Clock
function updateClock() {
	const now = new Date();
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const day = now.getDate();
	const monthName = monthNames[now.getMonth()];
	const year = now.getFullYear();

	const timeString = `DATE: ${day} ${monthName} ${year} ${now.getHours()}:${now
		.getMinutes()
		.toString()
		.padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

	$('#clock').text(timeString);
}

updateClock();
setInterval(updateClock, 1000);

// jQuery⬇️

$(document).ready(function () {
	let users = [];
	let selectedUserIndex = null;
	const alreadyNotifiedDeliveries = new Set();

	// Fetching from API

	async function staffUserGet() {
		try {
			const response = await fetch('https://randomuser.me/api/?results=5');
			const data = await response.json();
			users = data.results.map((user) => new User(user));
			renderUsersTable();
		} catch (err) {
			console.error('Error loading users:', err);
		}
	}

	// Inhabiting data on load to the table

	function renderUsersTable() {
		$('#usersTable').empty();
		users.forEach((user) => {
			$('#usersTable').append(`
                          <tr>
                                  <td><img src="${user.picture}" alt="User Picture"></td>
                                  <td>${user.name}</td>
                                  <td>${user.surname}</td>
                                  <td>${user.email}</td>
                                  <td>${user.status}</td>
                                  <td>${user.outTime}</td>
                                  <td>${user.duration}</td>
                                  <td>${user.expectedReturn}</td>
                          </tr>
                  `);
		});
	}

	staffUserGet();

	// Helper to remove data parsed when highlighted

	$('#usersTable').on('click', 'tr', function () {
		$('#usersTable td').removeClass('highlighted');
		$(this).children('td').addClass('highlighted');
		selectedUserIndex = $(this).index();
	});

	// Displaying the modal when using the out button
	$('#outButton').click(function () {
		$('#durationModal').modal('show');
	});

	$('#durationConfirm').click(function () {
		const duration = parseInt($('#durationInput').val());
		if (!isNaN(duration) && selectedUserIndex !== null) {
			users[selectedUserIndex].staffOut(duration);
			renderUsersTable();
			$('#durationInput').val('');
			$('#durationModal').modal('hide');
		}
	});

	$('#inButton').click(function () {
		if (selectedUserIndex !== null) {
			users[selectedUserIndex].staffIn();
			renderUsersTable();
		}
	});

	// Dropdown for the schedule and appending it to the delivery board

	$(document).on('click', '.dropdown-item', function () {
		let selectedValue = $(this).data('value');
		let buttonText = '';
		let buttonIcon = '';

		switch (selectedValue) {
			case 'car':
				buttonText = 'Car';
				buttonIcon = "<i class='fas fa-car'></i>";
				break;
			case 'motorcycle':
				buttonText = 'Motorcycle';
				buttonIcon = "<i class='fas fa-motorcycle'></i>";
				break;
		}

		$('#vehicleDropdown')
			.html(buttonIcon + ' ' + buttonText)
			.data('icon', buttonIcon);
	});

	$('#scheduleForm').on('submit', function (e) {
		e.preventDefault();

		const vehicleType = $('#vehicleDropdown').text().trim();
		const name = $('#inputName').val();
		const surname = $('#inputSurname').val();
		const telephone = $('#inputTelephone').val();
		const address = $('#inputAddress').val();
		const returnTime = $('#inputReturnTime').val();

		// Check if the telephone number has at least 7 digits
		if (!validateDelivery(telephone)) {
			$('#telephoneNumberWarningModal').modal('show');
			return;
		}

		let vehicleIconClass = ''; // Initialize the vehicle icon class variable

		switch (vehicleType.toLowerCase()) {
			case 'car':
				vehicleIconClass = 'fas fa-car';
				break;
			case 'motorcycle':
				vehicleIconClass = 'fas fa-motorcycle';
				break;
			// Add more cases for other vehicle types if needed
			default:
				vehicleIconClass = 'fas fa-car'; // Default to 'Car' icon
		}

		if (
			vehicleIconClass &&
			name &&
			surname &&
			telephone &&
			address &&
			returnTime
		) {
			// Append the icon using the <i> element with the correct class to the "Delivery Board" table
			$('#deliveryBoardTable').append(`
            <tr>
                <td><i class="${vehicleIconClass}"></i></td>
                <td>${name}</td>
                <td>${surname}</td>
                <td>${telephone}</td>
                <td>${address}</td>
                <td>${returnTime}</td>
            </tr>
        `);

			$('#inputName').val('');
			$('#inputSurname').val('');
			$('#inputTelephone').val('');
			$('#inputAddress').val('');
			$('#inputReturnTime').val('');
			$('#vehicleDropdown').html("<i class='fas fa-car'></i> Car");
		} else {
			alert('Please fill in all the fields before submitting.');
		}
	});
	// Helper function to validate telephone number
	function validateDelivery(phoneNumber) {
		const digitsOnly = phoneNumber.replace(/\D/g, '');
		return digitsOnly.length >= 7;
	}

	// Again to remove the highlighted row/td

	$('#deliveryBoardTable').on('click', 'tr', function () {
		$('#deliveryBoardTable td').removeClass('highlighted');
		$(this).children('td').addClass('highlighted');
	});

	$('#clearButton').click(function () {
		$('#deliveryBoardTable td.highlighted').remove();
	});

	$('#deliveryDriverIsLate').toast({ autohide: false }); // manually activating it since I'm using bs v4
	$('#userDelayToast').toast({ autohide: false }); // manually activating it since I'm using bs v4

	// Updating every 10 seconds to check for the time in the delivery board
	function checkForDelays() {
		const now = new Date();
		$('#deliveryBoardTable tr').each(function () {
			const returnTimeTd = $(this).find('td').eq(5);
			const returnTimerArr = returnTimeTd.text().split(':');
			const returnDate = new Date();
			returnDate.setHours(returnTimerArr[0], returnTimerArr[1], 0);

			const uniqueIdentifier = `${$(this).find('td').eq(1).text()}${$(this)
				.find('td')
				.eq(2)
				.text()}${returnTimeTd.text()}`;

			if (
				returnDate < now &&
				!alreadyNotifiedDeliveries.has(uniqueIdentifier)
			) {
				alreadyNotifiedDeliveries.add(uniqueIdentifier);

				const name = $(this).find('td').eq(1).text();
				const surname = $(this).find('td').eq(2).text();
				const telephone = $(this).find('td').eq(3).text();
				const address = $(this).find('td').eq(4).text();
				const returnTime = $(this).find('td').eq(5).text();

				$('#deliveryDriverIsLate .toast-body').html(`
  Name: ${name} ${surname}<br>
  Telephone: ${telephone}<br>
  Address: ${address}<br><br>
 <b>Expected arrival: ${returnTime}</b>`);

				$('#deliveryDriverIsLate').toast('show');

				$('.toast').toast({
					autohide: false,
				});
			}
		});
	}

	setInterval(checkForDelays, 10000);

	// Updating every 10 seconds to check the timer for the staff member

	$('#staffMemberIsLate').toast({ autohide: false });

	function checkForUserDelays() {
		const now = new Date();
		$('#userTable tr').each(function () {
			const returnTimeTd = $(this).find('td').eq(7);
			const returnTimerArr = returnTimeTd.text().split(':');
			const returnDate = new Date();
			returnDate.setHours(returnTimerArr[0], returnTimerArr[1], 0);

			const uniqueIdentifier = `${$(this).find('td').eq(1).text()}${$(this)
				.find('td')
				.eq(2)
				.text()}${returnTimeTd.text()}`;

			if (
				returnDate < now &&
				!alreadyNotifiedDeliveries.has(uniqueIdentifier)
			) {
				alreadyNotifiedDeliveries.add(uniqueIdentifier);

				const imageSrc = $(this).find('td').eq(0).find('img').attr('src');
				const name = $(this).find('td').eq(1).text();
				const surname = $(this).find('td').eq(2).text();
				const outTime = $(this).find('td').eq(6).text();

				$('#staffMemberIsLate .toast-body').html(`
      <img src="${imageSrc}" alt="${name}${surname}" width="50" height="50"> ${name} ${surname} is delayed.<br><br>
      <b>Time-out-of-office: ${outTime}</b><br>`);

				$('#staffMemberIsLate').toast('show');
			}
		});
	}

	setInterval(checkForUserDelays, 10000);
});
