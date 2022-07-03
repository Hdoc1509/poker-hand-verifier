const { build } = require('esbuild');
const { globPlugin } = require('esbuild-plugin-glob');

const options = {
  entryPoints: ['src/*.ts'],
  plugins: [globPlugin()],
};

build({
  ...options,
  format: 'cjs',
  outdir: 'cjs'
});

build({
  ...options,
  format: 'esm',
  outdir: 'esm'
});
