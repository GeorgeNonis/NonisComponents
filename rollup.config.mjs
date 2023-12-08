import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import analyze from "rollup-plugin-analyzer";
import autoExternal from "rollup-plugin-auto-external";

const plugins = [
  PeerDepsExternalPlugin(),
  postcss(),
  resolve(),
  commonjs(),
  typescript({
    tsconfigOverride: {
      exclude: [
        "**/*.stories.tsx",
        "**/*.test.tsx",
        "src/Theme",
        "src/setupTests.ts",
      ],
    },
    useTsconfigDeclarationDir: true,
  }),
  json(),
  analyze({ summaryOnly: true }),
  autoExternal(),
];

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins,
    // plugins: [
    //   postcss({
    //     plugins: [],
    //     minimize: true,
    //   }),
    //   babel({
    //     exclude: "node_modules/**",
    //     presets: ["@babel/preset-react"],
    //   }),
    //   external(),
    //   resolve(),
    //   terser(),
    //   typescript({
    //     tsconfigOverride: {
    //       exclude: [
    //         "**/*.stories.tsx",
    //         "**/*.test.tsx",
    //         "src/Theme",
    //         "src/setupTests.ts",
    //       ],
    //     },
    //     useTsconfigDeclarationDir: true,
    //   }),
    // ],
  },
];
