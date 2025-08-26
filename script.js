//---TESTIMONIALS
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');
  let currentIndex = 0;

  function updateSlide() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
  });

  // Membuat carousel otomatis bergeser setiap 3 detik
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
  }, 3000);



  //---POPUP
  const popup = document.getElementById('popupForm');
  const openPopup = document.getElementById('openPopup');
  const closePopup = document.getElementById('closePopup');
  const orderForm = document.getElementById('orderForm');

  // Nomor WhatsApp tujuan (ganti dengan nomor admin)
  const whatsappNumber = "6281234567890";

  // Buka popup
  openPopup.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'flex';
  });

  // Tutup popup
  closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // Klik di luar form menutup popup
  window.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });

  // Kirim pesan WhatsApp
  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const paket = document.getElementById('paket').value;
    const kodepos = document.getElementById('kodepos').value;
    const alamat = document.getElementById('alamat').value;

    const message = 
`Halo Admin AfiaKids, saya ingin memesan produk:
- Nama: ${nama}
- Paket: ${paket}
- Kode Pos: ${kodepos}
- Alamat: ${alamat}

Mohon konfirmasi ketersediaan stok.`;

    const whatsappUrl = `https://wa.me/${628112641183}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  });
