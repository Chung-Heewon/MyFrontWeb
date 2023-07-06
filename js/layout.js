window.addEventListener('load', () => {
    const btLoginObj =
        document.querySelector("header>nav>ul>li.login")
    const btSignupObj =
        document.querySelector("header>nav>ul>li.signup")
    const selectObj =
        document.querySelector("section")
    //--버튼클릭되었을 때 할 일 START --
    btLoginObj.addEventListener('click', (e) => {
        const xhttp = new XMLHttpRequest();
        e.preventDefault();

        xhttp.addEventListener('load', (e) => {
            selectObj.innerHTML = e.target.responseText;
        })

        xhttp.open("get", "login.html")
        xhttp.send()
    })
    //--버튼클릭되었을 때 할 일 End--
    btSignupObj.addEventListener('click', (e) => {
        const xhttp = new XMLHttpRequest();
        e.preventDefault();

        xhttp.addEventListener('load', (e) => {
            selectObj.innerHTML = e.target.responseText;
        })

        xhttp.open("get", "signup.html")
        xhttp.send()
    })
})