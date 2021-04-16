const storage = window.localStorage;

// Data hardcoded due to time constaints
let data = {
    "cabinet1": {
        "bottle1": ['01/01/2021', '#5 acid', [0.2, 0.1]
        ],
        "bottle2": ['01/01/2021', '#4 water', [0.2, 0.1]
        ]
    },

    "cabinet2": {
        "bottle1": ['01/01/2021', '1# fluoride', [0.8, 0.01]
        ],
        "bottle2": ['01/01/2021', '2# carbon-dioxide', [0.9, 0.1]
        ]
    },
}

storage.setItem('bottleData', JSON.stringify(data))