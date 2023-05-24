const snakeCaseToTitleCase = (stringToConvert) => {
    return stringToConvert.split("_")
        .map((element) => {
            return (element.charAt(0).toUpperCase() + element.slice(1));
        })
        .join(" ");
};

const snakeCaseToCamelCase = (stringToConvert) => {
    return stringToConvert.split("_")
        .map((element, index) => {
            if (index === 0) {
                return element;
            } else {
                return (element.charAt(0).toUpperCase() + element.slice(1));
            }
        })
        .join("");
}

const insertSpace = (spaces) => {
    return "\u00A0".repeat(spaces)
}

const authentication = (has, needs) => {
    return has >= needs
}

module.exports = { snakeCaseToTitleCase, snakeCaseToCamelCase, insertSpace, authentication };