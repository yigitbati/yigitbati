document.addEventListener("DOMContentLoaded", function() {
    console.log("Kavkader web sitesi çalışıyor!");
});

// Karakter ve Oyuncu Resmini Değiştirme Fonksiyonu
function toggleImage(element) {
    const images = {
        "yigit.jpg": "wiz.jpg",
        "teo.jpg": "taso.jpg",
        "mehmet.jpg": "gupcen.jpg",
        "sefa.jpg": "wiz.jpg"
    };

    // Şu anki resim kaynağını al
    const currentSrc = element.querySelector("img").getAttribute("src");
    const filename = currentSrc.split('/').pop();

    // Eğer eşleşme varsa karakter/oyuncu resmini değiştir
    if (images[filename]) {
        const newImage = currentSrc.includes(images[filename]) ? filename : images[filename];
        element.querySelector("img").setAttribute("src", `../assets/images/${newImage}`);
    }
}



