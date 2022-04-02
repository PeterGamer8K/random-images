const body = document.querySelector('body');
const btn = document.getElementById('btn');
const imgDiv = document.createElement('img');



btn.addEventListener('click', function() {

    try {
        getRandomImage();
    } catch (e) {
        getRandomImage();
    }

});



function getRandomImage() {

    try {

        const id = getRandomArbitrary(1, 1000);
        imgDiv.src = `https://picsum.photos/id/${id}/1600/900`;

        body.appendChild(imgDiv);
        imgDiv.onerror = getRandomImage;
    } catch (e) {
        getRandomImage();
    }

}


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}