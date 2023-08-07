import { getHaulers } from "./database.js";
import { getCargos } from "./database.js";
export const haulerFunction = () => {
    const Haulers = getHaulers()
const haulerNames = Haulers.map(hauler=> hauler.name).sort();

    let haulerHTML = `<ul id ="list3"> <h2>Hauling Ships</h2>`
    for (const name of haulerNames) {
        const hauler = Haulers.find(hauler => hauler.name === name)
        haulerHTML += `<li data-id = "${hauler.id}" data-type = "hauler">${hauler.name}</li>`
    }
    haulerHTML += `</ul>`
    return haulerHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "hauler") {
            const cargos = getCargos()
            let cargoNumber = 0
            const haulerID = itemClicked.dataset.id
            for (const cargo of cargos) {
                if (cargo.haulerID === parseInt(haulerID)) {
                    cargoNumber++
                }
            }
            window.alert(`This hauler is carrying ${cargoNumber} shipping ships`)
        }
    }
)
// Was a hauler list item clicked?

    // Get the id of the hauler clicked

    // Start a counter variable at 0

    // Iterate all of the shipping ships

        // Does the haulerId foreign key match the id?

            // Increase the counter by 1