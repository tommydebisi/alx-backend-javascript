/* eslint-disable jest/require-hook */
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
  const data = process.stdin.read();

  if (data) {
    // eslint-disable-next-line prefer-template
    process.stdout.write('Your name is: ' + data);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
