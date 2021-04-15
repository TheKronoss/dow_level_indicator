import logo from './logo.svg';
import './App.css';
import './localstorage.js'
import Navbar from './Components/Navbar'
import Bottles from './Components/Bottles'
import Table from './Components/Table'

function App() {

  return (

    <div className="App font-sans leading-normal tracking-normal">

      <Navbar></Navbar>

      {/* <!--Container--> */}
      < div class="container w-full mx-auto pt-15" >

        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
          <Bottles></Bottles>

          {/* <!--Stripe-->  */}
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
              <Table></Table>
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
