let right = document.getElementById('right');
let mobilemenu = document.getElementById('mobile-menu');
let times= document.getElementById('times');
console.log( mobilemenu.className)
right.addEventListener("click", function (){
  right.classList.toggle('hidden');
  console.log( mobilemenu.className)
  mobilemenu.classList.toggle('hidden');
});
times.addEventListener("click", function (){
  right.classList.toggle('hidden');
  mobilemenu.classList.toggle('hidden');
});
let reviews = document.getElementById('reviews');
reviews_scroll_width = reviews.scrollWidth;
reviews_scroll_left = reviews.scrollLeft;
let btn_left = document.getElementById('btn_left'),
    btn_right = document.getElementById('btn_right');
btn_right.addEventListener('click',function () {
    // reviews_scroll_left +=120;
    // if(reviews_scroll_left>=reviews_scroll_width){
    //   reviews_scroll_left = reviews_scroll_width;
    // }    
    // reviews.scrollLeft = reviews_scroll_left;
    document.getElementById('reviews').scrollBy(120, 0);

})
btn_left.addEventListener('click',function () {
  // console.log(reviews_scroll_left)
  //   reviews_scroll_left -=120;
  //   if(reviews_scroll_left<=0){
  //     reviews_scroll_left = 0;
  //   }    
  //   reviews.scrollLeft = reviews_scroll_left;
  document.getElementById('reviews').scrollBy(-120, 0);
})