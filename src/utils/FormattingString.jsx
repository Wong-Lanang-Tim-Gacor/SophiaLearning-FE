export const TextSlice = text => {
    return text.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2)
}
