import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/DevToolsPlugin.js',
  output: {
    file: 'dist/DevToolsPlugin.js',
    format: 'iife'
  },
  plugins: [nodeResolve({
    resolveOnly: ['@wdio/chrome-recorder', '@puppeteer/replay']
  })]
};
