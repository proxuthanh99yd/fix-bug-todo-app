const api = "http://localhost:3333/todos";

async function getTodo(value) {
    let res;
    if (value) {
        res = await fetch(api + "/" + value);
    } else {
        res = await fetch(api);
    }
    return res.json();
}

async function createTodo(body) {
    const res = await fetch(api, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(body)
    });
    return res.json();
}


async function editTodo(id, body) {
    const request = await fetch(api + "/" + id, {
        method: "PATCH", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(body)
    });
    const res = request.json();
    return res;
}


async function deleteTodo(id) {
    const request = await fetch(api + "/" + id, {
        method: "DELETE",
    });
    const res = request.json();
    return res;
}

export { getTodo, createTodo, editTodo, deleteTodo }