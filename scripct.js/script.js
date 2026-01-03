function tampilWaktu() {
  const el = document.getElementById("waktu");
  if (!el) return;

  const sekarang = new Date();
  el.innerHTML = "Waktu: " + sekarang.toLocaleString("id-ID");
}
setInterval(tampilWaktu, 1000);

function bookingBerhasil(event) {
  event.preventDefault();
  alert("Terima kasih! Booking Anda berhasil.");
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

