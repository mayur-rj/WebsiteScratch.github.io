var section = document.querySelectorAll('.section');
var sections = {};
section.forEach(function(e){
    console.log(e.id , e.offsetTop)
    sections[e.id] = e.offsetTop;
})
window.onscroll = function(){
var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
console.log(scrollPos);
for(var x in sections){
    console.log(sections[x]);
    if(sections[x] <= (scrollPos + 10) ){
        document.querySelector('.active').setAttribute('class',' ');
        document.querySelector('a[href*='+x+']').setAttribute('class','active')
       }
    }
}