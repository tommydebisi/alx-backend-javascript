const { readFile } = require('fs');

function countStudents(file) {
  return new Promise((resolve, reject) => {
    readFile(file, { encoding: 'utf-8', flag: 'r' }, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const dList = data.split('\n');

        const cs = [];
        const swe = [];

        let kList = [];
        for (const key of dList) {
          kList = key.split(',');
          // eslint-disable-next-line no-continue
          if (kList[0] === 'firstname') { continue; }

          if (kList.slice(-1)[0] === 'CS') {
            cs.push(kList[0]);
          } else if (kList.slice(-1)[0] === 'SWE') {
            swe.push(kList[0]);
          }
        }

        const endStr = `Number of students: ${cs.length + swe.length}`;
        const endSt1 = `Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`;
        const endSt2 = `Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`;

        resolve(console.log([endStr, endSt1, endSt2].join('\n')));
      }
    });
  });
}

module.exports = countStudents;
