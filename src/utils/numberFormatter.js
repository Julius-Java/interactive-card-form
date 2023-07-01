function numberFormatter(number) {
    // Format the credit card number with spaces
    const formattedNumber = number.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');

    return formattedNumber;
}

export default numberFormatter;