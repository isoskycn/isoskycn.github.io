// Wallet addresses
const walletAddresses = {
    btc_Legacy: '1MvQQRuFukiSvhrdJMJsABHFFdnbm5DNAQ',
    btc_P2SH: '3QSpkGkvs5UHthtuK5m6GAjHsAxAMLSYRd',
    btc_Segwit: 'bc1qngtt2xc606rhyyrncydk2e4ytl5a6gmt28567g',
    btc_TaprootB: 'bc1p073832uagnmeyfxhm2vc052j2eq7adjxk4l44tvjuuvnks2xa0sq8s65ln',
    eth: '0x9174A67bAc2fFa02d805c30499de0422B730B661',
    bnb: '0x9174A67bAc2fFa02d805c30499de0422B730B661',
    trx: 'TYaFC4npndW6MgxFMdHdqYG1FWhSUST7K2',
    sol: '8F61BxD7PpCZo1h9AEa8HobfmXUTPf1gxY36YVfj1bw4',
    ltc: 'LUKyX2CVYPpcgrEaLbtWBobFRgF1VZxCLX',
    bch: 'bitcoincash:qr4tmyjezwqe2ugezwmcv699s089d906ng2mav6d7g',
    doge: 'DBNuG2wf4Mvv4Tmif8qxfm1nWSAKCRWs9E',
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
    })
    
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
    const range = document.createRange();
    range.selectNode(walletAddressText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    document.getElementById('copyButton').innerText = 'Copied to Clipboard!';
  });