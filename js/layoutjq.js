
$(() => {
    const btLoginObj = $("header>nav>ul>li.login")
    const btSignupObj = $("header>nav>ul>li.signup")
    const selectObj = $("section")

    //--버튼클릭되었을 때 할 일 START --
    btLoginObj.click(() => {
        
        $.ajax({
            url: "./login.html",
            success: (responseData)=>{
                selectObj.html(responseData)
            },
            error: (jqXhr, status)=>{
                alert(`status : ${status}, jqXhr.status:${jqXhr.status}`)
            }
        })
        return false;
    })
    
    //--버튼클릭되었을 때 할 일 End--
    btSignupObj.click(() => {
        
        $.ajax({
            url: './signup.html',
            success: (responseData)=>{
                selectObj.html(responseData)
            },
            error: (jqXhr, status)=>{
                alert(`status : ${status}, jqXhr.status:${jqXhr.status}`)
            }
        })
        return false;
    })
})