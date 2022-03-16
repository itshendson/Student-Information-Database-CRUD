const updateButton = document.getElementById('update-button');
const searchStudent = document.getElementById('search-student-id');
const studentMajorHTML = document.getElementById('update-student-major');

updateButton.addEventListener('click', () => {
    event.preventDefault();
    const searchStudentID = searchStudent.value;
    const newStudentMajor = studentMajorHTML.value;

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