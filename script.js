// --- CONFIGURAÇÃO DO CRONÔMETRO ---
        const dataDoEvento = new Date("2026-07-14T06:00:00").getTime();

        function atualizarCronometro() {
            const agora = new Date().getTime();
            const diferenca = dataDoEvento - agora;

            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

            if (diferenca > 0) {
                document.getElementById("days").innerText = dias < 10 ? "0" + dias : dias;
                document.getElementById("hours").innerText = horas < 10 ? "0" + horas : horas;
                document.getElementById("minutes").innerText = minutos < 10 ? "0" + minutos : minutos;
                document.getElementById("seconds").innerText = segundos < 10 ? "0" + segundos : segundos;
            } else {
                document.getElementById("days").innerText = "00";
                document.getElementById("hours").innerText = "00";
                document.getElementById("minutes").innerText = "00";
                document.getElementById("seconds").innerText = "00";
            }
        }

        setInterval(atualizarCronometro, 1000);
        atualizarCronometro();


        // --- LOGICA 1: CARROSSEL AUTOMÁTICO DO TOPO (HERO) ---
        let heroIndex = 0;
        const heroSlides = document.querySelectorAll('.hero-slide');
        const totalHeroSlides = heroSlides.length;

        function changeHeroBackground() {
            heroSlides[heroIndex].classList.remove('active');
            heroIndex = (heroIndex + 1) % totalHeroSlides;
            heroSlides[heroIndex].classList.add('active');
        }

        setInterval(changeHeroBackground, 6000);


        // --- LOGICA 2: CARROSSEL MANUAL DO MEIO (A JORNADA) ---
        let currentIndex = 0;
        const track = document.getElementById('track');
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function moveSlide(direction) {
            currentIndex += direction;

            if (currentIndex >= totalSlides) {
                currentIndex = 0;
            } else if (currentIndex < 0) {
                currentIndex = totalSlides - 1;
            }

            const amountToMove = -currentIndex * 100;
            track.style.transform = `translateX(${amountToMove}%)`;
        }

        setInterval(() => {
            moveSlide(1);
        }, 5000);

