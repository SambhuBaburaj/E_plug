import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import images from "../../assets/images/image";
import Withdrawal from "../../assets/images/withdrawal.svg";
// import { getNotificationApi } from "../../API/ApiCall";

const { category, testtube, book } = images;
const initialState = {
  toggleSidebar: false,
  topnavData: [],
  notification: [],
  notificationData: null,

};


export const fcmTokenUpdate = createAsyncThunk(
  "/fcm_token",
  async (name, thunkAPI) => {
    console.log(name, "thunkdata");

    try {
      const resp = ["fewrfegf","rgergrg"]
      console.log(resp);
      return resp;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const NavBarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    openSidebar: (state, action) => {
      state.toggleSidebar = !state.toggleSidebar;
    },
    telemedicine: (state, action) => {
      state.topnavData = [
        {
          name: "Categories",
          link: "/telemedicine/category",
          logo: (
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          ),
        },
        {
          name: "Doctor",
          link: "/telemedicine/doctor",
          logo: (
            <svg
              fill=""
              stroke="#ffffff"
              class="w-5 h-5   transition duration-75  "
              viewBox="-1.5 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="m6.53 8.098.14-.012c.053-.006.101-.025.141-.053l-.001.001c.134.462.298.948.503 1.457.263.666.522 1.213.812 1.741l-.04-.08c-.024.364-.053.738-.091 1.1-.018.223-.062.431-.129.627l.005-.018c-.012.005-.029 2.08-.029 2.08.001 1.353.938 2.486 2.198 2.787l.02.004c.057-.145.195-.246.357-.246h.574c.161.002.299.102.356.243l.001.003c1.283-.302 2.224-1.435 2.229-2.789v-.001s-.035-2.066-.053-2.08c-.055-.175-.099-.381-.122-.593l-.001-.015c-.035-.364-.058-.729-.091-1.1.247-.446.506-.992.734-1.555l.038-.106c.205-.509.364-.994.503-1.457.039.028.087.047.139.053h.001l.141.012c.17.018.32-.122.334-.339l.152-1.931c0-.001 0-.002 0-.002 0-.163-.122-.297-.279-.317h-.002-.017c.039-.281.061-.605.061-.934 0-.718-.106-1.412-.303-2.065l.013.051c-.577-1.266-1.721-2.185-3.099-2.442l-.026-.004c-.296-.061-.641-.102-.993-.112h-.009-.012c-.359.007-.704.047-1.038.118l.036-.006c-1.402.264-2.544 1.183-3.114 2.419l-.011.027c-.186.6-.293 1.29-.293 2.004 0 .333.023.661.068.981l-.004-.037c-.159.018-.282.151-.282.313v.007l.152 1.931c.014.222.166.356.33.338z"></path>
                <path d="m21.416 20.878c-.07-3.04-.374-3.728-.538-4.194-.065-.187-.118-1.451-2.206-2.271-1.28-.504-2.932-.514-4.33-1.105v1.644c-.003 1.768-1.269 3.239-2.944 3.56l-.023.004c-.031.182-.187.318-.374.32h-.018v1.24c0 1.212.982 2.194 2.194 2.194s2.194-.982 2.194-2.194v-.866c-.608-.091-1.069-.609-1.069-1.235 0-.689.559-1.248 1.248-1.248s1.248.559 1.248 1.248c0 .546-.351 1.01-.839 1.18l-.009.003v.918.047c0 1.532-1.242 2.774-2.774 2.774s-2.774-1.242-2.774-2.774c0-.017 0-.033 0-.05v.002-1.251c-.178-.012-.322-.146-.35-.318v-.002c-1.69-.329-2.95-1.795-2.954-3.556v-1.657c-1.404.603-3.066.615-4.353 1.12-2.094.819-2.142 2.08-2.206 2.27-.16.468-.468 1.153-.538 4.195-.012.4 0 1.013 1.206 1.549 2.626 1.03 6.009 1.35 9.344 1.58h.32c3.342-.228 6.72-.547 9.344-1.58 1.201-.533 1.212-1.142 1.201-1.546zm-14.681-1.24h-1.246v1.251h-.89v-1.247h-1.246v-.89h1.246v-1.246h.89v1.246h1.246z"></path>
                <path d="m16.225 17.965v-.001c0-.372-.301-.673-.673-.673s-.673.301-.673.673.301.673.673.673c.371 0 .672-.301.673-.672z"></path>
              </g>
            </svg>
          ),
        },
        {
          name: "Withdrawal requests",
          link: "/telemedicine/Withdrawalpannal",

          logo: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7 mr-1 transition duration-75"
              viewBox="0 0 6.72 6.72"
              stroke="#ffffff"
              fill="none"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M3.95499 2.27731l0 2.61638c0,0.0441811 -0.0358189,0.08 -0.08,0.08l-0.395343 0c-0.0441811,0 -0.08,-0.0358189 -0.08,-0.08l0 -2.61638c0,-0.0441811 0.0358189,-0.08 0.08,-0.08l0.395343 0c0.0441811,0 0.08,0.0358189 0.08,0.08zm-0.16 2.53638l0 -2.45638 -0.235343 0 0 2.45638 0.235343 0z"
                stroke="#ffffff"
              />
              <path
                d="M4.35032 2.27731l0 2.47837c0,0.0600354 -0.0245039,0.114563 -0.0639764,0.154031 -0.0394685,0.0394724 -0.0939882,0.0639764 -0.154028,0.0639764l-1.65576 0c-0.0600394,0 -0.114559,-0.0245039 -0.154028,-0.0639764 -0.0394724,-0.0394685 -0.0639764,-0.0939961 -0.0639764,-0.154031l0 -2.47837c0,-0.0441811 0.0358189,-0.08 0.08,-0.08l1.93176 0c-0.0441811,0 0.08,0.0358189 0.08,0.08zm-0.16 2.47837l0 -2.39837 -1.77176 0 0 2.39837c0,0.0158661 0.00655118,0.0303583 0.0171024,0.0409055 0.0105472,0.0105512 0.0250354,0.0171024 0.0409016,0.0171024l1.65576 0c0.0158661,0 0.0303543,-0.00655118 0.0409016,-0.0171024 0.0105512,-0.0105472 0.0171024,-0.0250394 0.0171024,-0.0409055z"
                stroke="#ffffff"
              />
              <path
                d="M2.83169 3.46059c0,0.0441811 0.0358189,0.08 0.08,0.08 0.0441811,0 0.08,-0.0358189 0.08,-0.08l0 -0.844697c0,-0.0441811 -0.0358189,-0.08 -0.08,-0.08 -0.0441811,0 -0.08,0.0358189 -0.08,0.08l0 0.844697z"
                stroke="#ffffff"
              />
              <path
                d="M2.55241 3.06795c-0.0219173,0.0381417 -0.00876772,0.0868346 0.029374,0.108752 0.0381417,0.0219173 0.0868346,0.00876772 0.108752,-0.029374l0.222689 -0.385713 0.213264 0.384776c0.0214016,0.0384843 0.0699567,0.0523386 0.108441,0.030937 0.0384843,-0.0214016 0.0523386,-0.0699567 0.030937,-0.108441l-0.281488 -0.50787c-0.0214016,-0.0384843 -0.0699567,-0.0523386 -0.108441,-0.030937 -0.014248,0.00792126 -0.0251142,0.0195669 -0.0320709,0.0330472l-0.291457 0.504823z"
                stroke="#ffffff"
              />
              <path d="M1.00328 1.26631l4.71345 0c0.0559843,0 0.106827,0.0228465 0.143626,0.0596496 0.0368031,0.0367992 0.0596496,0.0876417 0.0596496,0.143626l0 0.684453c0,0.0559843 -0.0228425,0.106827 -0.0596496,0.143626 -0.0367992,0.0367992 -0.0876417,0.0596496 -0.143626,0.0596496l-4.71345 0c-0.0559843,0 -0.106827,-0.0228504 -0.143626,-0.0596496 -0.0368071,-0.0367992 -0.0596496,-0.0876417 -0.0596496,-0.143626l0 -0.684453c0,-0.0559843 0.0228465,-0.106827 0.0596496,-0.143626 0.0367992,-0.0368031 0.0876417,-0.0596496 0.143626,-0.0596496zm4.71345 0.16l-4.71345 0c-0.011815,0 -0.022622,0.00489764 -0.0305,0." />
            </svg>
          ),
        },
      ];
    },
    homecare: (state, action) => {
      state.topnavData = [
        {
          name: "Categories",
          link: "/homecare/categories",
          logo: (
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          ),
        },
        {
          name: "Lab",
          link: "/homecare/lab-items",
          logo: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.29516 1.35401C9.12383 1.25269 8.91927 1.22359 8.72648 1.2731C8.5337 1.32261 8.36847 1.44668 8.26716 1.61801C8.16585 1.78934 8.13674 1.9939 8.18625 2.18668C8.23576 2.37947 8.35983 2.54469 8.53116 2.64601L8.72716 2.76201L2.00216 14.37C1.63423 15.0054 1.3954 15.7072 1.29937 16.4352C1.20334 17.1631 1.252 17.9029 1.44256 18.612C1.63312 19.3211 1.96183 19.9856 2.40982 20.5673C2.85781 21.1491 3.41628 21.6366 4.05316 22.002C5.33976 22.7425 6.86734 22.943 8.30149 22.5598C9.73563 22.1765 10.9595 21.2406 11.7052 19.957L18.4342 8.34301L18.6262 8.45301C18.7983 8.5487 19.0013 8.57282 19.1911 8.52014C19.3809 8.46747 19.5423 8.34223 19.6406 8.17149C19.7388 8.00076 19.7659 7.79822 19.7161 7.60765C19.6662 7.41708 19.5434 7.25377 19.3742 7.15301L18.5342 6.67001L10.1262 1.84601L9.29516 1.35401ZM3.30016 15.122L10.0232 3.51601L17.1332 7.59601L15.6282 10.193L13.7182 9.09501C13.546 8.99931 13.3431 8.9752 13.1533 9.02787C12.9634 9.08055 12.802 9.20578 12.7037 9.37652C12.6055 9.54726 12.5784 9.74979 12.6282 9.94036C12.6781 10.1309 12.8009 10.2942 12.9702 10.395L14.8762 11.491L13.9152 13.151L10.3602 11.106C10.2747 11.0551 10.18 11.0218 10.0816 11.0078C9.98313 10.9939 9.8829 10.9997 9.78671 11.0249C9.69051 11.05 9.60028 11.0941 9.52127 11.1544C9.44225 11.2148 9.37602 11.2902 9.32644 11.3764C9.27685 11.4626 9.24489 11.5578 9.23243 11.6564C9.21996 11.7551 9.22723 11.8552 9.25382 11.951C9.28041 12.0468 9.32578 12.1364 9.3873 12.2145C9.44882 12.2926 9.52525 12.3577 9.61216 12.406L13.1622 14.449L12.2772 15.977L10.3132 14.847C10.141 14.7513 9.93807 14.7272 9.74826 14.7799C9.55845 14.8325 9.39698 14.9578 9.29874 15.1285C9.2005 15.2993 9.17337 15.5018 9.22322 15.6924C9.27307 15.8829 9.3959 16.0462 9.56516 16.147L11.5252 17.275L10.4072 19.205C9.8604 20.1449 8.96361 20.83 7.91301 21.1104C6.8624 21.3907 5.74352 21.2435 4.80116 20.701C4.33534 20.434 3.92684 20.0777 3.59912 19.6524C3.27139 19.2271 3.03089 18.7413 2.89142 18.2228C2.75196 17.7044 2.71627 17.1635 2.78641 16.6312C2.85655 16.0989 3.03114 15.5867 3.30016 15.122ZM21.1752 12.102C21.0244 11.9415 20.8424 11.8136 20.6403 11.7262C20.4382 11.6387 20.2204 11.5936 20.0002 11.5936C19.78 11.5936 19.5621 11.6387 19.36 11.7262C19.1579 11.8136 18.9759 11.9415 18.8252 12.102C18.4628 12.4781 18.1329 12.8842 17.8392 13.316C17.5552 13.746 17.2502 14.324 17.2502 14.916C17.2502 16.452 18.4532 17.75 20.0002 17.75C21.5472 17.75 22.7502 16.452 22.7502 14.917C22.7502 14.324 22.4462 13.747 22.1612 13.316C21.8675 12.8841 21.5376 12.478 21.1752 12.102ZM19.9142 13.133C19.9432 13.103 19.9742 13.093 20.0002 13.093C20.0166 13.0933 20.0329 13.0971 20.0478 13.104C20.0628 13.1108 20.0762 13.1207 20.0872 13.133C20.3652 13.427 20.6742 13.786 20.9102 14.143C21.1632 14.526 21.2502 14.789 21.2502 14.917C21.2502 15.682 20.6622 16.25 20.0002 16.25C19.3382 16.25 18.7502 15.682 18.7502 14.917C18.7502 14.789 18.8372 14.527 19.0902 14.142C19.3262 13.786 19.6352 13.427 19.9142 13.133Z"
                fill="white"
              />
            </svg>
          ),
        },
        {
          name: "Appoinments",
          link: "/homecare/appoinment-details",
          logo: (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5002 11V17C20.5002 17.14 20.5002 17.28 20.4902 17.42"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.5 18V7C3.5 3 4.5 2 8.5 2H15.5C19.5 2 20.5 3 20.5 7"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.35 15H20.5V18.5C20.5 20.43 18.93 22 17 22H7C5.07 22 3.5 20.43 3.5 18.5V17.85C3.5 16.28 4.78 15 6.35 15Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 7H16"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 10.5H13"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ),
        },
      ];
    },
    pharmacyNav: (state, payload) => {
      state.topnavData = [
        {
          name: "Categories",
          link: "/pharmacy/category",
          logo: (
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          ),
        },
        {
          name: "Products",
          link: "/pharmacy/product",
          logo: (
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="20px"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M15.5777 3.38197L17.5777 4.43152C19.7294 5.56066 20.8052 6.12523 21.4026 7.13974C22 8.15425 22 9.41667 22 11.9415V12.0585C22 14.5833 22 15.8458 21.4026 16.8603C20.8052 17.8748 19.7294 18.4393 17.5777 19.5685L15.5777 20.618C13.8221 21.5393 12.9443 22 12 22C11.0557 22 10.1779 21.5393 8.42229 20.618L6.42229 19.5685C4.27063 18.4393 3.19479 17.8748 2.5974 16.8603C2 15.8458 2 14.5833 2 12.0585V11.9415C2 9.41667 2 8.15425 2.5974 7.13974C3.19479 6.12523 4.27063 5.56066 6.42229 4.43152L8.42229 3.38197C10.1779 2.46066 11.0557 2 12 2C12.9443 2 13.8221 2.46066 15.5777 3.38197Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  opacity="0.5"
                  d="M21 7.5L12 12M12 12L3 7.5M12 12V21.5"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
          ),
        },
        {
          name: "Orders",
          link: "/pharmacy/order",
          logo: (
            <svg
              width="24px"
              height="20px"
              viewBox="0 0 1024 1024"
              fill="#f8f2f2"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M300 462.4h424.8v48H300v-48zM300 673.6H560v48H300v-48z"
                  fill=""
                ></path>
                <path
                  d="M818.4 981.6H205.6c-12.8 0-24.8-2.4-36.8-7.2-11.2-4.8-21.6-11.2-29.6-20-8.8-8.8-15.2-18.4-20-29.6-4.8-12-7.2-24-7.2-36.8V250.4c0-12.8 2.4-24.8 7.2-36.8 4.8-11.2 11.2-21.6 20-29.6 8.8-8.8 18.4-15.2 29.6-20 12-4.8 24-7.2 36.8-7.2h92.8v47.2H205.6c-25.6 0-47.2 20.8-47.2 47.2v637.6c0 25.6 20.8 47.2 47.2 47.2h612c25.6 0 47.2-20.8 47.2-47.2V250.4c0-25.6-20.8-47.2-47.2-47.2H725.6v-47.2h92.8c12.8 0 24.8 2.4 36.8 7.2 11.2 4.8 21.6 11.2 29.6 20 8.8 8.8 15.2 18.4 20 29.6 4.8 12 7.2 24 7.2 36.8v637.6c0 12.8-2.4 24.8-7.2 36.8-4.8 11.2-11.2 21.6-20 29.6-8.8 8.8-18.4 15.2-29.6 20-12 5.6-24 8-36.8 8z"
                  fill=""
                ></path>
                <path
                  d="M747.2 297.6H276.8V144c0-32.8 26.4-59.2 59.2-59.2h60.8c21.6-43.2 66.4-71.2 116-71.2 49.6 0 94.4 28 116 71.2h60.8c32.8 0 59.2 26.4 59.2 59.2l-1.6 153.6z m-423.2-47.2h376.8V144c0-6.4-5.6-12-12-12H595.2l-5.6-16c-11.2-32.8-42.4-55.2-77.6-55.2-35.2 0-66.4 22.4-77.6 55.2l-5.6 16H335.2c-6.4 0-12 5.6-12 12v106.4z"
                  fill=""
                ></path>
              </g>
            </svg>
          ),
        },
        {
          name: "Reviews",
          link: "/pharmacy/review",
          logo: (
            <svg
              fill="#ffffff"
              width="24px"
              height="25px"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g data-name="39 live chat" id="_39_live_chat">
                  {" "}
                  <path d="M53.72,11.02H28.65c-3.74,0-6.78,2.5-6.78,5.57v2.39H9.73c-3.44,0-6.23,2.3-6.23,5.13V39.93c0,2.83,2.79,5.13,6.23,5.13h2.42l8.21,7.65a.977.977,0,0,0,.68.27.953.953,0,0,0,.4-.08,1.011,1.011,0,0,0,.6-.92V45.06H32.35c3.44,0,6.23-2.3,6.23-5.13V39.7h1.6v7.76a1,1,0,0,0,.61.92.881.881,0,0,0,.39.08,1.039,1.039,0,0,0,.69-.26L51,39.7h2.72c3.74,0,6.78-2.5,6.78-5.58V16.59C60.5,13.52,57.46,11.02,53.72,11.02ZM36.58,39.93c0,1.7-1.94,3.13-4.23,3.13H21.04a1,1,0,0,0-1,1v5.62l-6.82-6.35a1,1,0,0,0-.68-.27H9.73c-2.33,0-4.23-1.4-4.23-3.13V24.11c0-1.72,1.9-3.13,4.23-3.13H21.87V34.12c0,3.08,3.04,5.58,6.78,5.58h7.93ZM58.5,34.12c0,1.97-2.15,3.58-4.78,3.58H50.6a1.014,1.014,0,0,0-.68.26l-7.74,7.21V38.7a.99.99,0,0,0-1-1H28.65c-2.63,0-4.78-1.61-4.78-3.58V16.59c0-1.97,2.15-3.57,4.78-3.57H53.72c2.63,0,4.78,1.6,4.78,3.57Z"></path>{" "}
                  <path d="M31.11,21.44a3.745,3.745,0,1,0,3.75,3.75A3.751,3.751,0,0,0,31.11,21.44Zm0,5.49a1.745,1.745,0,1,1,1.75-1.74A1.75,1.75,0,0,1,31.11,26.93Z"></path>{" "}
                  <path d="M41.18,21.44a3.745,3.745,0,1,0,3.75,3.75A3.749,3.749,0,0,0,41.18,21.44Zm0,5.49a1.745,1.745,0,1,1,1.75-1.74A1.741,1.741,0,0,1,41.18,26.93Z"></path>{" "}
                  <path d="M51.26,21.44a3.745,3.745,0,1,0,3.75,3.75A3.751,3.751,0,0,0,51.26,21.44Zm0,5.49a1.745,1.745,0,1,1,1.75-1.74A1.743,1.743,0,0,1,51.26,26.93Z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          ),
        },
      ];
    },

    foodNavdata: (state, payload) => {
      state.topnavData = [
        {
          name: "Categories",
          link: "/food/categories",
          logo: (
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          ),
        },
        {
          name: "Products",
          link: "/food/product",
          logo: (
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="20px"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M15.5777 3.38197L17.5777 4.43152C19.7294 5.56066 20.8052 6.12523 21.4026 7.13974C22 8.15425 22 9.41667 22 11.9415V12.0585C22 14.5833 22 15.8458 21.4026 16.8603C20.8052 17.8748 19.7294 18.4393 17.5777 19.5685L15.5777 20.618C13.8221 21.5393 12.9443 22 12 22C11.0557 22 10.1779 21.5393 8.42229 20.618L6.42229 19.5685C4.27063 18.4393 3.19479 17.8748 2.5974 16.8603C2 15.8458 2 14.5833 2 12.0585V11.9415C2 9.41667 2 8.15425 2.5974 7.13974C3.19479 6.12523 4.27063 5.56066 6.42229 4.43152L8.42229 3.38197C10.1779 2.46066 11.0557 2 12 2C12.9443 2 13.8221 2.46066 15.5777 3.38197Z"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <path
                  opacity="0.5"
                  d="M21 7.5L12 12M12 12L3 7.5M12 12V21.5"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
          ),
        },
        {
          name: "Order",
          link: "/food/order",
          logo: (
            <svg
              width="24px"
              height="20px"
              viewBox="0 0 1024 1024"
              fill="#f8f2f2"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M300 462.4h424.8v48H300v-48zM300 673.6H560v48H300v-48z"
                  fill=""
                ></path>
                <path
                  d="M818.4 981.6H205.6c-12.8 0-24.8-2.4-36.8-7.2-11.2-4.8-21.6-11.2-29.6-20-8.8-8.8-15.2-18.4-20-29.6-4.8-12-7.2-24-7.2-36.8V250.4c0-12.8 2.4-24.8 7.2-36.8 4.8-11.2 11.2-21.6 20-29.6 8.8-8.8 18.4-15.2 29.6-20 12-4.8 24-7.2 36.8-7.2h92.8v47.2H205.6c-25.6 0-47.2 20.8-47.2 47.2v637.6c0 25.6 20.8 47.2 47.2 47.2h612c25.6 0 47.2-20.8 47.2-47.2V250.4c0-25.6-20.8-47.2-47.2-47.2H725.6v-47.2h92.8c12.8 0 24.8 2.4 36.8 7.2 11.2 4.8 21.6 11.2 29.6 20 8.8 8.8 15.2 18.4 20 29.6 4.8 12 7.2 24 7.2 36.8v637.6c0 12.8-2.4 24.8-7.2 36.8-4.8 11.2-11.2 21.6-20 29.6-8.8 8.8-18.4 15.2-29.6 20-12 5.6-24 8-36.8 8z"
                  fill=""
                ></path>
                <path
                  d="M747.2 297.6H276.8V144c0-32.8 26.4-59.2 59.2-59.2h60.8c21.6-43.2 66.4-71.2 116-71.2 49.6 0 94.4 28 116 71.2h60.8c32.8 0 59.2 26.4 59.2 59.2l-1.6 153.6z m-423.2-47.2h376.8V144c0-6.4-5.6-12-12-12H595.2l-5.6-16c-11.2-32.8-42.4-55.2-77.6-55.2-35.2 0-66.4 22.4-77.6 55.2l-5.6 16H335.2c-6.4 0-12 5.6-12 12v106.4z"
                  fill=""
                ></path>
              </g>
            </svg>
          ),
        },
        {
          name: "Review",
          link: "/food/review",
          logo: (
            <svg
              fill="#ffffff"
              width="24px"
              height="25px"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g data-name="39 live chat" id="_39_live_chat">
                  {" "}
                  <path d="M53.72,11.02H28.65c-3.74,0-6.78,2.5-6.78,5.57v2.39H9.73c-3.44,0-6.23,2.3-6.23,5.13V39.93c0,2.83,2.79,5.13,6.23,5.13h2.42l8.21,7.65a.977.977,0,0,0,.68.27.953.953,0,0,0,.4-.08,1.011,1.011,0,0,0,.6-.92V45.06H32.35c3.44,0,6.23-2.3,6.23-5.13V39.7h1.6v7.76a1,1,0,0,0,.61.92.881.881,0,0,0,.39.08,1.039,1.039,0,0,0,.69-.26L51,39.7h2.72c3.74,0,6.78-2.5,6.78-5.58V16.59C60.5,13.52,57.46,11.02,53.72,11.02ZM36.58,39.93c0,1.7-1.94,3.13-4.23,3.13H21.04a1,1,0,0,0-1,1v5.62l-6.82-6.35a1,1,0,0,0-.68-.27H9.73c-2.33,0-4.23-1.4-4.23-3.13V24.11c0-1.72,1.9-3.13,4.23-3.13H21.87V34.12c0,3.08,3.04,5.58,6.78,5.58h7.93ZM58.5,34.12c0,1.97-2.15,3.58-4.78,3.58H50.6a1.014,1.014,0,0,0-.68.26l-7.74,7.21V38.7a.99.99,0,0,0-1-1H28.65c-2.63,0-4.78-1.61-4.78-3.58V16.59c0-1.97,2.15-3.57,4.78-3.57H53.72c2.63,0,4.78,1.6,4.78,3.57Z"></path>{" "}
                  <path d="M31.11,21.44a3.745,3.745,0,1,0,3.75,3.75A3.751,3.751,0,0,0,31.11,21.44Zm0,5.49a1.745,1.745,0,1,1,1.75-1.74A1.75,1.75,0,0,1,31.11,26.93Z"></path>{" "}
                  <path d="M41.18,21.44a3.745,3.745,0,1,0,3.75,3.75A3.749,3.749,0,0,0,41.18,21.44Zm0,5.49a1.745,1.745,0,1,1,1.75-1.74A1.741,1.741,0,0,1,41.18,26.93Z"></path>{" "}
                  <path d="M51.26,21.44a3.745,3.745,0,1,0,3.75,3.75A3.751,3.751,0,0,0,51.26,21.44Zm0,5.49a1.745,1.745,0,1,1,1.75-1.74A1.743,1.743,0,0,1,51.26,26.93Z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          ),
        },
      ];
    },
    cleartopNav: (state, action) => {
      state.topnavData = [];
    },



    newNotification: (state, payload) => {
      console.log(payload);
      state.notificationData = payload;
    },
  },

});
export default NavBarSlice.reducer;

export const {
  openSidebar,
  telemedicine,
  foodNavdata,
  cleartopNav,
  pharmacyNav,
  homecare,
  notification,
} = NavBarSlice.actions;
