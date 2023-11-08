function filterApiData(apiData, mandatoryKeys) {
  const newArr = [];

  for (let object of apiData) {
    let hasKey = true;

    for (let key of mandatoryKeys) {
      if (!object.hasOwnProperty(key)) {
        // Möchte nachschauen ob mein Objekt einen bestimmten Key hat
        hasKey = false;
      }
    }
    if (hasKey) {
      newArr.push(object);
    }
  }
  return newArr;
}

/*
apiData - ist ein Array das Objekte beinhaltet 
        - die Objekte können verschiedene keys enthalten 

mandatoryKeys - will nur alle Objekte haben die den mandatoryKey in apiData enthalten. 
(können auch mehrere mandatoryKeys beinhalten)
Beispiel: apiData = arr[{a : "Januar", b : "Februar"}, {a : "März",d : "April",e : "Mai"}, {a : "Januar", b : "Februar"},{a : "Januar", b : "Februar"}] 
(a,b,c,d,e = keys)
(Januar, Februar, März, April, Mai = Werte)
{a&b}, {c-e} = sind Objekte 

- return ein Array nur mit den Objekten die, die keys von den mandatoryKeys - array enthalten. 
*/

/*
# Kata: Filter API Data

Implement the `filterApiData` function in `filter-api-data.js` with the following requirements in mind.

- The first parameter `apiData` will be an array that includes objects
- The objects can have different keys
- The second parameter `mandatoryKeys` is a array 
that includes all keys that an object (from the `apiData` array) 
should have to pass the filter test
- Return an array with only the objects that include all keys from the `mandatoryKeys` array

## Filter Api Data Examples

```js
const data = [{ id: 1, price: 100 }, { price: 50 }];

const filteredData = filterApiData(data, ["id"]);

console.log(filteredData); // [{id: 1, price: 100}]
```
*/
