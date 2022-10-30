const fs = require('fs');
const path = require('path');

const capitalize = (string) => string[0].toUpperCase() + string.slice(1);
const lowCase = (string) => string.toLowerCase();
const equalLowCases = (val1, val2) => lowCase(val1) === lowCase(val2);

const toAlternation = (strings) => { // *ADD TYPE CHECKING* $sting or arr
  return typeof strings === 'string' ? strings : `(:?${strings.join('|')})`;
}

const findPriorityWeight = (weight, weights) => Object.values(weights).map(val => {
  if (typeof val === 'string') {
    if (equalLowCases(weight, val)) return val;
  } else {
    if (val.filter(val => equalLowCases(weight, val)).length) return val[0];
  }
}).filter(w => w).join();

const weights = {
  '100': ['Thin', 'Hairline'],
  '200': ['ExtraLight', 'UltraLight'],
  '300': 'Light',
  '400': ['Regular', 'Normal'],
  '500': 'Medium',
  '600': ['SemiBold', 'DemiBold'],
  '700': 'Bold',
  '800': ['ExtraBold', 'UltraBold'],
  '900': ['Black', 'Heavy'], // 900 black, 1000 heavy ?
}

const fontName = 'Gilroy'
//const fontName = 'Gilroy1'

const weightsAlternation = Object.values(weights)
  .map(weight => toAlternation(weight))
  .join('|');

//const fontRegexp = new RegExp(`^(?<font>${fontName})-?(?<weight>${weightsAlternation})(?<italic>italic)?.(?<ext>\\\w+)`, 'i')
const fontRegexp = new RegExp(`(?<font>^${fontName})?-?(?<weight>${weightsAlternation})?(?<italic>italic)?.(?<ext>\\\w+)`, 'i')


const assetsPath = './src/assets/';
const fontsPath = assetsPath + './fonts/';
const gilroyPath = fontsPath + `./${fontName}/`
const testFolder = path.resolve(gilroyPath);
let shouldCreateItalic = false;

fs.readdirSync(testFolder).forEach(file => {
  let absolutePath = testFolder + '/' + file;
  //console.log(fs.readFileSync(testFolder + '\\' + file))
  let normalizedFontName = normalizeFontName(file, fontName)

  if (file !== normalizedFontName) {
    fs.renameSync(
      absolutePath,
      absolutePath.replace(/\/(?:-|\w)+.\w+$/, '/' + normalizedFontName)
    );
  }
});

createMissingFonts(fs.readdirSync(testFolder), fontName);


function createMissingFonts(files, fontName) {

  // ↓ move to another func ↓

  const importantWeights = Object.values(weights).map(val => {
    return typeof val === 'string' ? val : val[0];
  });

  const importantTypes = importantWeights.concat(
    importantWeights.map(weight => weight + 'Italic')
  );

  const presentTypes = Array.from(new Set(
    files.map(file => file.match(/-(\w+)/i)[1])
  ));

  const missingImportantTypes = Array.from(new Set(
    importantTypes.filter(type => !presentTypes.includes(type))
  ));

  let failedItalics = new Set();

  //console.log(importantWeights)
  //console.log(missingImportantTypes)

  missingImportantTypes.forEach(type => {
    let optionalItalic = (/Italic$/i).test(type) ? 'Italic' : '';
    let indexOfMissing = importantWeights.indexOf(type.replace(/Italic$/i, ''));
    let indexOfChecking = indexOfMissing;

    let getAlternativeToCopyType = (toWeight = 'lower') => {
      if (toWeight !== 'lower' && toWeight !== 'higher')
        throw new Error('incorrect args');

      let condition = toWeight === 'lower' ?
        () => indexOfChecking > 0 :
        () => indexOfChecking < importantWeights.length;

      let alternativeToCopyType;

      while (condition() && !alternativeToCopyType) {
        let toType = toWeight === 'lower' ?
          importantWeights[--indexOfChecking] :
          importantWeights[++indexOfChecking] ;
        let indexOfPresent = presentTypes.indexOf(toType += optionalItalic);

        if (indexOfPresent !== -1) {
          alternativeToCopyType = presentTypes[indexOfPresent];
        }
      }

      return alternativeToCopyType;
    }

    // ↑ move to another func ↑

    let alternativeToCopyType = getAlternativeToCopyType('lower');
    if (!alternativeToCopyType) {
      alternativeToCopyType = getAlternativeToCopyType('higher');
    }

    if (!alternativeToCopyType) {
      //throw new Error('No alternative for font');
      failedItalics.add(type)
      //console.log('No alternative for ' + type)
    }

    let regexp = new RegExp(`${alternativeToCopyType}.(\\w+)$`, 'i')

    const extensions = files.map(file => file.match(regexp)).filter(f => f).map(found => found[1]);

    let sourceFiles = Array.from(new Set(
      extensions.map(ext => `${fontName}-${alternativeToCopyType}.${ext}`)
    ));

    // console.log(type)
    // console.log(alternativeToCopyType)

    sourceFiles.forEach(source => {
      let dirPath = testFolder + '/';
      let ext = source.match(/.(\w+)$/)[1];

      fs.readFile(dirPath + source, function(err, contents) {
        if (err) throw err;
        fs.writeFile(dirPath + `${fontName}-${type}.${ext}`, contents, (err) => {
          if (err) throw err;
        });
      });

      //fs.writeFile(testFolder + '\\' + source))
    });

    //fs.writeFile()

  });

  failedItalics = Array.from(failedItalics);

  if (failedItalics.length === failedItalics.filter(type => (/Italic$/i).test(type)).length && shouldCreateItalic) {
    console.log('No alternatives for italic -> creating')
    let dirPath = testFolder + '/';
    files.forEach(file => {
      fs.readFile(dirPath + file, function(err, contents) {
        if (err) throw err;
        fs.writeFile(dirPath + file.replace(/.\w+$/, (match) => 'Italic' + match), contents, (err) => {
          if (err) throw err;
        });
      });
    });
    console.log('done');
  }
}

