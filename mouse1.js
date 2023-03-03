document.addEventListener("DOMContentLoaded", function() {
    let count = 0;   
    const value = document.querySelector("#value");
    const btns = document.querySelectorAll(".btnop");
   
    btns.forEach(function (btnop) {
      btnop.addEventListener("mouseout", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("btn1")) {
          count--;
        } else if (styles.contains("btn3")){
          count++;
        } else {
          count = 0 ;
        } 
        if (count > 0 ) {
          value.style.color ="#b5e7f4";
        }
        if (count < 0 ) {
          value.style.color ="#977C79";
        }
        if (count === 0 ) {
          value.style.color ="#fff"; 
        }
        value.textContent = count;
      });
    });
  });
  