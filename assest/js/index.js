var typed = new Typed('.first-typed', {
    strings: ["WordPress", "Portfolio" ,"Online Store" , "Creative"],
    fadeOut: true,
    backSpeed: 100,
    loop: true,
    showCursor: false,
    typeSpeed: 100
  });


$(".fusion-panel-content").slideUp();
$(".head-fusion-panel").click(function(){
$(this).next().slideToggle(500);
if("rgb(33, 37, 41)"==$(this).css("color"))
$(this).css("color","green")
else
$(this).css("color","rgb(33, 37, 41)")

$(".fusion-panel-content").not($(this).next()).slideUp(400)
$(".head-fusion-panel").not($(this)).css("color","rgb(33, 37, 41)")

$(this).children().toggleClass("rotated")
$(".head-fusion-panel").children().not( $(this).children() ).removeClass("rotated");
})


// back to top 
window.addEventListener("scroll" ,()=>{
  let BackToTop = document.querySelector(".back-to-top")

  if(window.scrollY >=100)
    BackToTop.classList.add("active")
  else
    BackToTop.classList.remove("active")

  
  let footer = document.querySelector(".footer")
  let pathsvg = document.querySelector(".back-to-top svg path")
  var footerrect = footer.getBoundingClientRect();
  var pathsvgrect = pathsvg.getBoundingClientRect();

  if (pathsvgrect.bottom > footerrect.top) 
    pathsvg.style.color="#fff"
  else
    pathsvg.style.color="#000"
})


let btnsNavLinks = document.querySelectorAll(".design button.nav-link")
let TabPanes= document.querySelectorAll(".design .tab-pane")
btnsNavLinks.forEach(function(ele){
  ele.addEventListener("click",function(){
    // hide all tabPanes 
    TabPanes.forEach(function(e){
      e.classList.remove("active")
      e.classList.remove("show")
    })

    let myTap =document.querySelectorAll(`.${ele.getAttribute("dataTarget")}`)
    
    // show my tabPanes 
    myTap.forEach(function(e){
      e.classList.add("active")
      e.classList.add("show")
    })
    
  })
})









































































