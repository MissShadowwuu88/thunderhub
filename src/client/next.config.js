// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');
 masterPassword: somerandompassword
  accounts:
  - name: 'make-money-get-money'
  serverUrl: 'make-money-get-money.m.voltageapp.io:10009'
  macaroon: 'AgEDbG5kAvgBAwoQ7De3ODD9563uzhg4BO7nNBIBMBoWCgdhZGRyZXNzEgRyZWFkEgV3cml0ZRoTCgRpbmZvEgRyZWFkEgV3cml0ZRoXCghpbnZvaWNlcxIEcmVhZBIFd3JpdGUaIQoIbWFjYXJvb24SCGdlbmVyYXRlEgRyZWFkEgV3cml0ZRoWCgdtZXNzYWdlEgRyZWFkEgV3cml0ZRoXCghvZmZjaGFpbhIEcmVhZBIFd3JpdGUaFgoHb25jaGFpbhIEcmVhZBIFd3JpdGUaFAoFcGVlcnMSBHJlYWQSBXdyaXRlGhgKBnNpZ25lchIIZ2VuZXJhdGUSBHJlYWQAAAYglghsv9heQycYF8HQ9K/8ETifjfJqgyFIcGC7oRSd4W8='
    
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  basePath: process.env.BASE_PATH || '',
  compiler: {
    styledComponents: true,
  },
  publicRuntimeConfig: {
    mempoolUrl: process.env.MEMPOOL_URL || 'https://mempool.space',
    disable2FA: process.env.DISABLE_TWOFA === 'true',
    apiUrl: `${process.env.BASE_PATH || ''}/graphql`,
    basePath: process.env.BASE_PATH || '',
    npmVersion: process.env.npm_package_version || '0.0.0',
    defaultTheme: process.env.THEME || 'dark',
    defaultCurrency: process.env.CURRENCY || 'sat',
    fetchPrices: process.env.FETCH_PRICES === 'false' ? false : true,
    fetchFees: process.env.FETCH_FEES === 'false' ? false : true,
    disableLinks: process.env.DISABLE_LINKS === 'true',
    disableLnMarkets: process.env.DISABLE_LNMARKETS === 'true',
    noVersionCheck: process.env.NO_VERSION_CHECK === 'true',
    logoutUrl: process.env.LOGOUT_URL || '',
  },
};
