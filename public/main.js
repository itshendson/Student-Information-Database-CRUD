const updateButton = document.getElementById('update-button');
const deleteButton = document.getElementById('delete-button');
const message = document.getElementById('delete-message');

updateButton.addEventListener('click', () => {
    event.preventDefault();
    const searchStudentID = document.getElementById('search-student-id').value;
    const newStudentMajor = document.getElementById('update-student-major').value;

    const options = {
        method: "PUT",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: searchStudentID,
            major: newStudentMajor
        })
    }

    fetch('/api/v1/student', options)
        .then(res => {
            if (res.ok) return res.json();
        })
        .then(response => {
            window.location.reload(true);
        })
})

deleteButton.addEventListener('click', () => {
    event.preventDefault();
    const deleteStudentByID = document.getElementById('delete-student-by-id').value;

    const options = {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: deleteStudentByID
        })
    }

    fetch('/api/v1/student', options)
        .then(res => {
            if (res.ok) return res.json();
        })
        .then(response => {
            if (response === 'No student record to delete.') {
                message.textContent = 'No student record to delete'
            } else {
                window.location.reload(true)
            }
        })
        .catch('Encountered a problem while deleting student record')
})