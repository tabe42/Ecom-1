import { product } from 'prelude-ls'
import React,{ useContext,useState } from 'react'
import {productContext} from '../App'
import {Img} from 'react-image'
//assets


export default function Home() {
    
    const [searchItem,setSearchItem]=useState('')
    const [productList,setProductList] = useContext(productContext);
    const searchInputHandler = (e) =>{
        setSearchItem(e.target.value)
        console.log(searchItem)
    }
    
    return (
        <div className="mt-2 ">
            <div class="bg-gray-50 max-w-7xl h-32 mx-2 p-4 rounded-lg sm:px-6 lg:px-8 flex flex-row">
              categories
                <div className="h-28 w-28">

                </div>
            </div>
            <div class="bg-gray-50 max-w-7xl h-12 mt-4 mx-2 p-4 rounded-lg sm:px-6 lg:px-8">
                <input  type="text" placeholder="Search for a product" value={searchItem} onChange={searchInputHandler}></input>
            </div>
            <div class="bg-gray-50 max-w-7xl h-80 overflow-y-scroll mt-4 mx-2 p-1 rounded-lg sm:px-6 lg:px-8 flex flex-row flex-wrap justify-center">
                {
                productList.filter((product) =>{
                console.log('Got here')
                if(searchItem == ''){
                    return product }
                else if(product.title.toLowerCase().includes(searchItem.toLowerCase())){
                    return product}
                }).map((product,key) =>(
                    <div key={key} className="p-1 border border-gray-200 rounded-lg flex flex-col items-center m-2 overflow-hidden"><Img className="h-24 w-24" src={product.image} alt="sdfds"></Img>
                        <div className="h-6 w-24 text-sm mt-2 text-center font-semibold">
                            ${product.price}
                        </div>
                        <div className="h-18 w-28 text-sm mt-2 ">
                            {product.title}
                        </div>
                    </div>
                )
                )}
            </div>
            
        </div>
    )
}
