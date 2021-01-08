export function addListeners(showArray) {
    const wrappers = document.querySelectorAll('.linkWrapper');
    wrappers.forEach($wrapper => {
        $wrapper.addEventListener('click', (e) => {
            e.preventDefault();
            updateModal(showArray[$wrapper.dataset.index])
        })
    })
}


function updateModal(tvShow) {
    // getElementById doesn't work with templates
    const contentTemplate = document.querySelector('#content')
    const $modalBody = document.querySelector('.modal-body')
    const content = contentTemplate.content.cloneNode(true);

    if(tvShow.show.image)
        content.querySelector('img').src = tvShow.show.image.medium
    document.querySelector('#modalLabel').textContent = tvShow.show.name
    content.querySelector('.summary').innerHTML = tvShow.show.summary
    document.querySelector('#btnInfo').href = tvShow.show.url
    const $genres =content.querySelector('.genres')
    $genres.textContent = ""
    tvShow.show.genres.forEach(genre => $genres.textContent += genre+ ", ")

    $modalBody.innerHTML = " ";
    $modalBody.append(content)
}