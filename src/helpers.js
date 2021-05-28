const choice = (items) => {
    return items[Math.floor(Math.random() * items.length)];
}

const remove = (items, item) => {

    return items.splice(items.findIndex(i => i === item), 1);
}

export { choice, remove };