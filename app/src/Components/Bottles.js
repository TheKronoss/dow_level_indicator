import React from 'react'

export default function Bottles() {
  const storage = window.localStorage.getItem('bottleData')
    const parsed = JSON.parse(storage)

    // cabinet selectors
    // TODO: add forEach to table with these variable, so the table gets filled with all the bottle information. 
    let currentCabinet = 'cabinet2'
    let currentBottle = 'bottle1'

    // DRY
    let parseSearch = parsed[currentCabinet][currentBottle]

    // determine if the bottle is full enough
    let _new = parseSearch[2].pop();
    let _old = parseSearch[2].shift();

    let _new2 = parsed[currentCabinet]['bottle2'][2].pop();
    let _old2 = parsed[currentCabinet]['bottle2'][2].shift();

    let colour = null
    let colour2 = null
    let iconColour = null
    let iconColour2 = null


    // sets table labels
    function applyLabels() {
        return (_new / _old * 100 > 10) ? applyGreen() : applyRed();
    }

    let applyGreen = () => { colour = 'rounded p-3 bg-green-100'; iconColour = 'fas fa-flask fa-2x fa-fw fa-inverse text-green-800'}
    let applyRed = () => { colour = 'rounded p-3 bg-red-100'; iconColour = 'fas fa-flask fa-2x fa-fw fa-inverse text-red-800'; }

    applyLabels();

    function applyLabels2() {
        return (_new2 / _old2) * 100 > 10 ? applyGreen2() : applyRed2();
    }

    let applyGreen2 = () => { colour2 = 'rounded p-3 bg-green-100'; iconColour2 = 'fas fa-flask fa-2x fa-fw fa-inverse text-green-800';}
    let applyRed2 = () => { colour2 = 'rounded p-3 bg-red-100'; iconColour2 = 'fas fa-flask fa-2x fa-fw fa-inverse text-red-800';}

    applyLabels2();
    return (
        <div>
            
            {/* <!--Console Content--> */}

          <div class="flex flex-wrap ">
            {/* <!--Metric Card--> */}
            <div class="w-full md:w-1/2 xl:w-1/2 p-3"><a href="#">
              <div class="bg-white border rounded shadow p-2">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class={colour}><i class={iconColour}></i></div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h5 class="font-bold uppercase text-l text-gray-700">hydrogen fluoride</h5>
                    <h3 class="font-semibold text-gray-400 text-2xl"><span class="text-gray-400"><i class="fas fa-weight-hanging fa-xs"></i></span> {_new} / {_old} kg</h3>
                  </div>
                </div>
              </div>
              </a>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/2 p-3"><a href="#">
              <div class="bg-white border rounded shadow p-2">
                <div class="flex flex-row items-center">
                  <div class="flex-shrink pr-4">
                    <div class={colour2}><i class={iconColour2}></i></div>
                  </div>
                  <div class="flex-1 text-right md:text-center">
                    <h5 class="font-bold uppercase text-l text-gray-700">hydrogen fluoride</h5>
                    <h3 class="font-semibold text-gray-400 text-2xl"><span class="text-gray-400"><i class="fas fa-weight-hanging fa-xs"></i></span> {_new2} / {_old2} kg</h3>
                  </div>
                </div>
              </div>
              </a>
            </div>
            {/* <div class="w-full md:w-1/2 xl:w-1/3 p-3"><a href="#">
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
              </a>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3"><a href="#">
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
              </a>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3"><a href="#">
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
              </a>
            </div>
            <div class="w-full md:w-1/2 xl:w-1/3 p-3"><a href="#">
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
              </a>
            </div> */}
          </div>
        </div>
    )
}
