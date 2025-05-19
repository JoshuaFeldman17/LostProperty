function claimItem(button) {
  const container = button.closest('.container');
  const tags = container.getAttribute('data-tags');
  const image = container.querySelector('img').src;

  localStorage.setItem('claimedItemTags', tags);
  localStorage.setItem('claimedItemImage', image);

  window.location.href = "Contact.html";
}