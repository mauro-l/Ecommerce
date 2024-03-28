
const MiniCard = ({img, name, price}) => {
  return (
    <div className='pb-4 mx-auto my-4 max-w-40 md:max-w-52'>
        <img src={img} className="object-fill h-64 mx-auto" alt={name} />
        <p className="mt-2">${price}</p>
        <p className='pb-1 mb-2 text-lg truncate h-14 text-wrap'>{name}</p>
    </div>
  )
}

export default MiniCard