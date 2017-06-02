/**
 * Created by hesha on 2017/6/2.
 */
var imgs=[
        "images/1.png",
        "images/2.png",
        "images/3.png",
        "images/4.png"
    ];
+function(){
    var W=parseFloat(document.body.offsetWidth);
    var H=W/2;
    var imgsUl=$("#slider");
    var n=0;
    parseFloat($("#carousel").css({"width":W,"height":H}));
    +function(){
        for(var i= 0,htmlImg='';i<imgs.length;i++){
            htmlImg += "<li><img src='"+imgs[i]+"'></li>";
        }
        imgsUl.html(htmlImg);
        imgsUl.css({"width":W*imgs.length+1});
        imgsUl.append(imgsUl.children(":first").clone());
    }();
    $("#slider li img").css({"width":W});
    function autoMove(){
        setInterval(function(){
            n++;
            imgsUl.animate({"left":-n*W},500,function(){
                if(n==imgs.length-1){
                    n=0;
                    imgsUl.css("left",0);
                }
            })
        },3000)
    }
    autoMove();
}();

