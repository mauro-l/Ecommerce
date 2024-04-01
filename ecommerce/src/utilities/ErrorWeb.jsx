import dino from '../assets/products/dinopool.png'

function ErrorWeb() {

    return (

        <div className='flex flex-col flex-wrap items-center justify-center lg:mb-60 md:flex-row'>
            <img src={dino} className='max-h-md md:max-h-80' alt="404 image" />
            <h1 className='inline-flex items-center gap-2 text-2xl text-gray-600'>
                <span className='font-medium'>error 404.</span>
                Problemas con el servidor
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="w-6 h-6 icon icon-tabler icons-tabler-outline icon-tabler-cloud-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9.58 5.548c.24 -.11 .492 -.207 .752 -.286c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 .957 -.383 1.824 -1.003 2.454m-2.997 1.033h-11.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.13 -.582 .37 -1.128 .7 -1.62" /><path d="M3 3l18 18" />
                </svg>
            </h1>
        </div>

    )
}

export default ErrorWeb