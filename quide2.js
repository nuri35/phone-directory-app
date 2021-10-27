


class Kısı{
  
    constructor(ad,soyad,number,email){
        this.ad = ad;
        this.soyad = soyad;
        this.number = number;
        this.email = email;
    }
}


class Util{ 
    static bosalankontrolet(...alanlar){ 
     let sonuc = true;
        alanlar.forEach(alan=>{
            
            if(alan.length === 0){
                sonuc = false;
                return false; 
            }
            
        });
        
        return sonuc;
    }
    
  
    
    static mailcontrol(email){
         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()); 
    }
    
    static phonecontrol(phone){
        const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
 return phoneno.test(String(phone).toLowerCase());
    }
    
}



class Ekran{ 
    constructor(){  
        
        this.ad = document.querySelector(".ad");
         this.soyad = document.querySelector(".soyad");
        this.number = document.querySelector(".number");
             this.email = document.querySelector(".email");
             this.secilnsatır = undefined;  
     
        this.form = document.querySelector(".formrehber");
      
        this.form.addEventListener("submit", this.kaydetguncelle.bind(this));
      
        
                this.kısılıstem =  document.querySelector(".kısılıstem");
      
     this.kısılıstem.addEventListener("click",this.guncelleveyasıl.bind(this));
        
            this.upıns =  document.querySelector(".upıns");
      
        this.depo = new Depo(); 
        
        this.ekranaolandegeryazdır(); 
        
    }
    
    
    bilgiolustur(mesaj,durum){
         
    const olusbılgı = document.createElement("div");
    
    olusbılgı.textContent = mesaj;
    
    olusbılgı.className = "bilgi";
    
      olusbılgı.classList.add(durum ? "bilgi--success" : "bilgi--error" );
    
     

    
 document.querySelector(".container").insertBefore(olusbılgı,this.form);
    
     setTimeout(() =>{ 
     // burda bılgı clasını secelım ıster error ıster basarılı cıksın sılıcek 
         const deletedıv = document.querySelector(".bilgi");
        // eger gercekten clasında bılgı olan bır kutu varsa sıl dıcez 
         
 
         if(deletedıv){
            
             
                     
         deletedıv.remove();
  
             
         }
         
     }, 2000);
    }
    
    
    
    alanlarısıl(){
        this.ad.value = "";
         this.soyad.value = "";
         this.number.value = "";
         this.email.value = "";
    }   
    
    
    guncelleveyasıl(e){
        //console.log(this) // diyerek tbody verır  document.querySelector(".kısılıstem"); bundan dolayı ama bind yaptık enson bulundugumuz sınıfı verır artık  bu sınıftakı herseye ulasabılrıız buradan
        
      const tıklanmayer = e.target;
        
        if(tıklanmayer.classList.contains("btn--delete")){
          
            this.secilnsatır = tıklanmayer.parentElement.parentElement;
            
            this.kısıekrandansıl();
                
           }else if(tıklanmayer.classList.contains("btn--edit")){
                    this.secilnsatır = tıklanmayer.parentElement.parentElement; 
               
                 this.upıns.value = "guncelle";
         
        
        this.ad.value = this.secilnsatır.cells[0].textContent;
         this.soyad.value = this.secilnsatır.cells[1].textContent;
         this.number.value = this.secilnsatır.cells[2].textContent;
         this.email.value = this.secilnsatır.cells[3].textContent;
            }
        
    }
    
  
    
    kısıekrandansıl(){
        // burda parametre olarak gecmeye gerek yok zaen bır yukarda secılensatıra bırseyı esıtledık guncelleveyasılde bakabılrısn
        this.secilnsatır.remove(); // artı local storagedanda sılmeız gerekır 
        const sıldeger = this.secilnsatır.cells[3].textContent;
        this.depo.kisisil(sıldeger); // yanı depo sınfıına git kısısılı calıstır dıyoruz
        this.alanlarısıl();
        this.secilnsatır = undefined; 
    }
    
