import type { Component } from "solid-js";
import { Steps } from "./components/Steps";
import logo from "./public/solid.svg";
import zerops from "./public/zerops.svg";

import styles from "./App.module.css";
import { Register } from "./components/Register";


const App: Component = () => {

  return (
    <div class={styles.App}>
          <div class={styles.sidebar}>
        <div class={styles.logos}>
          <a href="https://solidjs.com/" target="_blank">
          <img src={logo} class={styles.logo} alt="solidjs logo" />
          </a>
          <a href="https://zerops.io/" target="_blank">
          <img src={zerops} class={styles.logo} alt="zerops logo" />
          </a>
          </div>
          <div class="mt-20 flex flex-col items-center">
           <a href="https://discord.gg/5ptAqtpyvh" target="_blank"><button class={styles.secondarybutton}>Discord Community</button> </a>
           <a href="https://docs.zerops.io/" target="_blank"><button class={styles.primarybutton} >Zerops Docs</button></a>
          </div>
      </div>
      <div class={styles.main}>
        <div class="p-1 ml-5 mt-52 mb-8">
          <div class=" mb-10">
            <p class="text-xl font-medium text-[#477ABE] bg-[#EEF4FA] border border-dashed border-[#97C6F7] max-w-3xl px-4 py-3 rounded-sm">_💡 Check out our other <a href="https://www.github.com/zeropsio" target="_blank" class="font-semibold">recipes / examples</a> and test them on <a href="https://zerops.io" target="_blank" class="font-semibold">Zerops</a></p>
          </div>
          <div>
          <h1 class="text-6xl font-semibold justify-start mb-6">Solid.js + Zerops</h1>
          <span class="px-40 bg-[#568FCB]"></span>
          <div class="text-[#568FCB] text-2xl font-medium mt-8">
          <p class="max-w-4xl">A Static Solid.js example for Zerops which you can deploy in 2 simple steps (Technically, we don't count Ctrl + V... but who's checking?). </p>
          <p>Scroll down to learn how to deploy.</p>
          </div>
          <div class="max-w-3xl">
            <Steps />
            </div>
            <p class="text-[#568FCB] font-medium">Powered By <a href="https://zerops.io/" class="font-bold" target="_blank">Zerops</a></p>
          </div>
        </div>
      </div>
      <Register />
    </div>
  );
};

export default App;
