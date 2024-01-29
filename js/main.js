// setting box 
let settingBox = document.querySelector(".setting-box")
let settingIcon = document.querySelector(".gear-icon")
let landing = document.querySelector(".landing-page")
let backgroundArray = ["Background-1.jpg" , "Background-2.png" ,"Background-4.jpg" , "Background-5.jpg"]
let btns = document.querySelectorAll(".setting-content .option-container .btn-shape")

let isRandom = true; 
if (localStorage.getItem("isRandom") === "true"){
  isRandom = true;
  document.querySelectorAll(".setting-content .background-option .btn-shape").forEach((ele) => {ele.classList.remove("btn-active")})
  document.querySelector(".setting-content .background-option .btn-shape.yes").classList.add("btn-active")

} else if (localStorage.getItem("isRandom") === "false") {
  isRandom = false;
  document.querySelectorAll(".setting-content .background-option .btn-shape").forEach((ele) => {ele.classList.remove("btn-active")})
  document.querySelector(" .setting-content .background-option .btn-shape.no").classList.add("btn-active")
}

  if (localStorage.getItem("bulletShow") === "true"){
    document.querySelector(".nav-bullets").style.display = "block"
    document.querySelectorAll(".setting-content .bullets-option .btn-shape").forEach((ele) => {ele.classList.remove("btn-active")})
    document.querySelector(".setting-content .bullets-option .btn-shape.yes").classList.add("btn-active")
  } else if (localStorage.getItem("bulletShow") === "false"){
    document.querySelector(".nav-bullets").style.display = "none"
    document.querySelectorAll(".setting-content .bullets-option .btn-shape").forEach((ele) => {ele.classList.remove("btn-active")})
    document.querySelector(".setting-content .bullets-option .btn-shape.no").classList.add("btn-active")
  }
 if (localStorage.getItem("bg-image")){
  landing.style.backgroundImage = localStorage.getItem("bg-image")
 }

settingIcon.onclick = () =>{
  settingBox.classList.toggle("opened")
  settingIcon.querySelector(".icon").classList.toggle("fa-spin")
  document.addEventListener("click" , (e) => {
    if (e.target.offsetParent !== null && e.target.offsetParent !== undefined){
      if (!e.target.offsetParent.classList.contains("setting-box")){
        settingBox.classList.remove('opened')
        settingIcon.querySelector(".icon").classList.remove("fa-spin")
      }
    }
  })
}
let colors = document.querySelectorAll(".setting-box .colors-list li")
if (localStorage.getItem("bg-color")){
  document.documentElement.style.setProperty('--Theme-color' , localStorage.getItem("bg-color"))
  for (color of colors ){
    if (color.dataset.color === localStorage.getItem('bg-color')) {
      color.classList.add("active")
    }else {
      color.classList.remove("active")
    }
  }
}
colors.forEach((e) => {
  e.addEventListener('click' , (e) => {
    colors.forEach((ele) => {
      ele.classList.remove("active")
    })
    e.target.classList.add("active")
    document.documentElement.style.setProperty('--Theme-color' , e.target.dataset.color)
    localStorage.setItem("bg-color" , e.target.dataset.color)
  })
  
})


let randomInterval;
function randomBackground() {
  if (isRandom === true){
    randomInterval = setInterval(() => {
      let random = Math.floor(Math.random() * backgroundArray.length)
      landing.style.backgroundImage = 'url("../imgs/'+backgroundArray[random]+'")'
     } ,2000)
  } else {
    clearInterval(randomInterval)
  }
}
randomBackground()

