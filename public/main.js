const btn = document.getElementById('test')

const giveAlert = () => {
    axios.get('http://ec2-35-92-72-157.us-west-2.compute.amazonaws.com/api/button')
    .then(res => {
        alert(res.data)
        .catch(err => console.log(err))
    })
}

btn.addEventListener('click', giveAlert)