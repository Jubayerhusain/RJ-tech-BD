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
const showAllPhoneBtn = () => {
    loadAllPhone(true)
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
        const {
            brand,
            image,
            phone_name,
            slug
        } = phone;
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
                <button onclick="phoneDetails('${slug}')" class="btn btn-primary">Phone Details</button>
                </div>
            </div>
        </div>
        `;
        phoneContainer.append(createPhoneCard);
    });
}

const phoneDetails = async (id) => {
    console.log('phone detains btn click')
    const respons = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await respons.json();
    displayPhoneDetails(data.data);
    my_modal_5.showModal();
}
const displayPhoneDetails = (details) => {
    console.log(details)
    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = `
    <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
        <img src=${details.image} />
        <h3 class="text-lg font-bold">${details.brand}</h3>
        <h3 class="text-lg font-bold">${details.name}</h3>
        <h3 class="text-lg font-bold">${details.slug}</h3>
        <p class="py-4">Press ESC key or click the button below to close</p>
        <div class="modal-action">
        <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
        </form>
        </div>
    </div>
    </dialog>
    `
}
// {
//     "mainFeatures": {
//         "storage": "128GB/256GB/512GB storage, no card slot",
//         "displaySize": "5.4 inches, 71.9 cm2 (~85.1% screen-to-body ratio)",
//         "chipSet": "Apple A15 Bionic (5 nm)",
//         "memory": "128GB 4GB RAM, 256GB 4GB RAM, 512GB 4GB RAM",
//         "sensors": [
//             "Face ID",
//             "accelerometer",
//             "gyro",
//             "proximity",
//             "compass",
//             "barometer"
//         ]
//     },
//     "slug": "apple_iphone_13_mini-11104",
//     "name": "iPhone 13 mini",
//     "releaseDate": "Released 2021, September 24",
//     "brand": "Apple",
//     "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg"
// }

// globaly call function 
loadAllPhone(false, "iphone")