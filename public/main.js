const updateButton = document.getElementById('update-button');
const deleteButton = document.getElementById('delete-button');
const postButton = document.getElementById('post-button');
const message = document.getElementById('message');

/**
 * POST request done in index.ejs to practice making API calls in Form
 */
postButton.addEventListener('click', async ()=> {
    event.preventDefault(); 
    const nameValue = document.getElementById('post-name').value;
    const majorValue = document.getElementById('post-major').value;
    const gpaValue = document.getElementById('post-gpa').value;
    const idValue = document.getElementById('post-id').value;

    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            name: nameValue,
            major: majorValue,
            gpa: gpaValue,
            id: idValue
        })
    }

    const response = await fetch('/api/v1/student', options);
    const responseJson = await response.json();
    if (response.status === 201) {
        window.location.reload(true);
    } else {
        message.textContent = responseJson;
    }
})

/**
 * UPDATE request to server
 */
updateButton.addEventListener('click', async () => {
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

    const response = await fetch('/api/v1/student', options)
    if (response.status === 200) {
        window.location.reload(true);
        return res.json();
    }
})


/**
 * DELETE request to server
 */
deleteButton.addEventListener('click', async () => {
    event.preventDefault();
    const deleteStudentByID = document.getElementById('delete-student-by-id').value;

    const options = {
        method: "DELETE",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: deleteStudentByID
        })
    }

    const response = await fetch('/api/v1/student', options)
    if (response.ok) {
        window.location.reload(true)
        return response.json();
    } else {
        message.textContent = 'No student record to delete'
    }
})