

export default function EditorPanel() {
    return (
      <div className='shadow-md bg-white w-full mx-8 my-8 flex flex-col-2 justify-evenly'>
        <div className="flex w-2/5 flex-col space-y-6 my-6">
          <input type='text' placeholder="Description" className="bg-gray-200 rounded-md p-4" />
          <input type='number' placeholder="Amount" className="bg-gray-200 rounded-md p-4"/>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="flex w-2/5 flex-col space-y-6 my-6">
          <input type='text' placeholder="Description" className="bg-gray-200 rounded-md p-4"/>
          <input type='number' placeholder="Amount" className="bg-gray-200 rounded-md p-4"/>
        </div>
       
      </div>
    )
  }
