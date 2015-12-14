/**
 * Created by lenovo on 2015/11/2.
 */

//获取css样式
function getStyle(obj, attr){
    if('undefined' == typeof getComputedStyle){//ie
        return obj.currentStyle[attr];
    }else{//ff,chrome,ie8+
        return getComputedStyle(obj,false)[attr];
    }
}

