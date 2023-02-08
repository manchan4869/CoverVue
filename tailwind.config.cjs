/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Inter: ['Inter', 'sans-serif'],
        // Poppins: ['Poppins', 'sans-serif'],
        // Anek: ['Anek Latin', 'sans-serif'],
        // Nunito: ['Nunito', 'sans-serif'],
        SourceSerif: ['Noto Serif SC', 'serif'],
        SourceSans: ['Noto Sans SC', 'sans-serif'],
        HarmonyOS: ['HarmonyOS_Medium', 'sans-serif'],
        misans: ['misans', 'sans-serif'],
        Smiley: ['Smiley Sans Oblique', 'sans-serif'],
        BWCKKT: ['BWCKKT', 'sans-serif'],
        Cubic: ["'Cubic 11'", 'sans-serif'],
        DOUYU: ["'DOUYU Font'", 'sans-serif'],
        jxzk: ['jiangxizhuokai', 'sans-serif'],
        lxgwwenkai: ["'LXGW WenKai'", 'sans-serif'],
        mksjh: ['MaokenAssortedSans', 'sans-serif'],
        tjl: ['Tiejili', 'sans-serif'],
        ysbth: ['YouSheBiaoTiHei', 'sans-serif']
      }
    }
  },
  plugins: []
}
