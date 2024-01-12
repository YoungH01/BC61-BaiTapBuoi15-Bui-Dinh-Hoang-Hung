var homeWorkBai1=document.getElementById("bai1");
var input1= document.getElementById("input1");
var input2= document.getElementById("input2");
var result=document.getElementById("result");
var nameButton=document.getElementById("ans");
function calculateAns(){
    var ans=0, text_ans="";
    if(input2.value=="" || Number(input2.value)<=0){
        alert("số kw không hợp lệ! Vui lòng nhập lại");
    }
    if(Number(input2.value)<=50){
        ans=Number(input2.value)*500;
    }
    if(Number(input2.value)>50 && Number(input2.value)<=100){
        ans=(Number(input2.value)-50)*650 + 50*500;
    }
    if(Number(input2.value)>100 && Number(input2.value)<=200){
        ans=50*650 + 50*500 + (Number(input2.value)-100)*850;
    }
    if(Number(input2.value)>200 && Number(input2.value)<=350){
        ans=50*650 + 50*500 + 100*850 +1100*(Number(input2.value)-200);
    }
    if(Number(input2.value)>350){
        ans=50*650 + 50*500 + 100*850 +1100*150 +1300*(Number(input2.value)-350);
    }
    ans= new Intl.NumberFormat('vn-VN').format(ans);
    text_ans="Họ tên: " + input1.value + "; Tiền điện: "+ ans.toString(); 
    result.innerHTML=text_ans;
}