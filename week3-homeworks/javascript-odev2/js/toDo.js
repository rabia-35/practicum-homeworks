let lists=document.querySelectorAll("li")
let input=document.querySelector("#task")
let addButton=document.querySelector("#liveToastBtn")

let showAllLists; // newElemet functionda da uygulamak için değişkeni forEach'in dışında tanımladım.

lists.forEach((list)=>{ // tüm listeye uygulamak için forEach functionın içine koduları yazdım.

    showAllLists=(list)=>{
    let spanDelete=document.createElement("span") // DOM da yeni bir span oluşturma
    let closeIcon = document.createTextNode("\u00D7") // yeni bir X ifadesi oluşturma
    spanDelete.classList.add("close") // oluşturduğumuz spana  class ekleme
    spanDelete.appendChild(closeIcon) // oluşturduğumuz X ifadesinin spana ekleme
    spanDelete.onclick=deleteList; // spana tıkladığımızda deleteList function'ı çalıştırma
    list.append(spanDelete) // spanı listeye ekleme
    list.onclick=check;  // listeye tıkladığımızda check functionını çalıştırma
    }
    showAllLists(list) 
})

function deleteList(){
   this.parentElement.remove() // bulunduğu listeyi silme
}      

function check(){
    this.classList.toggle("checked") // toggle=> bulunduğu listede checked classı yoksa ekler varsa siler 
}


addButton.addEventListener("click", function newElement(){ 
    let liDOM=document.createElement("li") // li oluşturma
    let ulDOM=document.querySelector("#list") 

    if(input.value.match(/\S/gi)<1){ // Regex ile boşluk dışındaki karakterleri alma- karakter sayısı 1 den kuüçük ise;
        $(".error").toast("show");   // toasta error göster
        input.value=""  // toast sonrası değeri sıfırla
    } 
    else{ // karakter varsa
        ulDOM.appendChild(liDOM)  // appendChild ile oluşturduğumuz li'yi ul içine aktarıyoruz
        liDOM.innerHTML=input.value; // input değerini li'nin içine aktarıyoruz
        input.value=""  
        showAllLists(liDOM) // yeni li için ShowAllLists function'nı çalıştırma
        $(".success").toast("show");  // li oluşumu başarı olduğu bilgisinin verilmesi TOAST ile
        
    }   
})
