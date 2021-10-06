const button = document.querySelector('.more')
const brands = document.querySelector('.brands')

button.onclick = function() {
    brands.classList.toggle('brands-full')
    button.classList.toggle('more-full')
}
