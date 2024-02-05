import React, { useState } from 'react'

export default function Withdraw({setmodal,onClose,displayData}) {

    const [errors, setErrors] = useState({});


  return (
    <div className="fixed inset-0 flex items-center justify-center z-40">
    <div className="bg-black opacity-50 fixed inset-0"></div>
    <form
      className="bg-white p-8 max-w-md w-full rounded-lg shadow-lg z-50"
      
      action="
"
    >
 <div class="w-full flex justify-start text-gray-600 mb-3">
                <svg  xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wallet" width="52" height="52" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                    <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                </svg>
            </div>
            <h1 class="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Enter Billing Details</h1>
        
      <div className="">

        <label className="block text-sm font-medium text-gray-700 mt-2">
         amount to withdraw
        </label>

        <input
          type="number"
          name="coupon_code"
          className="mt-1 p-2 border rounded-md w-full"
          defaultValue={displayData?.code}
        />
        {errors.couponCodeError && (
          <p className="text-red-500 text-xs">{errors.couponCodeError}</p>
        )}
      
        <div className="flex justify-end mt-3">
          <button
            type="submit"
            className="bg-green-200 text-green-500 px-4 py-2 rounded-md hover:bg-green-300"
          >
            Submit
          </button>
          <button
            className="ml-2 text-red-500 bg-red-200  px-4 py-2 rounded-md"
            onClick={() => {
              onClose(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  </div>
  )
}
