// import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
// import filesize from 'rollup-plugin-filesize';

export default {
  input: 'src/index.ts',
  output: [
    {
      file:'dist/index.esm.js',
      format: 'cjs'
    },
  ],
  // external: [/@babel\/runtime/, 'react'],
  plugins: [
    // babel({babelHelpers: 'runtime', plugins: ['@babel/plugin-transform-runtime'] }),
     // filesize(),
    typescript()
  ],
};