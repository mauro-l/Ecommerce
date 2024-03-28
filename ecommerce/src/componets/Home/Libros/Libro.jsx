
import ItemBook from './ItemBook'

const Libro = ({books, simple}) => {
    return (
        <div className='flex flex-col'>
          <section>
            <h3 className='text-center'>Libros de autor</h3>
            <h2 className='pb-4 text-3xl text-center'>Amplio catalogo de libros</h2>
          </section>
          <section className='flex flex-col lg:flex-row'>
            <article className='mx-auto sm:flex sm:items-center bg-tgray md:max-w-[700px] lg:order-2'>
                <picture className='flex mx-auto md:w-1/3'>
                    <img src={simple.image} className='p-2 mx-auto md:p-4 max-h-80' alt={simple.name} />
                </picture>
                <div className='flex w-2/3 mx-auto'>
                    <div className='p-4'>
                        <h5 className='inline-block p-1 px-3 my-2 text-white bg-ered'>Novela</h5>
                        <h4 className='text-lg text-wrap'>{simple.name}</h4>
                        <p className='py-3 text-gray-400 font-roboto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ea voluptas odio.</p>
                        <div className='inline-flex gap-3 px-4 py-2 border-t-2 border-black/50'>
                            <p className='text-gray-500'>genero</p>
                            <p className='text-gray-500'>año</p>
                        </div>
                    </div>
                </div>
                
            </article>
            <article className='m-2 lg:order-1 lg:w-1/3'>
                <ul className='space-y-2 md:space-y-5'>
                    {books.map(item => (
                        <ItemBook key={item.id} item={item} />
                    ))}
                </ul>
            </article>
          </section>
        </div>
    )
}

export default Libro