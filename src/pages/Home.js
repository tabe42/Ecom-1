import React,{ useContext,useState } from 'react'
import {productContext} from '../App'
import {Img} from 'react-image'
import Modal from 'react-modal'
import { set } from 'lodash'
import { product } from 'prelude-ls'
//assets


export default function Home() {
    
    const [searchItem,setSearchItem]=useState('')
    const [searchCategory,setSearchCategory]=useState('')
    const [modalIsOpen,setModelIsOpen]=useState(false)
    const [productList,setProductList,cart,setCart] = useContext(productContext);
    const searchInputHandler = (e) =>{
        setSearchItem(e.target.value)
    }
    const searchCategoryHandler = (e) =>{
        setSearchCategory(e.target.value)
    }
    const productClickHandler = (e) =>{
        setModelIsOpen(modalIsOpen => !modalIsOpen)
    }    
    
    return (
        <div>
            <Modal isOpen={modalIsOpen} ariaHideApp={false}>
                <div className="w-full h-auto flex flex-row items-center bg-gray-50 px-4 py-2 rounded-6xl">
                    <div className="flex flex-row">

                    </div>
                    <div className="flex flex-col"></div>
                    <button onClick={productClickHandler} className="text-yelllow-500 bg-transparent border border-solid border-yellow-500 hover:bg-yellow-500 hover:text-white active:bg-yellow-600 font-bold uppercase px-8 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        <i className="fas fa-heart"></i> Buy
                    </button>  
                </div>
            </Modal>
        <div className="mt-2 flex flex-col">
            <div style={{height: '15vh'}} class="bg-gray-50 max-w-7xl mx-2 p-4 rounded-lg sm:px-6 lg:px-8 flex flex-row space-x-4 overflow-y-scroll">
                                <div className="flex items-center text-gray-800 justify-center hover:bg-gray-800 hover:text-gray-50 text-center font-semibold h-full w-auto rounded-lg shadow p-4">
                                    <label value="men's clothing" for="men's clothing" className="">Men's clothing<input onClick={searchCategoryHandler} className="h-0 w-0" value="men's clothing" id="men's clothing" name="men's clothing" type="checkbox" ></input></label>

                                </div>
                                <div className="flex items-center text-gray-800 justify-center hover:bg-gray-800 hover:text-gray-50 text-center font-semibold h-full w-auto rounded-lg shadow p-4">

                                    <label for="women's clothing" value="women's clothing" className="">Women's clothing<input onClick={searchCategoryHandler} className="h-0 w-0" value="women's clothing" type="checkbox"  id="women's clothing" ></input></label>

                                </div>
                                <div className="flex items-center text-gray-800 justify-center hover:bg-gray-800 hover:text-gray-50 text-center font-semibold h-full w-auto rounded-lg shadow p-4">

                                    <label for="electronics" value="electronics" className="">Electronics<input  onClick={searchCategoryHandler}className="h-0 w-0" value="electronics" type="checkbox " id="electronics"></input></label>

                                </div>
                                <div className="flex items-center text-gray-800 justify-center hover:bg-gray-800 hover:text-gray-50 text-center font-semibold h-full w-auto rounded-lg shadow p-4" >

                                    <label for="jewelery" value="jewelery" className="">Jewellery<input onClick={searchCategoryHandler} className="h-0 w-0" value="jewelery" id="jewelery" type="checkbox" ></input></label>

                                </div>
            </div>
            <div style={{height: '7vh'}} class="bg-gray-50 max-w-7xl h-12 mt-4 mx-2 rounded-lg sm:px-6 lg:px-8">
                <input className="bg-transparent h-full w-full p-4" type="text" placeholder="Search for a product" value={searchItem} onChange={searchInputHandler}></input>
            </div>
            <div style={{height: '60vh'}} class="bg-gray-50 max-w-7xl overflow-y-scroll mt-4 mx-2 p-1 shadow rounded-lg sm:px-4 lg:px-8 flex flex-row flew-grow flex-wrap justify-center">
                {
                productList.filter((product) =>{
                if(searchItem == ''){
                    return product }
                else if(product.title.toLowerCase().includes(searchItem.toLowerCase())){
                    return product}
                    }).filter((product) =>{
                        if(searchCategory == ''){
                            return product
                        }
                        else if(product.category.toLowerCase().startsWith(searchCategory.toLocaleLowerCase()))
                        {return product}
                    }).map((product,key) =>(
                    <div style={{width: '40vw'}} key={key} className="p-1 pt-4 bg-white rounded-lg flex flex-col shadow justify-center items-center m-2 overflow-hidden"><Img className="h-24 w-24" src={product.image} alt="sdfds"></Img>
                        <div className="h-6 w-24 text-sm mt-2 text-center font-semibold">
                            ${product.price}
                        </div>
                        <div className="h-12 w-28 px-2 text-xs font-medium mt-2 ">
                            {product.title}
                        </div>
                        <div className="h-9 w-28 text-xs mt-1 flex justify-center">
                            <button value={product} onClick={productClickHandler} className="text-yelllow-500 bg-transparent border border-solid border-yellow-500 hover:bg-yellow-500 hover:text-white active:bg-yellow-600 font-bold uppercase px-8 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                            <i className="fas fa-heart"></i> Buy
                            </button>                        
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    </div>
    )
}
