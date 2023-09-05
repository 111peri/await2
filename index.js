async function fetchData() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    const response = await fetch(url)
    if (response.ok) {
        const users = await response.json()

        console.log(users);
    } else {
        console.error('ошибка в запросе');
    }

}

fetchData().catch((error) => {


    console.error('Произошла ошибка');
})

function getDataClick() {
    fetchData().catch((error) => {
        console.error('произошла ошибка');
    });
}

const getDataButton = document.getElementById('getDataButton')
    // getDataButton.addEventListener('click', getDataClick)
getDataButton.addEventListener('click', getDataClick)




//2
// Функция для выполнения GET запроса
async function fetchData() {
    const url = 'https://jsonplaceholder.typicode.com/users';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Ошибка получения данных');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Произошла ошибка:', error);
        throw error;
    }
}

// 
document.getElementById('getButton').addEventListener('click', async() => {
    try {
        const users = await fetchData();
        const dataContainer = document.getElementById('dataContainer');

        // Очищаем контейнер для добавления новых данных
        dataContainer.innerHTML = '';

        // Создаем элементы для отображения данных
        users.forEach((user) => {
            const userElement = document.createElement('div');
            userElement.classList.add('user');
            userElement.innerHTML = `
                <h2>${user.name}</h2>
                <p>Имя пользователя: ${user.username}</p>
                <p>Email: ${user.email}</p>
                <p>Телефон: ${user.phone}</p>
            `;
            dataContainer.appendChild(userElement);
        });
    } catch (error) {

        console.error('Произошла ошибка');
    }
});



document.addEventListener("DOMContentLoaded", () => {
    const ageInput = document.getElementById("ageInput");
    const compareButton = document.getElementById("compareButton");

    compareButton.addEventListener("click", () => {
        const userAge = parseInt(ageInput.value); // Получаем значение из инпут и превратить его в число

        async function compareAge() {
            const myAge = 30; // возраст можно поменять 

            if (isNaN(userAge)) {
                throw new Error("Возраст должен быть числом");
            }

            if (userAge === myAge) {
                return Promise.resolve("Успех");
            } else {
                return Promise.reject("Ошибка");
            }
        }

        compareAge()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            });
    });
});