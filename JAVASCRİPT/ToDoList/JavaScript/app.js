

// LİSTE ÖĞESİ OLUŞTURUP EKLEDİĞİMİZ KISIM --- ONCLİCK KULLANIMINI HTML ETİKETİ İÇERİSİNDE KULLANMAYI UNUTMA 
function addToList(){
    var listOgesi = document.getElementById("task").value.trim() // listOgesi değişkeniyle id si task olan html etiketinin aldığı değeri yakalıyoruz  --- .value --- 
    if(listOgesi != ""){                           //oluşturduğumuz koşulla liste öğesinin boş olup olmadığını kontrol ediyoruz.  (  .trim() önemli !!!!  )
        $(".success").toast('show')                       // bootstrap toast mesajın listeye ekleme sonrasında çalıştığı kısım
        var li = document.createElement("li")             // oluşturduğumuz li değişkeniyle beraber createElement("li") fonksiyonuyla li etiketi oluşturuyoruz
        var text = document.createTextNode(listOgesi)
        li.appendChild(text)
        // LİSTE İÇERİSİNDEKİ GÖREVLERİN TAMAMLANMASI SONUCUNDA OLUŞAN CSS KODUNUN AKTİF OLDUĞU KISIM +++
        li.addEventListener("click", function(e){         // oluşturulan li etiketlerine tıklandığı zaman class tanımlı css kodumuz çalışacak
            e.target.classList.toggle("checked")          // CSS kodumuzun class ismiyle çağrıldığı kısım
        })
        // +++
        var silDugmesi = document.createElement("button");
        var dugmeMetni = document.createTextNode("X");
        silDugmesi.appendChild(dugmeMetni);
        silDugmesi.classList.add("close");
        silDugmesi.addEventListener("click", function(e){
            e.target.parentElement.remove()
            var silinecekLi = e.target.parentElement;
            var silinecekAnahtar = silinecekLi.firstChild.textContent;
            var onay = confirm("Bu öğeyi silmek istediğinizden emin misiniz?");
                if (onay) {
                silinecekLi.remove();
                localStorage.removeItem(silinecekAnahtar);
        }});
        
        li.appendChild(silDugmesi);
        document.getElementById("list").appendChild(li)

        document.getElementById("task").value = ""

        var anahtar = Date.now();                             // local storageye kayıt etmek için her bir öğe benzersiz olsun diye tarih saat kullanıyoruz
            localStorage.setItem(anahtar, listOgesi);
    }else{
        $(".error").toast('show')                         // toast mesajın listeye boş öğe eklemeyi deneyince çalıştığı kısım
    }
}


