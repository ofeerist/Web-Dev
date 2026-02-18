import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 13 128Gb Midnight',
      description: 'Классический iPhone 13 с мощным чипом A15 Bionic и передовой системой двух камер.',
      price: 295000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23 Ultra',
      description: 'Топовый Android-смартфон с камерой 200 МП и встроенным пером S-Pen для профессионалов.',
      price: 450000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h5e/h53/69635680763934.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h1c/h14/69635686989854.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h9e/h60/69635687514142.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-12-gb-256-gb-chernyi-109174566/'
    },
    {
      id: 3,
      name: 'Apple AirPods Pro 2 (USB-C)',
      description: 'Активное шумоподавление, режим прозрачности и новый кейс с разъемом USB-C.',
      price: 105000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-belyi-113677582/'
    },
    {
      id: 4,
      name: 'Dyson V15 Detect Absolute',
      description: 'Мощный беспроводной пылесос с лазерной подсветкой пыли и пьезо-датчиком.',
      price: 380000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p36/p31/10605305.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p36/p31/10605305.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p52/p31/10605306.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-total-clean-sv47-chernyi-117389806/?c=750000000'
    },
    {
      id: 5,
      name: 'Sony PlayStation 5 Slim',
      description: 'Игровая консоль нового поколения. Обновленная тонкая версия с дисководом.',
      price: 260000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p43/p2a/78474505.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
    },
    {
      id: 6,
      name: 'Apple MacBook Air 13 M1',
      description: 'Легендарный ноутбук на чипе M1. 8 ГБ ОЗУ, 256 ГБ SSD. Цвет "Серый космос".',
      price: 420000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h27/hec/63947824496670.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hc3/h83/63947832557598.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mggn3-seryi-100797845/'
    },
    {
      id: 7,
      name: 'Робот-пылесос Xiaomi S10',
      description: 'Умный робот-пылесос с лазерной навигацией (LDS) и функцией влажной уборки.',
      price: 89000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8d/pf5/6541167.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p8d/pf5/6541167.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/paa/pf5/6541168.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p32/pf8/6541170.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-robot-vacuum-s10-bhr6368eu-belyi-108100032/?c=750000000'
    },
    {
      id: 8,
      name: 'Яндекс Станция Лайт 2',
      description: 'Обновленная умная колонка с голосовым помощником Алиса. Фиолетовый цвет.',
      price: 23000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/hfc/64362954719262.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h9f/hfc/64362954719262.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/haa/h8e/64362957799454.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hb0/h05/64362960617502.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-yndx-00025-fioletovyi-101870266/?c=750000000'
    },
    {
      id: 9,
      name: 'LEGO Technic Ford Mustang',
      description: 'Детализированная модель Ford Mustang Shelby GT500 с инерционным механизмом.',
      price: 19000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h07/85328260726814.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf3/h07/85328260726814.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h18/h42/85328260857886.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h15/h4a/85328260923422.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/lego-speed-champions-ford-mustang-dark-horse-76920-detalei-344-sht-117114880/?c=750000000'
    },
    {
      id: 10,
      name: 'Мышь Logitech G102 Lightsync',
      description: 'Игровая мышь с RGB-подсветкой, высокоточным сенсором и классическим дизайном.',
      price: 9900,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/ha5/h08/64119543070750.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h50/hea/64119545036830.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000'
    }
  ];
}
