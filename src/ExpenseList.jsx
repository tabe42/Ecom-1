import React,{useContext} from 'react'
import { expenseContext } from './App'
import FoodIcon from './assets/fast-food.png'
import ShoppingIcon from './assets/shopping-bags.png'

function ExpenseList() {
    
    const [,,expenseList,] = useContext(expenseContext)
    
    return (
        <div className="flex-flex-col w-64 mt-4 h-80 space-y-2 ">
        <span className="text-md font-medium">Expenses</span> 
            <div className="overflow-y-auto overflow-hidden h-72">
            {expenseList.map((expenseItem => (

                <div className="flex flex-row h-16 w-full rounded-lg items-center">
                <div className="flex flex-none h-11 w-11 bg-gray-200 rounded-2xl mr-6 items-center justify-center">
                    {console.log(expenseItem.category)}
                    {expenseItem.category === "Shopping" ?<img className="h-6 w-6 transform scale-125" src={ShoppingIcon}></img>: expenseItem.category ==='Food'?<img className="h-6 w-6" src={FoodIcon}></img>:<div>MISC</div> }
                </div>
                <div className="flex-flex-col items-center flex-grow"> 
                    <div className="text-sm">{expenseItem.store}</div>
                    <div className="text-xs">{expenseItem.category}</div>
                </div>
                <div className="flex-none flex-col">
                    <div className="text-sm">${expenseItem.amount}</div>
                    <div className="text-xs">${expenseItem.time}</div>
                </div>
            </div>
                )))}
        </div>
    </div>
  );
}

export default ExpenseList;
