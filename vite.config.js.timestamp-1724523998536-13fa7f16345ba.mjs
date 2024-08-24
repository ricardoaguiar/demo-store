// vite.config.js
import { defineConfig } from "file:///Volumes/4TSSD/ecomm-demo/node_modules/vite/dist/node/index.js";
import vue from "file:///Volumes/4TSSD/ecomm-demo/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueDevTools from "file:///Volumes/4TSSD/ecomm-demo/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import Components from "file:///Volumes/4TSSD/ecomm-demo/node_modules/unplugin-vue-components/dist/vite.js";
import { fileURLToPath, URL } from "node:url";
var __vite_injected_original_import_meta_url = "file:///Volumes/4TSSD/ecomm-demo/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    VueDevTools(),
    vue(),
    Components({
      dirs: ["src/components"],
      extensions: ["vue"],
      deep: true
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      "@types": fileURLToPath(new URL("./types", __vite_injected_original_import_meta_url))
      // add this for types
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVm9sdW1lcy80VFNTRC9lY29tbS1kZW1vXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVm9sdW1lcy80VFNTRC9lY29tbS1kZW1vL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Wb2x1bWVzLzRUU1NEL2Vjb21tLWRlbW8vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgVnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGgsIFVSTCB9IGZyb20gJ25vZGU6dXJsJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIFZ1ZURldlRvb2xzKCksXG4gICAgdnVlKCksXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICBkaXJzOiBbJ3NyYy9jb21wb25lbnRzJ10sXG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZSddLFxuICAgICAgZGVlcDogdHJ1ZSxcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICdAdHlwZXMnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vdHlwZXMnLCBpbXBvcnQubWV0YS51cmwpKSwgLy8gYWRkIHRoaXMgZm9yIHR5cGVzXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZQLFNBQVMsb0JBQW9CO0FBQzFSLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLGVBQWUsV0FBVztBQUp1SCxJQUFNLDJDQUEyQztBQU8zTSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFDWixJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDVCxNQUFNLENBQUMsZ0JBQWdCO0FBQUEsTUFDdkIsWUFBWSxDQUFDLEtBQUs7QUFBQSxNQUNsQixNQUFNO0FBQUEsSUFDUixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxNQUNwRCxVQUFVLGNBQWMsSUFBSSxJQUFJLFdBQVcsd0NBQWUsQ0FBQztBQUFBO0FBQUEsSUFDN0Q7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
