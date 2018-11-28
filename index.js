var myImages =["https://i2.wp.com/www.kingtumblr.com/wp-content/uploads/2018/04/Amazing-Pictures-of-Mecca-1.jpg",
"http://3.bp.blogspot.com/-VUNyxbtL-Qg/U1aBTt-l-fI/AAAAAAAAAO4/EB0vb17bzzM/s1600/20.jpg",
"https://www.aljazeera.com/mritems/imagecache/mbdxxlarge/mritems/Images/2013/9/27/201392734420858734_20.jpg",
"https://cdn8.dissolve.com/p/D256_46_116/D256_46_116_1200.jpg",
"https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/05/shutterstock-577712275-kw-220517-A-snap-of-the-multiple-overwater-properties-at-the-Sun-Island-Resort-on-the-Nalaguraidhoo-Island-of-Maldives.jpg"];


var captionImages =["Masjid Makkah","Masjid Madina","Masjid Al-Aqsa","The Blue Nile","Maldives Island"];

var index=0; 

function updateImage(){
  document.getElementById("slideshow").src = myImages[index];
  document.getElementById("slideshow").alt= captionImages[index];
  document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
  if (myImages.length == index+1)
    index=0;
  else
    index++;
  updateImage();
} 


function back(){
  if (index===0)
    index=myImages.length-1;
  else
    index--;

  updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 
function autoSlide(){
  if (document.getElementById("auto").checked)
    next(); 
}


setInterval(autoSlide,2000); // Next
