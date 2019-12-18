var input = document.getElementsByTagName('input');
for(var i = 0; i<= input.length - 1; ++i){
    input[i].onblur = inputBlur;
}
function inputBlur(){
    var name = this.name;
    var val = this.value;
    var tips = this.placeholder;
    var tips_obj = this.parentNode.nextElementSibling;
    val = val.trim();
    if(!val){
        error(tips_obj,'输入框不能为空');
        return false;
    }
    var reg_msg = getRegMsg(name,tips);
    if(reg_msg['reg'].test(val)){
        succdss(tips_obj.reg_msg['msg']['success']);
    }else{
        error(tips_obj,reg_msg['msg']['error']);
    }
}
function getRegMsg(name,tips){
    var reg = msg ='';
    switch(name){
        case 'username':
            reg =/^[a-zA-Z]{4,12}$/;
            msg ={'success':'密码输入正确','error':tips};
            break;
            case 'pwd':
                reg = /^\w{6,20}$/;
                msg = {'success':'密码输入正确','error':'两次输入的密码不一样'};
                break;
                case 'tel':
                    reg = /^1[34578]\d{9}$/;
                    msg = {'success':'手机号码输入正确','error':tips};
                    break;
                    case 'email':
                        reg = /^(\w+(\_|\-|\.)*)+(\w+(\-)?)+(\.\w{2,})+$/;
                        msg ={'success':'邮箱输入正确','error':tips};
                        break;
    }
    return{'reg':reg,'msg':msg};
}
function error(obj,msg){
    obj.className ='error';
    obj.innerHTML = msg + '，请重新输入';
}