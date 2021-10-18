// her zaman kısılerle ugrasıyoruz rrehber uygulamamızda ılk once korkma class kısıyı olustur mesela hava durumu uygulamasında   bununla ılgılı butun verılerı  hava gıbı bır sınıfın altında toplamak ısteyebılrız

// unutma not ders 78 de  ılk dakılarda anlattı mantıgı o sekılde bızde o mantıkda  kişi diye bır sınıf yaptık  bu kısılerı tutan ve bunun uzerınden ıslemde yapan ekran dıye sınfımız var  aynnı sekılde ekran sınıfnın calısması ıcnı  verı tabanı ıhtıyacı varsa bızde (localstorage uzerınden yapıyoruz) oonuda farklı sınıf olarak ekran sınfına getırıp calıstırdk 


class Kısı{
    // new kısı(parametre gececek degerler)vs  dıyerek constructor yanı kurucu method calısıyor
    constructor(ad,soyad,number,email){
        this.ad = ad;
        this.soyad = soyad;
        this.number = number;
        this.email = email; // thıs ne anlama gelıyordu o an olusturulan kısı nesnesı yanı emre anlamına gelıyor
    }
}


class Util{ // degerlerı kontrol etmek ıcıın bir class
    static bosalankontrolet(...alanlar){ // herhangı bır constructora gerek yok dıger classlardakı gıbı yyanı kutulara özgu birşeyin yok  math.random() gıbı genel kullanıyorsun 
       // burda kontrol edecegımız parametre sayısı cok olabılır spread operatoru kulllan 
     let sonuc = true;
        alanlar.forEach(alan=>{
            
            if(alan.length === 0){// truthy falsely dende yaapabıırdık boyle yaptım
                sonuc = false;
                return false; // eger bırtane bıle boş alan varsa ıf yapısı calıscak sonuc false olcak ve return olarak false degerı calıscak gerıye false degerı donucek vve return dedıgımız ıcın dongu bıtıcek  e sonuc degerım false olaacak 
            }
            
        });
        
        return sonuc;
    }
    
     //bzı maıl gıbı kontroller yapmak lazım
    
    static mailcontrol(email){
         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()); // true yada false degerı dondurur bana
    }
    
    static phonecontrol(phone){
        const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
 return phoneno.test(String(phone).toLowerCase());
    }
    
}



