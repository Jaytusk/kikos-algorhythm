
// This is a simplified but functional loader for ASCII-style animations
// using the run() function structure from play.ertdfgcvb.xyz

export function run(sketch, settings = {}) {
  const pre = settings.element || document.createElement('pre');
  pre.style.whiteSpace = 'pre';
  pre.style.margin = 0;
  pre.style.fontFamily = 'monospace';
  pre.style.fontSize = (settings.fontSize || 13) + 'px';
  pre.style.backgroundColor = settings.backgroundColor || 'black';
  pre.style.color = settings.color || 'white';
  document.body.appendChild(pre);

  const cols = 80;
  const rows = 40;
  const buffer = Array(cols * rows).fill({ char: ' ' });

  const context = {
    frame: 0,
    cols,
    rows,
    metrics: {
      fontSize: settings.fontSize || 13,
      aspect: 2
    }
  };

  const cursor = {
    x: 0,
    y: 0,
    pressed: false
  };

  const data = {};

  if (typeof sketch.boot === 'function') sketch.boot(context, buffer, data);

  function draw() {
    if (typeof sketch.pre === 'function') sketch.pre(context, cursor, buffer, data);

    let output = '';
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const index = y * cols + x;
        const char = sketch.main({ x, y, index }, context, cursor, buffer, data);
        output += (char && typeof char === 'string') ? char : ' ';
      }
      output += '\n';
    }

    pre.textContent = output;

    context.frame++;
    requestAnimationFrame(draw);
  }

  draw();
}
