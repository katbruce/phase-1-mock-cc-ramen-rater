// write your code here

//once content loaded
addEventListener("DOMContentLoaded", ()=>{
    //global variable for current ramen viewed
    let currentItem;
    //retrieve json data
    fetch("http://localhost:3000/ramens")
    .then(res => res.json())
    .then(data => {
        //see all ramen images in div #ramen-menu
        renderRamens(data);
        //when clicked display all details of ramen
        displayDetails(data[0])//current item means original image is just blank info
    })
    
    //render ramen menu with images of all ramen
    function renderRamens(allMenu){
        let ramenMenu = document.querySelector("#ramen-menu")
        allMenu.forEach(oneRamen => {
            let ramenImage = document.createElement('img');
            ramenImage.src = oneRamen.image;
            ramenMenu.append(ramenImage);
            //when clicked render details
            ramenImage.addEventListener("click", ()=>{
                currentItem = oneRamen;
                displayDetails(oneRamen);

        })
    })
    }
    //change DOM to reflect current ramen
    function displayDetails(oneRamen){

        let name = document.querySelector(".name");
        let image = document.querySelector(".detail-image");
        let restaurant = document.querySelector(".restaurant");
        let rating = document.querySelector("#rating-display");
        let comment = document.querySelector("#comment-display");
        
        name.textContent = oneRamen.name;
        restaurant.textContent = oneRamen.restaurant;
        image.src = oneRamen.image;
        rating.textContent = oneRamen.rating;
        comment.textContent = oneRamen.comment;

    }

    //create new ramen after submitting new-ramen form
    const newRamen = document.querySelector("#new-ramen");
    newRamen.addEventListener("submit", (e)=>{
        e.preventDefault();
        let ramenMenu = document.querySelector("#ramen-menu");
        let ramenImage = document.createElement('img');
        ramenImage.src = document.querySelector("#new-image").value;
        ramenMenu.append(ramenImage);
        //when clicked render details
        ramenImage.addEventListener("click", ()=>{
            const thisItem = {
            name : document.querySelector("#new-name").value,
            restaurant : document.querySelector("#new-restaurant").value,
            image : document.querySelector("#new-image").value,
            rating : document.querySelector("#new-rating").value,
            comment : document.querySelector("#new-comment").value,
            }
            
            currentItem = thisItem;
            displayDetails(thisItem);
            
        });
        //reset form
        newRamen.reset();
    })






})