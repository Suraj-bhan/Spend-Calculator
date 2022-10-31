import classes from './editorpanel.module.css';

export default function EditorPanel() {
  return (
    <div className='shadow-md bg-white w-full mx-8 my-8 flex flex-col-2 justify-evenly'>
      <div className="flex w-2/5 flex-col space-y-6 my-6">
        <div className='flex flex-col'> <span className='text-xs p-1 -mb-2 z-50 bg-white w-20 text-center shadow-md -ml-1 border-2'>Type</span>
          <input type='text' placeholder="Debit/Credit" className="bg-gray-200 rounded-md p-4" />
        </div>
        <div className='flex flex-col'> <span className='text-xs p-1 -mb-2 z-50 bg-white w-20 text-center shadow-md -ml-1 border-2'>Reason</span>
          <input type='text' placeholder="Description" className="bg-gray-200 rounded-md p-4" />
        </div>
        <div className='flex flex-col'> <span className='text-xs p-1 -mb-2 z-50 bg-white w-20 text-center shadow-md -ml-1 border-2'>Medium</span>
          <input type='text' placeholder="Description" className="bg-gray-200 rounded-md p-4" />
        </div>
        <div className='flex flex-col'> <span className='text-xs p-1 -mb-2 z-50 bg-white w-20 text-center shadow-md -ml-1 border-2'>Amount</span>
          <input type='text' placeholder="Description" className="bg-gray-200 rounded-md p-4" />
        </div>
      </div>
      <div className="flex w-2/5 flex-col space-y-6 my-6">
        <div className='flex flex-col'>
          <span className='text-xs p-1 -mb-2 z-50 bg-white w-20 text-center shadow-md -ml-1 border-2'>Category</span>
          <input type='text' placeholder="Description" className="bg-gray-200 rounded-md p-4" />
        </div>
        <div className='flex flex-col'> <span className='text-xs p-1 -mb-2 z-50 bg-white w-20 text-center shadow-md -ml-1 border-2'>Date</span>
          <input type='text' placeholder="Description" className="bg-gray-200 rounded-md p-4" />
        </div>
        <div className='flex flex-col'> <span className='text-xs p-1 -mb-2 z-50 bg-white w-20 text-center shadow-md -ml-1 border-2'>Time</span>
          <input type='text' placeholder="Description" className="bg-gray-200 rounded-md p-4" />
        </div>
        <div className='flex flex-col'> <span className='text-xs p-1 -mb-2 z-50 bg-white w-20 text-center shadow-md -ml-1 border-2'>Receiver</span>
          <input type='text' placeholder="Description" className="bg-gray-200 rounded-md p-4" />
        </div>
      </div>

    </div>
  )
}
