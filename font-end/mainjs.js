
/* make api reguest*/
const url = 'http://localhost:3000/api/cameras';
let apiRequest = new XMLHttpRequest();
const getAllProduct = document.getElementById('getallproduct');
let id = 0;

apiRequest.onreadystatechange = function () {

    if (apiRequest.readyState === 4) {
        if (apiRequest.status === 404) {
            return getAllProduct.textContent = 'product not found';
        } else {
            var response = JSON.parse(apiRequest.response);
            displayProduct(response);
        }
    }
}

apiRequest.open('GET', url);
apiRequest.send();
function displayProduct(array) {

    /* link the api data to html*/
    let listProduct = '<ul>'
    for (let i = 0; i < array.length; i++) {
        listProduct += '<li>' + '<img width=250px  height =250px  src =' + array[i].imageUrl + '>'+ '<br>'
        +'Name:' + ''+ array[i].name + '<br>' 
         + 'price:' + '' + array[i].price + '<br>' 
         + 'Description:'+ ''  + array[i].description + '<br>'
         + '<a href="./productPage.html">' + '<button type="button"  onclick="displaySingleProduct(\'' +array[i]._id +'\')"   id="buttonsinglePage">'
          +'Discover more'+ '</button>' +'<a/>' +'</li>'
         
    }
    listProduct += ' </ul>';
    getAllProduct.innerHTML = listProduct;

}

/*------------------------------------------------------------------------------------------------------------------*/



/* single page */


let productPage = document.getElementById('productId');
 //document.getElementById("buttonsinglePage").addEventListener('click',displaySingleProduct);
function displaySingleProduct(productId){
    let singlePageApiRequest =new.XMLHttpRequest();
    singlePageApiRequest.onreadystatechange= function(){
        if (singlePageApiRequest.readyState === 4){
            if( singlePageApiRequest.status === 404){
           productPage.textContent ='page not fond';
            }else{
                let singlePageResponse = JSON.parse(singlePageApiRequest.response);
                productPage();
            }
        }
    }
    singlePageApiRequest.open('GET',url+'/'+productPage);
    singlePageApiRequest.send
}

console.log('hi');

