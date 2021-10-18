
const ad = document.querySelector(".ad");
const soyad = document.querySelector(".soyad");
const number = document.querySelector(".number");
const email = document.querySelector(".email");

const form = document.querySelector(".formrehber");
const kısılıstem = document.querySelector(".kısılıstem");
form.addEventListener("submit",quideinsert);

kısılıstem.addEventListener("click",domıslem); // parentını sılmemız gerek hata almamak ıcın buna bır clıck olayı atıyoruz ve ılgılı parentında tıkladıgımız yerde contains olarak dedıgımız classlar varsa ıf yapısının ıcındekı kod calısacak yanı sılme ıslemı veya guncelleme ıslemı olacak

// tum kısıler ıcın dızı bunları zamanı gelınce localstroagede kullanabılrım
// veya ordan okuyup  table tablosunda gosterebılrıım bunun gıbı durumlar ıcın buraya kaydedtıgımız yada oradan sılcegımız butun ıslemlerı arraye alalım  niye belkı komple alıcam dızımı local storagemı kaydedıcem
const allperson = [];
let selectrow = undefined;

function domıslem(e){ // tıkladıgım yere gore oranın parentını sılecek bunu anlamak adına ıf sorgusunda tıkladıgım yerın classlıstıne gıdıcek contains dıyerek bır class arıyacak
    
    
    if(e.target.classList.contains("btn--delete") ){ 
      // burda parent olarak tr yı sılmemız gerekecek bırde gıt dızıye dızımız vardı ya git oradan sıl dememız lazım
          persondeletem(e.target.parentElement.parentElement); // sılme ıslemı ıcın fonksıyonumuz ıcıne parametre olarak tıkladıgım yerın targetının parentını yanı td yı verır onunda parentıına gıt dıyoruz 
       }else if(e.target.classList.contains("btn--edit")){
                    let abc = document.querySelector(".upıns").value = 'guncelle';
           
           personupdate(e.target.parentElement.parentElement);
         
                }
    
}

document.addEventListener("DOMContentLoaded",localoku);


function localoku(){
    
     let memeoryarray;
        
        if(localStorage.getItem("rehberlıstem") === null){
           memeoryarray = [];
           
           }else{
          
        memeoryarray =  JSON.parse(localStorage.getItem("rehberlıstem"));
           
           }
    
    memeoryarray.forEach((per) =>{
        
 
        personınsert(per);
        
    });
    
    
}



function persondeletem(par){
    
    const deletval = par.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.textContent;
    
    // maıle gore sılme ıslemı
   
//     allperson.forEach((kısı,ındex) => { // tıkladıgım yerdekı maılı arraydekı nesne ıcınde arıyorum
//         
//         if(kısı.email === deletval){
//          allperson.splice(ındex,1); // ıf kosuluna gore bbuldugumuz ındexı buraya atıcaz işte 0. ındexde ıf kosulu saglandı ozman 0.ındexdekı nesneyı sıl dıyoruz 2.pparametreyle ne kadar eleman sılcegımızı soyluyoruz zaten 0.arraydede o nesne ye 1 eleman sıl dedıgımzıde o nesne komple sılınmıs olucaktır bu yapı yep yenı bır array vermez kaynagım guncellenmıs olacaktır. 
//            }
//         
//     }); 
    
//2.yontem   allperson dan filtreleme yapılmıstı sımdı localstorageden olacak
    
  /*  
    
    
   const arrsılınmıcek =  allperson.filter((kısı,index) => { //fılter ıle bız bır fıltreleme ıslemı yapıyoruz kosula göre ve koşula göre arraydekı maıl adresı ıle kısının tıkladıgındakı maıl adresı esıt olmayanları yenı bır arraye koyuuyor ana yapıyı degıstırmedı  bunu eskı arraye atamam lazım
        
        return kısı.email !== deletval;
        
    });
    // sımdı eskı arraye atamam ıcın bır eskı arrayı sıfırlayayım eskı degerler vardı
    
    allperson.length = 0; // yapmam arrayı ıcını bosaltmıs oluyorum
    
    allperson.push(...arrsılınmıcek); */// eskı dızıye fılterdakını bır bır degerlerı atamıs oluyorum yanı aslında arrayde tıkladıgım şey sılınmıs oluyor
    
    //SUNU UNUTMA YUKARDA BIZ ANA DIZIMIZI const dıye tanımladık let dıye tanımlasaydık  dırek fılter ıslemının eşittirinin sol kısmına allperson yazarak yenı bır tanımlama yapabılırdık ama boşver boyle daha ıyı
    
    //3.yontem localstrage ıle 
    
      let memeoryarray;
        
        if(localStorage.getItem("rehberlıstem") === null){
           memeoryarray = [];
           
           }else{
          
        memeoryarray =  JSON.parse(localStorage.getItem("rehberlıstem"));
         
           }
    
    
     const arrsılınmıcek =  memeoryarray.filter((kısı,index) => {
        
        return kısı.email !== deletval;
        
    });
    
    memeoryarray.length = 0;
    
    memeoryarray.push(...arrsılınmıcek);

 
 localStorage.setItem("rehberlıstem",JSON.stringify(memeoryarray));

   par.remove();// sıldık ama arrayede eklemıstık ordanda sılelım  localden okudugu ıcın gorunmez zaten
    deletefield();
     document.querySelector(".upıns").value = 'Kaydet';
}

