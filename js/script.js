var typed = new Typed(".typing",{
    strings: ["","Web Designer", "Web Developer", "Research Scholar"],
    typeSpeed:100,
    BackSpeed:100,
    loop:true
})

const nav = document.querySelector(".nav"),
navlist = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i=0 ;i<totalNavList;i++){
    const a = navlist[i].querySelector("a");
    a.addEventListener("click", function(){
        for(let j=0 ; j<totalNavList;j++){
            navlist[j].querySelector("a").classList.remove("active");
        }
      this.classList.add("active")
      showSection(this);
    })
}
function showSection(element){
//     for(let i=0 ; i<totalSection;i++){
// allSection[i].classList.remove("active");
//     }
    const target=element.getAttribute("href").split("#")[1];
    document.querySelector("#"+ target).classList.add("active")
   
}