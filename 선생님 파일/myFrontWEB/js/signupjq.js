$(()=>{
    //DOM트리에서 form객체찾기
    const formObj = $('form.signup')
    
    //아이디입력란 객체찾기
    const inputIdObj = $('form.signup>input[name=id]')

    //아이디중복확인버튼 객체찾기
    const btIdDupchk = $('form.signup>button.iddupchk')

    //가입버튼 객체찾기
    const btSignup = $('form.signup>button.signup')
    
    
    //아이디중복확인버튼-일반버튼, 
    btIdDupchk.click(()=>{
        if(inputIdObj.val() == 'id1'){
            alert('이미사용중인 아이디입니다')
        }else{
            btSignup.show()
        }    
    })

    //가입버튼-전송버튼 클릭->
    //폼의 서브밋이벤트발생
   
    //--폼 서브밋이벤트발생시 할 일 START--
    formObj.submit((e)=>{   
         
        //비밀번호1,2가 일치 확인
        const pwdObj = $('form.signup>input[name=pwd]')
        const pwd1Obj = $('#p1')
        if(pwdObj.value != pwd1Obj.value){
            alert('비밀번호가 일치하지 않습니다')
            pwdObj.focus()
            return false
        }        
        $(e.target)
        .attr('action','http://localhost:8888/back/signup')
        .attr('method','post')

        alert(formObj.serialize())
        $.ajax({
            url: $(e.target).attr('action'),
            method: $(e.target).attr('method'),
            data: 
                formObj.serialize(),
            // {
            //     id:  inputIdObj.val(),
            //     pwd: pwdObj.val(),
            //     name: $('form.signup>input[name=name]').val()
            // },
            //{id:'abc', pwd:'p1', name:'n1'},
            //"id=abc&pwd=p1&name=n1",
            // success:(responseData)=>{
                //const responseObj = JSON.parse(responseData) //json문자열을 js객체로 변환
            success: (responseObj) =>{
                if(responseObj.status == 0){
                    //실패경우 할 일
                    alert("실패:" + responseObj.msg)
                }else{
                    //성공경우 할 일
                    alert(responseObj.msg)
                }
                // alert(responseData)
            },
            error:(xhr)=>{
                alert("에러:" + xhr.status)
            }
        })
        return false //e.preventDefault() e.stopPropagation()
    })
    //--폼 서브밋이벤트발생시 할 일 END--

    //--아이디입력란에 'focus'이벤트발생시 할 일 START--
    inputIdObj.focus( ()=>{
        //가입버튼 사라지기
        btSignup.hide()
    })
    //--아이디입력란에 'focus'이벤트발생시 할 일 END--
    
})