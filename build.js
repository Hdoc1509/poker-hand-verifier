const { build } = require('esbuild');

const options = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  supported: {
    arrow: false,
  },
};

build({
  ...options,
  format: 'cjs',
  outfile: 'cjs/index.cjs',
  target: 'node12',
});

build({
  ...options,
  format: 'esm',
  outfile: 'esm/index.mjs',
  target: 'es6',
});

build({
  ...options,
  format: 'iife',
  outfile: 'dist/poker-hand-verifier.min.js',
  minify: true,
  target: 'es6',
  globalName: 'verificateHand',
});
