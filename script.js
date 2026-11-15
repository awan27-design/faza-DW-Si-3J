function switchTab(event, targetId) {
  event.preventDefault();

  // 1. Ambil semua menu navigasi dan hapus class 'active'
  const navLinks = document.getElementsByClassName("nav-link");
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove("active");
  }

  // 2. Beri warna pink pada menu yang sedang diklik
  event.currentTarget.classList.add("active");

  // 3. Pastikan halaman Home tampil penuh
  const homeSection = document.getElementById("sectionHome");
  if (homeSection) {
    homeSection.style.display = "block";
  }

  // 4. Cari elemen kartu atau banner yang dituju
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    // Lakukan scroll halus ke elemen tersebut
    targetElement.scrollIntoView({ behavior: "smooth", block: "center" });

    // Hapus sorotan dari semua kartu dan banner lain
    const allCards = document.querySelectorAll(".card, aside.card, footer, aside.welcome-banner");
    allCards.forEach(function(card) {
      card.classList.remove("highlight-card");
    });

    // Berikan efek blok sorot pink pada elemen tujuan (termasuk banner data diri)
    targetElement.classList.add("highlight-card");

    // Hilangkan efek sorotan secara otomatis setelah 2.5 detik
    setTimeout(function() {
      targetElement.classList.remove("highlight-card");
    }, 2500);
  }
}

// Fungsi Alert Logout
function logoutAlert(event) {
  event.preventDefault();
  alert("Anda berhasil keluar dari sistem.");
}