btns.forEach((span) => {
 span.addEventListener(("click") , (e) => {
    if (e.target.dataset.random === "yes"){
      e.target.parentElement.querySelectorAll(".btn-shape").forEach((ele) => {ele.classList.remove("btn-active")})
      e.target.classList.add("btn-active")
      if (e.target.parentElement.classList.contains("background-option")){
        isRandom = true;
        randomBackground()
        localStorage.setItem("isRandom" , true)
      } else if (e.target.parentElement.classList.contains("bullets-option")){
        localStorage.setItem("bulletShow" , true )
        document.querySelector(".nav-bullets").style.display = "block"
      }
    } else {
      e.target.parentElement.querySelectorAll(".btn-shape").forEach((ele) => {ele.classList.remove("btn-active")})
      e.target.classList.add("btn-active")
      if (e.target.parentElement.classList.contains("background-option")){
        isRandom = false;
        randomBackground()
        localStorage.setItem("isRandom" , false)
        localStorage.setItem("bg-image" , landing.style.backgroundImage )
      } else if (e.target.parentElement.classList.contains("bullets-option")){
        localStorage.setItem("bulletShow" , false )
        document.querySelector(".nav-bullets").style.display = "none"
      }

    }
 })
})

document.querySelector(".setting-box .rest-btn").onclick = () => {
  localStorage.clear()
  window.location.reload()
  
}


//  Our skills section
let skillsBar = document.querySelectorAll(".skill-box .progress span");
let skillsSection = document.querySelector(".our-skills .container");
window.onscroll = () => {
  let heightOfEle = skillsSection.offsetHeight;
  let eleYoffset = skillsSection.offsetTop;
  let heightOfPage = this.innerHeight
  let amountOfScrolling = this.scrollY
  if (amountOfScrolling > ((heightOfEle + eleYoffset) - (heightOfEle * .2 + heightOfPage ))){
    skillsBar.forEach((ele) => {
      ele.style.width = ele.dataset.width
    })
  }
  
}

// Gallery section
let imgs = document.querySelectorAll(".gallery .container .imgs-container img");

imgs.forEach((img) => {
  img.addEventListener(("click") , (e) => {
    let overlay = document.createElement("div")
    overlay.className = "overlay"
    document.body.appendChild(overlay)

    let popUp = document.createElement("div")
    popUp.className = "popup"
    let popUpImage = document.createElement("img")
    popUpImage.src = e.target.src
    popUp.appendChild(popUpImage)
    document.body.appendChild(popUp)

    if (img.alt !== null){
      let nameOfImage = document.createElement("h3");
      let altText = document.createTextNode(img.alt)
      nameOfImage.appendChild(altText)
      popUp.prepend(nameOfImage)
    }
    let closeBtn = document.createElement("div")
    let closeBtnText = document.createTextNode("X")
    closeBtn.appendChild(closeBtnText)
    closeBtn.className = "close-btn"
    popUp.prepend(closeBtn)
    closeBtn.addEventListener(("click") , () => {
      popUp.remove()
      overlay.remove()
    })

  } )
})

// nav bullets section
let navBullets = document.querySelectorAll(".nav-bullets .bullet-container");
let navLinks = document.querySelectorAll(".links-section .link a")

function scroll(links) {
  links.forEach((link) => {
  link.addEventListener(("click") , (e) => {
    e.preventDefault();
    let ele = document.querySelector(e.target.dataset.section)
    ele.scrollIntoView({behavior: "smooth"})
  })
})
}
scroll(navLinks)
scroll(navBullets)


// menu button 
let menuBtn = document.querySelector(".landing-page .header-container .menu");
let linksSection = document.querySelector(".landing-page .links-section")
menuBtn.addEventListener(("click") , (e) => {
  e.stopPropagation()
  if (menuBtn.classList.contains("opened")){
    menuBtn.classList.remove("opened");
    linksSection.classList.remove("opened");
  } else if (!menuBtn.classList.contains("opened")){
    menuBtn.classList.add("opened");
    linksSection.classList.add("opened");
  }
  
})

linksSection.onclick = function (e) {
  e.stopPropagation()
}
document.addEventListener(("click") , (e) => {
  if (e.target != menuBtn && e.target != linksSection){
    if (menuBtn.classList.contains("opened") && linksSection.classList.contains("opened")){
      menuBtn.classList.remove("opened");
      linksSection.classList.remove("opened");
    }
  }
})