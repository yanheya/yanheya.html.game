function $(elementId){

    return 	document.getElementById(elementId);
    
    }
    var InputFinger,SystemFingerCode,i,j,x,k=0;
    var AllFinger = new Array();
    AllFinger[0] = "剪刀";
    AllFinger[1] = "石头";
    AllFinger[2] = "布";
    var img = new Array();
    img[0] = "img/剪刀.png";
    img[1] = "img/石头.png";
    img[2] = "img/布.png";
    var Finger = /石头|剪刀|布/;
    function index(){
        // do {
            i = 0;
            j = -1;
            SystemFingerCode = Math.floor((Math.random()*3));
            // do {
            //         alert(1);
            // } while (condition);
            console.log("你出的是："+InputFinger);
            console.log("我出的是："+AllFinger[SystemFingerCode]);
            $("systemImg").src = img[SystemFingerCode];
            if(InputFinger==AllFinger[SystemFingerCode]){
                $("jieguo").innerHTML = "平局啦!再出一次吧 (=´ω｀=)";
                console.log("平局啦!再出一次吧 (=´ω｀=)\n------------------------");
                i = 0;
            } else if (InputFinger=="剪刀"&& SystemFingerCode == 2 || InputFinger=="石头"&& SystemFingerCode == 0 || InputFinger=="布"&& SystemFingerCode == 1) {
                $("jieguo").innerHTML ="哎呀，你赢了 (╥╯^╰╥) ";
                console.log("哎呀，你赢了 (╥╯^╰╥) \n------------------------");

            } else if (InputFinger=="剪刀"&& SystemFingerCode == 1 || InputFinger=="石头"&& SystemFingerCode == 2 || InputFinger=="布"&& SystemFingerCode == 0) {
                $("jieguo").innerHTML ="嘿嘿，你输了 ٩(๑>◡<๑)۶ ";
                console.log("嘿嘿，你输了 ٩(๑>◡<๑)۶ \n------------------------");

            }
            $("click").setAttribute("class","displayFlex");
        // } while (i==1);
    }
    
    function xunhuan(){
        $("systemImg").src = img[k];
        $("youImg").src = img[k];
        if(k<(img.length-1))
            k++;	
        else
            k=0;
            x=setTimeout("xunhuan()",50);
    }
    function jiandao(){
        clearTimeout(x);
        InputFinger = $("jiandao").alt;
        $("youImg").src = img[0];
        index();
    }
    function shitou(){
        clearTimeout(x);
        InputFinger = $("shitou").alt;
        $("youImg").src = img[1];
        index();
    }
    function bu(){
        clearTimeout(x);
        InputFinger = $("bu").alt;
        $("youImg").src = img[2];
        index();
    }
    $("click").onclick=function(){
        $("click").setAttribute("class","displayNone");
        xunhuan();
    }
    xunhuan();