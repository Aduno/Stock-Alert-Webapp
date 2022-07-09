export const STOCKS = {
    ALG: "Alamo Group Inc.",
    AMD: "Advanced Micro Devices Inc.",
    AAPL: 'Apple Inc.',
    ABNB:  'Airbnb, Inc.',
    AMGN: 'Amgen Inc.',
    AMZN: 'Amazon Inc',
    AZN: 'Astrazeneca PLC',
    BIIB: 'Biogen Idec Inc.',
    BMBL: 'Bumble Inc.',
    CI: 'Cigna Corporation',
    CVE: 'Cenovus Energy Inc',
    CVX: 'Chevron Corporation',
    CSCO: "Cisco Systems Inc.",
    DLTR: 'Dollar Tree, Inc.',
    DE:"Deere & Co.",
    EA: 'Electronic Arts Inc.',
    EQT: 'EQT Corporation',
    ENB: "Enbridge Inc.",
    FDX: 'FedEx Corporation',
    FCU: "Fission Uranium Corp",
    GD: 'General Dynamics Corporation',
    GOOG: 'Alphabet Inc.',
    GTLB: 'GitLab Inc.',
    HRB: 'H&R Block, Inc.',
    INTC: "Intel Corp.",
    JNJ: 'Johnson & Johnson',
    JPM: "JPMorgan Chase & Co.",
    LMT: 'Lockheed Martin Corporation',
    MNST: 'Monster Beverage Corporation',
    MRK: 'Merck & Company, Inc.',
    NIO: 'NIO Inc.',
    NVDA: "Nvidia Corp.",
    PSX: 'Phillips 66',
    RPRX: 'Royalty Pharma plc',
    SLF: "Sun Life Financial Inc.",
    SM: 'SM Energy Company',
    SPOT: "Spotify Technology S.A.",
    SU: "Suncor Energy Inc.",
    T: 'AT&T Inc.',
    TWTR: "Twitter Inc.",
    TSM: "Taiwan Semiconductor Manufactoring",
    VZ: 'Verizon Communications Inc.',
    XOM: 'Exxon Mobil Corporation',
    QCOM: "Qualcomm Inc.",
    ZM: 'Zoom Video Communications, Inc.'
}

export const STOCKNAMES = {
    
"Nvidia Corp.": "NVDA",
"Cisco Systems Inc.": "CSCO",
 "Enbridge Inc.": "ENB",
 "Twitter Inc.": "TWTR",
 "Spotify Technology S.A.": "SPOT",
  "Intel Corp.":"INTC",
 "Deere & Co.": "DE",
 "Advanced Micro Devices Inc.": "AMD",
 "Fission Uranium Corp": "FCU",
 "Qualcomm Inc.": "QCOM",
 "Sun Life Financial Inc": "SLF",
 "Taiwan Semiconductor Manufactoring": "TSM",
 "AT&T Inc.": "T",
 "JPMorgan Chase & Co.": "JPM",

"Airbnb, Inc.": "ABNB",

"Alphabet Inc.": "GOOG",

"Amazon Inc": "AMZN",

"Amgen Inc.": "AMGN",

"Apple Inc.": "AAPL",

"Astrazeneca PLC": "AZN",

"Biogen Idec Inc.": "BIIB",

"Bumble Inc.": "BMBL",

"Cenovus Energy Inc": "CVE",

"Chevron Corporation": "CVX",

"Cigna Corporation": "CI",

"Dollar Tree, Inc.": "DLTR",

"EQT Corporation": "EQT",

"Electronic Arts Inc.": "EA",

"Exxon Mobil Corporation": "XOM",

"FedEx Corporation": "FDX",

"General Dynamics Corporation": "GD",

"GitLab Inc.": "GTLB",

"H&R Block, Inc.": "HRB",

"Johnson & Johnson": "JNJ",

"Lockheed Martin Corporation": "LMT",

"Merck & Company, Inc.": "MRK",

"Monster Beverage Corporation": "MNST",

"NIO Inc.": "NIO",

"Phillips 66": "PSX",

"Royalty Pharma plc": "RPRX",

"SM Energy Company": "SM",

"Verizon Communications Inc.": "VZ",

"Zoom Video Communications, Inc.": "ZM",
}

export const STOCKTYPE = {
    Agriculture: [{DE:"Deere & Co."},{MOS:"Mosaic Company"}, {ALG: "Alamo Group Inc."}, {SEB: "Seaboard Corp."}],
    Banking: [{TD: "Toronto Dominion Bank"}, {RY: "Royal Bank of Canada"}, {BMO: "Bank of Montreal"}, {CM: "Canadian Imperial Bank of Commerce"}, {JPM: "JPMorgan Chase & Co."}],
    Engineering: [{AMZN: "Amazon.com Inc."}, {GOOG: "Alphabet Inc."}, {AMD: "Advanced Micro Devices Inc."}, {INTC: "Intel Corp."}, {TM: "Toyota Motor Corp."}],
    Energy: [{SU: "Suncor Energy Inc."},{ENB: "Enbridge Inc."},{CNQ: "Canadian Natural Resources Ltd."},{XOM: "Exxon Mobil Corp."},{CVX: "Chevron Corp."}],
    Software: [{NVDA: "Nvidia Corp."}, {SHOP: "Shopify Inc."}, {MSFT: "Microsoft Corp."}, {TWTR: "Twitter Inc."}, {SPOT: "Spotify Technology S.A."}, {TSM: "Taiwan Semiconductor Manufactoring"}],
    Mining: [{SLI :"Standard Lithium Ltd"}, {FCU: "Fission Uranium Corp"}, {GOLD: "GoldMining Inc"}],
    Insurance: [{SLF: "Sun Life Financial Inc."}, {GWO:"Great-West Lifeco Inc"}, {BRK: "Berkshire Hathaway Inc."}, {FNF: "Fidelity National Financial Inc."}],
    Telecom: [{T: "AT&T, Inc."}, {QCOM: "Qualcomm Inc."}, {CSCO: "Cisco Systems Inc."}, {BCE: "BCE Inc."}]
}

export const TIMEINTERVAL = {
    "5m": "function=TIME_SERIES_INTRADAY&interval=1min",
    "1D": "function=TIME_SERIES_INTRADAY&interval=60min",
    "1W": "function=TIME_SERIES_DAILY",
    "1Y": "function=TIME_SERIES_WEEKLY"
}


