import { getDocks, getHaulers} from "./database.js"

// export const DockList = () => {
//     const docks = getDocks()

//     let docksHTML = `<ul id = "list1"><h2>Docks</h2>`

//     for (const dock of docks) {
//         docksHTML += `<li  data-type = "dock" data-id = "${dock.id}" data-name = "${dock.location}"> ${dock.location} can hold ${dock.volume} million tons of cargo</li>`
//     }

//     docksHTML += `</ul>`

//     return docksHTML
// }


export const DockList = () => {
  const docks = getDocks();

  // get the sorted list of dock locations
  const dockLocations = docks.map(dock => dock.location).sort();

  let docksHTML = `<ul id="list1"><h2>Docks</h2>`;

  for (const location of dockLocations) {
    // find the dock object with the matching location
    const dock = docks.find(dock => dock.location === location);

    docksHTML += `<li data-type="dock" data-id="${dock.id}" data-name="${dock.location}">${dock.location} can hold ${dock.volume} million tons of cargo</li>`;
  }

  docksHTML += `</ul>`;

  return docksHTML;
};


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "dock") {
            let haulerName = {name: 'incorect'}
            const haulers = getHaulers()
            const dockDataID= itemClicked.dataset.id
            for (const hauler of haulers) {
                if (hauler.dockID === parseInt(dockDataID)) {
                    haulerName = hauler.name
                }
            }
            window.alert(`${itemClicked.dataset.name} is currently unloading ${haulerName}`)
        }
    }
)

// The Shanghai, China dock is currently unloading Boaty McBoatface