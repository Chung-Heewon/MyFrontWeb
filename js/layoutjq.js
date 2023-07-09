
// $(() => {
//     const btLoginObj = $("header>nav>ul>li.login")
//     const btSignupObj = $("header>nav>ul>li.signup")
//     const btProductlist = $("header>nav>ul>li.productlist")
//     const selectObj = $("section")

//     //--로그인메뉴 버튼클릭되었을 때 할 일 START --
//     btLoginObj.click(() => { //로그인메뉴
        
//         $.ajax({
//             url: "./login.html",
//             success: (responseData)=>{
//                 selectObj.html(responseData)
//             },
//             error: (jqXhr, status)=>{
//                 alert(`status : ${status}, jqXhr.status:${jqXhr.status}`)
//             }
//         })
//         return false;
//     })
    
//     //--메뉴버튼클릭되었을 때 할 일 START--
//     btSignupObj.click(() => { 
        
//         $.ajax({
//             url: './signup.html',
//             success: (responseData)=>{
//                 selectObj.html(responseData)
//             },
//             error: (jqXhr, status)=>{
//                 alert(`status : ${status}, jqXhr.status:${jqXhr.status}`)
//             }
//         })
//         return false;
//     })
//     //--상품목록 클릭되었을때 할 일
//     btProductlist.clikc(()=>{
//         location.href= `${frontURL}/productlist.html`
//     })
// })
//선생님 파일
// const frontURL = 'http://localhost:5500/html'
// const backURL = 'http://localhost:8888/back1'

function showAjax(url, targetObj) {
    targetObj.load(url)
}
$(() => {
    const menuObjs = $('header>nav>ul>li>a')
    const sectionObj = $('section')
    /*-----------------------------
    <a href="./a.html">
    주의 : js에서  
        document.querySelector("a").href속성값은 'http://127.0.0.1:5500/html/a.html'
        jq에서
        $("a").attr("href")속성값은 './a.html'이다
    -------------------------------*/
    menuObjs.click((e) => {
        console.log($(e.target).attr('href'))
        switch ($(e.target).attr('href')) {
            case `./login.html`:
                showAjax($(e.target).attr('href'), sectionObj)
                break
            case `./signup.html`:
                showAjax($(e.target).attr('href'), sectionObj)
                break
            case `./productlist.html`:
                location.href= `${frontURL}/productlist.html`
                break
        }
        return false
    });
})