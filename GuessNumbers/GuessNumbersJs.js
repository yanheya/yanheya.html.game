    function $(elementId){
        return 	document.getElementById(elementId);
    }
    var RandomNumRange,RandomNum;
    var RandomNumRangeMax,RandomNumRangeMin = 1;
    var i = 1;
    var j = 1;   
    var InputNumJ;
    function suiji(){
        var fanwei = $('fanwei');
        var Num = $("Num");
        var jieguoP= $("jieguoP");
        
        RandomNumRange = Number.parseInt(fanwei.value);
        RandomNumRangeMax = RandomNumRange;
        console.log(RandomNumRange)
        if(!isNaN(RandomNumRange)&&Number.isInteger(RandomNumRange)&&RandomNumRange > 1){
            RandomNum = Math.floor((Math.random()*RandomNumRange))+1;
            $("jushu").innerHTML = "这是第"+i+"局游戏";
            jieguoP.innerHTML =  ("请输入" + RandomNumRangeMin + "到" + RandomNumRangeMax + "之间的数字哦");
            fanwei.setAttribute("disabled","disabled");
            Num.removeAttribute('disabled');
        }else{
            jieguoP.innerHTML = "请输入大于1的整数！！！"
        }
    }
    function panduan(){
        var again = $("again")
        var InputNum = Number.parseInt($("Num").value); 
        $("Num").value = ""
        if (!isNaN(InputNum)&&Number.isInteger(InputNum)&& InputNum >=1){
            if (InputNum < RandomNumRangeMin || InputNum > RandomNumRangeMax) {
                jieguoP.innerHTML =  ("请输入" + RandomNumRangeMin + "到" + RandomNumRangeMax + "之间的整数哦");
            } else if (InputNum != RandomNum) {
                if (InputNumJ != InputNum){
                    console.log(InputNumJ);
                    console.log(InputNum);
                    j++;
                }
                InputNumJ = InputNum;
                if (InputNum > RandomNum) {
                    RandomNumRangeMax = InputNum;
                } else {
                    RandomNumRangeMin = InputNum;
                }
                jieguoP.innerHTML =  ("猜错啦！这个数在" + RandomNumRangeMin + "到" + RandomNumRangeMax + "之间哦！");
            } else {
                jieguoP.innerHTML =  ("太棒了！你只用了"+j+"次就猜对啦！这个数是" + InputNum);
                Num.setAttribute("disabled","disabled");
                again.setAttribute("class","display");
            }
    }
        console.log("第"+i+"局"+"\n正确的数："+RandomNum+"\n用户输入的数："+InputNum+"\n最小："+RandomNumRangeMin+"\n最大："+RandomNumRangeMax+"\n——————————————————");
    }
    function Again(){
        jieguoP.innerHTML = "";
        fanwei.value = "";
        fanwei.removeAttribute('disabled');
        Num.value = "";
        again.setAttribute("class","hide");
        i++;
        j = 1;
        RandomNumRangeMin = 1
    }