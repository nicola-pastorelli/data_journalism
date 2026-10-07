// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
    var imgContainer = document.getElementById("img01-container");
    while (imgContainer.firstChild) {
        imgContainer.removeChild(imgContainer.firstChild);
    }
    var img = document.createElement('img');
    img.src = element.src;
    img.id = "img01";
    img.alt = element.alt;
    img.style.display = "block";
    img.style.margin = "auto";
    img.style.width = "74%";
    imgContainer.appendChild(img);
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Funzione per gestire l'evento di passaggio del mouse
function handleMouseOver(event, item) {
    const tooltip = document.getElementById('tooltip');
    tooltip.innerHTML = item.datum.tooltip;
    tooltip.style.top = event.clientY + 'px';
    tooltip.style.left = event.clientX + 'px';
    tooltip.style.display = 'block';
}

function handleMouseOut() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
}