    ekranaolandegeryazdır(){//bak ekran sınfında depo sınfına ulastım bu constructor ksımında oldugu ıcın otomatık calısır
        this.depo.tumkısıler.forEach(kisi =>{ 
            
            this.kısıyıekranaekle(kisi); // ekrana ekleyecekfonksıyonumuz asagıda var bunu buraya ekle  burdakı kisi parametremızde foreachdekı kisi zatenn foreachdekı kisi parrametresıde o an gezdıgımız array degerlerı oluyor  degerlerımızı goremeyız aşagıda depo kısmında   this.tumkısıler = []; burayı boyle bırakma constructor alanında duzeltıldı eger boş arraylı brakırsan onu okur bırsey eklenmıs olsa bıle cunku bırsey eklendıgınde boş arrayın ıcı doluyor  olmaz constructor kısmında duzeltıldı
             
            
            
            
        });
        
    }
    
    kısıyıekranaekle(kisi){
        const olusturlantr = document.createElement("tr");
        olusturlantr.innerHTML = `<td>${kisi.ad}</td>
      <td>${kisi.soyad}</td>
      <td>${kisi.number}</td>
      <td>${kisi.email}</td>
        <td>
            <button class="btn btn--delete">
            <i class="far fa-trash-alt"></i>
            </button>
            
            <button class="btn btn--edit">
             <i class="far fa-edit"></i>
            </button>
        
      
        </td>`;
        
        this.kısılıstem.appendChild(olusturlantr);
    
  
   
    this.alanlarısıl();
    
    }
    
    ekrandakılerıyleguncelle(abc){
         
        
        
        
        
      const sonuc =    this.depo.kısıguncelle(abc,this.secilnsatır.cells[3].textContent);
        
        if(sonuc){ //true
               this.secilnsatır.cells[0].textContent = abc.ad;
         this.secilnsatır.cells[1].textContent = abc.soyad;
         this.secilnsatır.cells[2].textContent = abc.number;
         this.secilnsatır.cells[3].textContent = abc.email;
        
       
        this.alanlarısıl();
        this.secilnsatır = undefined;
     this.upıns.value = "Kaydet";
              this.bilgiolustur("Başarıyla Güncellendi",true);
            return;
        }else{
        
                this.bilgiolustur("Yeni email kullanımda",false); 
                return;
        }
        
     
    }
    
    //ekrana kaydedmek ıcın bır fonksıyon.
   kaydetguncelle(e){
        this.ad = document.querySelector(".ad");
         this.soyad = document.querySelector(".soyad");
        this.number = document.querySelector(".number");
             this.email = document.querySelector(".email");// bunlar burda olsun hata alıyorum yoksa
       
   /* console.log(this);//form elemanını verır cunku forma submıt vererek this.diyerek bu fonksıyon calısmıstı ıcındede thıs dersek boyle olur
       console.log(this.ad);// ad inputunu verır
       console.log(this.ad.value);// degerını verır*/
       
       e.preventDefault();
     const abc = new Kısı(this.ad.value, this.soyad.value, this.number.value, this.email.value); // bana gerı nesne dondurecektır YANI BU EKRAN SINFINDA BULUNAN AD SOYAD VVALUELARINI KISI SINIFINA YOLLUYORUM

       const emaılgec = Util.mailcontrol(abc.email);
         const phonegec = Util.phonecontrol(abc.number);
       
       
     const sonuc = Util.bosalankontrolet(abc.ad,abc.soyad,abc.number,abc.email); // degerlerı fonksıyona yollayıp kontrol eddrıyoz
       // sonuc true ıse bura calıscak yanı false degılse yanı boş degılse truthy  unutma util.dıyerek fonksıyona ulaşmamızın seebebı ıcınde statıc fonksıyon var boyle yaptıgında statıc bellekte ram tutar ve daha hızlı calısır arastırmıstın  Statik yöntemler, sınıfla doğrudan ilgili olan ancak sınıfın örneği (nesne) içinde bir işe yaramayan veya kullanılmayacak olan yöntemlerdir. Sınıfın örneği oluşturulduğunda örneğin bir üyesi olmazlar. Statik yöntemler kullanılarak sınıfla ilgili bazı genel amaçlı yöntemleri sınıf tanımlaması içinde yapar ve böylece bir bütünlük ve düzen sağlamış oluruz. ayrıca static fonksıyon varsa class ıcınde  new dıyerek cagıramazsın
       
      
       if(sonuc){
           
           //guncellememı sılmemı onu kontrol edıyoruz
           
           //localstragede varmı kontrolu
           
          
           
           if(phonegec){
               
               if(emaılgec){ //true degerse bura calısır
            
              if(this.secilnsatır){
               //demek undefıned degıl guncellenecek burada
                 
                  
               this.ekrandakılerıyleguncelle(abc); 
               
           }else{
               
               
                   // console.log(this);  bunun ıcınde this diyerek bıze formu verıyor ama bızım ekranaekle fonksıyonumuz ekran ısımlı objenın ıcınde  this anlamını yıtırdı farklı bır yapıya burundu bızım kaydetguncelleyı yukarda constructor ıcınde vve form ıle  tanımladıgımız ve cagırdıgımzı ıcın artık thısın ıcınde form elemanları var ondan dolayı kısıyıekranaekle fonksıyonu thıs ıle asagıda cagırdıgımızda  bulmuyor dolasıyıla yukarda thıs form olan kısma bind ekledık yukarda açıkladık
    
         const sonucum = this.depo.kısıekle(abc); 
               
               if(sonucum){ // depoda maıl kontrolunde return olarak en son ne donuyorsa burda ona göre ekleme yapıcak 
                            
          this.kısıyıekranaekle(abc);//ekrana ne eklencekse onunla ılgılı fonksıyon yaptık bunu burda calıstırdık parametre olarak abcyi yolladık aama this dedıgımzı ıcın hta verecek  ama yukarda bınd ıslemı yapıldı hata olmucak artk burdak thıs yapım formu degıl o an olan sınıfı gostercek ve sonuc olarak o sınıf ıcınde kısıyıekranaekle fonksıyonunu cagırmsı olcaz
      
         
               
                this.bilgiolustur("Başarıyla eklendi",true);
                   
               }else{
                    this.bilgiolustur("Veritabanında kayıtlı mail adresi",false); 
                return;
               }
               
      
               
           }
            
            }else{
                this.bilgiolustur("Gecersiz Email adresi",false); 
                return; // yaparak  asagıya dogru gelen kodlar durduruluyor okunmuyor returnden dolayı bu taktıgı yap kesınlıkle
            }
           
            
               
               
               
               
               
               
               
               
               
               
               
               
               
               
           }else{
               this.bilgiolustur("Gecersiz Telefon Numarası",false); 
                return;  
           }
           
        
      
           
       }else{
            this.bilgiolustur("Alanları doldurunuz",false);
       }
           
           
   } 
   
}



