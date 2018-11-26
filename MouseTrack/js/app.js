$(document).ready(function(){
 $(document).mousemove(function(e){
     let $tracker = $('#tracker')
     $tracker.css({'left': (event.pageX - ($tracker.width()/2)),'top': (event.pageY- ($tracker.height()/2))})
 })
})