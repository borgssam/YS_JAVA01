document.addEventListener("DOMContentLoaded", function () {
  // 필요한 DOM 요소들을 선택하여 변수에 할당합니다.
  const hoverImage = document.querySelector(".hohover.hover");
  const rightMenuBox = document.querySelector(".right_menu_box");
  const menuContainer = document.querySelector(".menu-container");
  const lowPriceBtn = document.getElementById("lowPrice");
  const highPriceBtn = document.getElementById("highPrice");
  const foodContainer = document.querySelector(".food");
  const iframeContainer = document.getElementById("iframeContainer");
  const productIframe = document.getElementById("productIframe");
  const closeIframeBtn = document.getElementById("closeIframe");
  
  // 메뉴를 표시하거나 숨기는 함수를 정의합니다.
  function toggleMenu(show) {
    rightMenuBox.style.display = show ? "block" : "none";
  }

  // 호버 이미지와 오른쪽 메뉴 박스에 마우스 오버 이벤트 리스너를 추가합니다.
  [hoverImage, rightMenuBox].forEach((el) =>
    el.addEventListener("mouseover", () => toggleMenu(true))
  );
  // 메뉴 컨테이너와 오른쪽 메뉴 박스에 마우스 리브 이벤트 리스너를 추가합니다.
  [menuContainer, rightMenuBox].forEach((el) =>
    el.addEventListener("mouseleave", () => toggleMenu(false))
  );
  // 메뉴 컨테이너 클릭 시 메뉴 토글 기능을 추가합니다.
  menuContainer.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu(rightMenuBox.style.display !== "block");
  });

  // 메뉴 외부 클릭 시 메뉴를 닫는 이벤트 리스너를 추가합니다.
  document.addEventListener("click", (e) => {
    if (!menuContainer.contains(e.target)) toggleMenu(false);
  });

  // iframe 내용을 생성하는 함수를 정의합니다.
  function createIframeContent(product) {
    return `
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          .close-btn { font-size: 24px; cursor: pointer; }
          .color-option { display: inline-block; width: 20px; height: 20px; margin-right: 5px; cursor: pointer; }
          .button { padding: 10px 20px; cursor: pointer; }
          .buy-btn { background-color: #000; color: #fff; border: none; }
          .cart-btn { background-color: #fff; color: #000; border: 1px solid #000; }
        </style>
      </head>
      <body>
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <h2 style="margin: 0;">옵션 선택</h2>
            <span class="close-btn" id="iframeCloseBtn">&times;</span>
          </div>
          <hr style="margin: 10px 0;">
          <p><strong>${product.name}</strong></p>
          <hr style="margin: 10px 0;">
          <div style="display: flex; align-items: center; margin-bottom: 10px;">
            <img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px; margin-right: 10px;">
            <div>
              <p style="margin: 0;"></p>
              <div>
                <span class="color-option" style="background-color: #FFFFFF; border: 1px solid #000;"></span>
                <span class="color-option" style="background-color: #000000;"></span>
                <span class="color-option" style="background-color: #8B4513;"></span>
              </div>
              <p style="color: blue; font-size: 12px;">[필수] 옵션을 선택해 주세요</p>
            </div>
          </div>
          <p style="color: red; font-size: 12px;">! 위 옵션선택 박스를 선택하시면 아래에 상품이 추가됩니다.</p>
          <hr style="margin: 10px 0;">
          <p>총 상품금액(수량): <span id="totalPrice">${product.price}</span> (<span id="quantity">1</span>개)</p>
          <div style="display: flex; justify-content: space-between; margin-top: 20px;">
            <button class="button buy-btn">바로구매하기</button>
            <button class="button cart-btn">장바구니 담기</button>
          </div>
        </div>
        <script>
          let selectedColor = '';
          let quantity = 1;
          const price = parseInt('${product.price}'.replace(/[^\d]/g, ''));
          
          document.querySelectorAll('.color-option').forEach(option => {
            option.addEventListener('click', function() {
              selectedColor = this.style.backgroundColor;
              document.querySelector('p[style="color: blue; font-size: 12px;"]').textContent = '선택된 색상: ' + selectedColor;
            });
          });

          document.querySelector('.buy-btn').addEventListener('click', function() {
            if (!selectedColor) {
              alert('색상을 선택해주세요.');
              return;
            }
            alert('구매가 완료되었습니다!');
          });

          document.querySelector('.cart-btn').addEventListener('click', function() {
            if (!selectedColor) {
              alert('색상을 선택해주세요.');
              return;
            }
            quantity++;
            document.getElementById('quantity').textContent = quantity;
            document.getElementById('totalPrice').textContent = (price * quantity).toLocaleString() + '원';
            alert('장바구니에 추가되었습니다!');
          });

          document.getElementById('iframeCloseBtn').addEventListener('click', function() {
            window.parent.postMessage('closeIframe', '*');
          });
        </script>
      </body>
      </html>
    `;
  }

  // 아이콘 클릭 이벤트를 처리하는 함수를 정의합니다.
  function handleIconClick(e) {
    if (e.target.classList.contains("fa-suitcase")) {
      e.preventDefault();
      const icon = e.target;
      const product = {
        url: icon.closest("a").href,
        name: icon.dataset.productName,
        desc: icon.dataset.productDesc,
        price: icon.dataset.productPrice,
        image: icon.dataset.productImage
      };

      productIframe.srcdoc = createIframeContent(product);
      iframeContainer.style.display = "block";
    }
  }

  // iframe을 닫는 함수를 정의합니다.
  function closeIframe() {
    iframeContainer.style.display = "none";
    productIframe.srcdoc = "";
  }

  // 문서 전체에 아이콘 클릭 이벤트 리스너를 추가합니다.
  document.body.addEventListener("click", handleIconClick);
  
  // iframe 닫기 버튼에 이벤트 리스너를 추가합니다.
  if (closeIframeBtn) {
    closeIframeBtn.addEventListener("click", closeIframe);
  } else {
    console.log("Close iframe button not found");
  }

  // iframe에서 보내는 메시지를 처리합니다.
  window.addEventListener('message', function(event) {
    if (event.data === 'closeIframe') {
      closeIframe();
    }
  });

  // 상품을 가격순으로 정렬하는 함수를 정의합니다.
  function sortProducts(ascending = true) {
    console.log("Sorting products..."); // 정렬 시작 로그
    const foodImg = foodContainer.querySelector(".food_img");
    if (!foodImg) {
      console.log("food_img not found"); // food_img 요소가 없을 경우 로그
      return;
    }

    const products = Array.from(foodImg.children);
    console.log(`Found ${products.length} products`); // 찾은 상품 수 로그

    products.sort((a, b) => {
      // 가격을 추출하는 내부 함수를 정의합니다.
      const getPrice = el => {
        const priceEl = el.querySelector("p:last-child");
        if (!priceEl) {
          console.log("Price element not found", el); // 가격 요소를 찾지 못한 경우 로그
          return 0;
        }
        const priceText = priceEl.textContent.trim();
        const price = parseInt(priceText.replace(/[^\d]/g, ''));
        console.log(`Extracted price: ${price} from ${priceText}`); // 추출한 가격 로그
        return price;
      };
      const priceA = getPrice(a);
      const priceB = getPrice(b);
      return ascending ? priceA - priceB : priceB - priceA;
    });

    // 정렬된 상품들을 다시 DOM에 추가합니다.
    foodImg.innerHTML = "";
    products.forEach((product) => {
      foodImg.appendChild(product);
    });
    console.log("Sorting completed"); // 정렬 완료 로그
  }

  // 낮은 가격순 정렬 버튼에 이벤트 리스너를 추가합니다.
  if (lowPriceBtn) {
    lowPriceBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Low price button clicked"); // 버튼 클릭 로그
      sortProducts(true);
    });
  } else {
    console.log("Low price button not found"); // 버튼을 찾지 못한 경우 로그
  }

  // 높은 가격순 정렬 버튼에 이벤트 리스너를 추가합니다.
  if (highPriceBtn) {
    highPriceBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("High price button clicked"); // 버튼 클릭 로그
      sortProducts(false);
    });
  } else {
    console.log("High price button not found"); // 버튼을 찾지 못한 경우 로그
  }

  // 페이지 로드 후 1초 뒤에 초기 정렬을 수행합니다. (동적 로딩된 콘텐츠 대응)
  // setTimeout(() => {
  //   console.log("Performing initial sort"); // 초기 정렬 시작 로그
  //   sortProducts(true);
  // }, 1000);
});