function personupdate(pam){
    // ılk once tıkladıgım yerdekı verılerı forma aktarmam lazım ınputa bunu yapcaz fakat bundan oncede aktarsanda orda kaydet butonu var kaydetmeye yarayan ıste ben guncelle dıyınce guncelleme yapabılmesı ıcın yanı 2 farklı ıse yaraması ıcın buttonumun yukarda secılensatır dıye bır degısken tanımladık undefıned dedk yanı bu ssu anlama gelır formlarda hıc bırsey yoksa ekleme ısıne yarıcak demekkı eger undefıned degılse guncellıcek quideinsert fonksıyonunda işte orda br if kontrolu daha yap
    
    // bunu gıne deletval degıskenındekı gıbı yapabılrız bu bır yontem ama bız tablolarla calıstıgımız ıcın soyle bır yontemde var en basta pam dedık yanı tr sectık cell dıye bır alan var hucre demek cell[0],cell[1] gibi şeyler başlıktakı alanların ındexlerı aslında 0.ındex ad gibi
    const updateval = pam.cells[3].textContent;
    
   ad.value = pam.cells[0].textContent;
  soyad.value = pam.cells[1].textContent;
     number.value = pam.cells[2].textContent;
     email.value = pam.cells[3].textContent;
    
    // sımdı guncellenecek yapımızı belırten sey hangısı hangısı pam ben bu pamdakı yerı secmısım demek yukarda belırtıtgım selectrow ddegıskene aktarıyorum
    selectrow = pam; // bunu yapaarak aslında doluysa demek guncelleme yapacak 
}


 

 

function quideinsert(e){
    // actıona gıtmemesı ıcın sayfayı guncellememesı ıcın 
    e.preventDefault();
    //  verılerı alırken kontrol etmelyıız bunun ıcın  functıon yazıyoruz
   
    
    
    const ınsertperson = {
       ad:ad.value,
       soyad:soyad.value,
       number:number.value,
       email:email.value
       
   }; //ad,soyad vs bırseye gore kontrol edıcez ama  emaıl veya numara ıcın farklı bır kontrol yapmak ısteyebılrız  inputlardakı degerlerı tutacak bır obje olusturalım ne zaman formumuz submıt olunca
    
    
   const ıslem =   controlval(ınsertperson); // gerı dondurdugum ıcın burda ıslem yapıyoruz
    
    
    
    if(ıslem.durum){ // artık fonksıyonm bır nesne dondurdu bu durum false ıse ıf yapısı calısmaz zaten
        
        // verılerı kontrol edıldıkten sonra dogruysa rehbere eklesın burda yapıcaz kodlarımızı
        
        if(selectrow){
      // yukarda tanımladıgım secılen satır undefıned degılse yanı ıcınde bır deger varsa guncelleme yap     
           
           // guncelleme ıslemı ıcın fonksıyon tanımla
           
            personuptadeıslem(ınsertperson);
            
           
           }else{
                personınsert(ınsertperson);
               localınsert(ınsertperson);
              
          
           }
        
       
        
       ınfocreate(ıslem.mesaj,ıslem.durum);
       }else{
           ınfocreate(ıslem.mesaj,ıslem.durum);
           
     
       }

    
}


function localınsert(pam){
    
        // localStorage.setItem("isimlistesi",yenıgorev.value);
        
      let memeoryarray;
        
        if(localStorage.getItem("rehberlıstem") === null){
           memeoryarray = [];
           
           }else{
          
        memeoryarray =  JSON.parse(localStorage.getItem("rehberlıstem"));
           
           }
       
         
            memeoryarray.push(pam);   
               
               // local apiye yazdırmam lazım bunun ıcın strınge donusturup yazdırcaz
               
     localStorage.setItem("rehberlıstem",JSON.stringify(memeoryarray)); 

    
}


