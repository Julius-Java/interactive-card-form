export function emptyCheck(inputObj) {
    const invalidProperties = [];

    for (let key in inputObj) {
      if (!inputObj[key]) {
        invalidProperties.push(key);
      }
    }

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
  }


  // if inputs array is empty, all input formats are correct; else some input formats wrong
  return (wrongFormatInputs.length === 0 ? false : wrongFormatInputs)
}