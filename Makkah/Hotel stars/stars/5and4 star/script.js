const searchInput = document.getElementById('searchInput');
const menuList = document.getElementById('menuList');
const menuItems = menuList.getElementsByTagName('li');
const itemTexts = Array.from(menuItems).map(item => item.textContent.toLowerCase());

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i];
        const itemName = itemTexts[i]; // Get the item's text from the pre-stored array

        if (itemName.includes(searchTerm)) {
            item.style.display = 'list-item'; // Show the item
        } else {
            item.style.display = 'none'; // Hide the item
        }
    }
});




