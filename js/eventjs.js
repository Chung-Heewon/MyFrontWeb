alert("0") // script 영역을 만나자마다 "0"이 뜬다. 
window.addEventListener('load',function(){ 
    alert("1")
    let resultobj=
      document.getElementById('result') //HTMLElement 타입 반환
    console.log(resultobj);

    let resultObj2=
      document.querySelector('input[type=text]') //Element타입 반환
              //querySelector("#result")

        console.log(resultObj2)
        resultObj2.value = 'HELLO'//<input type="" value="" maxLength=10>
        resultObj2.maxLength = 10;
        resultObj2.style.color = 'blue';
        resultObj2.style.backgroundColor = 'yellow';

    let num = 0;
    let op;
    let bts = document.querySelectorAll('button');
    for(let i=0; i<bts.length; i++){
        //console.log(bts[i].innerHTML)
        // bts[i].addEventListener("click",function(){
            //console.log(bts[i].innerHTML)
            //alert(this.innerHTML) //this : click이벤트가 발생된 곳
        // })        
        bts[i].addEventListener("click",()=>{
            switch(bts[i].innerHTML){
                case '=':
                    resultObj2.value = num;
                    op = undefined;
                    break;
                case '+':
                case '-':
                    op = bts[i].innerHTML;
                    break;
                default : 
                    resultObj2.value = bts[i].innerHTML;
                    if(op == '+'){
                        num += parseInt(resultObj2.value)
                    }else if(op == '-'){
                        num -= parseInt(resultObj2.value)
                    }else{
                        num = parseInt(resultObj2.value)
                    }
                    
                    //num = Number(resultObj2.value) //문자->숫자
            }
            
            console.log(bts[i].innerHTML, num)
            //alert(this.innerHTML)
            // console.log(this) //this : Window객체
        })
    }
    //DOM트리에서 all checkbox 객체찾기
    let chkAllObj=
        document.querySelector(
            'fieldset.all>input[type=checkbox]')

    //DOM트리에서 one, two, three check 객체 찾기
    let chkobjs = 
        document.querySelectorAll(
        'fieldset.each>input[type=checkbox]' )
    //--all checkbox객체 클릭되었을 때 START--
    chkAllObj.addEventListener('click', (e)=>{
        //console.log(e.target.checked)
        chkobjs.forEach((chk)=>{
            chk.checked=e.target.checked
        })
    })
    //--all checkbox객체 클릭되었을 때 END--
})
