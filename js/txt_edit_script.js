'use strict'
 $(document).ready(function (){

   var $bold = $('.bold-btn')
   var $small = $('.small-btn')
   var $italic = $('.italic-btn')
   var $input = $('#input')
   var $underline = $('.underline-btn')
   var $search = $('.search-btn')
   var $replace = $('.replace-btn')
   var $save = $('.close-btn')
   var status_b = 0
   var status_i = 0
   var status_s = 0



   $save.click(function(){
      var text = document.getElementById("input").value;
      function dl(data,filename){
        var b=document.createElement('a');
        b.download=filename;
        b.textContent=filename;
        b.href='data:application/json;base64,'+
        window.btoa(unescape(encodeURIComponent(data)));
        return b
   }
   document.body.appendChild(dl(text,'download you work.txt'));
   })

   $replace.click(function(){
     var textFind = $('.search').val()
     var textReplace = $('.replace').val()
     var data = $input.val()
     var replace = data.replace(textFind,textReplace)
     document.getElementById("input").value = replace
   })

   $search.click(function (){
     var str = $('.search').val()
     var length = str.length
     var data = $input.val()
     var find = data.search(str)
     document.getElementById('input').setSelectionRange(find,find+length)
   })

   $underline.click(function(){
     $input.css('text-decoration','underline')
   })

   $bold.click(function(){
     if (status_b == 0) {
       $input.css('font-weight','bold')
       status_b = 1;
     } else {
      $input.css('font-weight','normal')
      status_b = 0;
    }
   })

   $italic.click(function(){
     if (status_i == 0) {
       $input.css('font-style','italic')
       status_i = 1
     } else {
       $input.css('font-style','normal')
       status_i = 0
     }

   })

   $small.click(function(){
     if (status_s == 0) {
       $input.css('font-size','0.8em')
       status_s = 1;
     } else {
      $input.css('font-size','1.0em')
      status_s = 0;
    }
   })





 })
