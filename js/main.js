function randomBackground(){!0===isRandom?randomInterval=setInterval(()=>{let e=Math.floor(Math.random()*backgroundArray.length);landing.style.backgroundImage='url("imgs/'+backgroundArray[e]+'")'},7e3):clearInterval(randomInterval)}function scroll(e){e.forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();let t=document.querySelector(e.target.dataset.section);t.scrollIntoView({behavior:"smooth"})})})}let settingBox=document.querySelector(".setting-box"),settingIcon=document.querySelector(".gear-icon"),landing=document.querySelector(".landing-page"),backgroundArray=["Background-1.jpg","Background-2.jpg","Background-4.jpg","Background-5.jpg"],btns=document.querySelectorAll(".setting-content .option-container .btn-shape");window.addEventListener("load",()=>{document.querySelector(".loader-container").style.display="none"});let isRandom=!1;"true"===localStorage.getItem("isRandom")?(isRandom=!0,document.querySelectorAll(".setting-content .background-option .btn-shape").forEach(e=>{e.classList.remove("btn-active")}),document.querySelector(".setting-content .background-option .btn-shape.yes").classList.add("btn-active")):"false"===localStorage.getItem("isRandom")&&(isRandom=!1,document.querySelectorAll(".setting-content .background-option .btn-shape").forEach(e=>{e.classList.remove("btn-active")}),document.querySelector(" .setting-content .background-option .btn-shape.no").classList.add("btn-active")),"true"===localStorage.getItem("bulletShow")?(document.querySelector(".nav-bullets").style.display="block",document.querySelectorAll(".setting-content .bullets-option .btn-shape").forEach(e=>{e.classList.remove("btn-active")}),document.querySelector(".setting-content .bullets-option .btn-shape.yes").classList.add("btn-active")):"false"===localStorage.getItem("bulletShow")&&(document.querySelector(".nav-bullets").style.display="none",document.querySelectorAll(".setting-content .bullets-option .btn-shape").forEach(e=>{e.classList.remove("btn-active")}),document.querySelector(".setting-content .bullets-option .btn-shape.no").classList.add("btn-active")),localStorage.getItem("bg-image")&&(landing.style.backgroundImage=localStorage.getItem("bg-image")),settingIcon.onclick=(()=>{settingBox.classList.toggle("opened"),settingIcon.querySelector(".icon").classList.toggle("fa-spin"),document.addEventListener("click",e=>{null!==e.target.offsetParent&&void 0!==e.target.offsetParent&&(e.target.offsetParent.classList.contains("setting-box")||(settingBox.classList.remove("opened"),settingIcon.querySelector(".icon").classList.remove("fa-spin")))})});let randomInterval,colors=document.querySelectorAll(".setting-box .colors-list li");if(localStorage.getItem("bg-color"))for(color of(document.documentElement.style.setProperty("--Theme-color",localStorage.getItem("bg-color")),colors))color.dataset.color===localStorage.getItem("bg-color")?color.classList.add("active"):color.classList.remove("active");colors.forEach(e=>{e.addEventListener("click",e=>{colors.forEach(e=>{e.classList.remove("active")}),e.target.classList.add("active"),document.documentElement.style.setProperty("--Theme-color",e.target.dataset.color),localStorage.setItem("bg-color",e.target.dataset.color)})}),randomBackground(),btns.forEach(e=>{e.addEventListener("click",e=>{"yes"===e.target.dataset.random?(e.target.parentElement.querySelectorAll(".btn-shape").forEach(e=>{e.classList.remove("btn-active")}),e.target.classList.add("btn-active"),e.target.parentElement.classList.contains("background-option")?(isRandom=!0,randomBackground(),localStorage.setItem("isRandom",!0)):e.target.parentElement.classList.contains("bullets-option")&&(localStorage.setItem("bulletShow",!0),document.querySelector(".nav-bullets").style.display="block")):(e.target.parentElement.querySelectorAll(".btn-shape").forEach(e=>{e.classList.remove("btn-active")}),e.target.classList.add("btn-active"),e.target.parentElement.classList.contains("background-option")?(isRandom=!1,randomBackground(),localStorage.setItem("isRandom",!1),localStorage.setItem("bg-image",landing.style.backgroundImage)):e.target.parentElement.classList.contains("bullets-option")&&(localStorage.setItem("bulletShow",!1),document.querySelector(".nav-bullets").style.display="none"))})}),document.querySelector(".setting-box .rest-btn").onclick=(()=>{localStorage.clear(),window.location.reload()});let skillsBar=document.querySelectorAll(".skill-box .progress span"),skillsSection=document.querySelector(".our-skills .container");window.onscroll=(()=>{let e=skillsSection.offsetHeight,t=skillsSection.offsetTop,o=this.innerHeight,n=this.scrollY;n>e+t-(.2*e+o)&&skillsBar.forEach(e=>{e.style.width=e.dataset.width})});let imgs=document.querySelectorAll(".gallery .container .imgs-container img");imgs.forEach(e=>{e.addEventListener("click",t=>{let o=document.createElement("div");o.className="overlay",document.body.appendChild(o);let n=document.createElement("div");n.className="popup";let l=document.createElement("img");if(l.src=t.target.src,n.appendChild(l),document.body.appendChild(n),null!==e.alt){let t=document.createElement("h3"),o=document.createTextNode(e.alt);t.appendChild(o),n.prepend(t)}let a=document.createElement("div"),c=document.createTextNode("X");a.appendChild(c),a.className="close-btn",n.prepend(a),a.addEventListener("click",()=>{n.remove(),o.remove()})})});let navBullets=document.querySelectorAll(".nav-bullets .bullet-container"),navLinks=document.querySelectorAll(".links-section .link a");scroll(navLinks),scroll(navBullets);let menuBtn=document.querySelector(".landing-page .header-container .menu"),linksSection=document.querySelector(".landing-page .links-section");menuBtn.addEventListener("click",e=>{e.stopPropagation(),menuBtn.classList.contains("opened")?(menuBtn.classList.remove("opened"),linksSection.classList.remove("opened")):menuBtn.classList.contains("opened")||(menuBtn.classList.add("opened"),linksSection.classList.add("opened"))}),linksSection.onclick=function(e){e.stopPropagation()},document.addEventListener("click",e=>{e.target!=menuBtn&&e.target!=linksSection&&menuBtn.classList.contains("opened")&&linksSection.classList.contains("opened")&&(menuBtn.classList.remove("opened"),linksSection.classList.remove("opened"))});