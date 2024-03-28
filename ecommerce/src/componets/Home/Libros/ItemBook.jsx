
function ItemBook({item}) {
    return (
        <li className='flex py-3 border-b md:py-3 md:pr-10'>
            <img src={item.image} className='h-24' alt={item.name} />
            <div className='flex flex-col justify-center p-2'>
                <h5>Novela</h5>
                <h4>{item.name}</h4>
            </div>
        </li>
    )
}

export default ItemBook