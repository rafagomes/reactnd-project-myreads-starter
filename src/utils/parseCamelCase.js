const parseCamelCase = (camelCaseWord) => {
    let parsed = camelCaseWord.replace(/[A-Z]/g, letter => ` ${letter.toLowerCase()}`);

    parsed = parsed[0].toUpperCase().concat(parsed.slice(1));

    return parsed;
}

export default parseCamelCase;
