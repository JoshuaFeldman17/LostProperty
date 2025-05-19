const fileInput = document.getElementById("photo");
const dropArea = document.getElementById("drop-area");
const fileNameDisplay = document.getElementById("file-name");
const imagePreview = document.getElementById("image-preview");
const dropText = document.getElementById("drop-text");
const removeButton = document.getElementById("remove-photo");

dropArea.addEventListener("click", function () {
    fileInput.click();
});

fileInput.addEventListener("change", function () {
    handleFiles(this.files);
});


dropArea.addEventListener("dragover", function (e) {
    e.preventDefault();
    this.style.borderColor = "#4CAF50";
});

dropArea.addEventListener("dragleave", function () {
    this.style.borderColor = "#ccc";
});

dropArea.addEventListener("drop", function (e) {
    e.preventDefault();
    this.style.borderColor = "#ccc";
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        fileInput.files = files;
        handleFiles(files);
    }
});

function handleFiles(files) {
    if (files.length > 0) {
        const file = files[0];
        fileNameDisplay.textContent = file.name;

        if (file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imagePreview.src = e.target.result;
                imagePreview.style.display = "block";
                dropText.style.display = "none";

                removeButton.style.display = "inline-block";
            };
            reader.readAsDataURL(file);
        }
    }
}

removeButton.addEventListener("click", function () {
    imagePreview.style.display = "none";
    fileInput.value = "";
    fileNameDisplay.textContent = "No file chosen";
    dropText.style.display = "block";

    removeButton.style.display = "none";
});
window.onload = function () {
    const claimedTags = localStorage.getItem('claimedItemTags');
    if (claimedTags) {
        document.getElementById('claimed_item_input').value = claimedTags;
    }
};
