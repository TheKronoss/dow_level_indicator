const storage = window.localStorage;

let data = {
    "cabinet1": {
        "bottle1": ['01/01/2021', '#5 acid', [50, 30, 20, 10]
        ],
        "bottle2": ['01/01/2021', '#4 water', [50, 30, 20, 10]
        ]
    },

    "cabinet2": {
        "bottle1": ['01/01/2021', '1# fluoride', [80, 20, 19, 10]
        ],
        "bottle2": ['01/01/2021', '2# carbon-dioxide', [200, 30, 20, 10]
        ]
    },

}

storage.setItem('bottleData', JSON.stringify(data))