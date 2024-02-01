import { babel } from '@rollup/plugin-babel';
import filesize from 'rollup-plugin-filesize';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.esm.js',
        format: 'cjs'
    },
    external: [/@babel\/runtime/, 'react'],
    plugins: [
        babel({ babelHelpers: 'runtime', plugins: ['@babel/plugin-transform-runtime'] }),
        // filesize(),
    ],
};