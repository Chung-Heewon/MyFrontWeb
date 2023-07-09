$(()=>{
    const formObj = $('form.login')
    // const btObj = $('form.login>button')

    formObj.submit((e)=>{
        const data = $(e.target).serialize()
        $.ajax({
            url: 'http://localhost:8888/back/login',
            method: 'post',
            data : data,
            success: (responseObj)=>{
                if(responseObj.status == 0){//로그인 실패인 경우
                    alert(responseObj.msg)
                    $('form.login>input[name=id]').focus()
                }else{ //로그인 성공인 경우

                }
            },
            error: (xhr)=>{
                alert("에러:" + xhr.status)
            }
        })
        return false
    })
})