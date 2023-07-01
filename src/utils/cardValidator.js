export default function cardValidator(inputObj) {

    // If array is returned, there are empty fields; else no empty field
    const fieldStatus = emptyCheck(inputObj)

    if (fieldStatus) {
        return fieldStatus;
    } else {
      // No empty fields
    }
}

function emptyCheck(inputObj) {
    const invalidProperties = [];

    for (let key in inputObj) {
      if (!inputObj[key]) {
        invalidProperties.push(key);
      }
    }

  // if properties array is empty, no empty field else return empty fields and count
  return invalidProperties.length === 0 ? false : invalidProperties;
}

function formatCheck(inputObj) {
  const {number, monthExp, yearExp, cvv} = inputObj;
  const checkFormats = [number, monthExp, yearExp, cvv]
  const wrongFormatInputs = []

  const regex = /^[0-9]+$/;

  checkFormats.forEach((item) => {
    if (!regex.test(item)) {
      wrongFormatInputs.push(item)
    }
  })

  // if inputs array is empty, all input formats are correct; else some input formats wrong
  return (wrongFormatInputs.length === 0 ? false : wrongFormatInputs)
}