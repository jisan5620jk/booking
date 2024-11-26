document.getElementById('checkin').addEventListener('focus', function (event) {
  event.target.type = 'date';
});

document.getElementById('checkin').addEventListener('blur', function (event) {
  if (!event.target.value) {
    event.target.type = 'text';
    event.target.placeholder = 'Check-in';
  }
});

document.getElementById('checkout').addEventListener('focus', function (event) {
  event.target.type = 'date';
});

document.getElementById('checkout').addEventListener('blur', function (event) {
  if (!event.target.value) {
    event.target.type = 'text';
    event.target.placeholder = 'Check-out';
  }
});

document
  .getElementById('bookingForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    const confirmationMessage = `
        <h2>Booking Confirmation</h2>
        <p>Thank you, ${name}!</p>
        <p>Your booking from ${checkin} to ${checkout} has been confirmed.</p>
        <p>We have sent a confirmation email to ${email}.</p>
    `;

    document.getElementById('confirmation').innerHTML = confirmationMessage;
  });
