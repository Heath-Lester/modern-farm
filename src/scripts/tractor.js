
export const plantSeeds = (yearsPlantingPlan) => {

    let plantingPlan = []

    for (const rows of yearsPlantingPlan) {
        let plan = []
        plan.push(rows)

        for (const rows of plan) {
            plantingPlan.push(rows)
        }
    }
    return plantingPlan
}