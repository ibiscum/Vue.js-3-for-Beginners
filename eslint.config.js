import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";
import pluginCypress from 'eslint-plugin-cypress'

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