function personuptadeıslem(parval){
   // o kısı uzerınden guncelleme yapmalıyız pamı secılensatıra esıtlemıstık
    
      let memeoryarray;
        
        if(localStorage.getItem("rehberlıstem") === null){
           memeoryarray = [];
           
           }else{
          
        memeoryarray =  JSON.parse(localStorage.getItem("rehberlıstem"));
           
           }
    
    
    
    
    for(let i = 0; i<memeoryarray.length;i++){
        //selectrow dedıgım  aslında esıtlemıstım yukarda pam ıle aslında kullanıcnın tıkladıgındakı maıl adresı
        if(memeoryarray[i].email ===  selectrow.cells[3].textContent){
           
            memeoryarray[i] = parval; // dıyerek o tıkladıgım ılgılı nesneyı yenı guncellenmıs nesneyle degstırmıs oluyorum
            break;
           }
        
    }
       localStorage.setItem("rehberlıstem",JSON.stringify(memeoryarray)); 
    
    selectrow.cells[0].textContent = parval.ad; // bu nesnemdekı yenı degerler
     selectrow.cells[1].textContent = parval.soyad;
     selectrow.cells[2].textContent = parval.number;
     selectrow.cells[3].textContent = parval.email;
    
       document.querySelector(".upıns").value = 'Kaydet';
    selectrow = undefined;
     
}


function controlval(par){
    // objelerde foreachde for ınde kullanabılrız
  //objelerde for ın kullanımı 
   
    for(const s in par){ // obje oldugu ıcın in diyoruz array olsaydı of kullanabılırdık
        
        if(`${par[s]}`){ // undefıned ıse boşşsa ise Boolean olarak false ise null bir değişken ise NaN (Not a number) değerini almış bir değişken ise numerık 0 ya da 0 sonucunu veren bir işleme uğramış değer ise falsy olarak gececektir
             
            
           }else{
          // eger bır hata cıkarsa mesaj gostermem lazım ayrıetten bır bıldırımde vermem lazım degılmı normalde mesaj yazardım buraya ve  altına bir html etıketının gorunmesını saglardım bırde şöyle yap
               
               // eger ben burda false yollarsam return ıle verilerde sıkıntı oldugu anlamına gelır  birde mesaj degerı yollamak ıstıyorum yanı bır fonksıyona 2 farklı deger yollacaksam nesne kullan returnde tek bır ıfade yazabılrıyouz true false vs mesaj vs derım 
               
               const  ıslem = {
                 
                   durum:false,
                   mesaj:'boş deger gırmeyınız'
               } // ha unutma  bu nesneyı bır degıskene atayıp tek bır degerde sadece o degıskenı returnlıyebılırdım
               return ıslem ;
               
               
           }
        
        
    }
     deletefield();
    
   if(selectrow){ // boş degılse demek bura calısır guncelleme ıle ılgılı mesaj verdır
      
         return {
                 
                   durum:true,
                   mesaj: `${par.ad} kişisi rehbere Güncellendi`
               } 
       
       
       
      }else{
         
            return {
                 
                   durum:true,
                   mesaj: `${par.ad} kişisi rehbere kaydedildi`
            } 
          
      }
    
           
        
    
}


function ınfocreate(mesaj,durum){
    
    const olusbılgı = document.createElement("div");
    
    olusbılgı.textContent = mesaj;
    
    olusbılgı.className = "bilgi";
    
        //clası ezmemek ıcın classlıstıne add yaprak yenı bır class eklyıoruz

      olusbılgı.classList.add(durum ? "bilgi--success" : "bilgi--error" );
    
    
    
    // bır domda bırseyden once vs derken bunuda yapabılrısn
    
 document.querySelector(".container").insertBefore(olusbılgı,form);
    
     setTimeout(() =>{ 
     // burda bılgı clasını secelım ıster error ıster basarılı cıksın sılıcek 
         const deletedıv = document.querySelector(".bilgi");
        // eger gercekten clasında bılgı olan bır kutu varsa sıl dıcez 
         
 
         if(deletedıv){
            
             
                     
         deletedıv.remove();
  
             
         }
         
     }, 2000);
  
}



function deletefield(){
    ad.value = "";
    
     soyad.value = "";
     number.value = "";
     email.value = "";
}



function  personınsert(per){
    

    const createtr = document.createElement("tr");
    // burda ınnerhtml kullanıp bır html kodu yazıcaz daha kolay cunku  tryı ekledıkten sonra  tr ıcıne td olusuturp ıcıne deger koymak birdaha tr ıcıne td olusturmak ve onunda ıcıne deger koymak  boyle yapmak mantıksız olur
    // burda tırnak vs kullandıgımzda hata verıyor kaçıs dızını kullanırdın bu daha ıyı ve degerler kısmınada yukarda eklenecek verılerı ekleyecegımız ıcıcn bu daha mantıklı bu tırnak benzerı ısaretle strıng ısaretlerı ıcıne  javascript ıfadelerı ekleyebılıyoruz
    createtr.innerHTML = `<td>${per.ad}</td>
      <td>${per.soyad}</td>
      <td>${per.number}</td>
      <td>${per.email}</td>
        <td>
            <button class="btn btn--delete">
            <i class="far fa-trash-alt"></i>
            </button>
            
            <button class="btn btn--edit">
             <i class="far fa-edit"></i>
            </button>
        
      
        </td>`;
    
    kısılıstem.appendChild(createtr);
    
    // basarılı olursa en son dızıye eklıcez
    
    allperson.push(per);
    

    
}