function normalizeFontName(file, fontName) {
  let normalized;
  //console.log(file)
  //console.log(file.match(fontRegexp))

  let { groups: {
    //font,
    weight,
    italic,
    ext,
  }} = file.match(fontRegexp);

  if (!weight) {
    weight = 'Regular';
  }


  normalized = findPriorityWeight(weight, weights);
  normalized = italic ? normalized + capitalize(italic) : normalized;
  normalized = `${fontName}-${normalized}.${ext}`;

  return normalized;
}






















// const fs = require('fs');
// const path = require('path');
//
// const capitalize = (string) => string[0].toUpperCase() + string.slice(1);
// const lowCase = (string) => string.toLowerCase();
// const equalLowCases = (val1, val2) => lowCase(val1) === lowCase(val2);
//
// const toAlternation = (strings) => { // *ADD TYPE CHECKING* $sting or arr
//   return typeof strings === 'string' ? strings : `(:?${strings.join('|')})`;
// }
//
// const findPriorityWeight = (weight, weights) => Object.values(weights).map(val => {
//   if (typeof val === 'string') {
//     if (equalLowCases(weight, val)) return val;
//   } else {
//     if (val.filter(val => equalLowCases(weight, val)).length) return val[0];
//   }
// }).filter(w => w).join();
//
// const weights = {
//   '100': ['Thin', 'Hairline'],
//   '200': ['ExtraLight', 'UltraLight'],
//   '300': 'Light',
//   '400': ['Regular', 'Normal'],
//   '500': 'Medium',
//   '600': ['SemiBold', 'DemiBold'],
//   '700': 'Bold',
//   '800': ['ExtraBold', 'UltraBold'],
//   '900': ['Black', 'Heavy'], // 900 black, 1000 heavy ?
// }
//
// //const fontName = 'gilroy'
// const fontName = 'Gilroy1'
//
// const weightsAlternation = Object.values(weights)
//   .map(weight => toAlternation(weight))
//   .join('|');
//
// //const fontRegexp = new RegExp(`^(?<font>${fontName})-?(?<weight>${weightsAlternation})(?<italic>italic)?.(?<ext>\\\w+)`, 'i')
// const fontRegexp = new RegExp(`(?<font>^${fontName})?-?(?<weight>${weightsAlternation})(?<italic>italic)?.(?<ext>\\\w+)`, 'i')
//
//
// const assetsPath = './src/assets/';
// const fontsPath = assetsPath + './fonts/';
// const gilroyPath = fontsPath + `./${fontName}/`
// const testFolder = path.resolve(gilroyPath);
//
// fs.readdirSync(testFolder).forEach(file => {
//   let absolutePath = testFolder + '\\' + file;
//   //console.log(fs.readFileSync(testFolder + '\\' + file))
//   let normalizedFontName = normalizeFontName(file, fontName)
//
//   //console.log(normalizedFontName);
//
//   //createMissingFonts(file, fontName);
//
//   //console.log(absolutePath)
//
//   //console.log(testFolder + '\\')
//
//   //console.log(file)
//
//   // fs.renameSync(
//   //   absolutePath,
//   //   absolutePath.replace(/\\(?:-|\w)+.\w+$/, '\\' + normalizedFontName)
//   // );
// });
//
// createMissingFonts(fs.readdirSync(testFolder), fontName);
//
//
// function createMissingFonts(files, fontName) {
//   //files.forEach(file => console.log(file.replace(/italic/i, '')))
//
//   let importantWeights = Object.values(weights).map(val => {
//     return typeof val === 'string' ? val : val[0];
//   });
//
//   let importantTypes = importantWeights.concat(importantWeights.map(weight => weight + 'Italic'))
//   //importantTypes.push('testItalic')
//
//   let missingPriorityTypes = new Set();
//
//   let presentTypes = new Set();
//   //let missingTypes = new Set();
//
//   files.forEach(file => {
//     const { groups: {
//       //font,
//       type,
//       //italic,
//       //ext,
//     }} = file.match(/-(?<type>\w+)/i);
//
//     presentTypes.add(type)
//   });
//
//   presentTypes = Array.from(presentTypes);
//
//
//   importantTypes.forEach((weight, i) => {
//     if (presentTypes.indexOf(weight) === -1) {
//       missingPriorityTypes.add(weight)
//     }
//   });
//
//   console.log(importantTypes)
//   console.log(missingPriorityTypes)
//   console.log(presentTypes)
//
//   weightsKeys = Object.keys(weights);
//   //weightsValues = Object.values(weights);
//
//   console.log(importantWeights)
//
//   Array.from(missingPriorityTypes).forEach((type, i) => {
//     let optionalItalic = (/Italic$/i).test(type) ? 'Italic' : '';
//     let indexOfMissing = importantWeights.indexOf(type.replace(/Italic$/i, ''));
//
//     console.log(type)
//     //let downType;
//     //let upType;
//     //let alternativeToCopyType;
//     let indexOfChecking = indexOfMissing;
//
//     let getAlternativeToCopyType = (toWeight = 'lower') => {
//       if (toWeight !== 'lower' && toWeight !== 'higher')
//         throw new Error('incorrect args');
//
//       let condition = toWeight === 'lower' ?
//         indexOfChecking > 0 :
//         indexOfChecking < importantWeights.length;
//
//       let alternativeToCopyType;
//
//       while (condition) {
//         let toType = toWeight === 'lower' ?
//           importantWeights[--indexOfChecking] :
//           importantWeights[++indexOfChecking] ;
//         let indexOfPresent = presentTypes.indexOf(toType += optionalItalic);
//
//         if (indexOfPresent !== 1) {
//           alternativeToCopyType = presentTypes[indexOfPresent];
//           break;
//         }
//       }
//
//       return alternativeToCopyType;
//     }
//
//     // while (indexOfChecking > 0 || !alternativeToCopyType) {
//     //   let downType = importantWeights[--indexOfChecking] + optionalItalic;
//     //   let indexOfPresent = presentTypes.indexOf(downType);
//     //
//     //   if (indexOfPresent !== 1) {
//     //     alternativeToCopyType = presentTypes[indexOfPresent];
//     //   }
//     // }
//
//     let alternativeToCopyType = getAlternativeToCopyType();
//
//     console.log(alternativeToCopyType)
//   });
//
// }
//
// function normalizeFontName(file, fontName) {
//   let normalized;
//   //console.log(file)
//   //console.log(file.match(fontRegexp))
//
//   const { groups: {
//     //font,
//     weight,
//     italic,
//     ext,
//   }} = file.match(fontRegexp);
//
//
//   normalized = findPriorityWeight(weight, weights);
//   normalized = italic ? normalized + capitalize(italic) : normalized;
//   normalized = `${fontName}-${normalized}.${ext}`;
//
//   return normalized;
// }
















