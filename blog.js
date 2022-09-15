let label = document.querySelectorAll('.label');

label.forEach(item => item.addEventListener('click', () => {
    let content = item.nextElementSibling
    let contents = document.querySelectorAll('.content')
    contents.forEach(item => {
        item != content ? item.classList.remove('show') : ""
    })
    content.classList.contains('show') ? content.classList.remove('show') : content.classList.add('show')
}))