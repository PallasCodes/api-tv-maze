import { getValidQuery, getResponse } from "./datafunctions.js"
import { displayShows, showLoader, addArrayIds } from "./searchResults.js"
import { addListeners } from "./modal.js"


document.addEventListener('readystatechange', e => {
    // this event occurs when the page has loaded everything
    if(e.target.readyState == 'complete') {
         initApp();
    }
});


function initApp() {
    const $search = document.getElementById('search');
    $search.addEventListener('submit', e => searchShow(e, $search.value));

    const $searchBtn = document.getElementById('searchBtn');
    $searchBtn.addEventListener('click', e => searchShow(e, $search.value));
}


async function searchShow(e, search) {
    e.preventDefault();
    const validSearch = getValidQuery(search);
    showLoader();
    const showArray = await getResponse(validSearch);
    displayShows(showArray);
    addListeners(showArray);
    addArrayIds();
}