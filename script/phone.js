const searchHandler = () => {
    const loadSpinner = document.getElementById('spinner');
    loadSpinner.classList.remove('hidden')
    console.log("Search Btn Cliked");
    setTimeout(() => {
        loadAllPhone();
    }, 3000);
}
const loadAllPhone = async () => {
    console.log('Hey jubayer 3 second done')
    const loadSpinner = document.getElementById('spinner');
    loadSpinner.classList.add('hidden')

    const respons = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
    const data = await respons.json();
    displayAllPhone(data.data);
}


const displayAllPhone = (allphoine) => {
    console.log('Display All phone Called')
    console.log(allphoine)
}


// globaly call function 
loadAllPhone()