function name(){ 
    var isim = prompt("İSMİNİZİ GİRİNİZ")
    if(isim == ""){
        alert("İSİM ALANI BOŞ BIRAKILAMAZ!!")
    }else{
        document.getElementById("ad").innerHTML = isim;
    }
}
name()

function tarihSaat(){
    var date = new Date().toLocaleString(`tr-TR`);
    
    document.getElementById("zaman").innerHTML = date;
}
setInterval(tarihSaat,1000);


