<script setup>
import { ref, reactive, onMounted, computed } from 'vue';
import html2canvas from "html2canvas"

const imgDom = ref(), devIcon = ref([]), devIconFilter = ref('')
const option = reactive({
  title: 'Markdown首行缩进',
  author: 'manchan',
  platform: 'hashnode',
  font: 'font-Smiley',
  color: '#327aff',
  theme: 'basic',
  pattern: 'tic-tac-toe',
  icon: '',
  colored: false

})

const Theme = {
  stylish: '时尚',
  modern: '现代',
  basic: '基本',
  preview: '预览',
  outline: '轮廓'
}
const availableThemes = ['basic']
const Pattern = {
  none: '无',
  'graph-paper': '坐标纸',
  jigsaw: '拼图',
  hideout: '隐藏',
  dots: '点',
  'falling-triangles': '下三角',
  'circuit-board': '电路板',
  temple: '寺庙',
  anchors: '锚',
  brickwall: '砖墙',
  'overlapping-circles': '重叠圆',
  wiggle: '波纹',
  'tic-tac-toe': '井字棋',
  leaf: '树叶',
  bubbles: '气泡',
  squares: '正方形',
  explorer: '探险家',
  jupiter: '木星',
  sun: '太阳',
}
const Fonts = {
  'font-serif': '衬线字体',
  'font-sans': '无衬线字体',
  'font-mono': '等宽字体',
  'font-SourceSerif': '思源宋体',
  'font-SourceSans': '思源黑体',
  'font-HarmonyOS': 'HarmonyOS',
  'font-misans': 'MiSans',
  'font-Smiley': '得意黑',
  'font-ysbth': '优设标题黑',
  'font-BWCKKT': '白无常可可体',
  'font-Cubic': 'Cubic',
  'font-DOUYU': '斗鱼追光体',
  'font-jxzk': '江西拙楷',
  'font-lxgwwenkai': '霞鹜文楷',
  'font-mksjh': '猫啃什锦黑',
  'font-tjl': '铁蒺藜体',
}
const Platform = ['hashnode', 'dev', 'juejin']

const download = () => {

  html2canvas(imgDom.value, {
    scale: 2,
    letterRendering: true,
    taintTest: true,
    backgroundColor: null,
    scrollY: -window.scrollY,
    useCORS: true,
  }).then(canvas => {

    let imgUrl = canvas.toDataURL("image/png");
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = imgUrl;
      link.download = 'cover';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(imgUrl);
    }
    // const img = new Image()
    // img.src = imgUrl
    // const newWin = window.open('', '_blank')
    // newWin.document.write(img.outerHTML)
    // newWin.document.title = wjmc
    // newWin.document.close()
  })

}

fetch("https://gcore.jsdelivr.net/gh/devicons/devicon@latest/devicon.json").then(r => r.json()).then(data => {
  // data.push({ name: 'custom' })
  devIcon.value = [{ value: 'none', version: 'none' }, ...data.map(item => ({ value: item.name, version: item.versions.font[0] }))]
})
</script>

