window.onload = function () {
    const claimedTags = localStorage.getItem('claimedItemTags');
    const claimedImage = localStorage.getItem('claimedItemImage');
    if (claimedTags && claimedImage) {
        const card = document.getElementById('claimed-item-card');
        const img = document.getElementById('claimed-item-image');
        const tags = document.getElementById('claimed-item-tags');
        img.src = claimedImage;
        const words = claimedTags.split(',').map(word => word.trim());
        const itemName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        document.getElementById('claimed_item_input').value = claimedTags;
        tags.textContent = `You are claiming a ${itemName}`;
        card.style.display = "block";
    }
};