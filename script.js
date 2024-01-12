var homeWorkBai1=document.getElementById("bai1");
var title =document.getElementById("title");
var input1= document.getElementById("input1");
var input2= document.getElementById("input2");
var input3= document.getElementById("input3");
var input4= document.getElementById("input4");
var input5= document.getElementById("input5");
var input6= document.getElementById("input6");
var result=document.getElementById("result");
var nameButton=document.getElementById("ans");
function calculateAns(){
    var ans=0,text_ans="";
    if(input2.value=="A"){
        ans+=2;
    }
    if(input2.value=="B"){
        ans+=1;
    }
    if(input2.value=="C"){
        ans+=0.5;
    }
    //input3
    if(input3.value=="1"){
        ans+=2.5;
    }if(input3.value=="2"){
        ans+=1.5;
    }if(input3.value=="3"){
        ans+=1;
    }
    ans+= Number(input6.value) +Number(input4.value)+Number(input5.value);
    if(Number(input6.value)==0 || Number(input4.value)==0 || Number(input5.value)==0){
        result.innerHTML="Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0";
        return;
    }
    if(ans>= Number(input1.value)){
        text_ans= "Bạn đã đậu. "+"Tổng điểm: " +ans.toString();
        result.innerHTML=text_ans;
    }else{
        text_ans= "Bạn đã rớt. "+"Tổng điểm: " +ans.toString();
        result.innerHTML=text_ans;
    }
    return;
}