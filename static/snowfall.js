    // 更新倒计时时钟
    function updateCountdown() {
      var now = new Date();
      var targetDate = new Date("2026-12-01 09:00");
      var timeDiff = targetDate.getTime() - now.getTime();
      
      var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      
      var countdownElement = document.getElementById("countdown");
      countdownElement.textContent = days + " Days " + hours + " hours " + minutes + " minutes " + seconds + " seconds";
    }
    
    // 每秒钟更新倒计时时钟
    setInterval(updateCountdown, 1000);

    // 下雪背景效果
    function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = Math.random() * window.innerWidth + 'px';
      snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
      snowflake.style.opacity = Math.random();
      snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
      //const randomColor = getRandomColor();
      //snowflake.style.backgroundColor = randomColor;
      //const slogans = ["Bitcoin","Ethereum","BNB Chain","Solana","Tron","Dogecoin"];
      //snowflake.innerHTML = slogans[Math.floor(Math.random() * slogans.length)];
      const data = ['static/png/BTC.png',
                    'static/png/BCH.png',
                    'static/png/ETH.png',
                    'static/png/BNB.png',
                    'static/png/TRX.png',
                    'static/png/USDT.png',
                    'static/png/SOL.png',
                    'static/png/DOGE.png',
                  ];

      var img = data[Math.floor(Math.random() * data.length)];
      snowflake.innerHTML =`<img src="${img}" height="32" width="32">`;
      return snowflake;
    }
	
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function snowfall() {
      const snowContainer = document.getElementById('snow-container');
      const numSnowflakes = 50; // Adjust the number of snowflakes here

      for (let i = 0; i < numSnowflakes; i++) {
        const snowflake = createSnowflake();
        snowContainer.appendChild(snowflake);
      }
    }
    snowfall();