<template>
  <div class="flex md:flex-row flex-col bg-gray-50 " style="height: calc(100vh - 1.75rem - 18px);">
    <div class="bg-white shadow-sm p-4 flex flex-col md:w-1/4 overflow-auto">

      <!-- #region 标题 -->
      <div class="m-2 flex flex-col">
        <span class="font-medium">博客标题</span>
        <textarea type="text" placeholder="标题" class="focus:outline-none border text-gray-700 text-xl rounded p-2"
          v-model="option.title"></textarea>
      </div>
      <!-- #endregion -->

      <!-- #region 作者 -->
      <div class="flex flex-col m-2 ">
        <span class="font-medium">作者</span>
        <input type="text" placeholder="作者" class="focus:outline-none border text-gray-700 text-xl rounded bg-white p-2"
          v-model="option.author">
      </div>
      <!-- #endregion -->

      <div class="flex items-center">
        <!-- #region 字体 -->
        <div class="flex flex-col m-2 w-1/2">
          <span class="font-medium">字体</span>
          <select class="focus:outline-none text-gray-700 text-xl p-2 rounded border" v-model="option.font">
            <option v-for="(item, key, index) in Fonts" :label="item">{{ key }}</option>
          </select>
        </div>
        <!-- #endregion -->

        <!-- #region 颜色 -->
        <div class="flex flex-col m-2 w-1/2">
          <span class="font-medium">颜色</span>
          <div class="border rounded flex items-center p-2 justify-between">
            <label class="text-xl text-gray-700 mx-2" for="color">{{
              option.color
            }}</label>
            <input type="color" class="h-8 w-8  rounded" v-model="option.color" id="color">
          </div>
        </div>
        <!-- #endregion -->
      </div>

      <!-- #region 图标-->
      <div class="flex flex-col m-2 ">
        <span class="font-medium">图标</span>
        <div class="flex">
          <input type="search" class="focus:outline-none text-gray-700  p-1 px-3 rounded-tl flex-auto border border-b-0"
            v-model="devIconFilter" placeholder="过滤">
          <div class="w-16 border-t border-r rounded-tr flex justify-center items-center">
            <label for="colored" class="text-gray-500 align-middle mr-1">上色</label>
            <input type="checkbox" class="w-4 h-4" id="colored" v-model="option.colored">
          </div>

        </div>

        <select class="focus:outline-none text-gray-700 text-xl p-2 rounded border rounded-t-none" v-model="option.icon"
          size="5">
          <option v-for="(item, index) in devIcon.filter((x) => {
            return x.value.includes(devIconFilter.toLowerCase())
          })" :key="index" :class="[`devicon-${item.value}-${item.version}`, { colored: option.colored }]"
            class="pl-2 capitalize " :label="item.value"> {{ `devicon-${item.value}-${item.version}` }}
          </option>
        </select>
      </div>
      <!-- #endregion -->

      <div class=" flex">
        <!-- #region 图案-->
        <div class="flex flex-col m-2 w-1/2">
          <span class="font-medium">图案</span>
          <select class="focus:outline-none border text-xl p-2 rounded" v-model="option.pattern">
            <option v-for="(value, key, index) in Pattern" :key="index" :label="value">{{ key }}</option>
          </select>
        </div>
        <!-- #endregion -->

        <!-- #region 主题-->
        <div class="flex flex-col m-2 w-1/2">
          <span class="font-medium">主题</span>
          <select class="focus:outline-none text-gray-700 text-xl p-2 rounded border" v-model="option.theme">
            <option v-for="(value, key, index) in Theme" :key="index"
              :label="value + (availableThemes.includes(key) ? '' : '🛠')" disabled="!availableThemes.includes(key)"
              :title="availableThemes.includes(key) ? '' : '开发中'"> {{ key }}</option>
          </select>
        </div>
        <!-- #endregion -->
      </div>

      <!-- #region 平台-->
      <div class="flex flex-col m-2">
        <span class="font-medium">平台</span>
        <select class="focus:outline-none text-gray-700 text-xl p-2 rounded border" v-model="option.platform">
          <option v-for="item in Platform">{{ item }}</option>
        </select>
      </div>
      <!-- #endregion -->
    </div>
    <div class="m-2 items-center justify-center flex flex-col">
      <div class="shuffle-btn border bg-white p-2 rounded cursor-pointer">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-shuffle" fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z">
          </path>
          <path
            d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z">
          </path>
        </svg>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center flex-auto">
      <div ref="imgDom">
        <div class="md:w-full md:scale-100 scale-50">
          <div class="p-4 bg-white border">
            <div class="overflow-y-hidden flex  text-gray-800 items-center" :class="[option.platform, option.pattern]"
              :style="`background-color:${option.color}`">
              <div class="bg-white md:w-10/12  m-auto flex flex-col pt-12 rounded-xl" :class="option.font">
                <div class="px-12">
                  <div>
                    <h1
                      class="text-3xl md:text-7xl text-gray-800 font-bold text-center break-words	whitespace-pre-wrap">
                      {{ option.title }}</h1>
                  </div>
                </div>
                <div class=" flex mx-4  p-4 rounded-xl items-center bg-white">
                  <div class="mr-auto ml-2 items-center justify-center flex">
                    <i class="p-4 dev-icon text-5xl"
                      :class="[option.icon || 'devicon-markdown-plain', { colored: option.colored }]">
                    </i>
                  </div>
                  <h2 class="text-4xl ml-auto mr-2 font-semibold">{{ option.author }}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="border p-2 bg-gray-700 hover:bg-gray-800 flex items-center text-white text-xl rounded-lg m-4 px-4 z-10"
        @click="download">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4">
          </path>
        </svg>
        <span class="mx-2">下载</span>
      </button>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@900&display=swap');
@import url('https://s1.hdslb.com/bfs/static/jinkela/long/font/medium.css');
@import 'misans';
@import '@chinese-fonts/dyh/dist/SmileySans-Oblique/result.css';
@import '@chinese-fonts/bwckkt/dist/白无常可可体-Regular/result.css';
@import "@chinese-fonts/cubic/dist/Cubic/result.css";
@import "@chinese-fonts/dyzgt/dist/斗鱼追光体/result.css";
@import "@chinese-fonts/jxzk/dist/江西拙楷/result.css";
@import "@chinese-fonts/lxgwwenkai/dist/LXGWWenKai-Regular/result.css";
@import "@chinese-fonts/mksjh/dist/MaokenAssortedSans1.30/result.css";
@import "@chinese-fonts/tjl/dist/Tiejili Regular/result.css";
@import "@chinese-fonts/ysbth/dist/优设标题黑/result.css";
@import url('../assets/CoverImage.css');
@import url('../assets/patterns.css');

option[class^=devicon-]::before {
  float: right;
  margin-top: 1.5px;
  font-size: 1.2em;
}

.font-Cubic h1 {
  line-height: 1.2;
}

.font-mksjh h1 {
  font-weight: normal;
}
</style>