'use strict'
 $(document).ready(function (){

   var $bold = $('.bold-btn')
   var $small = $('.small-btn')
   var $italic = $('.italic-btn')
   var $input = $('.input')
   var $underline = $('.underline-btn')
   var $search = $('.search-btn')

   $search.click(function (){
     var data = $('.search').val()
     console.log(data)

   })

   $underline.click(function(){
     $input.css('text-decoration','underline')
   })

   $bold.click(function(){
     //var temp = $input.val()
     //console.log(temp)
     //var b = temp.bold()
     $input.css('font-weight','bold')
     //console.log(b)
     //document.getElementById('input').style.fontWeight = 'bold';

     //console.log(b)
   })

   $italic.click(function(){
     $input.css('font-style','italic')
     //document.getElementById('input').style.fontStyle = 'italic';
   })

   $small.click(function(){
     $input.css('font-size')
     document.getElementById('input').style.fontSize = '10px';
   })





 })
