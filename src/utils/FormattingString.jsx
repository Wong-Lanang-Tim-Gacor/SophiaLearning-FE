export const TextSlice = text => {
    return text.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2)
}

export const DateFormat = (dateString) => {
    const months = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ]

    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = months[date.getMonth()]
    const day = date.getDate()

    return `${day} ${month} ${year}`
}