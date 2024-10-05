const loadAllPhone = () =>{
    console.log('Hey jubayer 3 second done')
    const loadSpinner = document.getElementById('spinner');
    loadSpinner.classList.add('hidden')
}

const searchHandler = () => {
    const loadSpinner = document.getElementById('spinner');
    loadSpinner.classList.remove('hidden')
    console.log("Search Btn Cliked");
    setTimeout(() => {
        loadAllPhone();
    }, 3000);
}