// JavaScript Document
document.addEventListener('backbutton', onBackKeyDown, false);

function onBackKeyDown(event) {
    // Handle the back button
    event.preventDefault();
    alert('I am a demo purpose alert thingy');
}