// const fs = require('fs');
// const path = require('path');
//
// const capitalize = (string) => string[0].toUpperCase() + string.slice(1);
// const lowCase = (string) => string.toLowerCase();
// const equalLowCases = (val1, val2) => lowCase(val1) === lowCase(val2);
//
// const toAlternation = (strings) => { // *ADD TYPE CHECKING* $sting or arr
//   return typeof strings === 'string' ? strings : `(:?${strings.join('|')})`;
// }
//
// const findPriorityWeight = (weight, weights) => Object.values(weights).map(val => {
//   if (typeof val === 'string') {
//     if (equalLowCases(weight, val)) return val;
//   } else {
//     if (val.filter(val => equalLowCases(weight, val)).length) return val[0];
//   }
// }).filter(w => w).join();
//
// const weights = {
//   '100': ['Thin', 'Hairline'],
//   '200': ['ExtraLight', 'UltraLight'],
//   '300': 'Light',
//   '400': ['Regular', 'Normal'],
//   '500': 'Medium',
//   '600': ['SemiBold', 'DemiBold'],
//   '700': 'Bold',
//   '800': ['ExtraBold', 'UltraBold'],
//   '900': ['Black', 'Heavy'], // 900 black, 1000 heavy ?
// }
//
// //const fontName = 'gilroy'
// const fontName = 'Gilroy1'
//
// const weightsAlternation = Object.values(weights)
//   .map(weight => toAlternation(weight))
//   .join('|');
//
// //const fontRegexp = new RegExp(`^(?<font>${fontName})-?(?<weight>${weightsAlternation})(?<italic>italic)?.(?<ext>\\\w+)`, 'i')
// const fontRegexp = new RegExp(`(?<font>^${fontName})?-?(?<weight>${weightsAlternation})(?<italic>italic)?.(?<ext>\\\w+)`, 'i')
//
//
// const assetsPath = './src/assets/';
// const fontsPath = assetsPath + './fonts/';
// const gilroyPath = fontsPath + `./${fontName}/`
// const testFolder = path.resolve(gilroyPath);
//
// fs.readdirSync(testFolder).forEach(file => {
//   let absolutePath = testFolder + '\\' + file;
//   //console.log(fs.readFileSync(testFolder + '\\' + file))
//   let normalizedFontName = normalizeFontName(file, fontName)
//
//   //console.log(normalizedFontName);
//
//   //createMissingFonts(file, fontName);
//
//   //console.log(absolutePath)
//
//   //console.log(testFolder + '\\')
//
//   //console.log(file)
//
//   // fs.renameSync(
//   //   absolutePath,
//   //   absolutePath.replace(/\\(?:-|\w)+.\w+$/, '\\' + normalizedFontName)
//   // );
// });
//
// createMissingFonts(fs.readdirSync(testFolder), fontName);
//
//
// function createMissingFonts(files, fontName) {
//   let importantWeights = Object.values(weights).map(val => {
//     return typeof val === 'string' ? val : val[0];
//   });
//
//   let importantTypes = importantWeights.concat(importantWeights.map(weight => weight + 'Italic'))
//   let presentTypes = new Set();
//   let missingImportantTypes = new Set();
//
//   files.forEach(file => {
//     const { groups: {
//       type,
//     }} = file.match(/-(?<type>\w+)/i);
//
//     presentTypes.add(type)
//   });
//
//   presentTypes = Array.from(presentTypes);
//
//   importantTypes.forEach(weight => {
//     if (presentTypes.indexOf(weight) === -1) {
//       missingImportantTypes.add(weight)
//     }
//   });
//
//   console.log(importantTypes)
//   console.log(missingImportantTypes)
//   console.log(presentTypes)
//
//   weightsKeys = Object.keys(weights);
//   //weightsValues = Object.values(weights);
//
//   console.log(importantWeights)
//
//   Array.from(missingImportantTypes).forEach((type, i) => {
//     let optionalItalic = (/Italic$/i).test(type) ? 'Italic' : '';
//     let indexOfMissing = importantWeights.indexOf(type.replace(/Italic$/i, ''));
//
//     let indexOfChecking = indexOfMissing;
//
//     let alternativeToCopyType = getAlternativeToCopyType();
//
//     console.log(alternativeToCopyType)
//   });
//
//   function getAlternativeToCopyType(toWeight = 'lower') {
//     if (toWeight !== 'lower' && toWeight !== 'higher')
//       throw new Error('incorrect args');
//
//     let condition = toWeight === 'lower' ?
//       indexOfChecking > 0 :
//       indexOfChecking < importantWeights.length;
//
//     let alternativeToCopyType;
//
//     while (condition) {
//       let toType = toWeight === 'lower' ?
//         importantWeights[--indexOfChecking] :
//         importantWeights[++indexOfChecking] ;
//       let indexOfPresent = presentTypes.indexOf(toType += optionalItalic);
//
//       if (indexOfPresent !== 1) {
//         alternativeToCopyType = presentTypes[indexOfPresent];
//         break;
//       }
//     }
//
//     return alternativeToCopyType;
//   }
// }
//
// function normalizeFontName(file, fontName) {
//   let normalized;
//   //console.log(file)
//   //console.log(file.match(fontRegexp))
//
//   const { groups: {
//     //font,
//     weight,
//     italic,
//     ext,
//   }} = file.match(fontRegexp);
//
//
//   normalized = findPriorityWeight(weight, weights);
//   normalized = italic ? normalized + capitalize(italic) : normalized;
//   normalized = `${fontName}-${normalized}.${ext}`;
//
//   return normalized;
// }
