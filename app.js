const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const listLength = movieLists[i].querySelectorAll("img").length;//checking all the images in one line for the number of click
    let counter = 0;
    arrow.addEventListener('click', () => {
        const ratio = Math.floor(window.innerWidth / 300);//Initially only 3 times were allowed to click then it will come back to first position
        // but for making it responsive , we added if window size is decreased then more click will be allowed
        //by window.innerWidth we will get width size and divding it by our width size we will get exact count of how many images present while decreasing the 
        // window size and math.floor will give exact integer and then by adding it with our if condition will make it responsive.
        counter++;
        if (listLength - (4 + counter) + (4 - ratio) >= 0)/* It will help us to click according the number of images present in the 
        item(7-(4 is default value we counted manually + every click we do should be greater than and equal to zero ))*/ {

            // console.log('arrow is clicked', i);
            // movieLists[i].style.transform = "translateX(-100px)";
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get('transform')[0].x.value
                - 330}px)`
            // console.log(movieLists[i].computedStyleMap().get('transform')[0].x.value);// this computed style map gives the size and get func will get that 
            //particular element whole object and [0].x.value will give exact value of our x-axis element where we can target exactly where we want 
        }
        else {
            movieLists[i].style.transform = 'translateX(0)';
            counter = 0;
        }

        // console.log(movieLists[i].querySelectorAll("img").length);
    })
    console.log(Math.floor(window.innerWidth / 300));
})

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container,.movie-list-title,.navbar-container,.sidebar,.left-sidebar-icon,.toggle"
);

ball.addEventListener("click", () => {
    items.forEach((item) => {
        item.classList.toggle("active");
    });
    ball.classList.toggle("active");
});










