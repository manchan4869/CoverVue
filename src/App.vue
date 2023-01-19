<script setup>
import { ref, reactive, onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import html2canvas from "html2canvas"
const imgDom = ref()
const option = reactive({
  title: 'qwwqwqwqwqwwq',
  author: ''
})

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
    console.log(imgUrl);
    // window.open(imgUrl)

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
</script>


<template>
  <div>
    <div class="text-xl bg-white flex border-b border-gray-100 p-2">
      <a class="flex items-center" href="/">
        <!-- <img src="/static/media/logo.5d3dd1b68da4b08fcf92.png" alt="logo" class="w-8 h-8 mx-4"> -->
        <h1 class="font-semibold">Coverview</h1>
      </a>
      <div class="ml-auto md:mr-4 ">
        <a class="text-gray-700 hover:text-gray-800 text-base font-Nunito mx-4" href="/faq">
          <span class="hidden md:inline-block">How to use</span>
        </a>
        <a href="https://www.buymeacoffee.com/rutikwankhade" target="_blank" rel="noreferrer"
          class="text-base mx-2 font-Nunito">🥤
          <span class="hidden md:inline-block">Buy me a coffee</span>
        </a>
        <a href="https://twitter.com/intent/tweet?text=type%20your%20thoughts%20here%2C%20Try%20https%3A%2F%2Fcoverview.vercel.app%20by%20%40WankhadeRutik"
          class="mx-2 bg-blue-400 md:text-sm text-xs rounded-full px-4 font-semibold text-white p-1">Share on
          Twitter</a>
      </div>
    </div>
    <div class="flex md:flex-row flex-col bg-gray-50 " style="height: calc(100vh - 48.8px);">
      <div class="bg-white shadow-sm p-4 flex flex-col md:w-1/4 overflow-auto">
        <div class="m-2 flex flex-col">
          <span class="font-medium">博客标题</span>
          <textarea type="text" placeholder="Enter title here"
            class="focus:outline-none border text-gray-700 text-xl rounded p-2 h-24"
            v-model="option.title">How I built my first project with react</textarea>
        </div>
        <div class="flex flex-col m-2 ">
          <span class="font-medium">作者</span>
          <input type="text" placeholder="Author"
            class="focus:outline-none border text-gray-700 text-xl rounded bg-white p-2" value="Rutik Wankhade">
        </div>
        <div class="flex items-center">
          <div class="flex flex-col m-2 w-1/2">
            <span class="font-medium">Font</span>
            <select class="focus:outline-none text-gray-700 text-xl p-2 rounded border">
              <option>font-serif</option>
              <option>font-sans</option>
              <option>font-mono</option>
              <option>font-Inter</option>
              <option>font-Poppins</option>
              <option>font-Anek</option>
              <option>font-Nunito</option>
            </select>
          </div>
          <div class="flex flex-col m-2 ">
            <span class="font-medium">Color</span>
            <div class="border rounded flex items-center p-2">
              <span class="text-sm text-gray-700 font-semibold mx-2">#ffe9e3</span>
              <input type="color" class="h-8 w-8  rounded" value="#ffe9e3">
            </div>
          </div>
        </div>
        <div class="flex flex-col m-2 ">
          <span class="font-medium">Icon</span>
          <div class="outline-none focus:outline-none text-xl text-gray-700 css-2b097c-container">
            <div class=" css-yk16xz-control">
              <div class=" css-g1d714-ValueContainer">
                <div class=" css-1uccc91-singleValue">
                  <div class="flex">
                    <span class="mr-2">react</span>
                    <div class="ml-auto mr-2">
                      <i class="devicon-react-plain dev-icon text-2xl">
                      </i>
                    </div>
                  </div>
                </div>
                <div class="css-b8ldur-Input">
                  <div class="" style="display: inline-block;">
                    <input autocapitalize="none" autocomplete="off" autocorrect="off" id="react-select-3-input"
                      spellcheck="false" tabindex="0" type="text" aria-autocomplete="list" value=""
                      style="box-sizing: content-box; width: 2px; background: 0px center; border: 0px; font-size: inherit; opacity: 1; outline: 0px; padding: 0px; color: inherit;">
                    <div
                      style="position: absolute; top: 0px; left: 0px; visibility: hidden; height: 0px; overflow: scroll; white-space: pre; font-size: 20px; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-weight: 400; font-style: normal; letter-spacing: normal; text-transform: none;">
                    </div>
                  </div>
                </div>
              </div>
              <div class=" css-1hb7zxy-IndicatorsContainer">
                <span class=" css-1okebmr-indicatorSeparator">
                </span>
                <div aria-hidden="true" class=" css-tlfecz-indicatorContainer">
                  <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false"
                    class="css-6q0nyr-Svg">
                    <path
                      d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
                    </path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
        <div class="flex">
          <div class="flex flex-col m-2 w-1/2">
            <span class="font-medium">Pattern</span>
            <select class="focus:outline-none border text-xl p-2 rounded">
              <option>none</option>
              <option>graph-paper</option>
              <option>jigsaw</option>
              <option>hideout</option>
              <option>dots</option>
              <option>falling-triangles</option>
              <option>circuit-board</option>
              <option>temple</option>
              <option>anchors</option>
              <option>brickwall</option>
              <option>overlapping-circles</option>
              <option>wiggle</option>
              <option>tic-tac-toe</option>
              <option>leaf</option>
              <option>bubbles</option>
              <option>squares</option>
              <option>explorer</option>
              <option>jupiter</option>
              <option>sun</option>
            </select>
          </div>
          <div class="flex flex-col m-2 w-1/2">
            <span class="font-medium">Theme</span>
            <select class="focus:outline-none text-gray-700 text-xl p-2 rounded border">
              <option>stylish</option>
              <option>modern</option>
              <option>basic</option>
              <option>preview</option>
              <option>outline</option>
            </select>
          </div>
        </div>
        <div class="flex flex-col m-2">
          <span class="font-medium">Platform</span>
          <select class="focus:outline-none text-gray-700 text-xl p-2 rounded border">
            <option>hashnode</option>
            <option>dev</option>
          </select>
        </div>
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
              <div class="overflow-y-hidden flex  text-gray-800 items-center  hashnode "
                style="background-color: rgb(255, 233, 227);">
                <div class="font-Anek bg-white md:w-10/12  m-auto flex flex-col pt-12 rounded-xl">
                  <div class="px-12">
                    <div>
                      <h1 class="text-3xl md:text-5xl text-gray-800 font-bold text-center">{{ option.title }}</h1>
                    </div>
                  </div>
                  <div class=" flex mx-4  p-4 rounded-xl items-center bg-white">
                    <div class="mr-auto ml-2 items-center justify-center flex">
                      <i class="devicon-react-plain  p-4 dev-icon text-5xl">
                      </i>
                    </div>
                    <h2 class="text-xl ml-auto mr-2 font-semibold">Rutik Wankhade</h2>
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
          <span class="mx-2">Download</span>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>
