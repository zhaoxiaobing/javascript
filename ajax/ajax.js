/**
 * Created by zhaoxiaobing on 16/5/17.
 */


function XHR(){
    if(window.XMLHttpRequest){
        return new XMLHttpRequest();
    }else if(window.ActiveXObject){
        return new ActiveXObject("Microsoft.XMLHTTP");
    }else{
        return false;
    }
}



