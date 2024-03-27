// Wallet addresses
const walletAddresses = {
  btc_Legacy: '1L8hiwbckzRM6CkmWK4ktN1TcfW3AJuAvS',
  btc_P2SH: '34zmZbrcjtz3gsAU2TyEF6PK2YML2NDMvy',
  btc_Segwit: 'bc1q329ud3hxnp9898j5e7lrevj26ecn7lx0zan7zm',
  btc_P2TR: 'bc1pt80z42j54x79gj9swkh52lnhd8tgrz88tw5903zyvar9xx6h83nq3sstvf',
  bch: 'qqu50ydpd4c08ctu39ktnsd2acp34y3xqcaex0zycv',
  eth: '0x50496ea9B343f372d8435713Dcb986dfd3F24606',
  bnb: '0x50496ea9B343f372d8435713Dcb986dfd3F24606',
  trx: 'TGLSgFRYWpS93tFG487JpkanPDwxPYXBRF',
  usdt: 'TGLSgFRYWpS93tFG487JpkanPDwxPYXBRF',
  sol: 'Ekt268ajbmKTD3Ju3MG4KEKNadw4xNwym15UUGEh1FnS',
  ltc: 'ltc1q6kvfdd5dkw4xku4hrd50s0qf3t837ka2ejzz2z',
  doge: 'DFshGQTEDKEauCe2aGusVtbwytKVUT3vPR',
  ton: 'UQCBa1jaKtPo83L_8sgKhipP85dyamCJGkL0PDlGfhoPe9vI',
};

// Function to handle tip button click
document.getElementById('cryptoSelect').addEventListener('change', function () {
  const selectedCrypto = document.getElementById('cryptoSelect').value;
  const walletAddress = walletAddresses[selectedCrypto];
  if (selectedCrypto) {
    document.getElementById('walletAddress').innerText = walletAddress;
    document.getElementById('qrcode').classList.remove('d-none');
    document.getElementById('copyButton').classList.remove('d-none');
    document.getElementById('copyButton').innerText = 'Copy Address';
    //qrcode
    /*const qrCodeDiv = document.getElementById('qrcode');
    qrCodeDiv.innerHTML= ''; // Clear previous QR code
    const qrCode = new QRCode(qrCodeDiv, {
      text: walletAddress,
      width: 128,
      height: 128,
      colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });*/
   //带logo二维码
    const qrCodeDiv = document.getElementById('qrcode');
    qrCodeDiv.innerHTML = '';
    const icon = new Image();
    icon.onload = function () {
      var qrcode = new QRCode(qrCodeDiv, {
        text: walletAddress,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#FFFFFF",
        correctLevel: QRCode.CorrectLevel.H
      });
      imgQR(qrcode._oDrawing._elCanvas, this, 0.3)
    }
    icon.src = './static/icon/'+selectedCrypto+'.svg';
  } else {
    document.getElementById('walletAddress').innerText = '';
    document.getElementById('qrcode').classList.add('d-none');
    document.getElementById('copyButton').classList.add('d-none');
    document.getElementById('qrcode').innerText = '';
  }
});


// Function to handle copy button click
document.getElementById('copyButton').addEventListener('click', function () {
  const walletAddressText = document.getElementById('walletAddress');
  window.getSelection().removeAllRanges();
  window.getSelection().selectAllChildren(walletAddressText);
  document.execCommand("Copy");
  window.getSelection().removeAllRanges();
  document.getElementById('copyButton').innerText = 'Copied to Clipboard!';
});

function imgQR(qrCanvas, centerImage, factor) {
  var h = qrCanvas.height;
  //Center size
  var cs = h * factor;
  //Center offset
  var co = (h - cs) / 2;
  var ctx = qrCanvas.getContext("2d");
  ctx.drawImage(centerImage, 0, 0, centerImage.width, centerImage.height, co, co, cs, cs);
}
