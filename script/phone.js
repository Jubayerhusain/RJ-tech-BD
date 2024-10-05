const searchHandler = () => {
    const loadSpinner = document.getElementById('spinner');
    loadSpinner.classList.remove('hidden')
    // console.log("Search Btn Cliked");
    const searchField = document.getElementById('search-field').value;
    setTimeout(() => {
        loadAllPhone(false, searchField);
    }, 3000);
}
const loadAllPhone = async (status, searchInput) => {
    console.log(searchInput);
    const loadSpinner = document.getElementById('spinner');
    loadSpinner.classList.add('hidden')

    const respons = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchInput?searchInput:"iphone"}`);
    const data = await respons.json();
    if (status == true) {
        displayAllPhone(data.data);
    } else {
        displayAllPhone(data.data.slice(0, 6));

    }
}


const displayAllPhone = (allphoine) => {
    console.log('Display All phone Called')
    // console.log(allphoine)
}

const showAllPhoneBtn = () => {
    loadAllPhone(true)
}


// globaly call function 
loadAllPhone(false, "iphone")