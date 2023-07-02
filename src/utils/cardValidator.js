// export function cardValidator(inputObj) {

//     // If array is returned, there are empty fields; else no empty field
//     const fieldStatus = emptyCheck(inputObj)

//     // If array is returned, some inputs are in wrong format; else format is correct
//     const formatStatus = formatCheck(inputObj)

//     if (fieldStatus) {
//         return fieldStatus;
//     } else {
//       if (formatStatus) {
//         return formatStatus;
//       } else {
//         return false;
//       }
//     }
// }

export function emptyCheck(inputObj) {
    const invalidProperties = [];

    for (let key in inputObj) {
      if (!inputObj[key]) {
        invalidProperties.push(key);
      }
    }

    // console.log(invalidProperties)

  // if properties array is empty, no empty field else return empty fields and count
  return invalidProperties.length === 0 ? false : invalidProperties;
}

export function formatCheck(inputObj) {
  const {number, monthExp, yearExp, cvv} = inputObj;
  const checkFormats = {number, monthExp, yearExp, cvv}
  const wrongFormatInputs = []

  const regex = /^[0-9]+$/;

  for (let key in checkFormats) {
    if (!regex.test(checkFormats[key])) {
      wrongFormatInputs.push(key)
    }
    // console.log(checkFormats[key])
  }

  // console.log(wrongFormatInputs)

  // if inputs array is empty, all input formats are correct; else some input formats wrong
  return (wrongFormatInputs.length === 0 ? false : wrongFormatInputs)
}