export default defineEventHandler(async (event) => {

    //handle query params
    const { name } = getQuery(event)
    const {age, isOld} = await readBody(event)
    return {
        message: `Hello, ${name}! You are ${age} years old and ${isOld ? "I'm Old" : "I'm not old"}`
    }
})