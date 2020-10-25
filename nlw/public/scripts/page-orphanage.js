const options = {
    draggin: false,
    touchZoom: false,
    doubleClickZoom: false, 
    scrollWheelZoom: false, 
    zoomControl: false
}


// create map
const map = L.map('mapid', options).setView([-8.0635765,-34.8718558], 15);



//create and add tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)


// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


//create and add marker

L
.marker([-8.0635765,-34.8718558], { icon })
.addTo(map)


/* image gallety */

function selectImage(event) {
    const button = event.currentTarget

    console.log(button.children)

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    console.log(buttons)
    buttons.forEach(removeActiveClass)
    /* (button) => {button.classList.remove("active}*/

    function removeActiveClass(button) {
        button.classList.remove("active")
    }
    
    // selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container de image
    imageContainer.src = image.src

    // adicionar a classe .active para o botão clicado
    button.classList.add('active')

}
    