const searchInput = document.getElementById('searchInput');
const menuList = document.getElementById('menuList');
const menuItems = menuList.getElementsByTagName('li');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i];
        const itemName = item.textContent.toLowerCase();

        if (itemName.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    }
});
