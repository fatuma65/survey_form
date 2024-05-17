const button1 = document.getElementById('submit')

const submitForm = () => {
    const first_name = document.getElementById('names')
    const first_name1 = first_name.value
    alert(`${first_name1} ,Your response has been recieved`)
}

button1.addEventListener('click', submitForm)