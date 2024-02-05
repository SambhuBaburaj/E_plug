import React, { useState } from "react";
import Withdraw from "../../../components/Modal/Withdraw";
import TimeModal from "../../../components/Modal/TimeModal";

function Dashboard() {

const [OpenModal, setOpenModal] = useState(false)
const [timeModal, setTimeModal] = useState(false)
const withDrawMoney=()=>
{

}

  return (
    <div>
      <body class="">
        <div class=" mt-5 mx-2">
          <div class="lg:flex gap-4 items-stretch">
            <div class="bg-white md:p-2 p-6 rounded-lg border border-gray-200 mb-4 lg:mb-0 shadow-md ">
              <div class="flex justify-center items-center space-x-5 h-full">
                <div>
                  <p>wallet balance</p>
                  <h2 class="text-4xl font-bold text-gray-600">50.365</h2>
                  {/* <p>25.365 $</p> */}
                </div>
                <img
                  src="https://www.emprenderconactitud.com/img/Wallet.png"
                  alt="wallet"
                  class="h-24 md:h-20 w-38"
                />
              </div>
            </div>

            <div class="bg-white p-4 rounded-lg xs:mb-4 max-w-full shadow-md lg:w-[65%]">
              <div class="flex flex-wrap justify-between h-full cursor-pointer">
                <div onClick={()=>
                {
                  setOpenModal(true)
                }} class="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                  <i class="fas fa-hand-holding-usd text-white text-4xl"></i>
                  <p class="text-white">withdraw</p>
                </div>

                <div onClick={()=>
                {
                  setTimeModal(true)
                
                }} class="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                  <i class="fas fa-hand-holding-usd text-white text-4xl"></i>
                  <p class="text-white">Opening Time</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-lg p-4 shadow-md my-4">
            <table class="table-auto w-full">
              <thead>
                <tr>
                  <th class="px-4 py-2 text-left border-b-2 w-full">
                    <h2 class="text-ml font-bold text-gray-600">
                      Transacciones
                    </h2>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b w-full">
                  <td class="px-4 py-2 text-left align-top w-1/2">
                    <div>
                      <h2>Comercio</h2>
                      <p>24/07/2023</p>
                    </div>
                  </td>
                  <td class="px-4 py-2 text-right text-cyan-500 w-1/2">
                    <p>
                      <span>150$</span>
                    </p>
                  </td>
                </tr>
                <tr class="border-b w-full">
                  <td class="px-4 py-2 text-left align-top w-1/2">
                    <div>
                      <h2>Comercio</h2>
                      <p>24/06/2023</p>
                    </div>
                  </td>
                  <td class="px-4 py-2 text-right text-cyan-500 w-1/2">
                    <p>
                      <span>15$</span>
                    </p>
                  </td>
                </tr>
                <tr class="border-b w-full">
                  <td class="px-4 py-2 text-left align-top w-1/2">
                    <div>
                      <h2>Comercio</h2>
                      <p>02/05/2023</p>
                    </div>
                  </td>
                  <td class="px-4 py-2 text-right text-cyan-500 w-1/2">
                    <p>
                      <span>50$</span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </body>
      
      {OpenModal&&<Withdraw   onClose={setOpenModal}/>}
      {timeModal&&<TimeModal   onClose={setTimeModal}/>}
    </div>
  );
}

export default Dashboard;
