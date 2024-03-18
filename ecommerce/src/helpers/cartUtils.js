export const addCart = ({product, cart, setCart}) =>{
    const newProduct = {...product, quantity: 1}
    const newCart = [...cart]

    setCart([...newCart, newProduct]);
}