//$(document).ready(function(){
//    var $mainClass = $("#mainClass>ul>li>a");
//    var $subClass = $("#mainClass>ul>li>.subClass");
//    console.log($mainClass);
//    console.log($subClass.length);
//    for(var i=0;i< $mainClass.length;i++){
//        $mainClass[i].onmouseover = function(){
//            alert($subClass[i]);
////            $subClass[i].style.display="block";
//        };
//        $mainClass[i].onmouseout = function(){
//            alert($subClass[i]);
////            $subClass[i].style.display="none";
//        };
//    }
//
////    for(var i=0;i<$mainClass.length;i++){
////        $mainClass[i].onclick = function(){
////            $subClass[i].style.display="block";
////        };
//////        $mainClass[i].onmouseout = function(){
//////            $subClass[i].style.display="none";
//////        }
////
////    }
//
//});

window.onload=function(){
    var mainClass = document.getElementsByClassName("mainClass");
    var subClass = document.getElementsByClassName("subClass");

    //用循环发现有错误，多次尝试解决还是未果
//    for(var i=0;i<mainClass.length;i++){
//        console.log(mainClass[i]);
//        console.log(subClass[i]);//此处正常显示
//        mainClass[i].onmouseover = function(){
//            console.log(subClass[i]);//此处为什么显示undefined
//            subClass[i].style.display="block";
//        }
//        mainClass[i].onmouseout = function(){
//            subClass[i].style.display="none";
//        }
//    }
    mainClass[0].onmouseover= function(){subClass[0].style.display="block";}
    mainClass[0].onmouseout= function(){subClass[0].style.display="none";}
    mainClass[1].onmouseover= function(){subClass[1].style.display="block";}
    mainClass[1].onmouseout= function(){subClass[1].style.display="none";}
    mainClass[2].onmouseover= function(){subClass[2].style.display="block";}
    mainClass[2].onmouseout= function(){subClass[2].style.display="none";}
    mainClass[3].onmouseover= function(){subClass[3].style.display="block";}
    mainClass[3].onmouseout= function(){subClass[3].style.display="none";}
    mainClass[4].onmouseover= function(){subClass[4].style.display="block";}
    mainClass[4].onmouseout= function(){subClass[4].style.display="none";}
    mainClass[5].onmouseover= function(){subClass[5].style.display="block";}
    mainClass[5].onmouseout= function(){subClass[5].style.display="none";}
    mainClass[6].onmouseover= function(){subClass[6].style.display="block";}
    mainClass[6].onmouseout= function(){subClass[6].style.display="none";}
    mainClass[7].onmouseout= function(){subClass[7].style.display="none";}
    mainClass[7].onmouseover= function(){subClass[7].style.display="block";}
    mainClass[8].onmouseout= function(){subClass[8].style.display="none";}
    mainClass[8].onmouseover= function(){subClass[8].style.display="block";}
    mainClass[9].onmouseout= function(){subClass[9].style.display="none";}
    mainClass[9].onmouseover= function(){subClass[9].style.display="block";}
    mainClass[10].onmouseout= function(){subClass[10].style.display="none";}
    mainClass[10].onmouseover= function(){subClass[10].style.display="block";}


}