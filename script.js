// Данные элементов
const itemsData = [
	
    {id: 101, title: "Сосновое бревно", image: "тир1/сосновое бревно.png", location: "Ж/Д Станция, Стальная гробница, Каньон, Ранчо"},
    {id: 102, title: "Медный лом", image: "тир1/медный лом.png", location: "Ж/Д Станция, Стальная гробница, Каньон, Ранчо"},
    {id: 103, title: "Хлопок", image: "тир1/хлопок.png", location: "Ж/Д Станция, Стальная гробница, Каньон, Ранчо"},
    {id: 104, title: "Грубая шкура", image: "тир1/грубая шкура.png", location: "Ж/Д Станция, Стальная гробница, Каньон, Ранчо (животные)"},
    {id: 105, title: "Обычное сырое мясо", image: "тир1/обычное сырое мясо.png", location: "Ж/Д Станция, Стальная гробница, Каньон, Ранчо (животные)"},
    {id: 106, title: "Малый клык", image: "тир1/малый клык.png", location: "Ж/Д Станция, Стальная гробница, Каньон, Ранчо (животные)"},
    {id: 107, title: "Малое ухо", image: "тир1/малое ухо.png", location: "Ж/Д Станция, Стальная гробница, Каньон, Ранчо (зомби)"},
    {id: 108, title: "Старая наждачка", image: "тир1/старая наждачка.png", location: "Ж/Д Станция, Стальная гробница, Каньон, Ранчо"},
    {id: 109, title: "Старый клей", image: "тир1/старый клей.png", location: "Ж/Д Станция, Стальная гробница, Каньон, Ранчо"},
    {id: 110, title: "Старый подшипник", image: "тир1/старый подшипник.png", location: "Ж/Д Станция, Стальная гробница, Каньон, Ранчо"},
    {id: 111, title: "Малая синяя руда", image: "тир1/синяя руда.png", location: "Каньон, Ж/Д Станция"},
    {id: 112, title: "Малая красная руда", image: "тир1/красная руда.png", location: "Ранчо, Ж/Д Станция"},
    {id: 113, title: "Малая зеленая руда", image: "тир1/зеленая руда.png", location: "Стальная гробница, Ж/Д Станция"},
    {id: 114, title: "Частица тумана", image: "тир1/частица тумана.png", location: "Ж/Д Станция (босс), Стальная гробница, Каньон, Ранчо"},

    {id: 201, title: "Каштановое бревно", image: "тир2/каштановое бревно.png", location: "Оазис,Темная Долина, Хижина, Расплавленный карьер, Замёрзшее озера, Маркет"},
    {id: 202, title: "Оловянный лом", image: "тир2/оловянный лом.png", location: "Оазис,Темная Долина, Хижина, Расплавленный карьер, Замёрзшее озера, Маркет"},
    {id: 203, title: "Лен", image: "тир2/лен.png", location: "Оазис,Темная Долина, Хижина, Расплавленный карьер, Замёрзшее озера, Маркет"},
    {id: 204, title: "Тонкая шкура", image: "тир2/тонкая шкура.png", location: "Оазис,Темная Долина, Хижина, Расплавленный карьер, Замёрзшее озера, Маркет (животные)"},
    {id: 205, title: "Вкусное сырое мясо", image: "тир2/вкусное сырое мясо.png", location: "Оазис,Темная Долина, Хижина, Расплавленный карьер, Замёрзшее озера, Маркет (животные)"},
    {id: 206, title: "Средний сгоревший клык", image: "тир2/средний сгоревший клык.png", location: "Оазис,Темная Долина, Хижина, Расплавленный карьер, Замёрзшее озера, Маркет (животные)"},
    {id: 207, title: "Среднее сгоревшее ухо", image: "тир2/среднее сгоревшее ухо.png", location: "Оазис,Темная Долина, Хижина, Расплавленный карьер, Замёрзшее озера, Маркет (зомби)"},
    {id: 208, title: "Туманная кровь", image: "тир2/туманная кровь.png", location: "Оазис,Темная Долина, Хижина, Ущелье, Замёрзшее озера, Маркет (боссы)"},
    {id: 209, title: "Обычная наждачка", image: "тир2/обычная наждачка.png", location: "Темная долина, Хижина"},
    {id: 210, title: "Обычная изолента", image: "тир2/обычная изолента.png", location: "Темная долина, Хижина"},
    {id: 211, title: "Обычная проволока", image: "тир2/обычная проволока.png", location: "Оазис, Ущелье"},
    {id: 212, title: "Обычный клей", image: "тир2/обычный клей.png", location: "Оазис, Ущелье"},
    {id: 213, title: "Обычный подшипник", image: "тир2/обычный подшипник.png", location: "Замёрзшее озеро, Маркет"},
    {id: 214, title: "Обычные гвозди", image: "тир2/обычные гвозди.png", location: "Замёрзшее озеро, Маркет"},
    {id: 215, title: "Средняя синяя руда", image: "тир2/средняя синяя руда.png", location: "Замёрзшее озеро, Маркет"},
    {id: 216, title: "Средняя красная руда", image: "тир2/средняя красная руда.png", location: "Оазис, Расплавленный карьер"},
    {id: 217, title: "Средняя зеленая руда", image: "тир2/средняя зеленая руда.png", location: "Темная долина, Хижина"},
    {id: 218, title: "Частица тумана", image: "тир2/частица тумана.png", location: "Оазис,Темная Долина, Хижина, Расплавленный карьер, Замёрзшее озера, Маркет"},
    {id: 219, title: "Ювелирный лом", image: "тир2/ювелирный лом.png", location: "Хижина, Расплавленный карьер, Маркет"},

    {id: 301, title: "Кедровое бревно", image: "тир3/кедровое бревно.png", location: "Священная река, Мертвый город, Наблюдательный пункт"},
    {id: 302, title: "Железный лом", image: "тир3/железный лом.png", location: "Священная река, Мертвый город, Наблюдательный пункт"},
    {id: 303, title: "Конопля", image: "тир3/конопля.png", location: "Священная река, Мертвый город, Наблюдательный пункт"},
    {id: 304, title: "Прочная шкура", image: "тир3/прочная шкура.png", location: "Священная река, Генная Лаборатория, Мертвый город, Музей, Наблюдательный пункт, Гроt (животные)"},
    {id: 305, title: "Превосходное сырое мясо", image: "тир3/превосходное сырое мясо.png", location: "Священная река, Генная Лаборатория, Мертвый город, Музей, Наблюдательный пункт, Грот (животные)"},
    {id: 306, title: "Большой клык", image: "тир3/большой клык.png", location: "Священная река, Генная Лаборатория, Мертвый город, Музей, Наблюдательный пункт, Грот (животные)"},
    {id: 307, title: "Большое ухо", image: "тир3/большое ухо.png", location: "Священная река, Генная Лаборатория, Мертвый город, Музей, Наблюдательный пункт, Грот (зомби)"},
    {id: 308, title: "Туманная кровь", image: "тир3/туманная кровь.png", location: "Священная река, Генная Лаборатория, Мертвый город, Музей, Наблюдательный пункт, Грот (боссы)"},
    {id: 309, title: "Хорошая наждачка", image: "тир3/хорошая наждачка.png", location: "Священная река, Генная Лаборатория"},
    {id: 310, title: "Хорошая изолента", image: "тир3/хорошая изолента.png", location: "Священная река, Генная Лаборатория"},
    {id: 311, title: "Хорошая проволока", image: "тир3/хорошая проволока.png", location: "Мертвый город, Музей"},
    {id: 312, title: "Хороший клей", image: "тир3/хороший клей.png", location: "Мертвый город, Музей"},
    {id: 313, title: "Хороший подшипник", image: "тир3/хороший подшипник.png", location: "Наблюдательный пункт, Грот"},
    {id: 314, title: "Хорошие гвозди", image: "тир3/хорошие гвозди.png", location: "Наблюдательный пункт, Гроt"},
    {id: 315, title: "Большая синяя руда", image: "тир3/большая синяя руда.png", location: "Наблюдательный пункт, Грот"},
    {id: 316, title: "Большая красная руда", image: "тир3/большая красная руда.png", location: "Мертвый город, Музей"},
    {id: 317, title: "Большая зеленая руда", image: "тир3/большая зеленая руда.png", location: "Священная река, Генная Лаборатория"},
    {id: 318, title: "Частица тумана", image: "тир3/частица тумана.png", location: "Священная река, Генная Лаборатория, Мертвый город, Музей, Наблюдательный пункт, Грот"},
    {id: 319, title: "Ювелирный лом", image: "тир3/ювелирный лом.png", location: "Генная Лаборатория, Музей, Грот"},

    {id: 401, title: "Дубовое бревно", image: "тир4/дубовое бревно.png", location: "скоро"},
    {id: 402, title: "Титановый лом", image: "тир4/титановый лом.png", location: "скоро"},
    {id: 403, title: "Крапива", image: "тир4/крапива.png", location: "не бить палкой"},
    {id: 404, title: "Тяжелая шкура", image: "тир4/тяжелая шкура.png", location: "скоро"},
    {id: 405, title: "Ювелирный лом", image: "тир4/ювелирный лом.png", location: "скоро"},
    {id: 408, title: "Туманная кровь", image: "тир4/туманная кровь.png", location: "скоро"},
    {id: 418, title: "Частица тумана", image: "тир4/частица тумана.png", location: "скоро"},
	{id: 900, title: "", image: "di.png", location: "@Kanahi_Kirigakura v2"},    
    	{id: 901, title: "Обычное ядро ", image: "тир0/обычное ядро.png", location: "разбор редкого снаряжения"},
	{id: 902, title: "Редкое ядро ", image: "тир0/редкое ядро.png", location: "разбор редкого/эпического снаряжения"},
	{id: 903, title: "Эпическое ядро ", image: "тир0/эпичное ядро.png", location: "разбор эпического снаряжения"},
	{id: 904, title: "Легендарное ядро ", image: "тир0/легендарное ядро.png", location: "скоро"},
];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const itemsContainer = document.getElementById('itemsContainer');
    const tierFilters = document.querySelectorAll('.tier-filter');
    let currentTier = 'all';
    let currentSearchText = '';

    // Создание элементов списка
    function createItems(items) {
        itemsContainer.innerHTML = '';
        
        // Фильтруем элемент с id=1 (заголовок)
        const filteredItems = items.filter(item => item.id !== 1);
        
        filteredItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'item';
            itemElement.dataset.title = item.title.toLowerCase();
            itemElement.dataset.tier = Math.floor(item.id / 100); // Определяем tier по id
            
            itemElement.innerHTML = `
                <div class="item-title">${item.title}</div>
                <img src="${item.image}" alt="${item.title}" class="item-image" 
                     onerror="this.src='https://via.placeholder.com/300x200?text=Изображение+не+загружено'">
                <div class="item-location">${item.location}</div>
            `;
            
            itemsContainer.appendChild(itemElement);
        });
        
        applyFilters();
    }
    
    // Функция применения фильтров
    function applyFilters() {
        const searchText = currentSearchText.toLowerCase().trim();
        
        document.querySelectorAll('.item').forEach(item => {
            const title = item.dataset.title;
            const tier = item.dataset.tier;
            const matchesSearch = searchText === '' || title.includes(searchText);
            const matchesTier = currentTier === 'all' || tier === currentTier;
            
            if (matchesSearch && matchesTier) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }
    
    // Функция поиска
    function searchItems() {
        currentSearchText = searchInput.value;
        applyFilters();
    }
    
    // Функция фильтрации по tier
    function filterByTier(tier) {
        currentTier = tier;
        applyFilters();
        
        // Обновляем активную кнопку
        tierFilters.forEach(btn => {
            if (btn.dataset.tier === tier) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    // Обработчики событий
    searchInput.addEventListener('input', searchItems);
    
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Escape') {
            searchInput.value = '';
            searchItems();
        }
    });
    
    tierFilters.forEach(btn => {
        btn.addEventListener('click', function() {
            filterByTier(this.dataset.tier);
        });
    });
    
    // Инициализация начального состояния
    createItems(itemsData);
    filterByTier('all'); // Активная кнопка "Все"
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