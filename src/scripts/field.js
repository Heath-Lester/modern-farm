
let field = []

export const addPlant = (seedObject) => {
    field.push(seedObject)
}

export const usePlants = () => {
    return field.slice()
}