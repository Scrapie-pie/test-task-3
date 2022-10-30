const fs = require('fs');
const path = require('path');

// свойства файла оттуда размер вытягивать

const folder = './';
let iconNames = [];
try {
  iconNames = JSON.parse(fs.readFileSync(folder + 'generated/names.json',
    {encoding:'utf8', flag:'r'}
  ));
} catch (e) {
  iconNames = [];
}

main();



function main() {
  try {
    fs.mkdirSync(folder + 'generated');
  } catch(e) {}

  fs.readdirSync(folder).forEach(file => {
    let isSvgFile = /.svg$/.test(file);

    if (isSvgFile) {
      //let filePath = folder + file;
      let svgName = file.replace(/.svg$/, '');




      // console.log(iconNames)
      // console.log(svgName)
      //
      // console.log(!iconNames.includes(svgName))

      if (!iconNames.includes(svgName)) {
        iconNames.push(svgName);

        fs.readFile(folder + file, 'utf8', (err, content) => {
          if (err) throw err;

          //let q = replacePropsWithVariables(content, ['width', 'height', 'fill', 'stroke']);
          let q = replacePropsWithVariables(content, ['width', 'height', 'fill', 'stroke']);
          let newContent = q.svgContent;
          let matching = q.matching;

          console.log(q.matching)

          let cssRow = getSvgCssRow(svgName, q.matching);

          fs.writeFile(folder + file, newContent, (err) => {
            if (err) throw err;
          });

          fs.appendFile(folder + 'generated/style.css', cssRow, (err) => {
            if (err) throw err;
          });


        });
      }





    }

  });
  // if (e.code === "ENOENT") {
  //   fs.writeFile(folder + '/generated/names.json', JSON.stringify(iconNames), (err) => {
  //     if (err) throw err;
  //   });
  // }

  fs.writeFile(folder + '/generated/names.json', JSON.stringify(iconNames), (err) => {
    if (err) throw err;
  });

}





// async function svgHandler(file) {
//   let {content, size} = cutSize(file);
//
//   fs.writeFile(folder + file, content, (err) => {
//     if (err) throw err;
//   });
//
//   if (size) {
//     let cssRow = getSvgCssRow(file, size.width, size.height);
//
//     fs.appendFile(folder + 'generated/style.css', cssRow, (err) => {
//       if (err) throw err;
//     });
//   }
// }

function replacePropsWithVariables(svgContent, targetProps) {
  //let simpleRegexpProps = /[\w-]+="[^"]*"/g
  let simpleRegexpProps = /[\w-]+="[^"]*"/g
  let matching = {}
  for (let prop of targetProps) {
    matching[prop] = [];
  }

  svgContent = svgContent.replace(simpleRegexpProps, match => {
    let [key, value] = match.split('=');
    value = value.slice(1, -1)

    if (key in matching) {
      if (!matching[key].includes(value)) {
        matching[key].push(value)
      }
      if (key === 'width' || key === 'height') return '';
      return `${key}="var(--${key}-${matching[key].length})"`
    } else {
      return match
    }
  });

  let res = {svgContent, matching}
  return res;
}


// function cutSize(svgContent) {
//   let svgRegexp = /<svg[^>]+>/;
//   let svgMatched = content.match(svgRegexp);
//
//   if (!svgMatched) return {svgContent, {}};
//
//   let svgRow = svgMatched[0];
//   let sizeRegexp = /(width|height)=(['"])\S*\2/g;
//   let sizeRow = svgRow.match(sizeRegexp);
//
//   if (!sizeRow) return {svgContent, {}};
//
//   let sizeEntries = sizeRow.map(attr => attr.split('='));
//   let newSvgRow = svgRow.replace(sizeRegexp, '');
//   let newContent = content
//     .replace(svgRow, newSvgRow)
//     .replace(/\s{2,}/, ' ');
//
//   let size = Object.fromEntries(sizeEntries.map(entrie => {
//     return [entrie[0], entrie[1].replace(/['"]/g, '')]
//   }));
//
//   return {newContent, size};
// }

function getSvgCssRow(svgName, props) {
  console.log(props)
  //let result = `.icon_${svgName.replace(/.\w+$/i, '')} {\n`;
  let result = `.icon_${svgName} {\n`;

  if (props.width[0]) {
    //result += `  font-size: ${props.width}px;\n  width: 1em;\n`
    result += `
      font-size: ${props.width[0]}px;
      --width: 1em;
      width: var(--width);
    `
  }

  if (props.height[0]) {
    let relativeHeight = props.height[0]/props.width[0];
    relativeHeight = parseFloat(relativeHeight.toFixed(5)) + 'em';
    //result += `  height: ${relativeHeight};\n`
    result += `
      --height: ${relativeHeight};
      height: var(--height);
    `
  }

  for (let prop in props) {
    if (prop !== 'width' && prop !== 'height') {
      for (let i = 0; i < props[prop].length; i++) {
        result += `
          --${prop}-${i+1}: ${props[prop][i]};
        `
      }
    }
  }


  result = result.replace(/[\s]{2,}/g, '\n  ')
  result += '\r}\n\n';

  return result;
}

// function normalizeFill(file) {
//   fs.readFile(file, 'utf8', (err, content) => {
//     if (err) throw err;
//
//     let getFillRegexp = (value) => new RegExp(
//       `fill=(?<q>["'])(?<color>${value})\\k<q>`,
//       'g'
//     )
//
//     let fills = Array.from(
//       content.matchAll(getFillRegexp('\\S*'))
//     ).map(found => found[found.length - 1]); // WTF ???
//
//     fills = fills.filter(fill => !(/none/.test(fill)));
//
//     let hasSameColor = !fills.filter(fill => fill !== fills[0]).length;
//
//     if (hasSameColor) {
//       let result = content.replace(getFillRegexp(fills[0]), (match, q, color) => {
//         return `fill=${q}currentColor${q}`;
//       });
//
//       fs.writeFile(file, result, (err) => {
//         if (err) throw err;
//       });
//     } else {
//
//     }
//   });
// }
