export function paginate(items, pageNumber, pageSize) {
    let startIndex = (pageNumber - 1) * pageSize;
    let newArr = items.slice(startIndex, startIndex+pageSize);
    return newArr;
}
