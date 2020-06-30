
/* make api reguest*/
const url = 'http://localhost:3000/api/cameras';
let apiRequest = new XMLHttpRequest();
const getAllProduct = document.getElementById('getallproduct');


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
         +  '<button type="button" >' +'Discover more'+ '</button>' +'</li>'
    }
    listProduct += ' </ul>';
    getAllProduct.innerHTML = listProduct;

}

/*+ /'<a href =>'+ 'Discover more' + '</a>'+ '</li>';*/

/* single page */
let singleApi = new XMLHttpRequest;
const singlePage = document.getElementById('singlepage');


singleApi.onreadystatechange = function(){
    if (singleApi.readyState === 4){
        if (singleApi.status === 404){
            return singleApi.textContent='page not found';
        }else{
            let singlePageResponse = JSON.parse(singleApi.response);
            displySingleProduct(singlePageResponse);
        }
    }
}

singleApi.open('GET',url,'/:_id -5be9c8541c9d440000665243');
singleApi.send;
function displySingleProduct (array){
 let singleA = '<ul>';
singleA = '<li>' + '<img src ='+ array.imageUrl  + '> ' + '</li>'+
            '<li>' + array.name + '</li>' +
            '<li>' + array.price + '</li>'+
            '<li>' + array.description + '</li>'+
            '<li>' + array.lenses + '</li>';
            

}
singleA = '</ul>';
singlePage.innerHTML = singleA;

         