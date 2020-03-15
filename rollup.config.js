import path from 'path';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: './dist',
      entryFileNames: path.basename(pkg.main),
      format: 'cjs',
    },
    {
      dir: './dist',
      entryFileNames: path.basename(pkg.module),
      format: 'esm',
    },
  ],
  external: [
    'axios',
  ],
  plugins: [
    terser(),
    typescript(),
  ],
};
