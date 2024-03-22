
import images from './assets/products/images'

const products = [
    {
        id:'1',
        licence:'Harry Potter',
        name: 'Harry Potter',
        price: 4500,
        category: 'funko',
        img: images.harryPotter,
        stock: 13,
        description: 'Figura Coleccionable Funko Pop de'
    },
    {
        id:'2',
        licence:'Harry Potter',
        name: 'Hermione Granger',
        price: 4000,
        category: 'funko',
        img: images.hermione,
        stock: 12,
        description: 'Figura Coleccionable Funko Pop de'
    },
    {
        id:'3',
        licence:'Harry Potter',
        name: 'Luna Lovegood',
        price: 3000,
        category: 'funko',
        img: images.luna,
        stock: 12,
        description: 'Figura Coleccionable Funko Pop de'
    },
    {
        id:'4',
        licence:'Harry Potter',
        name: 'Patronus Severus Snape',
        price: 2000,
        category: 'funko',
        img: images.snape,
        stock: 5,
        description: 'Figura Coleccionable Funko Pop de'
    },
    {
        id:'5',
        licence:'Naruto',
        name: 'Kakashi Hatake',
        price: 5000,
        category: 'funko',
        img: images.kakashi,
        stock: 1,
        description: 'Figura Coleccionable Funko Pop de'
    },
    {
        id:'6',
        licence:'One piece',
        name: 'Monkey D. Luffy',
        price: 4000,
        category: 'funko',
        img: images.luffy,
        stock: 5,
        description: 'Figura Coleccionable Funko Pop de'
    },
    {
        id:'7',
        licence:'Pokemon',
        name: 'Charmander',
        price: 3000,
        category: 'funko',
        img: images.charmander,
        stock: 13,
        description: 'Figura Coleccionable Funko Pop de'
    },
    {
        id:'8',
        licence:'Pokemon',
        name: 'Dragonite',
        price: 2000,
        category: 'funko',
        img: images.dragonite,
        stock: 15,
        description: 'Figura Coleccionable Funko Pop de'
    },
    {
        id:'9',
        licence:'Pokemon',
        name: 'Pidgeotto',
        price: 1000,
        category: 'funko',
        img: images.pidgeotto,
        stock: 2,
        description: 'Figura Coleccionable Funko Pop de'
    },
    {
        id:'10',
        licence:'Pokemon',
        name: 'Pikachu',
        price: 4000,
        category: 'funko',
        img: images.pikachu,
        stock: 5,
        description: 'Figura Coleccionable Funko Pop de'
    },
    {
        id:'11',
        licence:'Pokemon',
        name: 'Vulpix',
        price: 3000,
        category: 'funko',
        img: images.vulpix,
        stock: 1,
        description: 'Figura Coleccionable Funko Pop de'
    },
    {
        id:'12',
        licence:'Star Wars',
        name: 'Baby Yoda',
        price: 2000,
        category: 'funko',
        img: images.yoda,
        stock: 5,
        description: 'Figura Coleccionable Funko Pop de'
    },
    {
        id:'13',
        licence:'Star Wars',
        name: 'Bobbafeth',
        price: 1000,
        category: 'funko',
        img: images.bobbafeth,
        stock: 5,
        description: 'Figura Coleccionable Funko Pop de'
    },
    {
        id:'14',
        licence:'Star Wars',
        name: 'Luke Skywalker',
        price: 4000,
        category: 'funko',
        img: images.luke,
        stock: 10,
        description: 'Figura Coleccionable Funko Pop de'
    },
    {
        id:'15',
        licence:'Star Wars',
        name: 'Stromtrooper',
        price: 3000,
        category: 'funko',
        img: images.trooper,
        stock: 15,
        description: 'Figura Coleccionable Funko Pop de'
    }
]

export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductsbyId = (productID) => {
    return new Promise((res) =>{
        console.log('dentro del asyncmok: ', productID)
        setTimeout(()=>{
            const product = products.find(prod => prod.id === productID)
            res(product);
        }, 500)
    })
}