// script.js

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
  
    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);
        window.scrollTo({
          top: target.offsetTop - 20,
          behavior: "smooth"
        });
      });
    });
  
    // 可选：夜间模式切换
    const toggle = document.createElement('button');
    toggle.textContent = '夜间模式';
    toggle.style.position = 'fixed';
    toggle.style.bottom = '20px';
    toggle.style.right = '20px';
    toggle.style.padding = '10px';
    toggle.style.background = '#2c3e50';
    toggle.style.color = 'white';
    toggle.style.border = 'none';
    toggle.style.borderRadius = '5px';
    toggle.style.cursor = 'pointer';
    document.body.appendChild(toggle);
  
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  });
  