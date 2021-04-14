import logo from './logo.svg';
import './App.css';
import './localstorage.js'

function App() {

  return (

    <div className="App font-sans leading-normal tracking-normal">


      {/* NAV BAR */}
      <nav id="header" className="bg-white fixed w-full z-10 top-0 shadow">


        <div className="w-full container mx-auto flex flex-wrap items-center mt-0 pt-3 pb-3 md:pb-0">

          <div className="w-1/2 pl-2 md:pl-0">
            <a className="text-gray-900 text-base xl:text-xl no-underline hover:no-underline font-semibold">
              <img className="" src="/DOW-logo.svg"/></a>
          </div>
          <div className="w-1/2 pr-0">
            <div className="flex relative inline-block float-right">

              <div className="relative text-sm">
                <div id="userMenu" className="bg-white rounded shadow-md mt-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible">
                  <ul className="list-reset">
                    <li><a href="#" className="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline">My account</a></li>
                    <li><a href="#" className="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline">Notifications</a></li>
                    <li>
                      <hr className="border-t mx-2 border-gray-400"></hr>
                    </li>
                    <li><a href="#" class="px-4 py-2 block text-gray-900 hover:bg-gray-400 no-underline hover:no-underline">Logout</a></li>
                  </ul>
                </div>
              </div>


              {/* <div class="block lg:hidden pr-4">
                <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-teal-500 appearance-none focus:outline-none">
                  <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div> */}
            </div>

          </div>


          <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white z-20" id="nav-content">
            <ul class="list-reset lg:flex flex-1 items-center px-4 md:px-0">
              <li class="mr-6 my-2 md:my-0">
                <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-pink-600 no-underline hover:text-gray-900 border-b-2 border-orange-600 hover:border-orange-600">
                  <i class="fas fa-home fa-fw mr-3 text-pink-600"></i><span class="pb-1 md:pb-0 text-sm">Home</span>
                </a>
              </li>
              <li class="mr-6 my-2 md:my-0">
                <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-pink-500">
                  <i class="fas fa-tasks fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">Tasks</span>
                </a>
              </li>
              <li class="mr-6 my-2 md:my-0">
                <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-purple-500">
                  <i class="fa fa-envelope fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">Messages</span>
                </a>
              </li>
              <li class="mr-6 my-2 md:my-0">
                <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-green-500">
                  <i class="fas fa-chart-area fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">Analytics</span>
                </a>
              </li>
              <li class="mr-6 my-2 md:my-0">
                <a href="#" class="block py-1 md:py-3 pl-1 align-middle text-gray-500 no-underline hover:text-gray-900 border-b-2 border-white hover:border-red-500">
                  <i class="fa fa-wallet fa-fw mr-3"></i><span class="pb-1 md:pb-0 text-sm">Payments</span>
                </a>
              </li>
            </ul>

          </div>

        </div>
      </nav>


      {/* <!--Container--> */}
      < div class="container w-full mx-auto pt-20" >

        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">


          {/* <!--Console Content--> */}

          <div class="flex flex-wrap ">
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">


              {/* <!--Metric Card--> */}
              <div class="bg-white border rounded shadow p-2">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class="rounded p-3 bg-green-600"><i class="fa fa-flask fa-2x fa-fw fa-inverse"></i></div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h5 class="font-bold uppercase text-l text-gray-700">hydrogen fluoride</h5>
                    <h3 class="font-semibold text-gray-400 text-2xl"><span class="text-gray-400"><i class="fas fa-weight-hanging fa-xs"></i></span> 1.1 / 3 kg</h3>
                  </div>
                </div>
              </div>
              {/* <!--/Metric Card--> */}
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
              {/* <!--Metric Card--> */}
              <div class="bg-white border rounded shadow p-2">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class="rounded p-3 bg-green-600"><i class="fas fa-flask fa-2x fa-fw fa-inverse"></i></div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h5 class="font-bold uppercase text-l text-gray-700">hydrogen fluoride</h5>
                    <h3 class="font-semibold text-gray-400 text-2xl"><span class="text-gray-400"><i class="fas fa-weight-hanging fa-xs"></i></span> 1.1 / 3 kg</h3>
                  </div>
                </div>
              </div>
              {/* <!--/Metric Card--> */}
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
              {/* <!--Metric Card--> */}
              <div class="bg-white border rounded shadow p-2">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class="rounded p-3 bg-green-600"><i class="fas fa-flask fa-2x fa-fw fa-inverse"></i></div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h5 class="font-bold uppercase text-l text-gray-700">hydrogen fluoride</h5>
                    <h3 class="font-semibold text-gray-400 text-2xl"><span class="text-gray-400"><i class="fas fa-weight-hanging fa-xs"></i></span> 1.1 / 3 kg</h3>
                  </div>
                </div>
              </div>
              {/* <!--/Metric Card--> */}
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
              {/* <!--Metric Card--> */}
              <div class="bg-white border rounded shadow p-2">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class="rounded p-3 bg-green-600"><i class="fas fa-flask fa-2x fa-fw fa-inverse"></i></div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h5 class="font-bold uppercase text-l text-gray-700">hydrogen fluoride</h5>
                    <h3 class="font-semibold text-gray-400 text-2xl"><span class="text-gray-400"><i class="fas fa-weight-hanging fa-xs"></i></span> 1.1 / 3 kg</h3>
                  </div>
                </div>
              </div>
              {/* <!--/Metric Card--> */}
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
              {/* <!--Metric Card--> */}
              <div class="bg-white border rounded shadow p-2">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class="rounded p-3 bg-green-600"><i class="fas fa-flask fa-2x fa-fw fa-inverse"></i></div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h5 class="font-bold uppercase text-l text-gray-700">hydrogen fluoride</h5>
                    <h3 class="font-semibold text-gray-400 text-2xl"><span class="text-gray-400"><i class="fas fa-weight-hanging fa-xs"></i></span> 1.1 / 3 kg</h3>
                  </div>
                </div>
              </div>
              {/* <!--/Metric Card--> */}
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">
              {/* <!--Metric Card--> */}
              <div class="bg-white border rounded shadow p-2">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class="rounded p-3 bg-green-600"><i class="fas fa-flask fa-2x fa-fw fa-inverse"></i></div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h5 class="font-bold uppercase text-l text-gray-700">hydrogen fluoride</h5>
                    <h3 class="font-semibold text-gray-400 text-2xl"><span class="text-gray-400"><i class="fas fa-weight-hanging fa-xs"></i></span> 1.1 / 3 kg</h3>
                  </div>
                </div>
              </div>
              {/* <!--/Metric Card--> */}
            </div>
          </div>




          {/* <!--Divider--> */}
          <hr class="border-b-2 border-gray-200 my-8 mx-4"></hr>

          <div class="flex flex-row flex-wrap flex-grow mt-2">

            <div class="hidden">
              <div class="w-full md:w-1/2 p-3">
                {/* <!--Graph Card--> */}
                <div class="bg-white border rounded shadow">
                  <div class="border-b p-3">
                    <h5 class="font-bold uppercase text-gray-600">Graph</h5>
                  </div>
                  <div class="p-5">
                    <canvas id="chartjs-7" class="chartjs" width="undefined" height="undefined"></canvas>

                  </div>
                </div>
                {/* <!--/Graph Card--> */}
              </div>

              <div class="w-full md:w-1/2 p-3">
                {/* <!--Graph Card--> */}
                <div class="bg-white border rounded shadow">
                  <div class="border-b p-3">
                    <h5 class="font-bold uppercase text-gray-600">Graph</h5>
                  </div>
                  <div class="p-5">
                    <canvas id="chartjs-0" class="chartjs" width="undefined" height="undefined"></canvas>

                  </div>
                </div>
                {/* <!--/Graph Card--> */}
              </div>
            </div>

            <div class="w-full p-3">
              {/* <!--Table Card--> */}
              <div class="bg-white rounded shadow">
                <div class="border-b p-3">
                  <h5 class="font-bold uppercase text-gray-600">Table</h5>
                </div>
                <div class="p-5">

                  <p class="py-2"><a href="#" class="text-white">See More issues...</a></p>

                </div>
              </div>
              {/* <!--/table Card--> */}
            </div>


          </div>

          {/* <!--/ Console Content--> */}

        </div>


      </div >
      {/* <!--/container--> */}

    </div >
  );
}

export default App;
