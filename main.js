let qrBox = document.getElementById('qrbox');
let qrImg = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');

function generateQR() {

    if (qrText.value.length > 0) {
        qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;

        qrBox.classList.add('show-img');
    }
    else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);

        alert('Enter a URL');
    }

}

const generateQr = (e) => {
    if (e.key === 'Enter') {
        generateQR();
    }
}

qrText.addEventListener('keydown', generateQr);