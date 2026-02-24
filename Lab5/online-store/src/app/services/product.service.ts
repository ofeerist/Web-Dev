import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Ноутбуки' },
    { id: 3, name: 'Лего' },
    { id: 4, name: 'Шампунь' }
  ];

  private products: Product[] = [
    {
      id: 1,
      categoryId: 1,
      name: 'Apple iPhone 16 Pro Max 256Gb черный',
      description: 'Флагманский смартфон с титановым корпусом и мощным процессором A18 Pro.',
      price: 645000,
      rating: 5.0,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf7/hec/87295486197790.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf7/hec/87295486197790.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h48/h86/87295486230558.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/'
    },
    {
      id: 2,
      categoryId: 1,
      name: 'Samsung Galaxy S24 Ultra 12/256Gb серый',
      description: 'Смартфон с поддержкой Galaxy AI и встроенным пером S Pen.',
      price: 495000,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p41/pda/1306250.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p41/pda/1306250.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p24/pda/1306251.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/'
    },
    {
      id: 3,
      categoryId: 1,
      name: 'Apple iPhone 15 128Gb черный',
      description: 'Базовый флагман Apple с разъемом Type-C, Dynamic Island и отличной камерой 48 Мп.',
      price: 335000,
      rating: 5.0,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/'
    },
    {
      id: 4,
      categoryId: 1,
      name: 'Xiaomi Redmi Note 13 Pro 8/256Gb черный',
      description: 'Популярный среднебюджетный смартфон с AMOLED экраном 120 Гц и камерой на 200 Мп.',
      price: 119990,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/h49/84948839071774.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h9e/h49/84948839071774.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h90/hbe/84948839137310.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-13-pro-8-gb-256-gb-chernyi-115848520/'
    },
    {
      id: 5,
      categoryId: 1,
      name: 'Google Pixel 8 Pro 12/128Gb обсидиан',
      description: 'Камерофон от Google с эталонным Android, чипом Tensor G3 и продвинутыми AI-функциями фото.',
      price: 360000,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc7/hd2/84279899127838.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hc7/hd2/84279899127838.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h00/hb3/84279899193374.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-12-gb-128-gb-chernyi-113797685/'
    },

    {
      id: 6,
      categoryId: 2,
      name: 'Apple MacBook Air 13 M2 8/256Gb серый',
      description: 'Тонкий и легкий ноутбук с великолепным дисплеем Liquid Retina.',
      price: 485000,
      rating: 5.0,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h65/h41/64547520512030.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mlxw3-seryi-105933794/'
    },
    {
      id: 7,
      categoryId: 2,
      name: 'ASUS ROG Zephyrus G16 серый',
      description: 'Мощный игровой ноутбук с видеокартой RTX 4060.',
      price: 850000,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p2e/p89/47502192.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p2e/p89/47502192.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p12/p89/47502193.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g16-16-ips-i7-13620h-16-gb-ssd-512-gb-rtx-4060-win-11-gu603vv-n3022w-90nr0c01-m001v0-111164998/'
    },
    {
      id: 8,
      categoryId: 2,
      name: 'Lenovo IdeaPad Slim 3 15.6" / 8Gb / 256Gb SSD / серый',
      description: 'Надежный ноутбук для учебы и офисной работы на базе процессора Intel Core i3.',
      price: 159990,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84526514798622.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84526514798622.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hb1/hec/84526514864158.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-3-15-6-ips-core-i3-n305-8-gb-ssd-256-gb-dos-82xb003lrk-114693751/'
    },
    {
      id: 9,
      categoryId: 2,
      name: 'Acer Nitro 5 15.6" / 16Gb / 512Gb / RTX 3050',
      description: 'Сбалансированный игровой ноутбук с агрессивным дизайном и эффективным охлаждением.',
      price: 369000,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/he0/64402636734494.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h1b/he0/64402636734494.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h83/h88/64402639454238.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/acer-nitro-5-an515-57-15-6-ips-core-i5-11400h-16-gb-ssd-512-gb-rtx-3050-win-11-nh-qewer-005-104033621/'
    },
    {
      id: 10,
      categoryId: 2,
      name: 'Apple MacBook Pro 14 M3 8/512Gb серебристый',
      description: 'Профессиональный инструмент с новым чипом M3 и невероятным экраном Liquid Retina XDR.',
      price: 780000,
      rating: 5.0,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hde/h9e/84515541680158.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hde/h9e/84515541680158.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h61/hc1/84515541745694.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2023-14-2-m3-8-gb-ssd-512-gb-macos-mtl73-serebristyi-114643666/'
    },

    {
      id: 11,
      categoryId: 3,
      name: 'LEGO Icons 10327 Дюна: Королевский орнитоптер Атрейдесов',
      description: 'Детализированная модель из фильма «Дюна» с раскладными крыльями.',
      price: 65000,
      rating: 5.0,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h1a/85078679879710.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf3/h1a/85078679879710.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h1c/hf1/85078679945246.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/lego-icons-10327-djuna-korolevskii-ornitopter-atreidesov-detalei-1369-sht-116345091/'
    },
    {
      id: 12,
      categoryId: 3,
      name: 'LEGO Technic 42154 2022 Ford GT',
      description: 'Масштабная модель 1:12 с работающим двигателем V6.',
      price: 55000,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc1/hea/84800727941150.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hc1/hea/84800727941150.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hcc/69355952865310.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/lego-technic-2022-ford-gt-42154-detalei-1466-sht-109312629/'
    },
    {
      id: 13,
      categoryId: 3,
      name: 'LEGO Star Wars 75337 Шагоход AT-TE',
      description: 'Боевая машина из "Мести ситхов" с тяжелым бластером и фигурками клонов.',
      price: 67990,
      rating: 5.0,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc4/hc9/64467576520734.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hc4/hc9/64467576520734.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hae/h24/64467578748958.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/lego-star-wars-shagohod-at-te-75337-detalei-1082-sht-106093409/'
    },
    {
      id: 14,
      categoryId: 3,
      name: 'LEGO Harry Potter 76419 Замок и территория Хогвартса',
      description: 'Коллекционная микромасштабная модель знаменитой школы чародейства и волшебства.',
      price: 84000,
      rating: 5.0,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8f/hea/84898124234782.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h8f/hea/84898124234782.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h27/he2/84898124300318.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/lego-harry-potter-zamok-i-territorija-hogvartsa-76419-detalei-2660-sht-113550882/'
    },
    {
      id: 15,
      categoryId: 3,
      name: 'LEGO Speed Champions 76916 Porsche 963',
      description: 'Гоночный гиперкар из серии Speed Champions для любителей автоспорта.',
      price: 11500,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hda/haa/69382218776606.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hda/haa/69382218776606.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hd6/hc8/69382221266974.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/lego-speed-champions-porsche-963-76916-detalei-280-sht-109312211/'
    },

    {
      id: 16,
      categoryId: 4,
      name: 'Шампунь Head & Shoulders Основной уход 400 мл',
      description: 'Шампунь против перхоти №1. Очищает, защищает и увлажняет волосы и кожу головы.',
      price: 2450,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h62/63820252512286.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hba/h62/63820252512286.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/ha6/h43/63820255330334.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/head-shoulders-osnovnoi-uhod-shampun-400-ml-100346313/'
    },
    {
      id: 17,
      categoryId: 4,
      name: 'Шампунь Clear Men Против перхоти Активспорт 400 мл',
      description: 'Создан специально для мужчин, эффективно удаляет перхоть и освежает кожу головы.',
      price: 2300,
      rating: 4.8,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he4/h30/63806145658910.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/he4/h30/63806145658910.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h01/hf4/63806147952670.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/clear-men-protiv-perhoti-aktivsport-shampun-400-ml-100230353/'
    },
    {
      id: 18,
      categoryId: 4,
      name: 'Шампунь Pantene Pro-V Интенсивное восстановление 400 мл',
      description: 'Помогает бороться с признаками повреждения волос, придавая им здоровый вид и блеск.',
      price: 2150,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h27/h5e/63809627734046.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h27/h5e/63809627734046.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h1d/63809630355486.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/pantene-pro-v-intensivnoe-vosstanovlenie-shampun-400-ml-100342939/'
    },
    {
      id: 19,
      categoryId: 4,
      name: 'Шампунь Syoss Volume для тонких волос 440 мл',
      description: 'Придает волосам заметный объем до 48 часов без утяжеления.',
      price: 2600,
      rating: 4.7,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha6/hde/64077884817438.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/ha6/hde/64077884817438.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hc6/h0c/64077887569950.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/syoss-volume-dlja-tonkih-volos-shampun-440-ml-100318047/'
    },
    {
      id: 20,
      categoryId: 4,
      name: 'Шампунь L\'Oreal Paris Elseve Длина Мечты 400 мл',
      description: 'Для длинных и поврежденных волос. Запечатывает секущиеся кончики и укрепляет структуру.',
      price: 2200,
      rating: 4.9,
      likes: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h75/he2/63833446023198.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h75/he2/63833446023198.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hb1/hf2/63833448448030.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/l-oreal-paris-elseve-dlina-mechty-shampun-400-ml-100223788/'
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  removeProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }

  likeProduct(id: number): void {
    const product = this.products.find(p => p.id === id);
    if (product) {
      product.likes++;
    }
  }
}
