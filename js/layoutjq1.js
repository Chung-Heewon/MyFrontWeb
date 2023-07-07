$(()=>{
    const sectionObj = $('section')
    const menuObjs = $('header>nav>ul>li>a')
    menuObjs.forEach((menu)=>{
        menu.click((e)=>{

            console.log($(e.target).href())
            if($(e.target).href() == 'http://127.0.0.1:5500/html/login.html'){
                $.ajax({
                    url: 'http://127.0.0.1:5500/html/login.html',
                    success: (responseData)=>{
                        selectObj.html(responseData)
                    },
                    error: (jqXhr, status)=>{
                        alert(`status : ${status}, jqXhr.status:${jqXhr.status}`)
                    }
                })
            }else if(e.target.href='http://127.0.0.1:5500/html/signup.html'){
                
                
                
                
            }
        })
        return false;
    })
})