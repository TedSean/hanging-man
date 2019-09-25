export const types = {
    FETCH: "FETCH"
}

export const fetchButton = () => {
    return {
        type: types.FETCH,
        payload: {
            words: words
        }
    }
}