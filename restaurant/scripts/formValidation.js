function validate() {
    if(document.getElementById('name').value !== "" && document.getElementById('phone').value !== "" && document.getElementById('reason').value !== '') {
        alert("Form looks good!")
    } else {
        alert("Please fill out all the required fields")
    }
}