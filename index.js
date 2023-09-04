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