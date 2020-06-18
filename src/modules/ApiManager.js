const apiUrl = "http://localhost:8000";

export default {
    getOne(route, id) {
        return fetch(`${apiUrl}/${route}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("user-token")}`
            },
        })
            .then(response => response.json())
    },
    getAll(route) {
        return fetch(`${apiUrl}/${route}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("user-token")}`
            },
        })
            .then(response => response.json())
    },
    create(route, createItem) {
        return fetch(`${apiUrl}/${route}`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("user-token")}`
            },
            body: JSON.stringify(createItem)
        })
    },
    update(route, id, updateItem) {
        return fetch(`${apiUrl}/${route}/${id}`, {
            "method": "PUT",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("user-token")}`
            },
            body: JSON.stringify(updateItem)
        })
    },
    delete(route, id) {
        return fetch(`${apiUrl}/${route}/${id}`, {
            "method": "DELETE",
            "headers": {
                "Authorization": `Token ${sessionStorage.getItem("user-token")}`
            }
        })
    }
};