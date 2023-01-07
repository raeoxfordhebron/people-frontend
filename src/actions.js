import {redirect} from "react-router-dom"

const URL = "https://people-backend.onrender.com"

export const createAction = async ({request}) => {
    // get data from form
    const formData = await request.formData()
    // set up our new person to match schema
    const newPerson = {
        name: formData.get("name"),
        image: formData.get("image"),
        title: formData.get("title"),
    }
    // Send new person to our API
    await fetch(URL + "/people", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPerson),
    })
    // redirect to index
    return redirect("/")
}