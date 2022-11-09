async function loadData() {
    let response = await fetch(
        "https://api.github.com/users"
    );
    let data = await response.json();
    console.log(data);

    let content
}

const userData = {
    users: []
}
const getUsers = async () => {
    const response = await fetch('http://localhost:5500')
    const usersList = await response.json()
    return usersList
}




load()


// document.getElementById("load").addEventListener("click", loadData);
  