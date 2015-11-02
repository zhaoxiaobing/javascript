/**
 * Created by lenovo on 2015/11/2.
 */

function getStyle(obj, attr){
    if(obj.currentStyle){//ie
        return obj.currentStyle[attr];
    }else{//ff,chrome,ie8+
        return getComputedStyle(obj,false)[attr];
    }
}