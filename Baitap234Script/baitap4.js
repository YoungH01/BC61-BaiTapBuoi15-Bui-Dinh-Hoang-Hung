var homeWorkBai1=document.getElementById("bai1");
var input1= document.getElementById("input1");
var input2= document.getElementById("input2");
var input3= document.getElementById("input3");
var input4= document.getElementById("input4");
var result=document.getElementById("result");
var nameButton=document.getElementById("ans");
    // hidden input4
input4.style.visibility="hidden";
function appear(){
    if(input1.value=="doanhNghiep"){
        input4.style.visibility="visible";
    }
    if(input1.value=="nhaDan"){
        input4.style.visibility="hidden";
    }
}
function calculateAns(){
    var ans=0,text_ans="";
    if(input1.value=="0") {
        alert("Hãy chọn loại khách hàng");
        return;
    }
    if(input1.value=="nhaDan"){
        ans=4.5 +20.5 + 7.5*Number(input3.value);
    }
    if(input1.value=="doanhNghiep"){
        ans=15 + 50*Number(input3.value);
        if(Number(input4.value)<=10){
            ans+=75;
        }else ans +=(10*75 +(Number(input4.value)-10)*5);
    }
    ans=new Intl.NumberFormat('vn-VN').format(ans);
    text_ans="Mã khách hàng: "+input2.value +"; Tiền cáp: $"+ ans.toString();
    result.innerHTML=text_ans;
    return ;
}