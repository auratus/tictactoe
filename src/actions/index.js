export const addSymbol = (index,player)=>{
    return {
        type:"ADDZEROCROSS",
        arrayIndex:index,
        playerName:player
    }
}

export const deleteSymbol = (index)=>{
    return {
        type:"DELETEZEROCROSS",
        arrayIndex:index
    }
}