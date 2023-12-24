/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
// import Swiper, { Navigation } from 'swiper';
import Swiper from 'swiper';
import {
  Navigation,
  Pagination,
  Scrollbar,
  HashNavigation,
  Keyboard,
  Mousewheel,
  Autoplay,
  EffectFlip,
} from 'swiper/modules';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// import { tree } from 'gulp';
// Полный набор стилей из node_modules
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-flip';

// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper('.swiper', { // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, Scrollbar, HashNavigation, Keyboard, Mousewheel, Autoplay, EffectFlip],
      // observer: true, // обновление слайдера при изменении элементов
      // observeParents: true, // обновление при изменении родительских элементов
      slidesPerView:  
      4,   // количество слайдов на странице для показа (можно выводить не целое количество слайдов например 2,5) auto автоширина (ширина слайда формируется самим контентом)
      spaceBetween: 30, // отступы между слайдами
      autoHeight: false, // автовысота (высота слайдера подстраивается под высоту контента)
      slidesPerGroup: 1, // количество пролистываемых слайдов
      centeredSlides: false, // Активный слайд по центру
      initialSlide: 0, // стартовый слайд
      // slidesPerColumn: 2, // мультирядность (отключить autoHeight)
      speed: 800, // скорость слайдера перелиствовония
      // отключение функционала
      // если слайдов меньше чем нужно (т.е если слайдов нет слайдер отключиться)
      watchOverflow: true,

      simulateTouch: true, //false отключение претаскивания сслайда на ПК
      touchRatio: 1, // Чуствительность свайпа 0 - отключит свайп 2-3 - овеличит чуствительность свайпа
      touchAngle: 45, // угол срабатывания свайпа
      grabCursor: true, // курсор претаскивания
      slideToClickedSlide: true, // переключение при клике на слайд

      // вертикальный слайдер
      // direction: 'vertical',

      // управление клавиатурой
      keyboard: {
        // включить/выключить
        enabled: true,
        // только тогда когда слайдер в приделах вьюпорта
        onlyInViewport: true,
        // включить выключить
        // управлене клавишами pageUP PageDown
        pageUpDown: true,

      },
      // управление колесом мыши
      mousewheel: {
        // чуствительность колеса мыши
        sensitivity: 1,
        // класс объекта на котором 
        // будет срабатывать прокрутка мыши
        // eventsTarget: ".page__slide-wpap"
      },

      //  навигация по хешу
      hashNavigation: {
        // отслеживать состояние навигация при помощи стрелок браузера
        watchState: true,
      },

      loop: false, // бесконечность прокручивания слайдов
      freeMode: true, // свободный режим
      //preloadImages: false,
      //lazy: true,

    
      // Эффекты
      effect: 'slide', // эфекты fade kube и т.д смотри документацию
      autoplay: { // авто-прокрутка слайдов
      	delay: 3000,
      	disableOnInteraction: false,
        // отключить после ручного перлистования
      },
      

      // Пагинация

      pagination: {
        el: '.swiper-pagination',
        /*
				clickable: true, // клики на погинацию
        // Динамические булеты
        dynamicBullets: true, // точки изменяют свой размер в зависимомти от активной точки

        // Кастомные булеты
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
        */
        //  фракция (числа переключаются 1/6)

        type: 'fraction',
        // кастомные фракции (к цифрам бобавил несколько слов)
        renderFraction: function (currentClass, totalClass) {
          console.log(totalClass);
          return 'Фото <span class="' + currentClass + '"></span>' +
            ' из ' +
            '<span class="' + totalClass + '"></span>';
        },
        //  прогресбар
        //  type: 'progressbar',
      },


      // Скроллбар

      scrollbar: {
        el: '.swiper-scrollbar',
        // возможность перетаскивать скролл
        draggable: true,
      },


      // Кнопки "влево/вправо" стрелки
      navigation: {
        prevEl: '.swiper-button-prev', // тут можно указывать любые объекты и классы и их уже настраивать
        nextEl: '.swiper-button-next',
      },

      // Брейкпоинты
      
      breakpoints: {
      	320: {
      		slidesPerView: 1,
      		spaceBetween: 0,
      		autoHeight: true,
      	},
      	768: {
      		slidesPerView: 2,
      		spaceBetween: 20,
      	},
      	992: {
      		slidesPerView: 3,
      		spaceBetween: 20,
      	},
      	1268: {
      		slidesPerView: 4,
      		spaceBetween: 30,
      	},
      },
      
      // События
      on: {

      }
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});