const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const container = document.querySelector('.container');

openBtn.addEventListener('click', function(){

    container.style.display = 'block';

});

closeBtn.addEventListener('click', function(){
    container.style.display = 'none';
})


// if we click outside anywhere of our model, we want to close the modal.
// we have to add another event listener to the window obj which is the hightest object in the DOM tree 

window.addEventListener('click', function(e){

    // container has 100% width and height in our css 
    // if window click === container click
    if(e.target === container){
    container.style.display = 'none';
    }
});