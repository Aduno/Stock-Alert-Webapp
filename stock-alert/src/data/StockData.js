export const STOCKS = {
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
    DLTR: 'Dollar Tree, Inc.',
    EA: 'Electronic Arts Inc.',
    EQT: 'EQT Corporation',
    FDX: 'FedEx Corporation',
    GD: 'General Dynamics Corporation',
    GOOG: 'Alphabet Inc.',
    GTLB: 'GitLab Inc.',
    HRB: 'H&R Block, Inc.',
    JNJ: 'Johnson & Johnson',
    LMT: 'Lockheed Martin Corporation',
    MNST: 'Monster Beverage Corporation',
    MRK: 'Merck & Company, Inc.',
    NIO: 'NIO Inc.',
    PSX: 'Phillips 66',
    RPRX: 'Royalty Pharma plc',
    SM: 'SM Energy Company',
    T: 'AT&T Inc.',
    VZ: 'Verizon Communications Inc.',
    XOM: 'Exxon Mobil Corporation',
    ZM: 'Zoom Video Communications, Inc.'
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


