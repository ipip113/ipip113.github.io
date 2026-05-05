import https from 'https';

const get = (url) => new Promise((resolve, reject) => {
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => resolve(data));
  }).on('error', reject);
});

async function run() {
  const html = await get('https://wuxia-world.vercel.app/');
  const matches = [...html.matchAll(/src="(\/_next\/static\/chunks\/[^"]+)"/g)];
  for (const m of matches.slice(0, 5)) {
    const js = await get('https://wuxia-world.vercel.app' + m[1]);
    const classes = [...js.matchAll(/className:[^}]+/g)].map(x => x[0].substring(0, 100));
    if(classes.length > 0) {
      console.log('--- ' + m[1] + ' ---');
      console.log(classes.slice(0, 20).join('\n'));
    }
  }
}
run();
