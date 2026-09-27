// ---------- Mood message ----------
let moodTerakhir = null; // 'positive' | 'neutral' | 'negative'

function tampilkanPesan(teks, mood, tombol) {
    moodTerakhir = mood;

    const elemenPesan = document.getElementById("hasil-pesan");
    elemenPesan.innerText = teks;
    elemenPesan.classList.add("tampil");

    // highlight tombol emoji yang dipilih
    document.querySelectorAll(".emoji-container button").forEach(b => b.classList.remove("selected"));
    if (tombol) tombol.classList.add("selected");
}

// ---------- Generator ide "hari sempurna" ----------
let kategoriTerpilih = "semua";

const daftarIde = [
    { teks: "Take a leisurely walk in the afternoon while listening to your favorite playlist", kategori: "outdoor" },
    { teks: "Small picnic in the mearby park", kategori: "outdoor" },
    { teks: "Ride a bicycle around the complex during golden hour", kategori: "outdoor" },
    { teks: "Sit in the park and draw whatever comes into view", kategori: "outdoor" },

    { teks: "Rewatch your  comfort movie while makinh snacks ", kategori: "indoor" },
    { teks: "Tidying up the room while listening music", kategori: "indoor" },
    { teks: "Try a simple new recipe", kategori: "indoor" },
    { teks: "Read books that have been piled up n the shelf for along time", kategori: "indoor" },

    { teks: "Random video call with old friend", kategori: "sosial" },
    { teks: "Invite friends to chat over coffe together", kategori: "sosial" },
    { teks: "Play board games with family or friends", kategori: "sosial" },
    { teks: "Send a random message to a friend to ask how they are", kategori: "sosial" },

    { teks: "10 minutes journaling today question", kategori: "sendiri" },
    { teks: "A short mediation, or just a deep  breath", kategori: "sendiri" },
    { teks: "Create a new playlist according to your current mood ", kategori: "sendiri" },
    { teks: "Walking alone without a destination while listening to a podcast", kategori: "sendiri" },
];

const introByMood = {
    positive: "Since youre having a good day, why dont you continue with : ",
    neutral:  "To add color to this ordinary day, try : ",
    negative: "Take it slow. If you want to try something light: ",
    default:  "here an ideas to make your day even more perfect: ",
};

function pilihKategori(kategori, tombol) {
    kategoriTerpilih = kategori;
    document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
    tombol.classList.add("active");
}

function cariIdeSempurna() {
    const kandidat = kategoriTerpilih === "semua"
        ? daftarIde
        : daftarIde.filter(i => i.kategori === kategoriTerpilih);

    const pilihan = kandidat[Math.floor(Math.random() * kandidat.length)];
    const intro = introByMood[moodTerakhir] || introByMood.default;

    const elemenIde = document.getElementById("pesan-random");
    elemenIde.innerText = intro + pilihan.teks;
    elemenIde.classList.add("tampil");
}