class Depo{ 
    
     constructor(){ 
         this.tumkısıler = this.verılerıgetır();
         
    }
 
    

    emaılunıq(email){
     const son =   this.tumkısıler.find((kisi)=>{
            
            return kisi.email === email; 
            
        });
        
        
        if(son){ 
            return false ; 
        }else{
            return true ; 
        }
       
    }
    
    
    verılerıgetır(){ 
 
      let tumkısılerlocal;  
        if(localStorage.getItem('tumkısıler') === null){
           tumkısılerlocal = [];  
           
           }else{
             tumkısılerlocal = JSON.parse(localStorage.getItem('tumkısıler')); 
            
           }
     
        this.tumkısıler = tumkısılerlocal;
        return tumkısılerlocal;
    }
        
 
   kısıekle(kısı){ 
  
       
       if(this.emaılunıq(kısı.email)){ 
     
       this.tumkısıler.push(kısı); 
       
       
    
       localStorage.setItem("tumkısıler",JSON.stringify(this.tumkısıler));
       
     
           return true; 
           
           
          }else{
              return false;
          }
       
       
   
   }
  
    
   kisisil(mail){ 
       
     
       
       this.tumkısıler.forEach((kisi,index) =>{
       
           if(kisi.email === mail){
               this.tumkısıler.splice(index,1);
               
           } 
        
           
       });
                              
 localStorage.setItem("tumkısıler",JSON.stringify(this.tumkısıler));                      
       
       
       
   }
    
    kısıguncelle(newkısı,mail){ 
        
         if(this.emaılunıq(newkısı.email)){ 
         
          this.tumkısıler.forEach((kisi,index) =>{
        
           if(kisi.email === mail){
               this.tumkısıler[index] = newkısı;
                 localStorage.setItem("tumkısıler",JSON.stringify(this.tumkısıler)); 
                 return true;
           } 
     
           
       });
                              
           
             
              return true;  
       
         }else{
               return false;
         }
        
        
        
                          
       
        
    }
    
    
    
}






document.addEventListener("DOMContentLoaded",function(e){
  
    
    const ekran = new Ekran();
});
