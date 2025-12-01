import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import pluginCypress from 'eslint-plugin-cypress';
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,vue}", "cypress/**/*.js"], 
    plugins: { 
      js, 
      cypress: pluginCypress,
    }, 
    extends: ["js/recommended", 
      pluginCypress.configs.recommended,
    ], 
    languageOptions: { 
      globals: globals.browser 
    } 
  },
  pluginVue.configs["flat/recommended"],
]);
