import typescript from "rollup-plugin-typescript2";
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external'; // expect packages in peerDependecies
import pkg from "./package.json";

const extensions = [".ts", ".tsx"];
const input = "src/index.ts";

const plugins = [
    external(),
    resolve({ extensions }),
    postcss({
        plugins: [],
        minimize: true
    }),
    typescript({
        typescript: require("typescript"),
    }),
];

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
    plugins,
  },
  {
    input,
    output: {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    plugins,
  },
];