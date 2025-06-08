function sortByName(inputArray) {
    const arrayCopy = [...inputArray];
    
    arrayCopy.sort((a, b) => {
    return a.localeCompare(b, 'ru', { sensitivity: 'base' });
    });
    
    return arrayCopy;
   }
   
   module.exports = { sortByName };
   