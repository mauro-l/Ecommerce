
import page from './page.jpg'

function Banner({greeting, categoryId, subcategory}) {

  let category = categoryId ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1) : null;
  let sub = subcategory ? subcategory.charAt(0).toUpperCase() + subcategory.slice(1) : null;

  if(categoryId === 'comicsymangas'){
    category = 'Comics y Mangas';
  }

  return (
    <div className='relative'>
      <img src={page} className='object-cover w-full h-40 md:h-full md:min-h-64' alt="banner" />
      <h1 className="absolute text-4xl font-semibold text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:text-5xl md:font-bold">{greeting}</h1>
      <h2 className={`${categoryId? 'absolute' : 'hidden' } w-full flex items-center justify-center text-lg text-white transform -translate-x-1/2 -translate-y-1/2 font-roboto mt-11 md:mt-14 top-1/2 left-1/2 md:text-xl`}>
        {category}
        <span className={`${subcategory? 'flex' : 'hidden' } justify-center items-center ms-2`}>
          <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  fill="none" stroke="currentColor" strokeWidth="2" 
            strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-badge-right me-2"
            >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 7h-6l4 5l-4 5h6l4 -5z" />
          </svg>
          {sub}
        </span>
      </h2>
    </div>
  )
}

export default Banner