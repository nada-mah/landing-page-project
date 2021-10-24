/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/
let sectionNo = document.querySelectorAll("section");
let ul = document.querySelector('#navbar__list');
/**
 * Define Global Variables
 * 
*/

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for(var i=0;i<sectionNo.length;i++){
    
const newLi = document.createElement("li");
var nam =sectionNo.item(i).getAttribute("data-nav");
newLi.textContent=" "+nam;
newLi.classList.add('menu__link');
newLi.setAttribute('id',i);
ul.appendChild(newLi);

    newLi.addEventListener("click",()=>{
        
        scrollFunc (newLi);
    })
}

function scrollFunc (list){
    
  let index= list.getAttribute('id');
  let Sid= sectionNo.item(index).getAttribute('id');
  
   document.getElementById(Sid).scrollIntoView({behavior: "smooth", })
}


// Add class 'active' to section when near top of viewport
let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 0.5
  }
  
  let observer = new IntersectionObserver(callback, options);
  sectionNo.forEach(section=>{
      observer.observe(section);
  })


 function callback(entries,observer){
    entries.forEach(entry =>{
        //removes active class
        
        if(entry.target.classList.contains("your-active-class")){
            entry.target.classList.remove("your-active-class")
        }
        //adds active class to section in veiw
        if(entry.isIntersecting){
            entry.target.classList.add("your-active-class")
            
        
        }
    })
  }
