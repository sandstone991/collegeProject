/****************************************************************************************************************************************************************/
//Dynamic Section addition & active status & scroll to top 


//Create an object node list of all sections on the page
const sections = document.querySelectorAll('section');
//Creating a var to hold the unordered list
const unorderedList = document.querySelector('#navbar__list');
//Creating a document fragment for performence
const documentFragment = document.createDocumentFragment();
//Creating a variable for the scroll to top button
 const btn = document.querySelector(".button-top-page");
 const pageTop = document.querySelector('.main__hero');

//Creates Sections
function createSections(){
    sections.forEach(section => {
        //creating new list
        const listItem = document.createElement('li');
     
        //creating new anchor
        const link = document.createElement('a');
        //giving the anchor a class for css modficiations
        link.classList.add('menu__link');
        //Setting text to the dat-* attribute   
        const linkText = section.getAttribute('data-nav');
        //Giving the anchor that text
        link.textContent = linkText;
        listItem.addEventListener('click', () => {section.scrollIntoView({behavior: 'smooth'})});
        //appending the anchor to the list item
        listItem.appendChild(link);
        //appending the list item to the document fragment
        documentFragment.appendChild(listItem);
    });
}
//Changes active status of sections
function changeActiveStatus(){
//creating a const var to hold the links in the nav bar
const links = document.querySelectorAll('.menu__link');
//loop through each section
sections.forEach(section => {
    //Take infromation about the current section position
    const positionOfSection = section.getBoundingClientRect();
    //if the top of the section is more than 0px from above and less than 200px from above
    if(positionOfSection.top>=0&&positionOfSection.top<=200){
        //loop through all section and then remove class "activated"
        sections.forEach(section =>{section.classList.remove('activated');})
        //add the class "activated" to the current section
        section.classList.add('activated');
        //Remove all the anchors and remove the class "activated-link"
        links.forEach(link=>{link.classList.remove('activated-link');})
        //loop through the anchors to find the anchor with the text content the same as the dat-* attribute in the section
        //the anchor that satisfies the condition takes the class 'activated-link'
        links.forEach(link=>{if(link.textContent==section.getAttribute('data-nav'))link.classList.add('activated-link');})

        }})
}
//Function to determine whether the button should be shown or not
function changeScrollToTopVisibility(){
   
    const firstSection = document.querySelector("#section1");
    //variable to hold the first section position
    positionOfFirstSection = firstSection.getBoundingClientRect();
    //if section 1 top's 100 pixels from the top of the page or more  
    if(positionOfFirstSection.top>=100){
        console.log("true invvisible");
        //hide button
        btn.classList.add('invisible');
}else{
    console.log("false visible")
    //remove the invisible class which hides button
     btn.classList.remove('invisible');
}}
function scrollToTop(){

}
/*
*Build Nav
*/

// Build menu 
createSections();
//adding those created sections to the document
unorderedList.appendChild(documentFragment);


//Listen for a scroll if found process through the changeActiveStatus function
window.addEventListener('scroll',changeActiveStatus);
//Listens for a scroll to change the Button visibility
window.addEventListener('scroll',changeScrollToTopVisibility);
//Listen for a click to scroll up to the top of the page
btn.onclick=function(){
    console.log("clicked");
    pageTop.scrollIntoView({behavior:"smooth"})};

/****************************************************************************************************************************************************************/

/*Register page*/




function containsSymbol(str){
const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
if(format.test(str)){
    return true;
}
else{return false;}
}



function containDigit(str){
     return /\d/.test(str);
}



function hasWhiteSpace(str) {
  return /\s/g.test(str);
}




function isLetter(str) {
  return str.toLowerCase() != str.toUpperCase();
}




function isLowerCase(str)
{
    return str == str.toLowerCase() && str != str.toUpperCase();
}



function Validate(){
const registerPassword = document.getElementById('registerPassword').value;
const phoneNumber = document.getElementById('phoneNumber').value;
if(!isLetter(registerPassword.charAt(0))){
    alert("First character of password must be a letter");
    return false;
}
if(isLowerCase(registerPassword.charAt(0))){
    alert("First character of password must be an UPPERCASE letter");
    return false;
}
if(!containsSymbol(registerPassword)){
    alert("Password must contain at least one symbol");
    return false;
}
if(!containDigit(registerPassword)){
    alert("Password must contain at least one digit");
    return false;
}
if(hasWhiteSpace(registerPassword)){
    alert("Password must not contain any whitespaces");
    return false;
}
if(registerPassword.length!=8){
    alert("Password must exactly be 8 characters");
    return false;
}
 if(phoneNumber.length!=11){
    alert("Phone Number must exactly be 11 digits");
    return false;
}
alert("You've registered succesfully");
return true;
}

document.getElementById("register_form").addEventListener("submit", Validate);


const passWord= document.querySelector('#registerPassword');
const note = document.querySelector('.password-note');
passWord.onfocus=function(){
    note.classList.remove('invisible');
}
passWord.onblur=function(){
    note.classList.add('invisible');
}
