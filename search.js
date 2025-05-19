function searchItems() {
    let input = document.getElementById("searchInput").value.trim().toLowerCase();
    let items = document.querySelectorAll(".container");
    let searchKeywords = input.split(" ").filter(keyword => keyword.length > 0);
 
    items.forEach(item => {
       let tags = item.getAttribute("data-tags").toLowerCase().split(" ");
       let matches = searchKeywords.every(keyword => tags.some(tag => tag.includes(keyword)));
 
       if (matches || input === "") {
          item.style.display = "block";
       } else {
          item.style.display = "none";
       }
    });
 }
 
 function searchByTag(event) {
    let tag = event.target.textContent.trim().toLowerCase();
    document.getElementById("searchInput").value = tag;
    searchItems();
 }
 
 document.querySelectorAll(".tag").forEach(tag => {
    tag.addEventListener("click", searchByTag);
 });