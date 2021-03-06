const menu = () => {
    const menu = document.querySelector('menu');

    document.addEventListener('click', (e) => {
        if (e.target.closest('.menu')) {
            menu.classList.add('active-menu')
        } else if (e.target.classList.contains('close-btn') || !e.target.closest('.active-menu')) {
            menu.classList.remove('active-menu')
        } else if (e.target.closest('ul>li>a')) {
            menu.classList.remove('active-menu')
        }
    })
}

export default menu;