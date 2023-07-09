const frontURL = 'http://localhost:5500/html'
const backURL = 'http://localhost:8888/back'

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
        }
        return false
    });
})