document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const tableBody = document.querySelector('#contact-table tbody');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        if (name && phone) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `<td>${name}</td><td>${phone}</td>`;
            tableBody.appendChild(newRow);
            form.reset();
        }
    });
});
