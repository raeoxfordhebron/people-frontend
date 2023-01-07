const URL = "https://people-backend.onrender.com"

export const peopleLoader = async () => {
    const response = await fetch(URL + "/people")
    const people = await response.json()
    return people
}