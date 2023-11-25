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
import { Navigation, Pagination, Scrollbar} from 'swiper/modules';
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
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Scrollbar],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			simulateTouch: true, //false отключение претаскивания сслайда на ПК
			touchRatio: 1, // Чуствительность свайпа
      touchAngle: 45, // угол срабатывания свайпа
      grabCursor: true, // курсор претаскивания


			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

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
			/*
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
			*/
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