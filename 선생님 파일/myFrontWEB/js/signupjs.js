//dom트리가 완성되고 
//렌더링준비가 완료되었을때 window객체의 load이벤트가 발생한다
window.addEventListener('load', ()=>{
// document.addEventListener('DOMContentLoaded', ()=>{
    alert("가입용 로드")
    //DOM트리에서 form객체찾기
    const formObj = document.querySelector('form.signup')
    
    //아이디입력란 객체찾기
    const inputIdObj = document.querySelector('form.signup>input[name=id]')

    //아이디중복확인버튼 객체찾기
    const btIdDupchk = document.querySelector('form.signup>button.iddupchk')

    //가입버튼 객체찾기
    const btSignup = document.querySelector('form.signup>button.signup')
    
    
    //아이디중복확인버튼-일반버튼, 
    btIdDupchk.addEventListener('click', ()=>{
        if(inputIdObj.value == 'id1'){
            alert('이미사용중인 아이디입니다')
        }else{
            btSignup.style.display = 'block'
        }    
    })

    //가입버튼-전송버튼 클릭->
    //폼의 서브밋이벤트발생
   
    //--폼 서브밋이벤트발생시 할 일 START--
    formObj.addEventListener('submit', 
                              (e)=>{   
         
        //비밀번호1,2가 일치 확인
        const pwdObj = document.querySelector('form.signup>input[name=pwd]')//TODO
        const pwd1Obj = document.querySelector('#p1')
        if(pwdObj.value != pwd1Obj.value){
            alert('비밀번호가 일치하지 않습니다')
            pwdObj.focus()
            e.preventDefault();
            return false
        }        
        e.target.action = 'http://localhost:8888/back/signup'   //'http://www.naver.com'
        e.target.method = 'post'
        //e.preventDefault();
    })
    //--폼 서브밋이벤트발생시 할 일 END--

    //--아이디입력란에 'focus'이벤트발생시 할 일 START--
    inputIdObj.addEventListener('focus', ()=>{
        //가입버튼 사라지기
        btSignup.style.display = 'none'
    })
    //--아이디입력란에 'focus'이벤트발생시 할 일 END--
    
})