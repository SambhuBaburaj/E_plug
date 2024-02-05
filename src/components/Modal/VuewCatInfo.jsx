import React, { useEffect, useRef, useState } from "react";

// import { PencilIcon, CheckIcon } from "@heroicons/react/solid";
// import { updatesubcat } from "../../API/ApiCall";
const CatInfoModal = ({
  setViewCatInfoModal,
  catInfo,
  subCatData,
  viewCatInfo,
}) => {
  const modalClasses = "fixed inset-0 flex items-center  justify-center";
  const modalContentClasses = "bg-white p-4 rounded-lg flex";
  //
  const [editItemId, setEditItemId] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [whoolevalue, setWhoolevalue] = useState();
  // Handler to enable editing mode
  const handleEdit = (id, title, data) => {
    setEditItemId(id);
    setInputValue(title);
    setWhoolevalue(data);
  };

  // Handler to save the edited value
  const handleSave = (id) => {
    const wholedata = {
      category_id: whoolevalue._id,
      title: inputValue,
      main_category_id: whoolevalue.main_category_id,
    };

    // updatesubcat(wholedata)
    //   .then((data) => {
    //     setEditItemId(null);
    //     setWhoolevalue(null);

    //     viewCatInfo(catInfo);
    //   })
    //   .catch((err) => {
    //     setEditItemId(null);
    //     setWhoolevalue(null);
    //   });

    // Here you should update the actual data, for example, by lifting state up or using a state management library
    setEditItemId(null);
    setWhoolevalue(null);
  };

  const inputRef = useRef(null);

  // Effect to focus on the input field when it's shown
  useEffect(() => {
    if (editItemId !== null) {
      inputRef.current?.focus();
    }
  }, [editItemId]);
  useEffect(() => {}, []);
const [TimeModal, SetTimeModal] = useState(false)
  return (
    <div>
      <div className="container">
        <div className="pr-3 pl-3 justify-center overflow-x-scroll items-center flex  fixed inset-0 z-50 outline-none focus:outline-none ">
          <div className="container">
            <div className="relative w-auto my-6  max-w-3xl">
              {/*content*/}

              <div className="  rounded-[15px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}

                <form action="">
                  <div className=" flex justify-center items-center">
                    {/* leftDive */}

                    {/* rightDiv */}
                    <div className="p-3 pt-5  rounded-lg" style={{}}>
                      <div className=" flex flex-col pt-5 pr-3">
                        <h6 className="mb-4 text-xl font-bold">Overview</h6>
                        <p className="text-xs mb-1">Time</p>
                        <p className="text-xs font-bold mb-1">5:00 pm</p>

                        <div className="">
                          <div class="border-2  p-1 m-1 relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                            <div class="relative flex overflow-auto items-center gap-4 pt-0 pb-8  mt-4  text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                              <img
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                                alt="Tania Andrew"
                                class="relative inline-block h-[58px]  !rounded-full  object-cover object-center"
                              />
                              <div class="flex w-full flex-col gap-0.5">
                                <div class="flex gap-5 items-center justify-between">
                                  <div>
                                    <p className="text-xs mb-1">name</p>
                                    <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                      Tania Andrew
                                    </h5>
                                  </div>
                                  <div>
                                    <p className="text-xs mb-1">quantity</p>
                                    <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                      Tania Andrew
                                    </h5>
                                  </div>{" "}
                                  <div>
                                    <p className="text-xs mb-1">price</p>
                                    <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                      Tania Andrew
                                    </h5>
                                  </div>
                                  <div>
                                    <p className="text-xs mb-1">total</p>
                                    <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                      Tania Andrew
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="border-2  p-1 m-1 relative flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                            <div class="relative flex overflow-auto items-center gap-4 pt-0 pb-8  mt-4  text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                              <img
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                                alt="Tania Andrew"
                                class="relative inline-block h-[58px]  !rounded-full  object-cover object-center"
                              />
                              <div class="flex w-full flex-col gap-0.5">
                                <div class="flex gap-5 items-center justify-between">
                                  <div>
                                    <p className="text-xs mb-1">name</p>
                                    <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                      Tania Andrew
                                    </h5>
                                  </div>
                                  <div>
                                    <p className="text-xs mb-1">quantity</p>
                                    <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                      Tania Andrew
                                    </h5>
                                  </div>{" "}
                                  <div>
                                    <p className="text-xs mb-1">price</p>
                                    <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                      Tania Andrew
                                    </h5>
                                  </div>
                                  <div>
                                    <p className="text-xs mb-1">total</p>
                                    <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                      Tania Andrew
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="container sm:flex items-center justify-around j pt-4 pb-6 pr-5  rounded-b ">
                       
{TimeModal? <div className="flex items-baseline ">
                          <div className="p-3">
                            <div class="inline-flex text-lg border rounded-md shadow-lg p-2">
                              <select
                                name=""
                                id=""
                                class="px-2 outline-none appearance-none bg-transparent"
                              >
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>

                                <option value="05">05</option>

                                <option value="06">06</option>

                                <option value="07">07</option>

                                <option value="08">08</option>

                                <option value="09">09</option>

                                <option value="10">10</option>
                                <option value="11">11</option>

                                <option value="12">12</option>
                              </select>
                              <span class="px-2">:</span>
                              <select
                                name=""
                                id=""
                                class="px-2 outline-none appearance-none bg-transparent"
                              >
                                <option value="00">00</option>
                                <option value="30">30</option>
                              </select>
                              <select
                                name=""
                                id=""
                                class="px-2 outline-none appearance-none bg-transparent"
                              >
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                              </select>
                            </div>
                          </div>
                          <button
                        style={{}}
                        className="text-xs bg-green-500 text-white background-transparent p-2 pl-7 pr-7 outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 rounded"
                        type="button"
                        onClick={() => {
                          setViewCatInfoModal(false);
                        }}
                      >
                       save
                      </button>

                        </div>:
                        
                        <button
                        style={{}}
                        className="text-xs bg-green-500 text-white background-transparent p-2 pl-7 pr-7 outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 rounded"
                        type="button"
                        onClick={() => {
                          SetTimeModal(true)
                        }}
                      >
                        change Time
                      </button>
                        }


                  <div className="flex sm justify-center">
                  <button
                     
                          className="text-xs bg-green-500 text-white background-transparent p-2 pl-7 pr-7 outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 rounded"
                          type="button"
                          onClick={() => {
                            setViewCatInfoModal(false);
                          }}
                        >
                          accept
                        </button>
                        <button
                          style={{
                            backgroundColor: "#FF8888",
                            color: "#FF0B0B",
                          }}
                          className="text-xs background-transparent p-2 pl-7 pr-7 outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 rounded"
                          type="button"
                          onClick={() => {
                            setViewCatInfoModal(false);
                          }}
                        >
                          Close
                        </button>

                  </div>
                    


                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
    </div>
  );
};

export default CatInfoModal;
