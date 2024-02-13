export const getStudentDetails = () => {
    return (
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
        // .then(console.log)

    )
}

export const getRevenue = () => {
    return (
        fetch('https://dummyjson.com/carts')
            .then(res => res.json())
        // .then(console.log)

    )
}

export const getInventory = () => {
    return (
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
        // .then(console.log)


    )
}