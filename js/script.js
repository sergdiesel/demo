
        //====================при нажатии на кнопку==================
        
//        but.addEventListener('click', timeout, false)
//        document.getElementById('imgPhone').querySelector('img').style.display = 'block';
//        
//        function timeout(){
//            changeImg()
//            return window.setTimeout(changeImg, 100);
//            }
//        
//        
//            var currentImgIndex = 0;
//        function changeImg(){
//             var img =  document.querySelectorAll('#imgPhone img:not(:first-of-type)');
//            if(currentImgIndex == 58)return false;
//            hideAllImg()
//            img[currentImgIndex].style.display = 'block';
//            currentImgIndex++;
//        }
//         
//        function hideAllImg(){
//            document.querySelectorAll('.img-block img').forEach(function(item, i) {
//            item.style.display = 'none';
//                
//            });
//        }
//        
        //====================скролл телефона=========================================
        
        document.getElementById('imgPhone').querySelector('img').style.display = 'block';
        document.querySelector('.another-elem img.text1').style.display = 'block';
          function hideAllImg(){
            document.querySelectorAll('.img-block img').forEach(function(item, i) {
            item.style.display = 'none';});
            document.querySelector('.another-elem img.image180').style.display = 'none'; // 
            document.querySelector('.another-elem img.image-frame').style.display = 'none';
            document.querySelector('.another-elem img.text1').style.display = 'none';
            document.querySelector('.another-elem img.text2').style.display = 'none';
            document.querySelector('.another-elem img.text3').style.display = 'none';
            document.querySelector('.another-elem img.text4').style.display = 'none';
            document.querySelector('.another-elem img.img-flash').style.display = 'none';
            
            
        }
        
        
    var scrollBar = document.getElementById('scrollBar');
    var scrollWheel = scrollBar.children[1];

        scrollWheel.addEventListener('mousedown', scroll, false)
    function scroll(e) {
      var scrollWheelCoords = getCoords(scrollWheel);
      var wheelY = e.pageY - scrollWheelCoords.top ; // в какую часть круга нажато
      var sliderCoords = getCoords(scrollBar);

        setTimeout(document.onmousemove, 100)
    document.onmousemove = function(e) {
          var coordWheel = Math.round(wheel.getBoundingClientRect().top - scrollBar.getBoundingClientRect().top);
        if(coordWheel > 1){
            youtube.style.display = 'none';
            document.querySelectorAll('.content-block .video img')[0].style.display = 'none';
            document.querySelectorAll('.content-block .video img')[1].style.display = 'none';
            document.querySelectorAll('.content-block .video img')[2].style.display = 'none';
// ====================pause video===============================
            // <button id='but'>change img</button>
//            function onYouTubePlayerAPIReady() {
//                play = new YT.Player('youtube', {videoId: 'JMJXvsCLu6s',});
//                document.getElementById('pauseYoutube1').onclick = function() {youtube.pauseVideo();};
//}
            
        }
        
//        
//        if(coordWheel == 0){
//            
//            function onYouTubePlayerAPIReady() {
//    play = new YT.Player('youtube', {videoId: 'JMJXvsCLu6s',});
//    document.getElementById('playYoutube1').onclick = function() {youtube.playVideo();};
//    document.getElementById('pauseYoutube1').onclick = function() {youtube.pauseVideo();};
//}
//        }
//        
        //console.log(document.querySelector('.another-elem img.image180'))  
//        ============================================================================================

        if(coordWheel!=0){
            pauseVideo();
        }
        //    вспышка 90
    console.log(coordWheel)
           switch(coordWheel){
     vxcgxg
                    case 0:
                    case 1:
                        hideAllImg()
                        youtube.style.display = 'block';
                        document.querySelectorAll('img')[0].style.display = 'block';
                        document.querySelector('.another-elem img.text1').style.display = 'block';
                    break;
                    case 2:
                    case 3:
                    case 4:  
                        hideAllImg()
                        document.querySelectorAll('img')[1].style.display = 'block';
                        document.querySelector('.another-elem img.text1').style.display = 'block';
                    break;
                    case 5:
                    case 6:
                    case 7:
                        hideAllImg()
                        document.querySelectorAll('img')[2].style.display = 'block';
                        document.querySelector('.another-elem img.text3').style.display = 'block';
                    break;
                    case 8:
                    case 9:
                    case 10:
                        hideAllImg()
                        document.querySelectorAll('img')[3].style.display = 'block';
                        document.querySelector('.another-elem img.text3').style.display = 'block';
                    break;
                    case 11: 
                    case 12:
                    case 13:
                        hideAllImg()
                        document.querySelectorAll('img')[4].style.display = 'block';
                        document.querySelector('.another-elem img.text3').style.display = 'block';
                    break;
                    case 14:
                    case 15:
                    case 16:
                        hideAllImg()
                        document.querySelectorAll('img')[5].style.display = 'block';
                        document.querySelector('.another-elem img.text3').style.display = 'block';
                    break;
                    case 17:
                    case 18:
                    case 19:
                        hideAllImg()
                        document.querySelectorAll('img')[6].style.display = 'block';
                        document.querySelector('.another-elem img.text3').style.display = 'block';
                    break;
                   case 20:
                   case 21:
                    case 22:
                        hideAllImg()
                        document.querySelectorAll('img')[7].style.display = 'block';
                        document.querySelector('.another-elem img.text3').style.display = 'block';
                    break;
                    case 23:
                   case 24:
                   case 25:
                        hideAllImg()
                        document.querySelectorAll('img')[8].style.display = 'block';
                        document.querySelector('.another-elem img.text3').style.display = 'block';
                    break;
                    case 26:
                    case 27:
                    case 28:
                        hideAllImg()
                        document.querySelectorAll('img')[9].style.display = 'block';
                        document.querySelector('.another-elem img.text3').style.display = 'block';
                    case 29:
                    case 30:
                    case 31:
                        hideAllImg()
                        document.querySelectorAll('img')[10].style.display = 'block';
                        document.querySelector('.another-elem img.text3').style.display = 'block';
                    break;
                   case 32:
                    case 33:
                   case 34:
                        hideAllImg()
                        document.querySelectorAll('img')[11].style.display = 'block';
                        document.querySelector('.another-elem img.text3').style.display = 'block';
                    break;
                   case 35:
                    case 36:
                   case 37:
                        hideAllImg()
                        document.querySelectorAll('img')[12].style.display = 'block';
                        document.querySelector('.another-elem img.text3').style.display = 'block';
                    break;
                   case 38:
                    case 39:
                   case 40:
                        hideAllImg()
                        document.querySelectorAll('img')[13].style.display = 'block';
                        document.querySelector('.another-elem img.text3').style.display = 'block';
                    break;
                   case 41:
                    case 42:
                   case 43:
                        hideAllImg()
                        document.querySelectorAll('img')[14].style.display = 'block';
                        document.querySelector('.another-elem img.text3').style.display = 'block';
                    break;
                   case 44:
                    case 45:
                   case 46:
                        hideAllImg()
                        document.querySelectorAll('img')[15].style.display = 'block';
                        document.querySelector('.another-elem img.text3').style.display = 'block';
                    break;
                   case 47:
                    case 48:
                   case 49:
                        hideAllImg()
                        document.querySelectorAll('img')[16].style.display = 'block';
                        document.querySelector('.another-elem img.text3').style.display = 'block';
                    break;
                   case 50:
                    case 51:
                   case 52:
                        hideAllImg()
                        document.querySelectorAll('img')[17].style.display = 'block';
                        document.querySelector('.another-elem img.text3').style.display = 'block';
                    break;
                   case 53:
                    case 54:
                   case 55:
                        hideAllImg()
                        document.querySelectorAll('img')[18].style.display = 'block';
                        document.querySelector('.another-elem img.text3').style.display = 'block';
                   case 56:
                    case 57:
                   case 58:
                        hideAllImg()
                        document.querySelectorAll('img')[19].style.display = 'block';
                        document.querySelector('.another-elem img.text3').style.display = 'block';
                    break;
                   case 59:
                    case 60:
                   case 61:
                        hideAllImg()
                        document.querySelectorAll('img')[20].style.display = 'block';
                        document.querySelector('.another-elem img.text3').style.display = 'block';
                    break;
                   case 62:
                    case 63:
                   case 64:
                        hideAllImg()
                        document.querySelectorAll('img')[21].style.display = 'block';
                        document.querySelector('.another-elem img.text3').style.display = 'block';
                    break;
                   case 65:
                    case 66:
                   case 67:
                        hideAllImg()
                        document.querySelectorAll('img')[22].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 68:
                    case 69:
                   case 70:
                        hideAllImg()
                        document.querySelectorAll('img')[23].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 71:
                    case 72:
                   case 73:
                        hideAllImg()
                        document.querySelectorAll('img')[24].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 74:
                    case 75:
                   case 76:
                        hideAllImg()
                        document.querySelectorAll('img')[25].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 77:
                    case 78:
                   case 79:
                        hideAllImg()
                        document.querySelectorAll('img')[26].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 80:
                    case 81:
                   case 82:
                        hideAllImg()
                        document.querySelectorAll('img')[27].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 83:
                    case 84:
                   case 85:
                        hideAllImg()
                        document.querySelectorAll('img')[28].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 86:
                    case 87:
                   case 88:
                        hideAllImg()
                        document.querySelectorAll('img')[29].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 89:
                    case 90:
                   case 91:
                        hideAllImg()
                        document.querySelectorAll('img')[30].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                        document.querySelector('.another-elem img.img-flash').style.display = 'block';
                    break;
                   case 92:
                    case 93:
                   case 94:
                        hideAllImg()
                        document.querySelectorAll('img')[31].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 95:
                    case 96:
                   case 97:
                        hideAllImg()
                        document.querySelectorAll('img')[32].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 98:
                    case 99:
                   case 100:
                        hideAllImg()
                        document.querySelectorAll('img')[33].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 101:
                    case 102:
                   case 103:
                        hideAllImg()
                        document.querySelectorAll('img')[34].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 104:
                    case 105:
                   case 106:
                        hideAllImg()
                        document.querySelectorAll('img')[35].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 107:
                    case 108:
                   case 109:
                        hideAllImg()
                        document.querySelectorAll('img')[36].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 110:
                    case 111:
                   case 112:
                        hideAllImg()
                        document.querySelectorAll('img')[37].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 113:
                   case 114:
                   case 115:
                        hideAllImg()
                        document.querySelectorAll('img')[38].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 116:
                    case 117:
                   case 118:
                        hideAllImg()
                        document.querySelectorAll('img')[39].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 119:
                   case 120:
                   case 121:
                        hideAllImg()
                        document.querySelectorAll('img')[40].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 122:
                    case 123:
                   case 124:
                        hideAllImg()
                        document.querySelectorAll('img')[41].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 125:
                   case 126:
                   case 127:
                        hideAllImg()
                        document.querySelectorAll('img')[42].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 128:
                   case 129:
                    case 130:
                        hideAllImg()
                        document.querySelectorAll('img')[43].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 131:
                   case 132:
                   case 133:
                        hideAllImg()
                        document.querySelectorAll('img')[44].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 134:
                   case 135:
                    case 136:
                        hideAllImg()
                        document.querySelectorAll('img')[45].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 137:
                   case 138:
                   case 139:
                        hideAllImg()
                        document.querySelectorAll('img')[46].style.display = 'block';
                        document.querySelector('.another-elem img.text4').style.display = 'block';
                    break;
                   case 140:
                   case 141:
                   case 142:
                   case 143:
                        hideAllImg()
                        document.querySelectorAll('img')[47].style.display = 'block';
                        document.querySelector('.another-elem img.text2').style.display = 'block';
                        
                    break;
                    case 144:
                   case 145:
                    case 146:
                        hideAllImg()
                        document.querySelectorAll('img')[48].style.display = 'block';
                   document.querySelector('.another-elem img.text2').style.display = 'block';
                    break;
                    case 147:
                   case 148:
                    case 149:
                        hideAllImg()
                        document.querySelectorAll('img')[49].style.display = 'block';
                        document.querySelector('.another-elem img.text2').style.display = 'block';
                    break;
                   case 150:
                    case 151:
                   case 152:
                    case 153:
                        hideAllImg()
                        document.querySelectorAll('img')[50].style.display = 'block';
                        document.querySelector('.another-elem img.text2').style.display = 'block';
                    break;
                    case 154:
                   case 155:
                    case 156:
                        hideAllImg()
                        document.querySelectorAll('img')[51].style.display = 'block';
                        document.querySelector('.another-elem img.text2').style.display = 'block';
                    break;
                    case 157:
                   case 158:
                    case 159:
                        hideAllImg()
                        document.querySelectorAll('img')[52].style.display = 'block';
                        document.querySelector('.another-elem img.text2').style.display = 'block';
                    break;
                   case 160:
                   case 161:
                    case 162:
                    case 163:
                        hideAllImg()
                        document.querySelectorAll('img')[53].style.display = 'block';
                        document.querySelector('.another-elem img.text2').style.display = 'block';
                    break;
                   case 164:
                   case 165:
                    case 166:
                        hideAllImg()
                        document.querySelectorAll('img')[54].style.display = 'block';
                        document.querySelector('.another-elem img.text2').style.display = 'block';
                    break;
                   case 166:
                   case 167:
                    case 168:
                   case 169:
                        hideAllImg()
                        document.querySelectorAll('img')[55].style.display = 'block';
                        document.querySelector('.another-elem img.text2').style.display = 'block';
                    break;
                   case 170:
                    case 171:
                   case 172:
                        hideAllImg()
                        document.querySelectorAll('img')[56].style.display = 'block';
                        document.querySelector('.another-elem img.text2').style.display = 'block';
                    break
                   case 173:
                    case 174:
                   case 175:
                    case 176:
                        hideAllImg()
                        document.querySelectorAll('img')[57].style.display = 'block';
                        document.querySelector('.another-elem img.text2').style.display = 'block';
                    break;
                   case 177:
                    case 178:
                    case 179:
                    case 180:
                        hideAllImg()
                        document.querySelector('.another-elem img.image180').style.display = "block";
                        document.querySelector('.another-elem img.image-frame').style.display = 'block';
                        document.querySelectorAll('img')[58].style.display = 'block';
                        document.querySelector('.another-elem img.text2').style.display = 'block';
                    break;
                    default: 
                    break;
                             }
        var newTop = e.pageY - wheelY - sliderCoords.top; 
        if (newTop < 0) {
         return false
        }
        var rightEdge = scrollBar.offsetHeight - scrollWheel.offsetHeight;
        if (newTop > rightEdge) {
          return false
        }
    
        scrollWheel.style.top = newTop + 'px';
          
      }

      document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
      };

      return false; // disable selection start (cursor change)
    };


    function getCoords(elem) { //получаем координаты элемента
      var box = elem.getBoundingClientRect();
      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };

    }
        // ==================крестик закрыть окно==================
        
       document.getElementById('closeBut').onclick = function(e){
           document.getElementById('contentBlock').style.display = 'none';
           
       }
        
        //=============запуск видео=================
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('youtube', {
    events: {'onReady': onPlayerReady}
  });
}
function onPlayerReady() {
  player.mute();
}

function pauseVideo() {
  player.pauseVideo();
}
onYouTubePlayerAPIReady() 
    
        
        //==================пауза видео=========================================
        //http://shpargalkablog.ru/2014/01/pause-youtube.html   чтобы сделать паузу в видео

//var tag = document.createElement('script');
//  tag.src = "https://www.youtube.com/player_api";
//  var firstScriptTag = document.getElementsByTagName('script')[0];
//  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



// =======================вспышка==========================
//https://jsfiddle.net/fL555557/10/