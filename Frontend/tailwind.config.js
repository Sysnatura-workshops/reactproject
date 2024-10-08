/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this path according to your project structure
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom': "url('/src/assets/image11.png')",
      },
      backgroundPosition: {
        'custom-pos': '0% 33%',
      },
      spacing: {
        '2.5': '0.625rem', // Conversion for m-2.5
        '23px': '23px',
        '26px': '26px',
        '46px': '46px',
        '79px': '79px',
        '119px': '119px',
        '156px': '156px',
        '221.91px': '221.91px',
        '259px': '259px',
        '295px': '295px',
        '307px': '307px',
        '314px': '314px',
        '384px': '384px',
        '466px': '466px',
        '500px': '500px',
        '510px': '510px',
        '602px': '602px',
        '870px': '870px',
        '100px': '100px', // Added for convenience
        '147.31px': '147.31px',
      },
      height: {
        '49.63px': '49.63px',
        '135px': '135px',
        '296px': '296px',
        '324px': '324px',
        '36px': '36px',
        '870px': '870px',
      },
      width: {
        '221.91px': '221.91px',
        '259px': '259px',
        '307px': '307px',
        '384px': '384px',
        '466px': '466px',
        '500px': '500px',
        '510px': '510px',
        '602px': '602px',
        '79px': '79px',
        '147.31px': '147.31px',
      },
      fontSize: {
        '15px': '15px',
        '14px': '14px',
        '20px': '20px',
        '36px': '36px',
      },
      lineHeight: {
        '20.43px': '20.43px',
        '20px': '20px',
        '24.74px': '24.74px',
        '42.05px': '42.05px',
        '49.63px': '49.63px',
      },
      borderRadius: {
        '5px': '5px',
        '10px': '10px',
      },
      borderWidth: {
        '1px': '1px',
      },
      opacity: {
        '45': '0.45',
        '50': '0.50',
      },
      inset: {
        // Custom values for top, bottom, left, right
        '15px': '15px',
        '16px': '16px',
        '19px': '19px',
        '20px': '20px',
        '23px': '23px',
        '26px': '26px',
        '31px': '31px',
        '43px': '43px',
        '71px': '71px',
        '102px': '102px',
        '156px': '156px',
        '262px': '262px',
        '295px': '295px',
        '314px': '314px',
        '814px': '814px',
      },
      margin: {
        // Custom margin values
        '2.5': '0.625rem',
        '10px': '10px',
        '23px': '23px',
        '26px': '26px',
        '46px': '46px',
        '50px': '50px',
        '79px': '79px',
        '119px': '119px',
        '156px': '156px',
        '221.91px': '221.91px',
        '259px': '259px',
        '295px': '295px',
        '283px': '283px',
        '307px': '307px',
        '314px': '314px',
        '384px': '384px',
        '466px': '466px',
        '500px': '500px',
        '510px': '510px',
        '602px': '602px',
        '870px': '870px',
        '100px': '100px',
        '147.31px': '147.31px',
      },
      gap: {
        // Custom gap values
        '12px': '12px',
        '26px': '26px',
        '100px': '100px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

