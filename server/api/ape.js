export default defineEventHandler(async (event) => {

    //handle query params
    const { name } = getQuery(event)
    const {age} = await readBody(event)
    const {data} = await $fetch()
    return {
        message: `Hello, ${name}! You are ${age} years old`
    }
})