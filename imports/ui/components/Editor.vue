<template>
  <div class="flex gap-1 py-2">
    <!-- Input area -->
    <textarea v-model="input"
              class="w-1/2 h-[80vh] resize-none font-semibold text-white custom-background"
              placeholder="Type expressions here"></textarea>

    <!-- Output area -->
    <div class="flex flex-col w-1/2 h-[80vh]">
      <!-- Rendered math -->
      <div ref="rendered"
           class="flex-1 overflow-auto text-white custom-background"
           :style="{ fontSize: scale + '%' }"></div>

      <!-- Slider + buttons -->
      <div class="flex items-center gap-2 mt-1 text-white font-semibold">
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
