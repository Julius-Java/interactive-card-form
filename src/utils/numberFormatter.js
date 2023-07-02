function numberFormatter(number) {
    // Format the credit card number with spaces
    // const formattedNumber = number.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');

    // return formattedNumber;

      // Convert the input to a string if it's not already
    const inputString = String(number);

    // Format the credit card number with spaces
    const formattedNumber = inputString.replace(/(.{4})/g, '$1 ');

    return formattedNumber.trim();
}

export default numberFormatter;