class Ekran{ // arayuzdekı ıslemlerım ıcın bır yapı olusturdum elemanların secımı addeventlistener atamak vs olacak burdan
    constructor(){  // pparametreye gerek yok cunku new ekran() seklıınde dıcem sadece ordan burdakı ıslemlerımı yapıcam yanı burda ekranı başka bir ekrandan ayırıcak bırsey yok const ekran2 = new ekran seklınde cagırmıcam birtane ekranım var  constrouctor dıyerek tetıklenerek burda dom elemanlarını secebırırlız ekran2 = new ekran dersem 2.cı kutu olusur bellekte orda burdakı ıslemler yapmıs olursun 2.kutudan ulaşmıs olursun ad soyad elemanlarına mısal ama 1 tane ekran alanım vaar o yuzden 2 ayrı kutu olusturup 2 ayrı ad soyad vs tutmucam  o yüzdenn buraya parametre gecmedık
        
        this.ad = document.querySelector(".ad");
         this.soyad = document.querySelector(".soyad");
        this.number = document.querySelector(".number");
             this.email = document.querySelector(".email");
             this.secilnsatır = undefined;  
        // bind(this) demmemızın seebebı
        this.form = document.querySelector(".formrehber");
        //  this.form aslında formrehber oluyor
        this.form.addEventListener("submit", this.kaydetguncelle.bind(this));
        // ekleme yapma yerı ıcın submıt olunca kaydetgncelle fonksıyonu calısr dedık ama  veya sayfa yuklenınce ekran sınfı cagırıyoruz tetıklenıyor ama hata alırız kaydetguncelle global fonksıyon  degıl nerde tanımlı ekran sınıfı ıcınde  yanı ekran sınfını tetıklendıgınde thıssız kullanırsak kaydetguncelle ıs not defıned der nabcaz this diyerek bu sınıfta bulunan kaydetguncelleyı calıstır dıcez 
        
                this.kısılıstem =  document.querySelector(".kısılıstem");
        //***aslında this kısılıstem suan tıklandıgında kısılıstemde guncellveyasıl fonksıyonunu cagırıyor olmadıgı ıcın hata verıyor bınd(thıs)  dıyerek bu screen sınıfnı kullan dıyorum bınevı dolayısıyla  this.guncelleveyasıl dakı thıs screenı baz alıyor screendada guncelleveyasıl oldugu ıcın clıck olunca calısmıs oluyor
     this.kısılıstem.addEventListener("click",this.guncelleveyasıl.bind(this)); // thıs dıyerek bu sınıfın ıcınde bulunan bu guncelleveyasıl fonksıyonunu calıstırır. bu fonksıyonu yapmamızın sebebı sılccekmı yoksaa guncellıcekmı buna karar verıyoruz bind yazmassak   this.guncelleveyasıl neyı algılıyor  tıkladıgımda bana this.kisilistemden dolayı guncelleveyasıl ıcınde consolelog ıle thise bakarsak tbody verıyor bind ile yazarsak consolelogla thıs dersek fonksıyon ıcınde ekran sınfını verır bize bu ekran nesnesıın ıcınde bulunan fonksıyonu verır daha sonra dolayısıyla artık ekran sınfındayım ve this.guncelleveyasıl.bind(this) dıyerek ekran sınfında guncelleveyasıl calıstır dıyoruz thıs cok degıskenlıdır.
        
            this.upıns =  document.querySelector(".upıns");
        //ornegın ekranda bırseylerın gorunmesı ıcın depo nesnesınde bulunan ornegın kısıekle localdekının ekranda okunması ıcın vs fonksıyonunu cagırsın bunun ıcın depoyu burda yazdık 
        this.depo = new Depo(); // ne demek bu ne zamankı buraya erısılcek  git yenı depo nesnesı olustur. artık bu yapı uzerınden this.depo() diyip  git baana butun kısılerı getır dıyebılrım aslında depo sınıfım verıtabanında yada localstroageımızda veya apimle ilgili genel ıslemlerı yapan sınıf oldu cunku  uygulamada ıslemler 2 farklı yolla oluyor  1.cısı ekrandaki lısteye bırseylerın atılması  veya butun degerlerın burda tutulması  2.cisi  bunların kalıcı olarak localstroageda tutulması
        
        //depoyu ekranda cagırmamız lazımkı ekranda bırseylerı gostercez 
        
        this.ekranaolandegeryazdır(); // localstragedekı degerlerımı okucak ılk ekran acıldıgında yanı
        
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



class Depo{ // gercek bır uygulama yapsaydık verı taanından yada apı kynagından cekılcektı sırf bu ıslemler
    //  veya local stroagedan yapıyoruz bunun ıcın bır sınıf olusturduk 
  
    // // bir depo kaynagı yanı ılerlede bunun kullanılmasını ıstıyorsak
    // //her bir veri tipinin mesela apiden cekıyorsak bir linki vardır  bunu buraya parametre olarak gecmek
    //  ıstıyebılrsınız veritabanıysa connection stringi vardır onu gecmek ıstıyebılrısnız  ozman buraya ılk
    //   once constructor tanımlayalım 
    
     constructor(){ // tanımlandıgında gereklı olan degerler  burda yer alsın
         this.tumkısıler = this.verılerıgetır();// local stragedan cekıyoz verılerı ayrcaa parametreyede
    //       gerek yok depoyu parametresız calıstırdıgmızda burası tetıklenecek 
    //    //  this.tumkısıler = []; // baska zaman verı tabanı vs kullandıgmızda this. baglantınoktası 
    //    felan buraya yazılabılır ozman yanı ben bunu  ne zmaan kullancam , ozman mutlaka bu depoyu  neww 
    //    dıyerek olusturmam gerekıyor
         
    }//her depo dedıgımızde bıızım constructor tetıklenmıs olucaktır
 
    
    
    // //sıstemde belkı aynı emaıl adresı var onu kontrol et bunu neden depoda yapıyorz cunku burda
    //  arrayde depoluyoruz localstoragede yanı 
    
    emaılunıq(email){
     const son =   this.tumkısıler.find((kisi)=>{
            
            return kisi.email === email; // eger kısıyı bulursa yanı o an gezılen arraydekı emaılle kullanıcının ınputtan gırdıgı deger arayıp eger bulursa true doner  eger yoksa undefıned var 
            
        });
        
        
        if(son){ //true donerse demekkı maılı kullanan bırı var yoksa undefıned calısır yanı else calısır
            return false ; // false dondurcez demekkı var 
        }else{
            return true ; // true dondurcez demekkı yok 
        }
        // bu fonksıyonu depoda kısıekle kısmındada eklıyebıblrısn
    }
    
    
     // uygulamala ılk acıldıgında  verıler getırılır mesela verı tabanına gıdıp ceker ordan 
    //   bunun yapmanın guzellıgı ertesı gun local stroage deglde apı veya verı tabanı kullancagım zaman
    //    sadece burayı degıstırıcez  ıcerdekı ekran veya kısının bundan haberı olmucak
    
    verılerıgetır(){ //localokuma alanı aslıda burası
        //localstroage yapımı
      let tumkısılerlocal;  
        if(localStorage.getItem('tumkısıler') === null){
           tumkısılerlocal = [];  
           
           }else{
             tumkısılerlocal = JSON.parse(localStorage.getItem('tumkısıler')); 
              //neden json.parse yapıyrum cunku json formatında bır strıng var e zaten local strageye
            //    array yazamam onun ıcın json formatında bır strıng bunun uzerınden ıslem yapabılmem ıcın 
            //    json.parse dıyorum yanı javascripte cevırıyorum sonra tumkısılerlocale atıyorum sonra push
            //     vs ıslemler sonra gıne strıngfya donusturuyorum ama gunun sonunda array goruncek local 
            //     stragede ama array kaabul etmedıgı ıcın json formatında strıngfy yazıyorum
           }
        // bu sınıfta bulunan tumkısılere tumkısılerı atadık
        this.tumkısıler = tumkısılerlocal;
        return tumkısılerlocal;
    }
        
 // sımdı benım ekran sınfımın depoyla herhangı bır baglantısı varmı yok bırbırlerını bılmıyor baglantı
//   kurarız ekran sınfında ozaman   
    
//     // bunun yanında localstorage verıtabanına vs ekleyecegımz fonkksıyonu yapıyoruz kısıekle
//      fonksıyonu yapıyoruz
   
   kısıekle(kısı){ 
     //bakılacak burya
       
       if(this.emaılunıq(kısı.email)){ 
     
       this.tumkısıler.push(kısı); 
       
       
    
       localStorage.setItem("tumkısıler",JSON.stringify(this.tumkısıler));//json turunde bır strıngfy cevırmem lazım normal array kabul etmıyor local strage 
       
     
           return true; // bunları ekran sınfında mesaj ıcın kullanabılrım
           
           
          }else{
              return false;
          }
       
       
   
   }
    //ornegın sılmek ıcın ılk once verıtabanından sılme ıslemı olmalı yanı burdan sonra ekranda olması gereken bır ıslem olmalı onua ekran sınfında tnaımlarsın o yapıyı
    
   kisisil(mail){ // verıtabanından yada localstrageden sılecek verılerıımızı onunla ılgılı fonksıyon
       
       // gıdıcek localstrage verdıgımz maıle gore  kisiyi bulup sılcek  parametre olarak maıl dedık bunun ekranla hıc alakası yok mail parametresı olarak silinicek kişi olmus oluyor onuda yukarda ekrandansıl fonksıyonunda deger olaarak alıyoruz 
        
     // şimdi bak ilk önce depo ılk calısıtrıldıgında this.tumkısılerdekı karısıdnakı fonksıyon calsııyor o fonksıyondada return olarak tumkııslerlocal var yanı ıcındekı kısıler var aslında sonuc olarak this.tumkısılerde localdeki kişiler var kısıekle yaptıgımızda ordakı koda göre tumkısılerlocale eklenmıs oluyor sonuc olarak kısıekle fonksıyonunda bırdaha localolustur felan gerek yok
       
       // pekı kısıyı sılceksem localstrage yada verıtabanına bırdaha gıtmeme gerek yok  this.tumkısıler ıcersınde  zaten push ettıgın kadar eleman var bunun uzerınden ıslem yapabılrım 
       
       this.tumkısıler.forEach((kisi,index) =>{
           // o an gezılen kisinin maıl adresı esıtse parametredekı maıle 
           if(kisi.email === mail){
               this.tumkısıler.splice(index,1);
               
           } 
           //tekrardan localsstragemıza eklıyoruz
           
       });
                              
 localStorage.setItem("tumkısıler",JSON.stringify(this.tumkısıler));                      
       
       
       
   }
    
    kısıguncelle(newkısı,mail){ //newkısı yenı maıl adresı mail parametresı ıse localstragede bulunması gereken maıl adresı
        
         if(this.emaılunıq(newkısı.email)){ 
         
          this.tumkısıler.forEach((kisi,index) =>{
           // o an gezılen kisinin maıl adresı esıtse parametredekı maıle 
           if(kisi.email === mail){
               this.tumkısıler[index] = newkısı;
                 localStorage.setItem("tumkısıler",JSON.stringify(this.tumkısıler)); 
                 return true;
           } 
           //tekrardan localsstragemıza eklıyoruz
           
       });
                              
           
             
              return true;  
       
         }else{
               return false;
         }
        
        
        
                          
       
        
    }//yukarda ekran sınfında new depo dıye cagrıldıgına bu fonksıyonlara ulasabılır bunlar constructor dısında kı zaten bu fonksıyonlara ulaşmamız lazım her new depoda  hangısını kullanmaya ıhtıyacımız varsa elbet lazım olacak
    
    
    
}






document.addEventListener("DOMContentLoaded",function(e){
    // buutun ekran yuklendıkten sonra gıt ekran sınfıından yenı bır obje olustur yanı ekran snıfndakı constructor tetıklenecektır
    
    const ekran = new Ekran();
});
