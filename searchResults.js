const $main = document.querySelector('main');


export function displayShows(showArray){
    $main.innerHTML = "";
    if(!showArray.length)
        $main.textContent = "Sorry, there's no results."
    showArray.forEach(tvShow => displayShow(tvShow));
}


function displayShow(tvShow) {
    const showCard = makeShowCard(tvShow);
    $main.append(showCard);
}


function makeShowCard(tvShow) {
    const template = document.querySelector('#template');
    const $showCard = template.content.cloneNode(true);

    $showCard.querySelector('.showTitle').textContent = tvShow.show.name;
    $showCard.querySelector('.rank').textContent = Math.round(tvShow.score * 10) /10;
    if(tvShow.show.image)
        $showCard.querySelector('img').src = tvShow.show.image.medium;
    $showCard.querySelector('.linkWrapper').dataset.id = tvShow.show.id;

    return $showCard;
}


export function showLoader() {
    $main.innerHTML = "";
    const $imgLoader = document.createElement('img');
    $imgLoader.src = "./loader.svg";
    $imgLoader.classList.add('loader')
    $main.append($imgLoader);
}


export function addArrayIds() {
    const cardArray = document.querySelectorAll('.linkWrapper')
    let i = 0;
    cardArray.forEach(card => {
        card.dataset.index = i;
        i++;
    })
}