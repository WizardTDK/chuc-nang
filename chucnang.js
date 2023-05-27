
//đổi font chữ
function setFont(fontName) {
    var element = document.getElementById('chuhienthi');
    element.style.fontFamily = fontName;
  }
  //thêm class active
  function toggleActiveClass(event) {
    var fontname = document.getElementsByClassName("custom-font");
    
    for (var i = 0; i < fontname.length; i++) {
      if (fontname[i] === event.currentTarget) {
        fontname[i].classList.add("active");
      }
      else 
      {
        fontname[i].classList.remove("active");
      }
    }
  }
  
  function toggleActiveClass1(event) {
    var colorname = document.getElementsByClassName("custom-color");
    
    for (var i = 0; i < colorname.length; i++) {
      if (colorname[i] === event.currentTarget) {
        colorname[i].classList.add("active");
      }
      else 
      {
        colorname[i].classList.remove("active");
      }
    }
  }
  function toggleClass() {
    let chuhienthi = document.querySelector("#chuhienthi");
    chuhienthi.classList.toggle("active");
  }
  
//thay thế hiển thị chữ
  function replaceText() {
    var textareaValue = document.getElementById('nhaptext').value;
    var element = document.getElementById('chuhienthi');
    element.innerText = textareaValue;
  }
  //tạo tab
  document.addEventListener("DOMContentLoaded", function() {
    // Mặc định hiển thị tab đầu tiên khi trang được tải
    document.getElementById("tab1").classList.add("show");
  });
  
  function openTab(evt, tabName) {
    var i, tabContent, tabLinks;
  
    // Ẩn tất cả các tab content
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
    }
  
    // Xóa active class trên tất cả các tab links
    tabLinks = document.getElementsByClassName("tab");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("active"); 
    }
    for (var i = 0; i < tabLinks.length; i++) {
      if (tabLinks[i] === evt.currentTarget) {
        tabLinks[i].classList.remove("not-active");
      } else {
        tabLinks[i].classList.add("not-active");
      }
    }
    
    // Hiển thị tab content được chọn
    document.getElementById(tabName).classList.add("show");
  
    // Thêm active class vào tab link được chọn
    evt.currentTarget.classList.add("active");
  }
  
  //đổi màu
  function changeTextColor(color) {
    var chuhienthi = document.getElementById("chuhienthi");
    chuhienthi.style.color = color;
  }
  const maushadow = [
"rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(255, 253, 207) 0px 0px 8px, rgb(255, 253, 207) 0px 0px 12px, rgb(255, 253, 207) 0px 0px 16px, rgb(255, 253, 207) 0px 0px 22px, rgb(255, 253, 207) 0px 0px 30px;",
"rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(225, 227, 230) 0px 0px 8px, rgb(225, 227, 230) 0px 0px 12px, rgb(225, 227, 230) 0px 0px 16px, rgb(225, 227, 230) 0px 0px 22px, rgb(225, 227, 230) 0px 0px 30px;",
"rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(255, 249, 124) 0px 0px 8px, rgb(255, 249, 124) 0px 0px 12px, rgb(255, 249, 124) 0px 0px 16px, rgb(255, 249, 124) 0px 0px 22px, rgb(255, 249, 124) 0px 0px 30px;",
"rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(255, 214, 46) 0px 0px 8px, rgb(255, 214, 46) 0px 0px 12px, rgb(255, 214, 46) 0px 0px 16px, rgb(255, 214, 46) 0px 0px 22px, rgb(255, 214, 46) 0px 0px 30px;",
"rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(255, 141, 2) 0px 0px 8px, rgb(255, 141, 2) 0px 0px 12px, rgb(255, 141, 2) 0px 0px 16px, rgb(255, 141, 2) 0px 0px 22px, rgb(255, 141, 2) 0px 0px 30px;",
"rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(255, 117, 117) 0px 0px 8px, rgb(255, 117, 117) 0px 0px 12px, rgb(255, 117, 117) 0px 0px 16px, rgb(255, 117, 117) 0px 0px 22px, rgb(255, 117, 117) 0px 0px 30px;",
"rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(255, 42, 77) 0px 0px 8px, rgb(255, 42, 77) 0px 0px 12px, rgb(255, 42, 77) 0px 0px 16px, rgb(255, 42, 77) 0px 0px 22px, rgb(255, 42, 77) 0px 0px 30px;",
"rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(255, 144, 255) 0px 0px 8px, rgb(255, 144, 255) 0px 0px 12px, rgb(255, 144, 255) 0px 0px 16px, rgb(255, 144, 255) 0px 0px 22px, rgb(255, 144, 255) 0px 0px 30px;",
"rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(234, 164, 255) 0px 0px 8px, rgb(234, 164, 255) 0px 0px 12px, rgb(234, 164, 255) 0px 0px 16px, rgb(234, 164, 255) 0px 0px 22px, rgb(234, 164, 255) 0px 0px 30px;",
"rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(255, 92, 232) 0px 0px 8px, rgb(255, 92, 232) 0px 0px 12px, rgb(255, 92, 232) 0px 0px 16px, rgb(255, 92, 232) 0px 0px 22px, rgb(255, 92, 232) 0px 0px 30px;",
"rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(140, 89, 255) 0px 0px 8px, rgb(140, 89, 255) 0px 0px 12px, rgb(140, 89, 255) 0px 0px 16px, rgb(140, 89, 255) 0px 0px 22px, rgb(140, 89, 255) 0px 0px 30px;",
"rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(2, 116, 252) 0px 0px 8px, rgb(2, 116, 252) 0px 0px 12px, rgb(2, 116, 252) 0px 0px 16px, rgb(2, 116, 252) 0px 0px 22px, rgb(2, 116, 252) 0px 0px 30px;",
"rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(99, 170, 255) 0px 0px 8px, rgb(99, 170, 255) 0px 0px 12px, rgb(99, 170, 255) 0px 0px 16px, rgb(99, 170, 255) 0px 0px 22px, rgb(99, 170, 255) 0px 0px 30px;",
"rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(144, 220, 255) 0px 0px 8px, rgb(144, 220, 255) 0px 0px 12px, rgb(144, 220, 255) 0px 0px 16px, rgb(144, 220, 255) 0px 0px 22px, rgb(144, 220, 255) 0px 0px 30px;",
"rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(36, 183, 222) 0px 0px 8px, rgb(36, 183, 222) 0px 0px 12px, rgb(36, 183, 222) 0px 0px 16px, rgb(36, 183, 222) 0px 0px 22px, rgb(36, 183, 222) 0px 0px 30px;",
"rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(128, 255, 217) 0px 0px 8px, rgb(128, 255, 217) 0px 0px 12px, rgb(128, 255, 217) 0px 0px 16px, rgb(128, 255, 217) 0px 0px 22px, rgb(128, 255, 217) 0px 0px 30px;",
"rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(133, 255, 170) 0px 0px 8px, rgb(133, 255, 170) 0px 0px 12px, rgb(133, 255, 170) 0px 0px 16px, rgb(133, 255, 170) 0px 0px 22px, rgb(133, 255, 170) 0px 0px 30px;",
"rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(11, 215, 72) 0px 0px 8px, rgb(11, 215, 72) 0px 0px 12px, rgb(11, 215, 72) 0px 0px 16px, rgb(11, 215, 72) 0px 0px 22px, rgb(11, 215, 72) 0px 0px 30px;"];
  const chuhienthi = document.getElementById("chuhienthi");
  let currentColor;
  
  const bulbcolor = [
    "rgb(255, 253, 207)",
    "rgb(225, 227, 230)",
    "rgb(255, 249, 124)",
    "rgb(255, 214, 46)",
    "rgb(255, 141, 2)",
    "rgb(255, 117, 117)",
    "rgb(255, 42, 77)",
    "rgb(255, 144, 255)",
    "rgb(234, 164, 255)",
    "rgb(255, 92, 232)",
    "rgb(140, 89, 255)",
    "rgb(2, 116, 252)",
    "rgb(99, 170, 255)",
    "rgb(144, 220, 255)",
    "rgb(36, 183, 222)",
    "rgb(128, 255, 217)",
    "rgb(133, 255, 170)",
    "rgb(11, 215, 72)"]
    function renderLightBulb(color){
        // return '<p class="custom-color fa fa-lightbulb-o" onClick="changeTextColor(color),toggleActiveClass1(event)" style="--bg-custom:$(color)" aria-hidden="true"></p>';
        return '<p>hahaha</p>'
    }
    const colorEl = bulbcolor.map((color) => renderLightBulb(color)).join("");
    const mauchu = document.getElementById("mauchu");
    if(mauchu)
    {
        mauchu.innerHTML = colorEl;
    }