let linksofnav_subject=document.querySelectorAll(".nav_subject a");
let bodyId=document.querySelector("body").id;
for(let link of linksofnav_subject){
    if(link.dataset.active==bodyId){
        link.classList.add("active");
    }
}

let linksofnav_content=document.querySelectorAll(".nav_content a");
// console.log(linksofnav_content);
for(let link of linksofnav_content){
    if(link.dataset.active==bodyId){
        link.classList.add("active");
    }
}


// function highlight(id){
//     console.log(id);
//     for(let link of linksofnav_content){
//         if(id!=link){
//             id.classList.remove("active");
//         }
//     }
//     `${id}`.classList.add('active');
// }

function highlight(id){
    //console.log(id);
    const linksofnav_content = ['topics', 'pdfs', 'videolectures', 'pyq', 'doubtsolve']; //we cannot access this content from
    //the above linksofnav_content variable, because this will give something extra other than what we require

    for(let linkId of linksofnav_content){
        const link = document.getElementById(linkId);
        if(linkId !== id){
            link.classList.remove("active");
        }
    }
    const currentLink = document.getElementById(id);
    currentLink.classList.add("active");
}

// For responsive nav_subject
let menuToggle1=document.querySelector('.menuToggle1');
let navbar_subj=document.querySelector('.navbar_subj');
menuToggle1.onclick=function(){
    navbar_subj.classList.toggle('active');// The above active class is not same as this active class, they are not colliding because of media query(one fire at normal, 2nd one fire at media query)
    // console.log("ya");
}
let menuToggle2=document.querySelector('.menuToggle2');
let nav_topics=document.querySelector('.nav_topics');
menuToggle2.onclick=function(){
    nav_topics.classList.toggle('active');
    // console.log("ya");
}