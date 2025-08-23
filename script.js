// Данные элементов (можно заменить на реальные данные)
const itemsData = [
    {
        id: 1,
        title: "Медный лом",
        image: "тир1/медный лом.jpg",
        location: "Ж/Д Станция, Стальная гробница, Каньон, Ранчо"
    },
    {
        id: 2,
        title: "Сосновое бревно",
        image: "тир1/сосновое бревно.jpg",
        location: "Ж/Д Станция, Стальная гробница, Каньон, Ранчо"
    },
    {
        id: 3,
        title: "Хлопок",
        image: "тир1/сосновое бревно.jpg",
        location: "Рим, Италия"
    },
    {
        id: 4,
        title: "Великая Китайская стена",
        image: "тир1/сосновое бревно.jpg",
        location: "Китай"
    },
    {
        id: 5,
        title: "Тадж-Махал",
        image: "тир1/сосновое бревно.jpg",
        location: "Агра, Индия"
    },
	{
        id: 6,
        title: "Тадж-Махал",
        image: "тир1/сосновое бревно.jpg",
        location: "Агра, Индия"
    }
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
