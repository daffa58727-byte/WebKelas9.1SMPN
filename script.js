   <!-- FILE JAVASCRIPT (TERPISAH DI BAWAH) -->
  
        document.addEventListener('DOMContentLoaded', () => {
            
            // --- 1. LOGIKA GENERATE BINTANG BACKGROUND ---
            const initStars = () => {
                const starsBox = document.getElementById('stars-box');
                const count = 150;
                
                for (let i = 0; i < count; i++) {
                    const star = document.createElement('div');
                    star.className = 'star animate-twinkle';
                    
                    const size = Math.random() * 3 + 'px';
                    star.style.width = size;
                    star.style.height = size;
                    
                    star.style.top = Math.random() * 100 + '%';
                    star.style.left = Math.random() * 100 + '%';
                    
                    star.style.animationDelay = Math.random() * 5 + 's';
                    star.style.opacity = Math.random();
                    
                    starsBox.appendChild(star);
                }
            };

            // --- 2. LOGIKA MENU MOBILE (NAVBAR) ---
            const initMobileMenu = () => {
                const menuBtn = document.getElementById('mobile-menu-btn');
                const mobileNav = document.getElementById('mobile-nav');
                const mobileLinks = document.querySelectorAll('.mobile-link');

                // Toggle menu saat tombol hamburger diklik
                menuBtn.addEventListener('click', () => {
                    mobileNav.classList.toggle('hidden');
                });

                // Tutup menu saat salah satu link diklik
                mobileLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        mobileNav.classList.add('hidden');
                    });
                });
            };

            // --- 3. LOGIKA MODAL GALERI ---
            const initGalleryModal = () => {
                // Elemen Modal
                const modal = document.getElementById('gallery-modal');
                const modalContent = document.getElementById('modal-content');
                const modalImg = document.getElementById('modal-img');
                const modalTitle = document.getElementById('modal-title');
                const modalDate = document.getElementById('modal-date');
                const modalDesc = document.getElementById('modal-desc');
                
                // Elemen Trigger & Penutup
                const galleryCards = document.querySelectorAll('.gallery-card');
                const closeModalBtn = document.getElementById('close-modal-btn');
                const modalOverlay = document.getElementById('modal-overlay');

                // Fungsi Membuka Modal
                const openModal = (title, date, desc, imgSrc) => {
                    modalImg.src = imgSrc;
                    modalTitle.innerText = title;
                    modalDate.innerText = date;
                    modalDesc.innerText = desc;

                    modal.classList.remove('hidden');
                    
                    setTimeout(() => {
                        modal.classList.remove('opacity-0');
                        modalContent.classList.remove('scale-95');
                        modalContent.classList.add('scale-100');
                    }, 10);

                    document.body.style.overflow = 'hidden'; // Kunci scroll
                };

                // Fungsi Menutup Modal
                const closeModal = () => {
                    modal.classList.add('opacity-0');
                    modalContent.classList.remove('scale-100');
                    modalContent.classList.add('scale-95');

                    setTimeout(() => {
                        modal.classList.add('hidden');
                        document.body.style.overflow = 'auto'; // Buka scroll
                    }, 300);
                };

                // Pasang Event Listener ke semua Kartu Galeri
                galleryCards.forEach(card => {
                    card.addEventListener('click', () => {
                        // Ambil data dari atribut HTML custom (data-*)
                        const title = card.getAttribute('data-title');
                        const date = card.getAttribute('data-date');
                        const desc = card.getAttribute('data-desc');
                        const img = card.getAttribute('data-img');
                        openModal(title, date, desc, img);
                    });
                });

                // Pasang Event Listener untuk menutup modal
                closeModalBtn.addEventListener('click', closeModal);
                modalOverlay.addEventListener('click', closeModal);
                document.addEventListener('keydown', (event) => {
                    if (event.key === "Escape" && !modal.classList.contains('hidden')) {
                        closeModal();
                    }
                });
            };

            // --- JALANKAN SEMUA FUNGSI ---
            initStars();
            initMobileMenu();
            initGalleryModal();
            
        });
</body>
</html>
