<template>
  <div class="flex gap-4">
    <!-- Input area -->
    <textarea v-model="input"
              class="w-1/2 h-[85vh] p-2 resize-none font-semibold rounded-xl text-white bg-white/10 backdrop-blur-md border border-white/20 outline-none"
              placeholder="Type expressions here"></textarea>

    <!-- Output area -->
    <div class="flex flex-col w-1/2 h-[85vh]">
      <!-- Rendered math -->
      <div ref="rendered"
           class="flex-1 overflow-auto p-2 rounded-xl text-white bg-white/10 backdrop-blur-md border border-white/20"
           :style="{ fontSize: scale + '%' }"></div>

      <!-- Slider + buttons -->
      <div class="flex items-center gap-2 mt-2 text-white">
        <label for="scale">Scale:</label>
        <input type="range"
               id="scale"
               min="50"
               max="300"
               step="10"
               v-model="scale"
               class="accent-black" />
        <span>{{ scale }}%</span>

        <button @click="clearInput">Clear</button>

        <span class="text-gray-500">|</span>

        <button>Load</button>
        <button>Save</button>
      </div>
    </div>
  </div>
</template>


<script>
import 'katex/dist/katex.min.css';
import { renderLatex } from '../../api/latexParser';

export default {
  name: 'LatexEditor',
  data() {
    return {
      input: 'x^2 + y/2 = z',
      scale: 100
    };
  },
  watch: {
    input() {
      this.updateRenderedLatex();
    }
  },
  mounted() {
    this.updateRenderedLatex();
  },
  methods: {
    updateRenderedLatex() {
        try {
            this.$refs.rendered.innerHTML = renderLatex(this.input);
        } catch (err) {
            this.$refs.rendered.innerHTML = "<span style='color:red;'>Error 😭</span>";
        }
     },
    clearInput() {
      this.input = '';
      this.updateRenderedLatex();
    }
  }
};
</script>
