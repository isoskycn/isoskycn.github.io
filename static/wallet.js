// Wallet addresses
const walletAddresses = {
    btc_Legacy: '17rDeuueLcYDv7KLPBHPnFbqi3sdiwLndv',
    btc_P2SH: '3DfjJsAc9sAMty92RMC5B8jTTe3xHEfNUJ',
    btc_Segwit: 'bc1qacrnrt0nklhvdnjnc609t905pm9mdxr66y0v0c',
    btc_P2TR: 'bc1prtvwvr7lqwmyh82rq83vq8dvyx9u366yma8d84lqytdgl6l6mtfsfuugfd',
    eth: '0xa28001370cBa9ceF9E0190D48394d50A43F2f59A',
    bnb: '0xa28001370cBa9ceF9E0190D48394d50A43F2f59A',
    trx: 'TUdrq6k6edxDyKt3gprRd2ak9Z2WL9qptD',
    sol: '2K1ANUjKLjojMsUr3kguFRCtuAEpFZfCSE5bDjdoA3bP',
    ltc: 'ltc1qvql4np5xej960cjz2aqlvpyhzuh44e4qpreavu',
    bch: 'qpx03gy5u92uk7rgtt3arem78hj7a47uj5uwg99dy5',
    doge: 'DPDjZui2rnFSz9cVzCGB9SR4vW7F8r5znu',
  };

  // Function to handle tip button click
  document.getElementById('cryptoSelect').addEventListener('change', function() {
    const selectedCrypto = document.getElementById('cryptoSelect').value;
    const walletAddress = walletAddresses[selectedCrypto];
    if (selectedCrypto) {
      document.getElementById('walletAddress').innerText = walletAddress;
      document.getElementById('qrcode').classList.remove('d-none');
      document.getElementById('copyButton').classList.remove('d-none');
      document.getElementById('copyButton').innerText = 'Copy Address';
      //qrcode
      const qrCodeDiv = document.getElementById('qrcode');
      qrCodeDiv.innerHTML= ''; // Clear previous QR code
      const qrCode = new QRCode(qrCodeDiv, {
        text: walletAddress,
        width: 128,
        height: 128,
        colorDark : "#000000",
	    colorLight : "#ffffff",
	    correctLevel : QRCode.CorrectLevel.H
    });
    } else {
      document.getElementById('walletAddress').innerText = '';
      document.getElementById('qrcode').classList.add('d-none');
      document.getElementById('copyButton').classList.add('d-none');
      document.getElementById('qrcode').innerText = '';
      }
  });


  // Function to handle copy button click
  document.getElementById('copyButton').addEventListener('click', function() {
    const walletAddressText = document.getElementById('walletAddress');
    window.getSelection().removeAllRanges();
    window.getSelection().selectAllChildren(walletAddressText);
    document.execCommand("Copy");
    window.getSelection().removeAllRanges();
    document.getElementById('copyButton').innerText = 'Copied to Clipboard!';
  });