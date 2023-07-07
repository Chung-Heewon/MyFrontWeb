$(() => {
    const loginObj = $('form.login')

    loginObj.submit((e) => {
        //const data = loginObj.serialize()

        $(e.target)
            .attr('action', 'http://localhost:8888/back1/login')
            .attr('method', 'post')
        $.ajax({
            url: $(e.target).attr('action'),
            method: $(e.target).attr('method'),
            data: loginObj.serialize(),
            success: (responseObj) => {
                if (responseObj.status == 0) {
                    alert(responseObj.msg)
                } else { // 로그인성공할 경우
                    alert(responseObj.msg)
                }
            }
        })
         return false;
    })
})