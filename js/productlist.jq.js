$(() => {
    //-- 상품목록 얻기 START --
    //요청 URL : http://localhost:8888/back1/productlist
    //요청방식 : GET
    //요청 전달 데이터 : 없음

    //응답형식 : JSON
    //응답성공데이터는 js 객체

    $.ajax({
        url: 'http://localhost:8888/back1/productlist',
        method: 'GET',
        success: (responseObj) => { //자바스크립트 객체
            const productOriginObj =
                $('div.productlist>div.product').first() //원본
            responseObj.forEach((pObj) => {
                let productCloneObj = productOriginObj.clone()  //복제본
                productCloneObj.addClass(pObj.prodNo)  //복제본 클래스속성값 추가
                productCloneObj.find('ul>li>img')
                    .attr('src', `../images/${pObj.prodNo}.jpg`)
                    .attr('alt', pObj.prodNo)
                    
                    productCloneObj.find('ul>li>span').html(pObj.prodName) //복제본 상품명
                    
                    productOriginObj.parent().append(productCloneObj) //복제본 추가
                    
                })
            productOriginObj.hide()     //원본을 화면에서 사라지게 하는 것

        }
    })
    
    // const responseObj = [{ prodNo: 'C0001', prodName: '아메리카노', prodPrice: 1000 },
    // { prodNo: 'C0002', prodName: '아이스아메리카노', prodPrice: 1000 },
    // { prodNo: 'C0003', prodName: '두가지맛이 그대로', prodPrice: 1500 },
    // { prodNo: 'C0004', prodName: '유자패션피지오', prodPrice: 2000 }]
    //const productOriginObj =
    //   $('div.productlist>div.product').first() //원본
    //     responseObj.forEach((e)=>{
        //     let productCloneObj = productOriginObj.clone()  //복제본
        //     productCloneObj.addClass(e.prodNo)  //복제본 클래스속성값 추가
        //     productCloneObj.find('ul>li>img')
        //                    .attr('src',`../images/${e.prodNo}.jpg`)
    //                    .attr('alt',e.prodNo)

    //     productCloneObj.find('ul>li>span').html(e.prodName) //복제본 상품명
    
    //     productOriginObj.parent().append(productCloneObj) //복제본 추가
    
    // })            
    //     productOriginObj.hide()     //원본을 화면에서 사라지게 하는 것
    //      //-- 상품목록 얻기 END --
    
    //-- 상품클릭할 때 할 일 START-- $.deferred(promise())
    // const divProductObj = $('div.product')
    // console.log((divProductObj).length)
    $('div.productlist').on('click','div.product',(e)=>{
        alert($(e.currentTarget).attr('class')+' clicked')
        const prodNo = $(e.currentTarget).attr('class').split(" ")[1]
        alert(prodNo+' clicked')


        //--WB에는 Storage가 제공됨 : localStorage(영구 저장소), 
        //                           sessionStorage(탭단위 저장소)
        //--setItem()/getItem()/removeItem()
        
        sessionStorage.setItem("prodNo",prodNo)

        $('section').load(`./product.html?prodNo=${prodNo}`)

    })
    //-- 상품클릭할 때 할 일 END--
    
    //div.product객체가 만들어졌을때, 상품등록을 미리해놓을 수 있다. 
})