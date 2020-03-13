fetch(`http://localhost:3030/weather?address=!`)
.then(response => {
    response.json()
    .then(data => {
        if(data.error){
            console.error(`error`, data.error);
        }else{
            console.log(`location`, data.location);
            console.log(`forecast`, data.forecast);
        }
    })
})