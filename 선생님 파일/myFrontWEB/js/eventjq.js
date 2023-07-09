//alert("0")

//window.addEventListener('load', function(){
$(()=>{    
    //alert("1")

    // let resultObj2 = $('input[type=text]') //    
    // let resultObj2 = $('input[type=text]').first()
    // let resultObj2 = $('input[type=text]').last()
    let resultObj2 = $('input[type=text]').eq(0) //index는 0부터
    console.log(resultObj2)
    //resultObj2.value = 'HELLO' //<input type="" value="" maxLength="10">
    resultObj2.val('HELLO')

    //resultObj2.maxLength = 10; 
    resultObj2.attr('maxLength', 10)

    //resultObj2.style.color = 'blue';
    //resultObj2.css('color', 'blue')

    //resultObj2.style.backgroundColor = 'yellow';
    //resultObj2.css('background-color', 'yellow')
    resultObj2.css({"color": 'blue', 
                    "background-color":'yellow'
                })

    let num = 0;
    let op;
    //let bts = document.querySelectorAll('button');
    let bts = $('button')
    //for(let i=0; i<bts.length; i++){
    //    bts[i].addEventListener("click",()=>{
    bts.click((e)=>{
        //switch(bts[i].innerHTML){
        switch($(e.target).html()){
            case '=':
                // resultObj2.value = num;
                resultObj2.val(num)
                op = undefined;
                break;
            case '+':
            case '-':
                // op = bts[i].innerHTML;
                op = $(e.target).html()
                break;
            default : 
                // resultObj2.value = bts[i].innerHTML;
                resultObj2.val($(e.target).html())
                if(op == '+'){
                    // num += parseInt(resultObj2.value)
                    num += parseInt(resultObj2.val())
                }else if(op == '-'){
                    // num -= parseInt(resultObj2.value)
                    num -= parseInt(resultObj2.val())
                }else{
                    // num = parseInt(resultObj2.value)
                    num = parseInt(resultObj2.val())
                }
                //num = Number(resultObj2.value) //문자->숫자
        }        
        // console.log(bts[i].innerHTML, num)
        console.log($(e.target).html(), num)
    })
    //} //end for

    //DOM트리에서 all checkbox객체찾기
    // let chkAllObj = 
        // document.querySelector(
        //     'fieldset.all>input[type=checkbox]')
    let chkAllObj = $('fieldset.all>input[type=checkbox]')
    //DOM트리에서 one, two, three checkbox객체찾기
    // let chkObjs = document.querySelectorAll(
    //     'fieldset.each>input[type=checkbox]'
    // )
    let chkObjs = $('fieldset.each>input[type=checkbox]')
    
    //---all checkbox객체 클릭되었을때 할 일START---
    //chkAllObj.addEventListener('click' 
        // ,(e)=>{
    chkAllObj.click((e)=>{        
        //chkObjs.forEach((chk)=>{
            // chk.checked = e.target.checked
            $(chkObjs).prop('checked',
                    $(e.target).prop('checked')
            )
        //})
    })
    //---all checkbox객체 클릭되었을때 할 일END---
            
    
    //--차량 대분류를 선택했을때 할 일 START--
    // let carTypeObj = 
    //     document.querySelector('div.car>select.type'); //대분류

    let carTypeObj = $('div.car>select.type')
    // let carType2Obj = 
    //     document.querySelector('div.car>select.type2') //중분류
    let carType2Obj = $('div.car>select.type2')

    // carTypeObj.addEventListener('click', ()=>{
    //     console.log('clicked')
    // })
    carTypeObj.click(()=>{
        console.log('clicked')
    })

    //carTypeObj.addEventListener('change', (e)=>{
    carTypeObj.change((e)=>{    
        //console.log(e.target.value, 'changed')
        console.log($(e.target).val(), 'changed')
        
        let type2;
        // switch(e.target.value){
        switch($(e.target).val()){
            case 'sedan':
                // type2 = ['쏘나타', '더 뉴 아반테', '디 올 뉴 그랜저', '디 올 뉴 그랜저Hybrid']    
                type2 = [{name: '쏘나타',               id : 'sonata'},
                         {name: '더 뉴 아반테',          id : 'avante'},
                         {name: '디 올 뉴 그랜저',       id : 'grandure'},
                         {name: '디 올 뉴 그랜저Hybrid', id: 'hybrid'}
                ]
                // carType2Obj.innerHTML = '<option>선택하세요</option>'
                carType2Obj.html('<option>선택하세요</option>')
                // carType2Obj.innerHTML += '<option value="'+type2[0].id +'">'+type2[0].name + '</option>'
                carType2Obj.html(carType2Obj.html()
                    +'<option value="'+type2[0].id +'">'+type2[0].name + '</option>')
                // carType2Obj.innerHTML += '<option value="'+type2[1].id +'">'+type2[1].name + '</option>'
                carType2Obj.html(carType2Obj.html()
                    +'<option value="'+type2[1].id +'">'+type2[1].name + '</option>')
                // carType2Obj.innerHTML += `<option value="${type2[2].id}">${type2[2].name}</option>`
                carType2Obj.html(carType2Obj.html()
                    +`<option value="${type2[2].id}">${type2[2].name}</option>`)
                // carType2Obj.innerHTML += `<option value="${type2[3].id}">${type2[3].name}</option>`
                carType2Obj.html(carType2Obj.html()
                    +`<option value="${type2[3].id}">${type2[3].name}</option>`)
                // carType2Obj.style.display = 'inline-block'
                carType2Obj.show()
                break;
            case 'suv':
                type2 = [
                    {name:'팰리세이드', id:'palisade'}, 
                    {name:'베뉴', id:'venu'}, 
                    {name:'코나', id:'cona'}]
                //carType2Obj.innerHTML = '<option>선택하세요</option>'
                carType2Obj.html('<option>선택하세요</option>')
                
                type2.forEach((value, index)=>{
                    // carType2Obj.innerHTML += 
                        // `<option value=${value.id}>${value.name}</option>`
                    carType2Obj.html(carType2Obj.html() + `<option value=${value.id}>${value.name}</option>`)
                })
                //carType2Obj.style.display = 'inline-block'
                carType2Obj.show()
                break;
            case 'truck':
                type2 = ['선택하세요', '마이티', '파비스', '엑시언트', '엑시언트수소전기트럭']
                let options = carType2Obj.childNodes

                //options.forEach((option)=>{
                    //console.log(option, option.nodeType)//1: Element node, 2:Attribute, 3: Text node
                    // if(option.nodeType == 1){
                        //carType2Obj.removeChild(option)
                        
                    //}
                //})
                carType2Obj.empty()

                type2.forEach((value)=>{
                    //let optionObj = document.createElement('option')
                    let optionObj = $('<option>')

                    // let txtObj = document.createTextNode(value)               
                    // optionObj.appendChild(txtObj)
                    optionObj.text(value)

                    //carType2Obj.appendChild(optionObj)
                    carType2Obj.append(optionObj)
                })
 
                //carType2Obj.style.display = 'inline-block'
                carType2Obj.show()
                break;
            default:
                //carType2Obj.style.display = 'none'
                carType2Obj.hide()
    
        }
    })
    //--차량 대분류를 선택했을때 할 일 END--

    //--입력란에 키보드입력할때 할 일 START--
    //DOMkeyboard입력요소 객체 찾기
    // const txtObj = 
        // document.querySelector('div.keyboard>input[type=text]')
    const txtObj = $('div.keyboard>input[type=text]') 
    // txtObj.addEventListener('keyup', (e)=>{
    txtObj.keyup((e)=>{
        //console.log(e.key, e.target.value)
        console.log(e.key, $(e.target).val())
        if(e.key == 'Enter'){
            this.alert('Enter를 입력했습니다')
        }else{
           //e.target.value = e.target.value.toUpperCase()
           $(e.target).val($(e.target).val().toUpperCase())
        }
    })
    //--입력란에 키보드입력할때 할 일 END--
    
    //--전송버튼 클릭할때 할 일 START--
    // const btSubmitObj =  
            // document.querySelector('div.form>form>button')
    const btSubmitObj =$('div.form>form>button')
    //TODO : 경고에 '전송버튼이 클릭되었습니다' 출력
    //btSubmitObj.addEventListener('click', ()=>{
    btSubmitObj.click(()=>{
        alert('전송버튼이 클릭되었습니다')
    })
    //--전송버튼 클릭할때 할 일 END--

    
    //--폼의 submit이벤트 발생할때 할 일 START--
    //const formObj = document.querySelector('div.form>form')
    const formObj = $('div.form>form')
    //formObj.addEventListener('submit', (e)=>{
    formObj.submit((e)=> {   
        alert('submit이벤트가 발생했습니다')
        //e.preventDefault()
        return false
    })
    //--폼의 submit이벤트 발생할때 할 일 END--

    //--a객체의 click이벤트 발생할 때 할 일 START--
    
    //div객체
    // const linkDivObj = document.querySelector('div.link')
    const linkDivObj = $('div.link')
    // linkDivObj.addEventListener('click', (e)=>{
    linkDivObj.click((e)=>{    
    //     e.target.style.backgroundColor = 'blue'
        $(e.target).css('background-color', 'blue')
    })

    //a객체
    //const aObj = document.querySelector('div.link>a')
    const aObj = $('div.link>a')
    aObj.click((e)=>{
        this.alert('링크 클릭')
        // e.preventDefault() //기본이벤트처리를 막아라
        // e.stopPropagation() //이벤트전파를 중지한다
        return false
    })
    //--a객체의 click이벤트 발생할 때 할 일 END--


})

//alert("2")


