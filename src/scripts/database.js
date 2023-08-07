const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: "43.5" },
        { id: 2, location: "Busan, South Korea", volume: "21.6" },
        { id: 3, location: "Rotterdam, The Netherlands", volume: "14.35" },
        { id: 4, location: "Antwerp, Belgium", volume: "12.04" }
    ],
    haulers: [
        {id: 1, name: "motherBoat" ,dockID:3 },
        {id: 2, name: "rhyno ",dockID:1},
        {id: 3, name: "bigBertha" ,dockID:1 },
        {id: 4, name: "mightyMuffin" ,dockID:5 },
        {id: 5, name: "titanic ",dockID:4 }
    ],
    cargoShips: [
        {id: 1, name: "Aboat Time",haulerID:5 },
        {id: 2, name: "Blue Miracle",haulerID:4},
        {id: 3, name: "Below Deck",haulerID:3},
        {id: 4, name: "Carpe Diem",haulerID:3 },
        {id: 5, name: "Happy Hour",haulerID: 5},
        {id: 6, name: "Fishy Business",haulerID:4},
        {id: 7, name: "Knot Working",haulerID:1},
        {id: 8, name: "Maverick",haulerID:2},
        {id: 10, name: "Overboard",haulerID:4},
        {id: 9, name: "Neptune",haulerID:5},
    ]
}
export const getHaulers = () => {
    return structuredClone(database.haulers)
}

export const getDocks = () => {
return structuredClone(database.docks) 
}

export const getCargos = () => {
    return structuredClone(database.cargoShips)
}