import React,{useState} from 'react'
import ExpenseList from './ExpenseList';
import Modal from 'react-modal'
import FoodIcon from './assets/fast-food.png'

export const expenseContext = React.createContext();

function App() {
  
  const [modalIsOpen, setModalIsOpen] = useState(false)
  
  const modalOpenHandler = () =>{
    setModalIsOpen(modalIsOpen => !modalIsOpen)
  }
  const addExpenseHandler = () =>{
    setExpenseList([...expenseList,expenseItem])
    setModalIsOpen(modalIsOpen => !modalIsOpen)
    setTotalExpense(Number(totalExpense)+Number(expenseItem.amount))
  }
  
  const modalCategoryDataHandler= (e) =>{
    console.log(e.target.value)
    if(e.target.value === "Shopping"|| e.target.value === "Food"|| e.target.value === "Misc"){
    setExpenseItem({...expenseItem,category:e.target.value}) 
  }}
  const modalMerchantHandler= (e) =>{
    console.log(e.target.value)
    setExpenseItem({...expenseItem ,store:e.target.value})  
  }
  const modalAmountHandler= (e) =>{
    console.log(e.target.value)
    setExpenseItem({...expenseItem ,amount:e.target.value})  
    console.log(expenseItem)
  }
const [totalExpense, setTotalExpense] = useState(0)
  const [expenseList,setExpenseList] = useState(
    [
      
    ])
  const [expenseItem,setExpenseItem] = useState({
    category:"Shopping",
    store:"Nike Stores",
    amount:120,
    time:"11:20 pm"
  })
  
  return (
         <expenseContext.Provider value={[expenseItem,setExpenseItem,expenseList,setExpenseList]}>
          <Modal isOpen={modalIsOpen} ariaHideApp={false}>
            <div className="w-full h-auto flex flex-col items-center bg-gray-50 px-4 py-2 rounded-6xl">
              <div>Category</div>
              <div className="flex flex-row space-x-4 mt-4">
              {/* <button value="Food" className="p-1 h-12 w-12" onClick={modalDataHandler}> <img src="https://image.flaticon.com/icons/png/512/1857/1857878.png "></img> </button>
              <button value="Shopping" className="p-1 h-12 w-12" onClick={modalDataHandler}> <img src="https://image.flaticon.com/icons/png/512/869/869053.png "></img> </button>
              <button value="Misc" className="p-1 h-12 w-12" onClick={modalDataHandler}> Misc </button> */}
                <div>
                  <label className="p-1 h-12 w-12" for="Food"><img className="h-12 w-12" src='https://image.flaticon.com/icons/png/512/1857/1857878.png'></img></label>
                  <input  type="radio" value="Food" id="Food" className="h-0 w-0" onClick={modalCategoryDataHandler}></input>
                </div>
                <div>
                  <label value="Misc" className="p-1 h-12 w-12" for="Shopping"><img className="h-12 w-12" src='https://image.flaticon.com/icons/png/512/869/869053.png '></img></label>
                  <input type="radio" value="Shopping" id="Shopping" className="h-0 w-0" onClick={modalCategoryDataHandler}></input>
                </div>
                <div className="pt-10">
                  <label value="Misc" className="p-1 h-12 w-12 text-center" for="Misc">Misc</label>
                  <input type="radio" value="Misc" id="Misc" className="h-0 w-0"  onClick={modalCategoryDataHandler}></input>
                </div>
                </div>
                <div >
                  <label className="text-center" for="merchant">Merchant :</label><br></br>
                  <input className="w-48" onChange={modalMerchantHandler} type="text" id="merchant" name="merchant"></input><br></br>
                </div>
                <div>
                  <label for="amount" >Amount :</label><br></br>
                  <input className="w-48" onChange={modalAmountHandler} type="number" id="amount" name="amount" ></input><br></br>
                </div>
                <button onClick={addExpenseHandler} type="submit" className="w-auto h-8 p-auto bg-red-300 ">Add</button>
            </div>
          </Modal>

          <div className="min-w-screen max-w-screen min-h-screen flex flex-col items-center bg-gray-100 px-4 py-2">
            <div className="flex flex-row min-width-sm max-w-md  w-64 pt-12 px-1 pb-8 h-24 items-center ">
              <div className="flex-grow"><p className="text-lg fond-medium">Hello</p><p className='text-2xl font-bold'>Username</p></div>
              <div className="h-10 w-10 mx-2 mt-4 p-2 border border-gray-300 rounded-full  text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
              </div>
            </div>
            <div className="min-width-sm max-w-md shadow bg-gradient-to-br from-blue-500 to-blue-600 w-64 h-36 p-4 rounded-2xl">
              <div className=" flex flex-col h-1/2">
              <span className="text-white text-md font-semibold">Expenses</span>
              <span className="text-white text-2xl font-semibold"><span className="text-sm">$</span>{totalExpense}</span>
              </div>
            </div>
            <div>
              <ExpenseList />
            </div>
            <div className="w-56 mt-4">
              <div className="w-full -ml-4 h-12">
                <button onClick={modalOpenHandler} className="w-64 h-8 p-auto bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full transform motion-safe:hover:scale-110"> Add an expense</button>
              </div>
            </div>
            </div>
         </expenseContext.Provider>

  );
}

export default App;
