/// <Reference types="../@types/jquery" />;
$(`Button`).on(`click`,function(){
    $(`.navo`).animate({width:"110px"},500);
    $(`.content`).addClass(`margino`,500);
});
///////////////////////////////////////////////
$(`#closebutton`).on(`click`,function(){
    $(`.navo`).animate({width:"0px"},100);
    $(`.content`).removeClass(`margino`,500);
});
///////////////////////////////////////////////
$(`.first`).siblings(`div`).slideUp(0);
$(`#slider h3`).on(`click`,function(){
   $(`.container div`).not($(this).next()).slideUp(500);
   $(this).next().slideToggle(500);   
   
})
///////////////////////////////////////////////
window.onload = function() {
   
    countToTime("10 october 2025 9:56:00");
  }
  function countToTime(countTo) {
  
    let futureDate = new Date(countTo);
futureDate = (futureDate.getTime()/1000);
// console.log(futureDate);

let now = new Date();
now = (now.getTime()/1000);

timeDifference = (futureDate- now);
// console.log(timeDifference);

        
let days = Math.floor( timeDifference / (24*60*60));
let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))

// console.log(days);

 $(".days").html(`${days}`);
 $(".hours").html(`${hours} `);
 $(".minutes").html(`${ mins }`);
 $('.seconds').html(`${ secs}`)


 setInterval(function() {  countToTime(countTo); }, 1000);
}
///////////////////////////////////////////////
$(`.scrollinko`).on(`click`,function(e){
let theId = $(e.target).attr("href");
let distance = $(theId).offset().top();
$("html body").animate({scrollTop:distance},5000);

});
////////////////////////////////////////////
let limit = 100;
$('textarea').on(`input`,function() {
  let length = $(this).val().length;
  let remaining = limit-length;
  if(remaining<=0)
            {
                 $("#letter").text("no more");
                
            }
        else{
        
        $("#letter").text(remaining);
        
        }
});
