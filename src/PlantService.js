export async function getPlants()
{
		const response = await fetch('http://api.countryside-collection.com/v1/categories?lang=fr&format=json');
    return await response.json();
}

export async function getAllUsers() {
    const response = await fetch('http://api.countryside-collection.com/v1/categories?lang=fr&format=json');
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch(`/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}
