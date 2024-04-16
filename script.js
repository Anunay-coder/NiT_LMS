// Solution for hovering on nav-list 
const heading = document.getElementById('heading'); //Don't change it to get element by ID, that'll not work
const navItems = document.querySelectorAll('.nav-list li');

navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        heading.style.position = 'unset';
    });

    item.addEventListener('mouseout', () => {
        heading.style.position = 'sticky';
    });
});

//Scroll animation

const observer=new IntersectionObserver((entries)=>{  // IntersectionObserver-> this is for checking if the content is visoble or not
    entries.forEach((entry)=>{
        //console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));

// FOR RESPONSIVE NAVBAR
let menuToggle=document.querySelector('.menuToggle');
let header=document.querySelector('.navBar');
menuToggle.onclick=function(){
    header.classList.toggle('active');
}