import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'wiki-page',
  templateUrl: './wiki-page.component.html',
  styleUrls: ['./wiki-page.component.scss'],
})
export class WikiPageComponent implements OnInit {
  imagefolder = '../../../assets/img/wiki/';
  imagepath: string;
  text: string;


  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      switch (params.get('name')) {
        case '1' :
          this.imagepath = this.imagefolder + 'slichenie.jpg';
          this.text = 'Аппаратура высокоточного сличения шкал времени предназначена для определения расхождения шкал времени (ШВ) ' +
            'эталонов времени и частоты (ЭВЧ) и объектов Государственной службы времени и частоты, Государственной системы единого ' +
            'времени и эталонных частот и других объектов относительно шкал времени систем (ШВС) ГЛОНАСС и GPS с целью последующего ' +
            'определения взаимного расхождения ШВ разнесенных ЭВЧ и объектов и относительного отклонения частот ЭВЧ и стандартов ' +
            'частоты и времени объектов, а также выдачи сигналов ШВ, синхронизированных с национальной координированной шкалой времени ' +
            'России UTC(SU) или ШВС ГЛОНАСС, и уточнения координат пользователя.';
          break;
        case '2' :
          this.imagepath = this.imagefolder + '315.jpg';
          this.text = 'Компаратор фазовый многоканальный VCH-315 предназначен для одновременного измерения относительной разности частот ' +
            'и  нестабильности частоты группы синусоидальных сигналов стандартных частот 5; 10; 100 МГц.';
          break;
        case '3' :
          this.imagepath = this.imagefolder + '1003.jpg';
          this.text = 'Стандарт частоты и времени водородный Ч1-1003А/Ч1-1003М предназначен для формирования высокостабильных, ' +
            'высокоточных по частоте, спектрально чистых синусоидальных 5; 10; 100 МГц и импульсных 1 Гц ' +
            'сигналов и для проведения время-частотных измерений';
          break;
        case '4' :
          this.imagepath = this.imagefolder + '314.jpg';
          this.text = 'Компаратор частотный VCH-314 предназначен для измерения относительной разности' +
            ' и нестабильности частоты сигналов с номинальными частотами 5; 10; 100 МГц.';
          break;
        case '5' :
          this.imagepath = this.imagefolder + '603.jpg';
          this.text = 'Коммутатор сигналов VCH-603 предназначен для подключения входов измерительных приборов к источникам стимулирующих ' +
            'сигналов по командам, поступающим через интерфейсы GPIB или RS232, либо с клавиатуры передней панели прибора. Коммутатор ' +
            'высокочастотных сигналов осуществляет подключение одного из 50 входных каналов на любой из пяти выходных каналов.';
          break;
        case '6' :
          this.imagepath = this.imagefolder + 'chastotomer.jpg';
          this.text = 'Частотомер универсальный СNT–90 предназначен для измерения' +
            ' параметров, определяющих качество импульсных сигналов эталона.';
          break;
        case '7' :
          this.imagepath = this.imagefolder + 'Ntp.jpg';
          this.text = 'Сервер синхронизации времени ССВ-1Г предназначен для синхронизации аппаратно-программных средств обеспечения ' +
            'эксплуатации эталона по протоколу NTP. Сервер синхронизации времени по запросам клиентов формирует сетевые пакеты,' +
            ' содержащие оцифрованную метку, установленную пользователем и поддерживаемую на заданном уровне точности при помощи' +
            ' встроенного приемника ГЛОНАСС/GPS и выходного сигнала 1 Гц эталона. ';
          break;
        case '8' :
          this.imagepath = this.imagefolder + 'tablo.jpg';
          this.text = 'Табло индикации даты и времени предназначено для отображения точных значений даты и времени.';
          break;
        case '9' :
          this.imagepath = this.imagefolder + '1hz.jpg';
          this.text = 'Усилитель сигналов 1 Гц предназначен для распределения импульсного сигнала эталона потребителям.';
          break;
        case '10' :
          this.imagepath = this.imagefolder + '5hz.jpg';
          this.text = 'Усилитель сигналов 5 МГц предназначен для распределения эталонного синусоидального сигнала 5 МГц потребителям.';
          break
      }
    });
  }
}







