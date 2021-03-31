export async function getInventory() {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}inventoryJca80`)
    .then (response => response.json())
}

export async function getCart() {
    return fetch(`${process.env.REACT_APP_API_BASE_URL}cartJca80`)
    .then (response => response.json())
}

export async function addItem(newItem)  {
    const itemData = JSON.stringify(newItem)
    return fetch(`${process.env.REACT_APP_API_BASE_URL}cartJca80`,
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: itemData
    })
    .then (response => response.json())
    .then (data => this.setState({ itemId: data.id }))
}
