function Soru(soru_metni,cevap_secenekleri,dogru_cevap){
    this.soru_metni = soru_metni;
    this.ceva_secenekleri = cevap_secenekleri;
    this.dogru_cevap = dogru_cevap;





    //bu fonksiyonu burda belirtisek her nesne oluşturduğumuzda
    //çağırmış olacağız.
    //Yani 100 soru olsa bu fonksiyon 100 defa nesne oluşturulurken çağırılıcak demek.

    //bu yüzden bu fonksiyonu protoype içerisine alıyoruz ve böylelikle bir kalıtım yoluyla
    //oluşturulan tüm nesnelerde bir defa çağırılması yetiyor ve
    // daha performanslı bir kod yazmış oluyoruz.

    /*this.cevabiKontrolEt = function (cevap){
        return cevap === this.dogru_cevap;
    }*/

    console.log(this);



}

//bu yüzden bu fonksiyonu protoype içerisine alıyoruz ve böylelikle bir kalıtım yoluyla
//oluşturulan tüm nesnelerde bir defa çağırılması yetiyor ve
// daha performanslı bir kod yazmış oluyoruz.
Soru.prototype.cevabiKontrolEt = function (cevap){
    return cevap === this.dogru_cevap;
}



let soru1 = new Soru('test soru 1',{a:'test a',b:'test b',c:'test c'},'a');


let sorular = [
    new Soru('test soru 2',{a:'test a',b:'test b',c:'test c'},'a'),
    new Soru('test soru 3',{a:'test a',b:'test b',c:'test c'},'b'),
    new Soru('test soru 4',{a:'test a',b:'test b',c:'test c'},'b'),
    new Soru('test soru 5',{a:'test a',b:'test b',c:'test c'},'c')
]


console.log(soru1.cevabiKontrolEt('a'));

console.log(sorular[1].cevabiKontrolEt('b'));
console.log(sorular[2].soru_metni);
