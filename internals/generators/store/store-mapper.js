const fs = require('fs');

const sagaPath = './src/app/store/sagas.ts';
const rootReducerPath = 'src/app/store/rootReducer.ts';

module.exports = (storeName) => {
  fs.readFile(sagaPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    let sagaFile = data;

    const sagaReferenceOne = '\n\nexport default [';
    const sagaPositionerOne = sagaFile.split(sagaReferenceOne);
    const sagaName = `${storeName.toLowerCase()}Sagas`;
    const sagaImport = `\nimport {sagas as ${sagaName}} from './${storeName}';`;
    sagaPositionerOne.splice(1, 0, sagaImport);
    sagaPositionerOne.splice(2, 0, sagaReferenceOne);

    sagaFile = sagaPositionerOne.join('');
    const sagaReferenceTwo = '];';
    const sagaPositionerTwo = sagaFile.split(`${sagaReferenceTwo}`);
    sagaPositionerTwo.splice(1, 0, `,\n\t${sagaName}\n`);
    sagaPositionerTwo.splice(2, 0, sagaReferenceTwo);
    sagaFile = sagaPositionerTwo.join('');

    fs.open(sagaPath, 'w', (err, fd) => {
      if (err) {
        console.log(err); // eslint-disable-line
      }

      fs.write(fd, sagaFile, 0, sagaFile.length, (err) => {
        if (err) {
          console.log(err); // eslint-disable-line
        }
      });
    });
  });

  fs.readFile(rootReducerPath, 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    let rootFile = data;

    const rootReferenceOne = '\n\nexport interface GlobalState {';
    const rootPositionerOne = rootFile.split(rootReferenceOne);
    const rootReducerName = `${storeName.toLowerCase()}Reducer`;
    const rootStateName = `${storeName}State`;
    const rootImport = `\nimport ${rootReducerName}, {${rootStateName}} from './${storeName}';`;
    rootPositionerOne.splice(1, 0, rootImport);
    rootPositionerOne.splice(2, 0, rootReferenceOne);
    rootFile = rootPositionerOne.join('');

    const rootReferenceTwo = '}\n';
    const rootPositionerTwo = rootFile.split(`${rootReferenceTwo}`);
    rootPositionerTwo.splice(1, 0, `\t${storeName.toLowerCase()}: ${rootStateName},\n`);
    rootPositionerTwo.splice(2, 0, rootReferenceTwo);
    rootFile = rootPositionerTwo.join('');

    const rootReferenceThree = '});';
    const rootPositionerThree = rootFile.split(`${rootReferenceThree}`);
    rootPositionerThree.splice(1, 0, `\t${storeName.toLowerCase()}: ${rootReducerName},\n`);
    rootPositionerThree.splice(2, 0, rootReferenceThree);
    rootFile = rootPositionerThree.join('');

    fs.open(rootReducerPath, 'w', (err, fd) => {
      if (err) {
        console.log(err); // eslint-disable-line
      }

      fs.write(fd, rootFile, 0, rootFile.length, (err) => {
        if (err) {
          console.log(err); // eslint-disable-line
        }
      });
    });
  });
};
