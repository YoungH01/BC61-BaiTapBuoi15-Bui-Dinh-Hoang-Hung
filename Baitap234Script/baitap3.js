var homeWorkBai1=document.getElementById("bai1");
var input1= document.getElementById("input1");
var input2= document.getElementById("input2");
var input3= document.getElementById("input3");
var result=document.getElementById("result");
var nameButton=document.getElementById("ans");
function calculateAns(){
    var ans=0,text_ans="";
    var tnct= Number(input2.value)-(4e+6) - Number(input3.value)*(1.6e+6);
    if(input2.value=="" ||Number(input2.value)<=0) alert("Số tiền thu nhập không hợp lệ");
    if(tnct>0 && tnct<= 60*(4e+6)){
        ans=tnct*0.05;
    }
    if(tnct>60*(4e+6) && tnct<=120*(4e+6)){
        ans=tnct*0.1;
    }
    if(tnct>120*(4e+6) && tnct<=210*(4e+6)){
        ans=tnct*0.15;
    }
    if(tnct>210*(4e+6) && tnct<=384*(4e+6)){
        ans=tnct*0.2;
    }
    if(tnct>384*(4e+6) && tnct<=624*(4e+6)){
        ans=tnct*0.25;
    }
    if(tnct>624*(4e+6) && tnct<=960*(4e+6)){
        ans=tnct*0.3;
    }
    if(tnct>960*(4e+6)){
        ans=tnct*0.35;
    }
    ans=new Intl.NumberFormat('vn-VN').format(ans);
    text_ans="Họ tên: " + input1.value +"; Tiền thuế thu nhập cá nhân: " +ans.toString() +" VND";
    result.innerHTML=text_ans;
}