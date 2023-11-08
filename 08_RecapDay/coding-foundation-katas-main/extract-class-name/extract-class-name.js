function extractClassName(sessionTitle) {
  const month = {
    Januar: "01",
    Februar: "02",
    März: "03",
    April: "04",
    Mai: "05",
    Juni: "06",
    Juli: "07",
    August: "08",
    September: "09",
    Oktober: "10",
    November: "11",
    Dezember: "12",
    Maerz: "03",
  };

  const newArr = sessionTitle.split(" ");

  if (
    sessionTitle.includes("Live-Session Class") &&
    newArr[2].length === 4 &&
    newArr[3] in month
  ) {
    return newArr[2] + "-" + month[newArr[3]];
  } else {
    return null;
  }
}

/*erster Parameter ein String (sessionTitle)
Wenn der String das Wortmuster "Class YEAR MONTH_NAME" (e. g. Class 2023 August) - unser Parameter(String)
 - dann return einen neuen string mit dem Jahr, einem "-" als Trenner, gefolgt von 
einer konvertierten(Nummer) des Monats bsp. "Class 2022 September wird zu 2022-09"  
 - eine if Bedingung wo der eingegebene String umgewandelt wird, wenn das Wort "Monat" vorkommt - 
 dann wird ein String "2022-09" wiedergegeben.  
Falls das "Wort" im String nicht vorkommt 
 - else return null 


Der Monatsname kann Umlaute oder alternative Zeichen enthalten. Beide sind gültig. 
bsp.: "Class 2022 März > 2022-03" === Class 2022 Maerz > 2022-03"
*/

//(newArr[3] in month)  = newArr[3]ist der Object key den wir überprüfen ob der in month vorhanden ist.
// Die Länge des Elements (Jahr) in einem Array(newArr) vergleichen ( === ) mit der Länge von 4 Zeichen
// er soll zurückgeben nur: Jahr + "-" + monatsziffer(als String)
