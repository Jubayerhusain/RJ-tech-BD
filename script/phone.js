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

// brand:"Apple "
// image:"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg"
// phone_name:"iPhone 13 mini"
// slug:"apple_iphone_13_mini-11104"


const displayAllPhone = (allphoine) => {
    console.log('Display All phone Called')
    // console.log(allphoine)
    const phoneContainer = document.getElementById('phone-Container');
    document.getElementById('phone-Container').innerHTML = "";
    allphoine.forEach((phone) => {
        // obejct destracturing
        const { brand,image,phone_name,slug } = phone;
        console.log(phone)
        const createPhoneCard = document.createElement('div');
        createPhoneCard.innerHTML = `
        <div class="card h-[480px] bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img
                src=${image}
                alt="phone-image"
                class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">${brand}</h2>
                <p>${phone_name}</p>
                <p>${slug}</p>
                <div class="card-actions">
                <button class="btn btn-primary">Phone Details</button>
                </div>
            </div>
        </div>
        `;
        phoneContainer.append(createPhoneCard);
    });
}

const showAllPhoneBtn = () => {
    loadAllPhone(true)
}


// globaly call function 
loadAllPhone(false, "iphone")