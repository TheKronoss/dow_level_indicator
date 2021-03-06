import React from 'react'

export default function TableContent() {

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
    let innerText = ''

    let colour2 = null
    let innerText2 = ''

    // sets table labels
    function applyLabels() {
        return (_new / _old * 100 > 10) ? applyGreen() : applyRed();
    }

    let applyGreen = () => { colour = 'px-2 inline-flex text-xs leading-5 font-semibold bg-green-100 text-green-800 rounded-full'; innerText = 'clear'; }
    let applyRed = () => { colour = 'px-2 inline-flex text-xs leading-5 font-semibold bg-red-100 text-red-800 rounded-full'; innerText = 'refill'; }

    applyLabels();

    function applyLabels2() {
        return (_new2 / _old2) * 100 > 10 ? applyGreen2() : applyRed2();
    }

    let applyGreen2 = () => { colour2 = 'px-2 inline-flex text-xs leading-5 font-semibold bg-green-100 text-green-800 rounded-full'; innerText2 = 'clear'; }
    let applyRed2 = () => { colour2 = 'px-2 inline-flex text-xs leading-5 font-semibold bg-red-100 text-red-800 rounded-full'; innerText2 = 'refill'; }

    applyLabels2();

    return (
        <tbody class="bg-white divide-y divide-gray-200">
            <tr>
                <td class="px-6 text-left py-4 whitespace-nowrap text-sm text-gray-500">{parsed[currentCabinet]['bottle1'][0]}</td>
                <td class="px-6 text-left py-4 whitespace-nowrap text-sm text-gray-500">{parsed[currentCabinet]['bottle1'][1]}</td>
                <td class="px-6 text-left py-4 whitespace-nowrap text-sm text-gray-500">{_new} / {_old} kg</td>
                <td id='status' class="px-6 text-left py-4 whitespace-nowrap text-gray-500">
                    <span class={colour}>
                        {innerText}
                    </span>
                </td>
            </tr>
            <tr>
                <td class="px-6 text-left py-4 whitespace-nowrap text-sm text-gray-500">{parsed[currentCabinet]['bottle2'][0]}</td>
                <td class="px-6 text-left py-4 whitespace-nowrap text-sm text-gray-500">{parsed[currentCabinet]['bottle2'][1]}</td>
                <td class="px-6 text-left py-4 whitespace-nowrap text-sm text-gray-500">{_new2} / {_old2} kg</td>
                <td id='status' class="px-6 text-left py-4 whitespace-nowrap text-gray-500">
                    <span class={colour2}>
                        {innerText2}
                    </span>
                </td>
            </tr>
        </tbody>

    )
}
