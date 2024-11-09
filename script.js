const body = document.body;
const akhir = new Date('December 31, 2024 23:59:59');
const hariElement = document.getElementById('hari');
const jamElement = document.getElementById('jam');
const menitElement = document.getElementById('menit');
const detikElement = document.getElementById('detik');

setInterval(updateCountDown, 1000);
setInterval(buatHati, 50);

function updateCountDown() {
    const awal = new Date();
    const selisih = akhir - awal;
    const hari = Math.floor(selisih / 1000 / 60 / 60 / 24);
    const jam = Math.floor(selisih / 1000 / 60 / 60) % 24;
    const menit = Math.floor(selisih / 1000 / 60) % 60;
    const detik = Math.floor(selisih / 1000) % 60;
    hariElement.innerHTML = hari;
    jamElement.innerHTML = jam < 10 ? '0' + jam : jam;
    menitElement.innerHTML = menit < 10 ? '0' + menit : menit;
    detikElement.innerHTML = detik < 10 ? '0' + detik : detik;
}

function buatHati()
{
    const hati = document.createElement('i');
    hati.classList.add('fas');
    hati.classList.add('fa-heart');
    hati.style.left = Math.random() * window.innerWidth + 'px';
    hati.style.animationDuration = Math.random() * 3 + 2 + 's';
    hati.style.opacity = Math.random();
    hati.style.fontSize = Math.random() * 10 + 10 + 'px';

    document.body.appendChild(hati);

    setTimeout(() => {
        hati.remove();
    }, 5000);
}