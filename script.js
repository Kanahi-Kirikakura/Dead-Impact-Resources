// Данные элементов (можно заменить на реальные данные)
const itemsData = [
  	{id: 0, title: "", image: "di.png", "location": "@Kanahi_Kirigakura v.1" },
  	{id: 1, title: "Медный лом", image: "тир1/медный лом.jpg", "location": "Ж/Д Станция, Стальная гробница, Каньон, Ранчо" },
  	{id: 2, title: "Сосновое бревно", image: "тир1/сосновое бревно.jpg", "location": "Ж/Д Станция, Стальная гробница, Каньон, Ранчо" },
  	{id: 3, title: "Хлопок", image: "тир1/хлопок.jpg", "location": "Ж/Д Станция, Стальная гробница, Каньон, Ранчо" },
  	{id: 4, title: "Обычное сырое мясо", image: "тир1/обычное сырое мясо.jpg", "location": "Ж/Д Станция, Стальная гробница, Каньон, Ранчо (животные)" },
  	{id: 5, title: "Грубая шкура", image: "тир1/грубая шкура.jpg", "location": "Ж/Д Станция, Стальная гробница, Каньон, Ранчо (животные)" },
  	{id: 6, title: "Малый клык", image: "тир1/малый клык.jpg", "location": "Ж/Д Станция, Стальная гробница, Каньон, Ранчо (животные)" },
  	{id: 7, title: "Малое ухо", image: "тир1/малое ухо.jpg", "location": "Ж/Д Станция, Стальная гробница, Каньон, Ранчо (зомби)" },
  	{id: 8, title: "Старая наждачка", image: "тир1/старая наждачка.jpg", "location": "Ж/Д Станция, Стальная гробница, Каньон, Ранчо" },
  	{id: 9, title: "Старый клей", image: "тир1/старый клей.jpg", "location": "Ж/Д Станция, Стальная гробница, Каньон, Ранчо" },
  	{id: 10, title: "Старый подшипник", image: "тир1/старый подшипник.jpg", "location": "Ж/Д Станция, Стальная гробница, Каньон, Ранчо" },
  	{id: 11, title: "Малая синяя руда", image: "тир1/синяя руда.jpg", "location": "Каньон, Ж/Д Станция" },
  	{id: 12, title: "Малая красная руда", image: "тир1/красная руда.jpg", "location": "Ранчо, Ж/Д Станция" },
  	{id: 13, title: "Малая зеленая руда", image: "тир1/зеленая руда.jpg", "location": "Стальная гробница, Ж/Д Станция" },
  	{id: 14, title: "Частица тумана", image: "тир1/частица тумана.jpg", "location": "Ж/Д Станция (босс), Стальная гробница, Каньон, Ранчо" },
	{id: 15, title: "Каштановое бревно", image: "тир2/каштановое бревно.jpg", location: "Оазис,Темная Долина, Хижина, Расплавленный карьер, Замёрзшее озера, Маркет"},
	{id: 16, title: "Оловянный лом", image: "тир2/оловянный лом.jpg", location: "Оазис,Темная Долина, Хижина, Расплавленный карьер, Замёрзшее озера, Маркет"},
	{id: 17, title: "Лен", image: "тир2/лен.jpg", location: "Оазис,Темная Долина, Хижина, Расплавленный карьер, Замёрзшее озера, Маркет"},
	{id: 18, title: "Вкусное сырое мясо", image: "тир2/вкусное сырое мясо.jpg", location: "Оазис,Темная Долина, Хижина, Расплавленный карьер, Замёрзшее озера, Маркет (животные)"},
	{id: 19, title: "Тонкая шкура", image: "тир2/тонкая шкура.jpg", location: "Оазис,Темная Долина, Хижина, Расплавленный карьер, Замёрзшее озера, Маркет (животные)"},
	{id: 20, title: "Средний сгоревший клык", image: "тир2/средний сгоревший клык.jpg", location: "Оазис,Темная Долина, Хижина, Расплавленный карьер, Замёрзшее озера, Маркет (животные)"},
	{id: 21, title: "Среднее сгоревшее ухо", image: "тир2/среднее сгоревшее ухо.jpg", location: "Оазис,Темная Долина, Хижина, Расплавленный карьер, Замёрзшее озера, Маркет (зомби)"},
	{id: 22, title: "Туманная кровь", image: "тир2/туманная кровь.jpg", location: "Оазис,Темная Долина, Хижина, Ущелье, Замёрзшее озера, Маркет (боссы)"},
	{id: 23, title: "Обычная наждачка", image: "тир2/обычная наждачка.jpg", location: "Темная долина, Хижина"},
	{id: 24, title: "Обычная изолента", image: "тир2/обычная изолента.jpg", location: "Темная долина, Хижина"},
	{id: 25, title: "Обычная проволока", image: "тир2/обычная проволока.png", location: "Оазис, Ущелье"},
	{id: 26, title: "Обычный клей", image: "тир2/обычный клей.jpg", location: "Оазис, Ущелье"},
	{id: 27, title: "Обычный подшипник", image: "тир2/обычный подшипник.jpg", location: "Замёрзшее озеро, Маркет"},
	{id: 28, title: "Обычные гвозди", image: "тир2/обычные гвозди.jpg", location: "Замёрзшее озеро, Маркет"},
	{id: 29, title: "Средняя синяя руда", image: "тир2/средняя синяя руда.jpg", location: "Замёрзшее озеро, Маркет"},
	{id: 30, title: "Средняя красная руда", image: "тир2/средняя красная руда.jpg", location: "Оазис, Расплавленный карьер"},
	{id: 31, title: "Средняя зеленая руда", image: "тир2/средняя зеленая руда.jpg", location: "Темная долина, Хижина"},
	{id: 32, title: "Частица тумана", image: "тир2/частица тумана.jpg", location: "Оазис,Темная Долина, Хижина, Расплавленный карьер, Замёрзшее озера, Маркет"},
	{id: 33, title: "Ювелирный лом", image: "тир2/ювелирный лом.jpg", location: "Хижина, Расплавленный карьер, Маркет"},
	{id: 34, title: "Кедровое бревно", image: "тир3/кедровое бревно.jpg", location: "Священная река, Мертвый город, Наблюдательный пункт"},
	{id: 35, title: "Железный лом", image: "тир3/железный лом.jpg", location: "Священная река, Мертвый город, Наблюдательный пункт"},
	{id: 36, title: "Конопля", image: "тир3/конопля.jpg", location: "Священная река, Мертвый город, Наблюдательный пункт"},
	{id: 37, title: "Превосходное сырое мясо", image: "тир3/превосходное сырое мясо.jpg", location: "Священная река, Генная Лаборатория, Мертвый город, Музей, Наблюдательный пункт, Грот (животные)"},
	{id: 38, title: "Прочная шкура", image: "тир3/прочная шкура.jpg", location: "Священная река, Генная Лаборатория, Мертвый город, Музей, Наблюдательный пункт, Грот (животные)"},
	{id: 39, title: "Большой клык", image: "тир3/большой клык.jpg", location: "Священная река, Генная Лаборатория, Мертвый город, Музей, Наблюдательный пункт, Грот (животные)"},
	{id: 40, title: "Большое ухо", image: "тир3/большое ухо.jpg", location: "Священная река, Генная Лаборатория, Мертвый город, Музей, Наблюдательный пункт, Грот (зомби)"},
	{id: 43, title: "Хорошая изолента", image: "тир3/хорошая изолента.jpg", location: "Священная река, Генная Лаборатория"},
	{id: 44, title: "Хорошая проволока", image: "тир3/хорошая проволока.jpg", location: "Мертвый город, Музей"},
	{id: 45, title: "Хороший клей", image: "тир3/хороший клей.jpg", location: "Мертвый город, Музей"},
	{id: 46, title: "Хороший подшипник", image: "тир3/хороший подшипник.jpg", location: "Наблюдательный пункт, Грот"},
	{id: 47, title: "Хорошие гвозди", image: "тир3/хорошие гвозди.jpg", location: "Наблюдательный пункт, Гроt"},
	{id: 48, title: "Большая синяя руда", image: "тир3/большая синяя руда.jpg", location: "Наблюдательный пункт, Грот"},
	{id: 49, title: "Большая красная руда", image: "тир3/большая красная руда.jpg", location: "Мертвый город, Музей"},
	{id: 50, title: "Большая зеленая руда", image: "тир3/большая зеленая руда.jpg", location: "Священная река, Генная Лаборатория"},
	{id: 51, title: "Частица тумана", image: "тир3/частица тумана.jpg", location: "Священная река, Генная Лаборатория, Мертвый город, Музей, Наблюдательный пункт, Грот"},
	{id: 52, title: "Ювелирный лом", image: "тир3/ювелирный лом.jpg", location: "Генная Лаборатория, Музей, Грот"},

	{id: 401, title: "Дубовое бревно", image: "тир4/дубовое бревно.jpg", location: "скоро"},
	{id: 402, title: "Титановый лом", image: "тир4/титановый лом.jpg", location: "скоро"},


];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const itemsContainer = document.getElementById('itemsContainer');
    
    // Создание элементов списка
    function createItems(items) {
        itemsContainer.innerHTML = '';
        
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'item';
            itemElement.dataset.title = item.title.toLowerCase();
            
            itemElement.innerHTML = `
                <div class="item-title">${item.title}</div>
                <img src="${item.image}" alt="${item.title}" class="item-image" 
                     onerror="this.src='https://via.placeholder.com/300x200?text=Изображение+не+загружено'">
                <div class="item-location"> ${item.location}</div>
            `;
            
            itemsContainer.appendChild(itemElement);
        });
    }
    
    // Функция поиска
    function searchItems() {
        const searchText = searchInput.value.toLowerCase().trim();
        
        if (searchText === '') {
            // Показать все элементы если строка пустая
            document.querySelectorAll('.item').forEach(item => {
                item.classList.remove('hidden');
            });
        } else {
            // Фильтрация элементов
            document.querySelectorAll('.item').forEach(item => {
                const title = item.dataset.title;
                if (title.includes(searchText)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        }
    }
    
    // Обработчик события ввода
    searchInput.addEventListener('input', searchItems);
    
    // Обработчик события клавиш
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Escape') {
            searchInput.value = '';
            searchItems();
        }
    });
    
    // Инициализация начального состояния
    createItems(itemsData);
    
    // Фокусировка на поле ввода при загрузке
    searchInput.focus();
});

// Дополнительные функции для расширения функциональности
function filterItemsByLocation(location) {
    const filteredItems = itemsData.filter(item => 
        item.location.toLowerCase().includes(location.toLowerCase())
    );
    createItems(filteredItems);
}

function sortItems(sortBy) {
    const sortedItems = [...itemsData].sort((a, b) => {
        if (sortBy === 'title') {
            return a.title.localeCompare(b.title);
        } else if (sortBy === 'location') {
            return a.location.localeCompare(b.location);
        }
        return 0;
    });
    createItems(sortedItems);
}