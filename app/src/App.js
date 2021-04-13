import logo from './logo.svg';
import './App.css';
import './localstorage.js'

function App() {
  return (
    <div className="App bg-gray-100 font-sans leading-normal tracking-normal">

        {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
        <div class="bg-red-500  ">
          <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between flex-wrap">
              <div class="w-0 flex-1 flex items-center">
                <span class="flex p-2 rounded-lg bg-red-600">
                  {/* <!-- Heroicon name: outline/speakerphone --> */}
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </span>
                <p class="ml-3 font-medium text-white truncate">
                  <span class="md:hidden">We announced a new product</span>
                  <span class="hidden md:inline">A bottle is empty!</span>
                </p>
              </div>
              <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button type="button" class="-mr-1 flex p-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
                  <span class="sr-only">Dismiss</span>
                  {/* <!-- Heroicon name: outline/x --> */}
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      {/* <!--Container--> */}
      <div class="container w-full mx-auto pt-5 h-screen">

        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">


          {/* <!--Console Content--> */}

          <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 xl:w-1/3 p-3">

              {/* <!--Metric Card--> */}
              <div class="bg-white border rounded shadow p-2">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class="rounded p-3 bg-green-600"><i class="fa fa-wallet fa-2x fa-fw fa-inverse"></i></div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h5 class="font-bold uppercase text-gray-400">Total Revenue</h5>
                    <h3 class="font-bold text-3xl text-gray-600">$3249 <span class="text-green-500"><i class="fas fa-caret-up"></i></span></h3>
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
                    <div class="rounded p-3 bg-pink-600"><i class="fas fa-users fa-2x fa-fw fa-inverse"></i></div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h5 class="font-bold uppercase text-gray-400">Total Users</h5>
                    <h3 class="font-bold text-3xl text-gray-600">249 <span class="text-pink-500"><i class="fas fa-exchange-alt"></i></span></h3>
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
                    <div class="rounded p-3 bg-yellow-600"><i class="fas fa-user-plus fa-2x fa-fw fa-inverse"></i></div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h5 class="font-bold uppercase text-gray-400">New Users</h5>
                    <h3 class="font-bold text-3xl text-gray-600">2 <span class="text-yellow-600"><i class="fas fa-caret-up"></i></span></h3>
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
                    <div class="rounded p-3 bg-blue-600"><i class="fas fa-server fa-2x fa-fw fa-inverse"></i></div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h5 class="font-bold uppercase text-gray-400">Server Uptime</h5>
                    <h3 class="font-bold text-3xl text-gray-600">152 days</h3>
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
                    <div class="rounded p-3 bg-indigo-600"><i class="fas fa-tasks fa-2x fa-fw fa-inverse"></i></div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h5 class="font-bold uppercase text-gray-400">To Do List</h5>
                    <h3 class="font-bold text-3xl text-gray-600">7 tasks</h3>
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
                    <div class="rounded p-3 bg-red-600"><i class="fas fa-inbox fa-2x fa-fw fa-inverse"></i></div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h5 class="font-bold uppercase text-gray-400">Issues</h5>
                    <h3 class="font-bold text-3xl text-gray-600">3 <span class="text-red-500"><i class="fas fa-caret-up"></i></span></h3>
                  </div>
                </div>
              </div>
              {/* <!--/Metric Card--> */}
            </div>
          </div>

          {/* <!--Divider--> */}
          <hr class="border-b-2 border-gray-200 my-8 mx-4"></hr>

          <div class="flex flex-row flex-wrap flex-grow mt-2">

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


      </div>
      {/* <!--/container--> */}

    </div>
  );
}

export default App;
