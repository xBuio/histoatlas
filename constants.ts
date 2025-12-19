import { SlideData } from "./types";

// Local photos mapped correctly to the Histology-Guide image files with detailed educational content
export const SLIDES: SlideData[] = [
  {
    id: 1,
    title: "İnce Bağırsak, Hipofiz ve Karaciğer",
    subtitle: "Jejunum/İleum, Glandula Pituitaria, Hepar",
    description: "Bu panoramik preparatta üç farklı organ kesiti bir arada görülmektedir: İnce bağırsak villusları, hipofiz bezi lobları ve karaciğer parankiması.",
    magnification: "40x",
    locations: ["Sindirim Sistemi", "Endokrin Sistem", "Hepatobiliyer Sistem"],
    diagnosisTip: "Sol tarafta parmaksı villuslar ince bağırsağı, ortada iki farklı boyanan lob hipofizi, sağda ağsı yapı karaciğeri işaret eder.",
    microscopeNote: "H&E boyama: Hematoksilen çekirdekleri mora, eozin sitoplazmayı pembeye boyar.",
    imageUrl: "photos/Histology-Guide-001.jpg",
    sections: [
      {
        title: "1. İnce Bağırsak (Jejunum/İleum)",
        content: "Tipik bir gastrointestinal sistem duvarıdır. Lümene doğru uzanan Villi Intestinalis buranın ince bağırsak olduğunun en büyük kanıtıdır.",
        bulletPoints: [
          "Epitel: Tek katlı prizmatik epitel, enterositler ve goblet hücreleri içerir",
          "Tunica Mucosa: Villuslar ve Lieberkühn kriptlerinin bulunduğu bölge",
          "Tunica Submucosa: Açık renkli bağ dokusu tabakası",
          "Tunica Muscularis: Kalın düz kas tabakası"
        ]
      },
      {
        title: "2. Hipofiz Bezi (Glandula Pituitaria)",
        content: "Vücudun 'orkestra şefi' olan hipofiz bezine ait karakteristik bir kesit.",
        bulletPoints: [
          "Adenohipofiz (Pars Distalis): Koyu, morumsu lob - asidofiller, bazofiller, kromofoblar",
          "Nörohipofiz (Pars Nervosa): Açık renkli, lifli lob - hipotalamik aksonlar ve pituositler",
          "Fonksiyon: Hormon üretimi ve ADH/Oksitosin salınımı"
        ]
      },
      {
        title: "3. Karaciğer (Hepar)",
        content: "Vücudun en büyük laboratuvarı olan karaciğerin parankima dokusudur.",
        bulletPoints: [
          "Hepatosit Kordonları (Remak Kordonları): Merkezi ven etrafında radyal dizilim",
          "Sinüzoidler: Kordonlar arasındaki kapiller boşluklar",
          "Fonksiyon: Detoksifikasyon, safra üretimi, metabolik regülasyon"
        ]
      }
    ],
    professorNote: "Bu üç preparat da H&E ile boyanmış. Hematoksilen asidik yapıları (çekirdek) mora, eozin bazik yapıları (sitoplazma) pembeye boyar."
  },
  {
    id: 2,
    title: "Ovaryum ve Tuba Uterina",
    subtitle: "Yumurtalık ve Fallop Tüpü",
    description: "Dişi üreme sisteminin en zengin kesitlerinden biri. Ovaryum (yumurtalık) ve Tuba Uterina (Fallop Tüpü) bir arada görülmektedir.",
    magnification: "40x",
    locations: ["Ovaryum Korteksi", "Tuba Uterina", "Mesovarium"],
    diagnosisTip: "Devasa Corpus Luteum yapısı bu örneğin ovülasyon sonrası (post-ovulatuar) döneme ait olduğunu gösterir.",
    microscopeNote: "Corpus Luteum çok büyük ve kıvrımlıysa, kesit muhtemelen lüteal fazdadır.",
    imageUrl: "photos/Histology-Guide-002.jpg",
    sections: [
      {
        title: "1. Ovaryum Anatomisi",
        content: "Görüntünün alt kısmındaki büyük, dairesel yapı ovaryumdur.",
        bulletPoints: [
          "Korteks: Foliküllerin bulunduğu dış tabaka",
          "Corpus Luteum: Ovülasyon sonrası oluşan geçici endokrin bez - eozinofilik, kıvrımlı yapı",
          "Antral Foliküller: Kenarlarda içinde boşluk bulunan gelişmekte olan foliküller"
        ]
      },
      {
        title: "2. Tuba Uterina (Fallop Tüpü)",
        content: "Üst kısımdaki karmaşık boşluklu yapılar tuba uterina kesitleridir.",
        bulletPoints: [
          "Mukozal Kıvrımlar (Plicae): Lümene doğru uzanan dallanmış yapılar",
          "Epitel: Tek katlı prizmatik silyalı epitel - yumurtayı rahme süpürür",
          "Tunica Muscularis: Peristaltik hareket için düz kas tabakası"
        ]
      },
      {
        title: "3. Bağ Dokusu (Mesovarium/Mesosalpinx)",
        content: "Ovaryum ile tuba uterina arasındaki gevşek doku alanı, organları bir arada tutar ve kan damarlarını barındırır."
      }
    ],
    professorNote: "Soru: 'Bu preparatın hangi faza ait olduğunu nasıl anlarız?' - Devasa Corpus Luteum post-ovulatuar dönemi net bir şekilde gösterir."
  },
  {
    id: 3,
    title: "Göz (Oculus)",
    subtitle: "Bulbus Oculi - Panoramik Kesit",
    description: "Vücudumuzun en karmaşık duyu organlarından biri olan gözün panoramik yapısı. Işığın izlediği yol ve tabakaların organizasyonu görülmektedir.",
    magnification: "20x",
    locations: ["Kornea", "Lens", "Retina", "Optik Sinir"],
    diagnosisTip: "Kornea en dışta kavisli ve şeffaf, lens büyük pembe oval, retina iç kısımda ince mor tabaka olarak görülür.",
    microscopeNote: "Retina 10 katmanlı olduğundan ve yoğun çekirdek içerdiğinden bazofilik (mor) boyanır.",
    imageUrl: "photos/Histology-Guide-003.jpg",
    sections: [
      {
        title: "1. Ön Segment ve Kırıcı Yapılar",
        content: "Gözün anterior kısmı ışığın kırıldığı ve odaklandığı yerdir.",
        bulletPoints: [
          "Kornea: Işığın ilk ve en güçlü kırıldığı şeffaf tabaka - 5 histolojik katman",
          "Lens: Kristalize proteinlerden oluşan, pembe boyanan oval yapı",
          "İris ve Siliyer Cisim: Lensin yanlarındaki koyu yapılar - akomodasyon ve aköz hümör üretimi"
        ]
      },
      {
        title: "2. Tabakalar (Tunica)",
        content: "Göz küresinin duvarı üç ana tabakadan oluşur.",
        bulletPoints: [
          "Tunica Fibrosa (Sklera): En dıştaki koruyucu beyaz/pembe tabaka",
          "Tunica Vasculosa (Uvea/Koroit): Damardan zengin, pigmentli koyu tabaka",
          "Tunica Interna (Retina): Fotoreseptörlerin bulunduğu ince mor tabaka"
        ]
      },
      {
        title: "3. Arka Segment ve Optik Sinir",
        content: "Posterior kısımda kritik yapılar bulunur.",
        bulletPoints: [
          "Optik Sinir (N. Opticus): Göz küresinin arkasından çıkan sap benzeri yapı",
          "Optik Disk (Kör Nokta): Sinirin çıkış noktası - fotoreseptör bulunmaz"
        ]
      }
    ],
    professorNote: "Retina neden mor boyanır? 10 katmanın çoğu (Dış ve İç Nükleer Tabakalar) yoğun çekirdek içerir, hematoksilen nükleuslara bağlanır."
  },
  {
    id: 4,
    title: "Üreter",
    subtitle: "Ureter - Enine Kesit",
    description: "Boşaltım sisteminin temel taşıma yollarından biri. 'Yıldız şeklindeki' lümen yapısı adeta bir imza niteliğindedir.",
    magnification: "100x",
    locations: ["Böbrek Pelvisi - Mesane arası"],
    diagnosisTip: "Yıldız şeklindeki lümen üreterin en tipik özelliğidir. Ürotelyum (değişici epitel) ile döşelidir.",
    microscopeNote: "Kas tabakası çok belirgin: Üst kısımlarda iç boyuna, dış halkasal dizilim gösterir.",
    imageUrl: "photos/Histology-Guide-004.jpg",
    sections: [
      {
        title: "Üreter Katmanları",
        content: "Dıştan içe doğru üreter yapısı.",
        bulletPoints: [
          "Yıldız Şeklinde Lümen: Fiksasyon sırasında mukoza katlantılarının büzülmesiyle oluşur",
          "Ürotelyum (Değişici Epitel): İdrarın sitotoksik etkilerine karşı bariyer - en üstte şemsiye hücreleri",
          "Lamina Propria: Kan damarlarından zengin yoğun bağ dokusu",
          "Tunica Muscularis: Güçlü düz kas lifleri - peristaltik dalgalar oluşturur",
          "Adventisya: En dıştaki gevşek bağ dokusu"
        ]
      }
    ],
    professorNote: "Üreter mi, Özofagus mu? Özofagus'ta çok katlı yassı non-keratinize epitel var. Üreter'de ürotelyum var ve Muscularis Mucosa bulunmaz."
  },
  {
    id: 5,
    title: "Dalak (Spleen)",
    subtitle: "Lien - Lenfoid Organ",
    description: "Vücudun en büyük lenfoid organı. İlk bakışta homojen görünse de, dikkatli bakınca Beyaz Pulpa ve Kırmızı Pulpa ayrımı fark edilir.",
    magnification: "40x",
    locations: ["Sol Hipokondrium"],
    diagnosisTip: "Koyu mor dairesel odaklar Beyaz Pulpa, aralarındaki geniş pembe/mor alan Kırmızı Pulpadır.",
    microscopeNote: "Korteks-medulla ayrımı olmadığı için Lenf Düğümünden ayırt edilir.",
    imageUrl: "photos/Histology-Guide-005.jpg",
    sections: [
      {
        title: "1. Beyaz Pulpa (Pulpa Alba)",
        content: "Koyu, mor ve dairesel odaklar şeklinde görülen lenfoid doku.",
        bulletPoints: [
          "PALS (Periarteriyoler Lenfoid Kılıf): Merkezi arterleri saran T-lenfosit bölgeleri",
          "Lenf Folikülleri (Malpighi cisimcikleri): B-lenfositlerin toplandığı alanlar",
          "Fonksiyon: Antijenlere karşı bağışıklık yanıtının başlatıldığı yer"
        ]
      },
      {
        title: "2. Kırmızı Pulpa (Pulpa Rubra)",
        content: "Beyaz pulpa adacıkları arasındaki geniş, pembe/mor alan.",
        bulletPoints: [
          "Splenik Kordonlar (Billroth Kordonları): Eritrositler, makrofajlar, plazma hücreleri",
          "Splenik Sinüzoidler: Kanın yavaşça aktığı genişlemiş kapiller boşluklar",
          "Fonksiyon: Eskimiş eritrositlerin ayıklanması (hemoliz) ve demir geri kazanımı"
        ]
      },
      {
        title: "3. Kapsül ve Trabeküller",
        content: "Kenarlardan içeriye uzanan açık renkli, pembemsi hatlar. Dalağı çevreleyen yoğun bağ dokusu ve damar taşıyan trabeküllerdir."
      }
    ],
    professorNote: "Lenf Düğümü vs. Dalak: Korteks-medulla ayrımı + çevre sinüsler = Lenf Düğümü. Beyaz pulpa adacıkları + sinüzoidler = Dalak."
  },
  {
    id: 6,
    title: "Yalancı Çok Katlı Silli Prizmatik Epitel",
    subtitle: "Psödostratifiye Epitel - Solunum Epiteli",
    description: "Yüksek büyütmede hücrelerin dünyasına giriyoruz. Genellikle 'Solunum Epiteli' olarak adlandırılan bu yapı aslında tek katlıdır.",
    magnification: "400x",
    locations: ["Trakea", "Bronşlar", "Nasal Kavite"],
    diagnosisTip: "Çekirdekler farklı seviyelerde ama TÜM hücreler bazal membrana temas eder. Apikal yüzeyde siller görülür.",
    microscopeNote: "Siller mikrotübül yapısında ve aktif hareket eder - mukosiliyer yürüyen merdiven sistemi.",
    imageUrl: "photos/Histology-Guide-006.png",
    sections: [
      {
        title: "1. Neden 'Yalancı' Çok Katlı?",
        content: "Çekirdeklerin farklı seviyelerde olması nedeniyle çok katlı illüzyonu oluşur.",
        bulletPoints: [
          "Tüm hücreler bazal membrana temas eder",
          "Hücre boyları farklıdır - kısa olanların tepeleri yüzeye ulaşamaz",
          "Uzun hücreler yüzeye kadar uzanır"
        ]
      },
      {
        title: "2. Apikal Özellik: Siller (Cilia)",
        content: "Hücrelerin en üst yüzeyindeki ince, saç teli gibi uzantılar.",
        bulletPoints: [
          "Mikrovilluslardan farklı: Siller daha uzun ve aktif hareket eder",
          "Fonksiyon: Mukusu boğaza doğru süpürür (mukosiliyer yürüyen merdiven)",
          "Yapı: 9+2 mikrotübül düzenlemesi"
        ]
      },
      {
        title: "3. Diğer Elemanlar",
        content: "Epitelin altındaki yapılar.",
        bulletPoints: [
          "Bazal Membran: Epiteli bağ dokusundan ayıran ince hat",
          "Lamina Propria: Damardan zengin gevşek bağ dokusu",
          "Goblet Hücreleri: Aralarda mukus salgılayan kadeh hücreleri"
        ]
      }
    ],
    professorNote: "Klinik: Sigara içenlerde silli epitel çok katlı yassı epitele dönüşebilir (Metaplazi). Siller kaybolunca 'sabah öksürüğü' başlar."
  },
  {
    id: 7,
    title: "Böbrek Korteksi",
    subtitle: "Renal Cortex - Nefron Bileşenleri",
    description: "Böbreğin kabuk bölgesi tüm detaylarıyla görülmektedir. Nefronun başlangıç noktası olan Renal Korpuskül ve tübüller etiketlenmiştir.",
    magnification: "400x",
    locations: ["Böbrek Korteksi"],
    diagnosisTip: "Glomerulusu çevreleyen Bowman Kapsülü ve etrafındaki proksimal (p) - distal (d) tübül farkına dikkat et.",
    microscopeNote: "Renal korpusküller asla medulla'da bulunmaz - bu kesit kesinlikle kortekstedir.",
    imageUrl: "photos/Histology-Guide-007.jpg",
    sections: [
      {
        title: "1. Renal Korpuskül (Malpighi Cisimciği)",
        content: "Nefronun başlangıç noktası olan dairesel yapı.",
        bulletPoints: [
          "Glomerulus: Yoğun kapiller yumağı - yüksek basınçla kan süzülür",
          "Bowman Kapsülü: Glomerulusu saran yapı - parietal tabaka tek katlı yassı epitel",
          "Bowman Mesafesi: Ultrafiltratın toplandığı beyaz boşluk",
          "Vasküler Pol: Afferent arteriyolün girdiği yer"
        ]
      },
      {
        title: "2. Proksimal Kıvrımlı Tübül (PCT)",
        content: "Glomerulus etrafındaki 'p' ile işaretli kanallar.",
        bulletPoints: [
          "Hücreler daha büyük, sitoplazma koyu pembe (eozinofilik)",
          "Lümen dar ve 'kirli' görünür - fırçamsı kenar (mikrovillus) yapısı",
          "Geri emilimin en yoğun yapıldığı yer"
        ]
      },
      {
        title: "3. Distal Kıvrımlı Tübül (DCT)",
        content: "Glomerulus etrafındaki 'd' ile işaretli kanallar.",
        bulletPoints: [
          "Hücreler daha küçük, aynı alanda daha fazla çekirdek",
          "Lümen geniş ve 'temiz' - fırçamsı kenar yok"
        ]
      }
    ],
    professorNote: "Sınav sorusu: Malpighi cisimciği görüyorsak kesinlikle korteksteyiz. Medulla'da sadece Henle kulpları ve toplama kanalları bulunur."
  },
  {
    id: 8,
    title: "Deri (Integumentum)",
    subtitle: "Cutis - Epidermis ve Dermis",
    description: "Derinin iki ana tabakası ve aralarındaki hayati ilişki mükemmel netlikle görülmektedir. Vücudumuzun dış dünyayla sınırı.",
    magnification: "200x",
    locations: ["Vücut Geneli (İnce Deri)"],
    diagnosisTip: "Sol üstte mor epitel (epidermis), sağ altta lifli bağ dokusu (dermis). Arada papiller yapı görülebilir.",
    microscopeNote: "Epidermis avaskülerdir - tamamen dermisten difüzyon yoluyla beslenir.",
    imageUrl: "photos/Histology-Guide-008.jpg",
    sections: [
      {
        title: "1. Epidermis: Çok Katlı Yassı Keratinize Epitel",
        content: "Sol ve üst kısmı kaplayan mor/pembe yoğun hücre tabakası.",
        bulletPoints: [
          "Alt tabakalarda kübik/prizmatik hücreler, yüzeyde yassılaşır",
          "Stratum Corneum: En üstte çekirdeksiz keratin tabakası",
          "Fonksiyon: Su kaybını önler, mekanik bariyer oluşturur",
          "Avasvüler: İçinde kan damarı bulunmaz"
        ]
      },
      {
        title: "2. Dermis: Bağ Dokusu",
        content: "Sağ alt taraftaki açık renkli, lifli alan.",
        bulletPoints: [
          "Düzensiz Sıkı Bağ Dokusu: Tip I Kollajen lifleri içerir",
          "Fibroblastlar: Lifleri sentezleyen hücreler",
          "Dayanıklılık ve esneklik sağlar"
        ]
      },
      {
        title: "3. Mikrovasküler Yapılar",
        content: "Dermis içindeki damar sistemi.",
        bulletPoints: [
          "Kapiller: Tek eritrosit sığacak kadar dar, besin-gaz değişimi",
          "Venül: Biraz daha geniş, kanı geri taşıyan toplardamar"
        ]
      }
    ],
    professorNote: "İnce Deri mi, Kalın Deri mi? Kalın deride keratin tabakası çok kalın ve Stratum Lucidum görülür. Bu görsel İnce Deri örneğidir."
  },
  {
    id: 9,
    title: "Tek Katlı Kübik Epitel",
    subtitle: "Simple Cuboidal Epithelium",
    description: "Epitel sınıflamasını anlamak için altın standart örnek. Hücrelerin yüksekliği ve genişliği birbirine eşittir - kare/küp görünümü.",
    magnification: "400x",
    locations: ["Böbrek Tübülleri", "Tiroid Folikülleri", "Over Yüzeyi"],
    diagnosisTip: "Merkezi yerleşimli, tam yuvarlak çekirdekler bu dokunun en tipik özelliğidir. Dizilim tek sıra halindedir.",
    microscopeNote: "Lümen temiz görünüyorsa distal tübül, kirli görünüyorsa proksimal tübül olabilir.",
    imageUrl: "photos/Histology-Guide-009.jpg",
    sections: [
      {
        title: "1. Doku Tanımlama",
        content: "Dairesel yapılar tübüllerin enine kesitleridir.",
        bulletPoints: [
          "Hücre oranı: Yükseklik ≈ Genişlik (1:1)",
          "Çekirdek: Merkezi yerleşimli, tam yuvarlak",
          "Dizilim: Tek sıra halinde bazal membran üzerinde"
        ]
      },
      {
        title: "2. Fonksiyon",
        content: "Salgı (sekresyon) ve emilim (absorpsiyon).",
        bulletPoints: [
          "Sitoplazmik hacim fazla: Daha fazla mitokondri ve organel barındırır",
          "Aktif taşıma süreçlerinde rol alır"
        ]
      }
    ],
    professorNote: "Kübik mi, Prizmatik mi? Boy > Genişlik ve oval çekirdek = Prizmatik. Boy ≈ Genişlik ve yuvarlak çekirdek = Kübik."
  },
  {
    id: 10,
    title: "Tükürük Bezi",
    subtitle: "Glandula Salivaria - Parotis",
    description: "Ekzokrin salgı sisteminin en düzenli yapılarından biri. Salgı yapan birimler (asinüsler) ve taşıma kanalları (duktuslar) görülmektedir.",
    magnification: "100x",
    locations: ["Parotis", "Submandibüler", "Sublingual Bez"],
    diagnosisTip: "Sadece koyu seröz asinüsler görülüyorsa Parotis. Soluk muköz asinüsler de varsa Submandibüler bezdir.",
    microscopeNote: "Çizgili kanallar (Striated Ducts) salgının elektrolit dengesini aktif olarak değiştirir.",
    imageUrl: "photos/Histology-Guide-010.jpg",
    sections: [
      {
        title: "1. Seröz Asinüsler",
        content: "Koyu pembe/morumsu salgı birimleri.",
        bulletPoints: [
          "Piramidal hücreler, çekirdek tabanda",
          "Apikal: Enzim granülleri (eozinofilik)",
          "Bazal: Granüllü ER (bazofilik)",
          "Sulu, protein ve enzimden zengin salgı üretir"
        ]
      },
      {
        title: "2. Duktus Sistemi",
        content: "Ortası boş, dairesel boşaltım kanalları.",
        bulletPoints: [
          "Epitel: Tek katlı kübik veya prizmatik",
          "Çizgili Kanallar: Na/Cl geri emilimi, K/HCO3 salgısı",
          "Modifikasyon merkezleri olarak görev yapar"
        ]
      },
      {
        title: "3. Stroma",
        content: "Kanallar etrafındaki gevşek bağ dokusu. Kılcal damarlar ve sinir lifleri içerir."
      }
    ],
    professorNote: "Pankreas ile karıştırma! Pankreasta Langerhans Adacıkları görülür, tükürük bezinde duktus sistemi baskındır."
  },
  {
    id: 11,
    title: "Tek Katlı Prizmatik Epitel",
    subtitle: "Simple Columnar Epithelium - Bağırsak",
    description: "Sindirim sisteminin en maharetli örtü tabakası. Hem salgı hem de emilim için özelleşmiş hücreler bir arada çalışır.",
    magnification: "400x",
    locations: ["İnce Bağırsak", "Mide", "Safra Kesesi"],
    diagnosisTip: "Uzun prizmatik hücreler, bazalde oval çekirdekler, apikal yüzeyde çizgili kenar (mikrovillus) görülür.",
    microscopeNote: "Goblet hücreleri boş/soluk görünür - mukus içeriği rutin boyamada çözünür.",
    imageUrl: "photos/Histology-Guide-011.jpg",
    sections: [
      {
        title: "1. Hücre Morfolojisi",
        content: "Sütun benzeri uzun hücreler.",
        bulletPoints: [
          "Boy > Genişlik: Yoğun organel barındırma kapasitesi",
          "Çekirdek: Bazale yakın, oval şekilli",
          "Tüm çekirdekler aynı hizada - düzenli görünüm"
        ]
      },
      {
        title: "2. Striated Border (Mikrovilluslar)",
        content: "Apikal yüzeydeki koyu pembe hat.",
        bulletPoints: [
          "Emilim yüzeyini yüzlerce kat artırır",
          "Sillerden farklı: Hareket etmez, pasif emilim için",
          "Enzim tutunması sağlar"
        ]
      },
      {
        title: "3. Goblet Hücresi (Kadeh Hücresi)",
        content: "Geniş, boşluklu ve kadeh şeklindeki tek hücreli bezler.",
        bulletPoints: [
          "Müsin (mukus öncüsü) ile dolu",
          "Soluk görünüm: Boyamada mukus çözünür",
          "Koruyucu mukus tabakası oluşturur"
        ]
      }
    ],
    professorNote: "Gösterge: Prizmatik + Çizgili kenar + Goblet = %99 İnce Bağırsak. Goblet yoksa Safra Kesesi düşün!"
  },
  {
    id: 12,
    title: "Tuba Uterina Epiteli",
    subtitle: "Fallop Tüpü - Tek Katlı Prizmatik Silli Epitel",
    description: "Dişi üreme sisteminin kritik taşıma hattı. Silli ve salgı yapan hücreler harmoni içinde çalışır.",
    magnification: "400x",
    locations: ["Ampulla", "İstmus", "Fimbriya"],
    diagnosisTip: "Silli hücreler oositi rahme süpürür. Peg (salgı) hücreleri besin maddesi salgılar.",
    microscopeNote: "Hormonal döngü etkili: Östrojen siller çoğaltır, progesteron salgı hücrelerini aktive eder.",
    imageUrl: "photos/Histology-Guide-012.jpg",
    sections: [
      {
        title: "1. Epitel Yapısı",
        content: "İki ana hücre tipi birbirini tamamlar.",
        bulletPoints: [
          "Silli Hücreler: Apikal siller ile oosite/zigotu rahme süpürür",
          "Salgı/Peg Hücreleri: Sili olmayan, koyu çekirdekli - besin sıvısı salgılar",
          "Kapasitasyon: Spermin döllenme yeteneği kazanması burada gerçekleşir"
        ]
      },
      {
        title: "2. Lamina Propria",
        content: "Epitelin altındaki destek tabakası.",
        bulletPoints: [
          "Gevşek bağ dokusu",
          "Damardan zengin - difüzyon ile beslenme",
          "Plikalar (kıvrımlar) iç yüzey alanını artırır"
        ]
      }
    ],
    professorNote: "Hormonal ilişki: Östrojen ↑ = Silli hücreler ↑ (ovülasyona doğru). Progesteron ↑ = Salgı hücreleri aktif. Mikroskop döngü fazını gösterir!"
  }
];
