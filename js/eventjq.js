//load 이벤트가 발생하면 callback 함수 호출해(지금 당장 호출하는게 아니다)
//window.addEventListener('load',function(){ 
$(() => {
    //선택한 객체 중 첫번째 객체를 찾는 것
    //Element타입 반환, document.querySelectorAll과 같은 형식
    //first()- 첫번째, last() - 마지막
    //let resultObj2 = $('input[type=text]').first()-첫번째
    //let resultObj2 = $('input[type=text]').first()-마지막
    let resultObj2 = $('input[type=text]').eq(1) //여러 객체들중에 몇번인덱스(인덱스는 0부터시작)
    
    //querySelector("#result")
    console.log(resultObj2)

    //resultObj2.value='HELLO'//<input type="" value="" maxLength=10>
    resultObj2.val('HELLO')

    //resultObj2.maxLength=10;
    resultObj2.attr('maxLength', 10)

    //resultObj2.style.color = 'blue';
    //resultObj2.css('color','blue')

    //resultObj2.style.backgroundColor = 'yellow';
    //resultObj2.css('background-color','yellow')
    resultObj2.css({
        "color": 'red',
        "background-color": 'lightgreen'
    })
    let num = 0;
    let op;
    //let bts = document.querySelectorAll('button');
    let bts = $('button');
    //for(let i=0; i<bts.length; i++){
    //bts[i].addEventListener("click",()=>{
    bts.click((e) => {
        //switch(bts[i].innerHTML){
        switch ($(e.target).html()) {
            case '=':
                //resultObj2.value = num;
                resultObj2.val(num)
                op = undefined;
                break;
            case '+':
            case '-':
                //op = bts[i].innerHTML;
                op = $(e.target).html()
                break;
            default:
                //resultObj2.value = bts[i].innerHTML;
                resultObj2.val($(e.target).html())
                if (op == '+') {
                    //num += parseInt(resultObj2.value)
                    num += parseInt(resultObj2.val())
                } else if (op == '-') {
                    // num -= parseInt(resultObj2.value)
                    num -= parseInt(resultObj2.va())
                } else {
                    //num = parseInt(resultObj2.value)
                    num = parseInt(resultObj2.val())
                }
            //num = Number(resultObj2.value) //문자->숫자
        }
        //console.log(bts[i].innerHTML, num)
        console.log($(e.target).html(), num)

    })
    //end for
    //DOM트리에서 all checkbox 객체찾기
    let chkAllObj = $('fieldset.all>input[type=checkbox]')
    //document.querySelector(
    //'fieldset.all>input[type=checkbox]')

    //DOM트리에서 one, two, three check 객체 찾기
    let chkobjs = $('fieldset.each>input[type=checkbox]')
    // let chkobjs = 
    //     document.querySelectorAll(
    //     'fieldset.each>input[type=checkbox]' )

    //--all checkbox객체 클릭되었을 때 START--
    //chkAllObj.addEventListener('click', (e)=>{
    //console.log(e.target.checked)
    chkAllObj.click((e) => {
        //chkobjs.forEach((chk)=>{
        //chk.checked=e.target.checked //클릭되었을 때 할일을 미리 정해놓는 것(Event 처리방법)
        $(chkobjs).prop('checked',
            $(e.target).prop('checked')
        )
        //})
    })
    //--all checkbox객체 클릭되었을 때 END--

    //--차량 대분류를 선택했을 때 할 일 START--
    //let carTypeObj =
        //document.querySelector('div.car>select.type'); //대분류
    let carTypeObj =$('div.car>select.type')

    //let carType2Obj =
       // document.querySelector('div.car>select.type2'); //중분류
    let carType2Obj = $('div.car>select.type2')

    // carTypeObj.addEventListener('click', () => {
    //     console.log('clicked')
    // })

    carTypeObj.click(()=>{
        console.log('clicked')
    })

   // carTypeObj.addEventListener('change', (e) => {
    carTypeObj.change((e)=>{
        //console.log(e.target.value, 'changed')
        console.log($(e.target).val(), 'changed')

        let type2;
        //switch (e.target.value) {
        switch($(e.target).val()) {
            case 'sedan':
                type = [{ name: '쏘나타', id: 'sonata' },
                { name: '더 뉴 아반테', id: 'avante' },
                { name: '디 올 뉴 그랜저', id: 'grandure' },
                { name: '디 올 뉴 그랜저Hybrid', id: 'hybrid' }
                ]
                // carType2Obj.innerHTML = '<option>선택하세요</option>' //=은 초기화
                // carType2Obj.innerHTML += '<option value ="' + type[0].id + '">' + type[0].name + '</option>'
                // carType2Obj.innerHTML += '<option value ="' + type[1].id + '">' + type[1].name + '</option>'
                // carType2Obj.innerHTML += `<option value = "${type[2].id}">${type[2].name}</option>`
                // carType2Obj.innerHTML += `<option value = "${type[3].id}">${type[3].name}</option>`
                // carType2Obj.style.display = 'inline-block'
                carType2Obj.html('<option>선택하세요</option>')
                carType2Obj.html(carType2Obj.html()+ '<option value ="' + type[0].id + '">' + type[0].name + '</option>')
                carType2Obj.html(carType2Obj.html()+ '<option value ="' + type[1].id + '">' + type[1].name + '</option>')
                carType2Obj.html(carType2Obj.html()+`<option value = "${type[2].id}">${type[2].name}</option>`)
                carType2Obj.html(carType2Obj.html()+`<option value = "${type[3].id}">${type[3].name}</option>`)
                carType2Obj.show()
                break;
            case 'suv':
                type2 = [
                    { name: '펠리세이드', id: 'palisade' },
                    { name: '베뉴', id: 'venu' },
                    { name: '코나', id: 'kona' }]
                //carType2Obj.innerHTML = '<option>' + '선택하세요' + '</option>'
                carType2Obj.html('<option>선택하세요</option>')
                
                type2.forEach((value, index) => {
                    //carType2Obj.innerHTML +=
                    //`<option value=${value.id}>${value.name}</option>`
                    carType2Obj.html(carType2Obj.html()+`<option value=${value.id}>${value.name}</option>`)
                })
                // carType2Obj.innerHTML += '<option>'+type2[0]+ '</option>'
                // carType2Obj.innerHTML += '<option>'+type2[1]+ '</option>'
                // carType2Obj.innerHTML += '<option>'+type2[2]+ '</option>'
                //carType2Obj.style.display = 'inline-block'
                carType2Obj.show()
                break;
            case 'truck':
                type3 = ['선택하세요', '마이티', '더 뉴파비스', '엑시언트']
                let options = carType2Obj.childNodes //carType2Obj라는 기준에서부터 자식들을 찾는다. 
                // carType2Obj.innerHTML = '<option>'+'선택하세요'+'</option>'
                // carType2Obj.innerHTML += '<option>'+type3[0]+ '</option>'
                // carType2Obj.innerHTML += '<option>'+type3[1]+ '</option>'
                // carType2Obj.innerHTML += '<option>'+type3[2]+ '</option>'
                // carType2Obj.style.display = 'inline-block'
                //let options = document.querySelectorAll('div.car>select.type2>option')

                // options.forEach((option) => {
                //     console.log(option, option.nodeType) //1:Element node, 2:Attribute, 3: Text node
                //     if (option.nodeType == 1) {
                //         carType2Obj.removeChild(option)
                //     }
                // })

                carType2Obj.empty()

                type3.forEach((value) => {
                    //let optionObj = document.createElement('option')
                    let optionObj=$('<option>') //element node 생성
                    //optionObj.innerHTML = value
                    //let txtObj = document.createTextNode(value)
                    //optionObj.appendChild(txtObj)
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
    //--차량 대분류를 선택했을 때 할 일 END--

    //--입력란에 키보드입력할 때 할 일 START --
    //--DOMkeyboard입력요소 객체 찾기
    // const txtObj =
    //     document.querySelector('div.keyboard>input[type=text]')
    const txtObj= $('div.keyboard>input[type=text]')

    //txtObj.addEventListener('keyup', (e) => {
        txtObj.keyup((e)=>{
        //console.log(e.key, e.target).value)
        console.log(e.key, $(e.target).val())
        if (e.key == 'Enter') {
            this.alert('Enter를 입력하셨습니다.')
        } else {
            //e.target.value = e.target.value.toUpperCase()
            $(e.target).val($(e.target).val().toUpperCase())
        }

    })
    //--입력란에 키보드입력할 때 할 일 END --

    //--전송버튼 클릭할 때 할 일 START --
    //const btSubmit =
      //  document.querySelector('div.form>form>button')
        
    const btSubmit = $('div.form>form>button')

    //btSubmit.addEventListener('click', () => {
      //  alert("전송버튼이 출력되었습니다.")
    btSubmit.click(() => {
        alert("전송버튼이 출력되었습니다.")
    })
    //TODO : 콘솔에 전송버튼이 클릭되었습니다. 출력

    //--전송버튼 클릭할 때 할 일 END --


    //--폼의 submit이벤트 발생할 때 할 일 START --
    //const formObj = this.document.querySelector('div.form>form')
    const formObj = $('div.form>form')

    //formObj.addEventListener('submit', (e) => {
        //this.alert('submit이벤트가 발생하였습니다.')
    formObj.submit((e) => {
        alert('submit이벤트가 발생하였습니다.')
        //e.preventDefault()  //기본 이벤트를 막아라
        return false; // =e.preventDefault() 의미를 담고 있다. 
    })
    //--폼의 submit이벤트 발생할 때 할 일 end --

    //-- a객체의 click이벤트 발생할 때 할 일 START --

    //div객체
    //const linkDiveObj = document.querySelector('div.link')
    const linkDiveObj = $('div.link')
    //linkDiveObj.addEventListener('click', (e) => {
        //e.target.style.backgroundColor = 'yellow'
    linkDiveObj.click((e) => {
        $(e.target).css('background-color','yellow')
    })

    //a객체
    //const aObj = this.document.querySelector('div.link>a')
    const aObj = $('div.link>a')

    // aObj.addEventListener('click', (e) => {
    //     this.alert('링크 클릭')
        // e.preventDefault() //a tag의 기본 event인 click event를 하지 말아라
    aObj.click((e) => {
        this.alert('링크 클릭')
        // e.preventDefault() //a tag의 기본 event인 click event를 하지 말아라
        // e.stopPropagation() //이벤트의 전파를 중지하겠다.
        return false;
    })
    //-- a객체의 click 이벤트 발생할 때 할 일 END --
})
