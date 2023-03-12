function $(elementId){

    return 	document.getElementById(elementId);
    
}
//随机
var x;
var y;
var xy = new Array (2);
// var map;
var Endx;
var Endy;
function main(){
    // do {
    //     x = Math.floor((Math.random()*50)) + 5;//5--14
    //     y = Math.floor((Math.random()*50)) + 5;//5--24
    // }while(x % 2 == 0 || y % 2 == 0);
    x = 19;
    y = 19;
    var mapx = new Array ();
    var map = new Array ();
    GenerateMap(map, mapx,x, y);
    // Endx = xy[0];
    // Endy = xy[1];
        //输出地图
    console.log("————————初始地图————————");
    console.log(x+"行"+y+"列");
    PrintMap(map);
    console.log("终点为" + Endx + "," + Endy);
    setInterval(Seek(map, 1, 1, Endx, Endy), 10000)
    
    console.log("————————寻找终点路线————————");
    PrintMap(map);
}
function GenerateMap(map,mapx,x,y){
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < y; j++){
            mapx[j] = "墙"; 
        }
        map[i] = mapx;
    }
    if (Math.floor((Math.random()*2)) == 0){
        Endx = Math.floor((Math.random()*x));
        Endy = Math.floor((Math.random()*2));
        if (Endx != 0 && Endx != (x - 1)) {
            if (Endy == 1) {
                Endy += y - 2;
            }
        } else {
            Endy = Math.floor((Math.random()*(y-3)))+1;
        }
    }else {
        Endy = Math.floor((Math.random()*y));
        Endx = Math.floor((Math.random()*2));
        if (Endy != 0 && Endy != (y - 1)) {
            if (Endx == 1) {
                Endx += x - 2;
            }
        } else {
            Endx = Math.floor((Math.random()*(x-3)))+1;
        }
    }
    GenerateCorridor(map,1,1,x,y);
    map[Endx][Endy] = "路";
}
function GenerateCorridor(map,i,j,x,y){
    var ran = Math.floor((Math.random()*4));
    if(i >= x - 1||j >= y - 1||i < 0|| j < 0){
        return false;
    } 
    if (map[i][j]=="墙"){
        map[i][j] = "路";
        if (i==1&&j==1){
        }else{
            if (i - 2 > 0&&map[i-2][j]=="路"){
                map[i-1][j] = "路";
            }else if (j-2>0&&map[i][j-2]=="路"){
                map[i][j-1] = "路";
            }else if (i+2 < x -1&&map[i+2][j]=="路"){
                map[i+1][j] = "路";
            }else if (j+2<y-1&&map[i][j+2]=="路"){
                map[i][j+1] = "路";
            }
        }
        if (ran == 0){
            if(GenerateCorridor(map,i+2,j,x,y)){
                return true;
            }else if(GenerateCorridor(map,i,j+2,x,y)){
                return true;
            }else if(GenerateCorridor(map,i-2,j,x,y)){
                return true;
            }else if(GenerateCorridor(map,i,j-2,x,y)){
                return true;
            }else {
                return false;
            }
        } else if (ran == 1) {
            if(GenerateCorridor(map,i,j+2,x,y)){
                return true;
            }else if(GenerateCorridor(map,i-2,j,x,y)){
                return true;
            }else if(GenerateCorridor(map,i,j-2,x,y)){
                return true;
            }else if(GenerateCorridor(map,i+2,j,x,y)){
                return true;
            }else {
                return false;
            }
        } else if (ran == 2) {
            if(GenerateCorridor(map,i-2,j,x,y)){
                return true;
            }else if(GenerateCorridor(map,i,j-2,x,y)){
                return true;
            }else if(GenerateCorridor(map,i+2,j,x,y)){
                return true;
            }else if(GenerateCorridor(map,i,j+2,x,y)){
                return true;
            }else {
                return false;
            }
        }else{
            if(GenerateCorridor(map,i,j-2,x,y)){
                return true;
            }else if(GenerateCorridor(map,i+2,j,x,y)){
                return true;
            }else if(GenerateCorridor(map,i,j+2,x,y)){
                return true;
            }else if(GenerateCorridor(map,i-2,j,x,y)){
                return true;
            }else {
                return false;
            }
        }
    }else{
        return false;
    }
}
function PrintMap(map){
    var d = document.createElement("div");
    var cs;
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            $("top").appendChild(d);
            if(map[i][j]=="墙"){
                d.setAttribute("class","qiang")
                // $("top").appendChild(d);
                // $("top").appendChild(cs);
            }else if(map[i][j]=="路"){
                d.setAttribute("class","lu")
                // $("top").appendChild(d);
                // $("top").appendChild(cs);
                // $(Background).parentNode.appendChild("<div class='lu'>路</div>");
            }else if(map[i][j]=="堵"){
                d.setAttribute("class","du")
                // $("top").appendChild(d);
                // $("top").appendChild(cs);
                // $(Background).parentNode.appendChild("<div class='du'>堵</div>");
            }else if(map[i][j]=="走"){
                d.setAttribute("class","zou")
                // $("top").appendChild(d);
                // $("top").appendChild(cs);
                // $(Background).parentNode.appendChild("<div class='zou'>走</div>");
            }
            
            // $("top").appendChild(cs);
            console.log(map[i][j] + " ");
        }
        console.log("\n");
    }
    console.log("————————————————————\n");
}
function Seek(map,i,j){
    var x = i - Endx;
    var y = j - Endy;
    if (map[Endx][Endy]== "走") {
        return true;
    } else {
        if (map[i][j]=="路") {
            map[i][j] = "走";
            console.log("("+i+","+j+"):"+map[i][j]);
            PrintMap(map);
            var b = Math.sqrt(Math.pow(x, 2)) <= Math.sqrt(Math.pow(y, 2));
            if ((x == 0 && y < 0) || x > 0) {
                if (b) {
                    if (Seek(map, i, j + 1)) {//right
                        return true;
                    } else if (Seek(map, i - 1, j)) {//up
                        return true;
                    } else if (Seek(map, i + 1, j)) {//down
                        return true;
                    } else if (Seek(map, i, j - 1)) {//left
                        return true;
                    } else {
                        map[i][j] = "堵";
                        return false;
                    }
                } else {
                    if (Seek(map, i - 1, j)) {//up
                        return true;
                    } else if (Seek(map, i, j + 1)) {//right
                        return true;
                    } else if (Seek(map, i + 1, j)) {//down
                        return true;
                    } else if (Seek(map, i, j - 1)) {//left
                        return true;
                    } else {
                        map[i][j] = "堵";
                        return false;
                    }
                }
            } else if ((x == 0 && y > 0) || x < 0) {
                if (b) {
                    if (Seek(map, i, j - 1)) {//left
                        return true;
                    } else if (Seek(map, i + 1, j)) {//down
                        return true;
                    } else if (Seek(map, i, j + 1)) {//right
                        return true;
                    } else if (Seek(map, i - 1, j)) {//up
                        return true;
                    } else {
                        map[i][j] = "堵";
                        return false;
                    }
                } else {
                    if (Seek(map, i + 1, j)) {//down
                        return true;
                    } else if (Seek(map, i, j - 1)) {//left
                        return true;
                    } else if (Seek(map, i, j + 1)) {//right
                        return true;
                    } else if (Seek(map, i - 1, j)) {//up
                        return true;
                    } else {
                        map[i][j] = "堵";
                        return false;
                    }
                }
            }
        } else {
            return false;
        }
    }
    return false;
}
main()
// SystemFingerCode = Math.floor((Math.random()*3));