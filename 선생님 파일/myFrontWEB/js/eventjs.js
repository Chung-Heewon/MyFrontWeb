alert("0")

window.addEventListener('load', function(){
    alert("1")
    let resultObj = 
      document.getElementById('result') //HTMLElement타입 반환
    console.log(resultObj)

    let resultObj2 = 
      document.querySelector('input[type=text]') //Element타입 반환 
             //querySelector("#result")
    
    console.log(resultObj2)
    resultObj2.value = 'HELLO' //<input type="" value="" maxLength="10">
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

    //DOM트리에서 all checkbox객체찾기
    let chkAllObj = 
        document.querySelector(
            'fieldset.all>input[type=checkbox]')
    
    //DOM트리에서 one, two, three checkbox객체찾기
    let chkObjs = document.querySelectorAll(
        'fieldset.each>input[type=checkbox]'
    )

    //---all checkbox객체 클릭되었을때 할 일START---
    chkAllObj.addEventListener('click' 
        ,(e)=>{
        // console.log(e.target.checked)
        chkObjs.forEach((chk)=>{
            chk.checked = e.target.checked
        })
    })
    //---all checkbox객체 클릭되었을때 할 일END---
            
    
    //--차량 대분류를 선택했을때 할 일 START--
    let carTypeObj = 
        document.querySelector('div.car>select.type'); //대분류

    let carType2Obj = 
        document.querySelector('div.car>select.type2') //중분류

    carTypeObj.addEventListener('click', ()=>{
        console.log('clicked')
    })

    carTypeObj.addEventListener('change', (e)=>{
        console.log(e.target.value, 'changed')
        let type2;
        switch(e.target.value){
            case 'sedan':
                // type2 = ['쏘나타', '더 뉴 아반테', '디 올 뉴 그랜저', '디 올 뉴 그랜저Hybrid']    
                type2 = [{name: '쏘나타',               id : 'sonata'},
                         {name: '더 뉴 아반테',          id : 'avante'},
                         {name: '디 올 뉴 그랜저',       id : 'grandure'},
                         {name: '디 올 뉴 그랜저Hybrid', id: 'hybrid'}
                ]
                carType2Obj.innerHTML = '<option>선택하세요</option>'
                carType2Obj.innerHTML += '<option value="'+type2[0].id +'">'+type2[0].name + '</option>'
                carType2Obj.innerHTML += '<option value="'+type2[1].id +'">'+type2[1].name + '</option>'
                carType2Obj.innerHTML += `<option value="${type2[2].id}">${type2[2].name}</option>`
                carType2Obj.innerHTML += `<option value="${type2[3].id}">${type2[3].name}</option>`
                
                carType2Obj.style.display = 'inline-block'
                break;
            case 'suv':
                type2 = [
                    {name:'팰리세이드', id:'palisade'}, 
                    {name:'베뉴', id:'venu'}, 
                    {name:'코나', id:'cona'}]
                carType2Obj.innerHTML = '<option>선택하세요</option>'
                type2.forEach((value, index)=>{
                    carType2Obj.innerHTML += 
                        `<option value=${value.id}>${value.name}</option>`
                })
                carType2Obj.style.display = 'inline-block'
                
                break;
            case 'truck':
                type2 = ['선택하세요', '마이티', '파비스', '엑시언트', '엑시언트수소전기트럭']
                // let options = carType2Obj.childNodes
                // options.forEach((option)=>{
                    // console.log(option, option.nodeType)//1: Element node, 2:Attribute, 3: Text node
                    // if(option.nodeType == 1){
                        // carType2Obj.removeChild(option)
                    // }
                // })       
                while(carType2Obj.firstChild){
                    console.log(carType2Obj.firstChild)
                    carType2Obj.removeChild(carType2Obj.firstChild)
                }
                type2.forEach((value)=>{
                    let optionObj = document.createElement('option')
                    let txtObj = document.createTextNode(value)
                    optionObj.appendChild(txtObj)
                    carType2Obj.appendChild(optionObj)
                })
 
                carType2Obj.style.display = 'inline-block'
                break;
            default:
                carType2Obj.style.display = 'none'
    
        }


    })
    //--차량 대분류를 선택했을때 할 일 END--

    //--입력란에 키보드입력할때 할 일 START--
    //DOMkeyboard입력요소 객체 찾기
    const txtObj = 
        document.querySelector('div.keyboard>input[type=text]')
    txtObj.addEventListener('keyup', (e)=>{
        console.log(e.key, e.target.value)
        if(e.key == 'Enter'){
            this.alert('Enter를 입력했습니다')
        }else{
           e.target.value = e.target.value.toUpperCase()
        }
    })
    //--입력란에 키보드입력할때 할 일 END--
    
    //--전송버튼 클릭할때 할 일 START--
    const btSubmitObj =  
            document.querySelector('div.form>form>button')
    //TODO : 경고에 '전송버튼이 클릭되었습니다' 출력
    btSubmitObj.addEventListener('click', ()=>{
        alert('전송버튼이 클릭되었습니다')
    })
    //--전송버튼 클릭할때 할 일 END--

    
    //--폼의 submit이벤트 발생할때 할 일 START--
    const formObj = this.document.querySelector('div.form>form')
    formObj.addEventListener('submit', (e)=>{
        alert('submit이벤트가 발생했습니다')
        e.preventDefault()
    })
    //--폼의 submit이벤트 발생할때 할 일 END--

    //--a객체의 click이벤트 발생할 때 할 일 START--
    
    //div객체
    const linkDivObj = document.querySelector('div.link')
    linkDivObj.addEventListener('click', (e)=>{
        e.target.style.backgroundColor = 'blue'
    })

    //a객체
    const aObj = document.querySelector('div.link>a')
    aObj.addEventListener('click', (e)=>{
        this.alert('링크 클릭')
        e.preventDefault() //기본이벤트처리를 막아라
        e.stopPropagation() //이벤트전파를 중지한다
    })
    //--a객체의 click이벤트 발생할 때 할 일 END--


})


