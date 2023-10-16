const form = document.getElementById('registration-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const password = document.getElementById('passwordInput').value;
    const repeatPassword = document.getElementById('repeatPasswordInput').value;
    const name = document.getElementById('name').value;
    const tee_number = document.getElementById('tee_number').value;
    const birthdate = document.getElementById('birthdate').value;
    const email = document.getElementById('email').value;
    const day = document.getElementById('day-preference').value;

    const playersTable = document.getElementById('players-table');
    const playersList = document.getElementById('players-list');
    const newRow = playersList.insertRow(playersList.rows.length);

    if (password !== repeatPassword) {
        document.getElementById('passwordMatch').style.display = 'block';
    } else {
        document.getElementById('passwordMatch').style.display = 'none';
        alert('Form submitted successfully');

        newRow.insertCell(0).innerHTML = name;
        newRow.insertCell(1).innerHTML = tee_number;
        newRow.insertCell(2).innerHTML = birthdate;
        newRow.insertCell(3).innerHTML = email;
        newRow.insertCell(4).innerHTML = day;
    
        form.reset();
    }
});

