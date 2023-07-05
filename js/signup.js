//dom트리가 완성되고 
//렌더링준비가 완료되었을때 widnow객체의 load이벤트가 발생한다. 
window.addEventListener('load', ()=>{
    //DOM 트리에서 form객체 찾기
    const formObj= 
    document.querySelector('form.signup')

    //아이디입력란 객체찾기
    const inputIdObj =
    document.querySelector('form.signup>input[id=id]')

    //아이디중복확인버튼 객체 찾기
    const btIdDupchk = 
    document.querySelector('form.signup>button.iddupchk')

    //가입버튼객체 찾기
    const btSignup=
    document.querySelector('form.signup>button.signup')
    //아이디중복확인버튼-일반버튼,
    btIdDupchk.addEventListener('click', ()=>{
        if(inputIdObj.value =='id1'){
            alert('이미가입된 아이디입니다.')
        }else{
            btSignup.style.display = 'block'
        }
    }) 

    //가입버튼-전송버튼 클릭 ->
    //폼의 서브밋이벤트발생

    //--폼 서브밋이벤트발생시 할 일 START--
    formObj.addEventListener('submit',
                             (e)=>{
        //아이디입력값이 'id1'인 경우
        //이미사용중인 아이디입니다. 경고창을 보여준다. 
        //아이디입력값이 'id1'가 아닌 경우
        //가입버튼을 화면에 보여주기하기 
        
            //비밀번호1,2가 일치 확인
            const pwdObj = document.querySelector('form.signup>input[id=pwd]')
            const pwd1Obj =document.querySelector('#pwd1') 
            if(pwdObj.value!=pwd1Obj.value){
                alert('비밀번호가 일치하지 않습니다.')
                pwdObj.focus();
                e.preventDefault();
                return false;
            }
            e.target.action = 'http://localhost:8888/back1/signup' //"http://www.naver.com"
            e.target.method = 'post'
        })
            
    //--폼 서브밋이벤트발생시 할 일 End--
    inputIdObj.addEventListener('focus',()=>{

    
    //--아이디입력란에 'focus'이벤트발생시 할 일 START --
        btSignup.style.display='none'
        //--가입버튼 사라지기
    })
    //--아이디입력란에 focus이벤트발생시 할 일 END --
})