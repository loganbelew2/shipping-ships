import { getCargos, getHaulers } from "./database.js";
export const cargoFunction = () => {
    const Cargos = getCargos()

  // get the sorted list of cargo names
  const cargoNames = Cargos.map(cargo => cargo.name).sort();

    let cargoHtml = `<ul id = "list2"><h2>Cargos</h2>`
    for (const name of cargoNames) {
        const cargo = Cargos.find(cargo=> cargo.name === name);
        cargoHtml += `<li data-type ="cargo" data-id = "${cargo.id}" data-haulerid ="${cargo.haulerID}" data-name = "${cargo.name}">${cargo.name}</li>`
    }
    cargoHtml += `</ul>`
    return cargoHtml
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "cargo") {
            const cargosHauler = itemClicked.dataset.haulerid
            let haulingShip = {name: "incorect"};
            const haulers = getHaulers()
            for (const hauler of haulers) {
                if (hauler.id === parseInt(cargosHauler)) {
                haulingShip = hauler.name
                }
            } 
            window.alert(` ${itemClicked.dataset.name}is being hauled by ${haulingShip}`)
        }
    }
)
        // Get the haulerId value of the shipping ship clicked

        // Define a default object for the found hauler

        // Iterate the array of hauler objects

        // Does the haulerId foreign key match the id of the current hauler?

        // Reassign the value of `haulingShip` to the current hauler

        // Show an alert to the user with this format...
        // Palais Royal is being hauled by Seawise Giant