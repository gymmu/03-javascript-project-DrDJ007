export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
    }
    //zählt alle e's im Text
    if (currentElement.toLowerCase() !== "e"){
      result.push(currentElement)
    }

    
   
  }
  return result.join("")
  //gibt den gesamten Text ohne e hinaus
  }



export function aufgabe02 (args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] 
  result.push (currentElement.toUpperCase())
  }
  //macht den gesamten Text gross
  return result.join("")
}


export function aufgabe03 (args) {
  const input = args
  const result = []
  let count = 0
  //stellt den Counter auf 0 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") { 
     count = count + 1   
    }
  //zählt alle e's im Text
    else if (currentElement === "E") {
      count = count + 1
    }
  //zählt alle E's im Text
    }
  return count
  //gibt die Anzahl der gezählten e/E's als Zahl hinaus
  }

  export function aufgabe04(args) {
    let input = args.replace(/[^a-zA-Z0-9 ]/g, "");
    //entfernt alle Sonderzeichen aus dem Text
    let count = 1;
    if (input.lastIndexOf(' ') == input.length - 1) count--
    if (input[0] == " ") count--
    //wenn das erste oder das letzte zeichen ein Leerzeichen wird der counter je um 1 nach unten gesetzt
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i];
  
      if (currentElement === " " && input[i-1] !== " ") {
        count++
      }
    //wenn das aktuelle Zeichen ein Leerzeichen ist, und das vorherige Zeichen kein Leerzeichen ist, wird der counter um 1 nach oben gesetzt
    }
    return count;
  }

  export function aufgabe05(args) {
    const input = args
    
    for (let i = 0; i < input.length; i++) {
      const currentAscii = input[i].charCodeAt(0)
     
      if (65 <= currentAscii && currentAscii <=90) return true
    //falls Grossbuchstaben vorhanden ist gibt true zurück
    }
    return false
    //falls kein Grossbuchstaben vorhanden ist gibt false zurück
  }

  export function aufgabe06(args) {
    const input = args
  
    if (input.length <= 0) return false
    
    for (let i = 0; i < input.length; i++) {
      const ascii = input[i].charCodeAt(0)
  
      if(0 <= ascii && ascii <=31) return true
      //falls der ascii code zwischen NUL & US ist gibt true zurück
      else if (33 <= ascii && ascii <= 47) return true
      //falls der ascii code zwischen ! & / ist gibt true zurück
      else if (58 <= ascii && ascii <= 64) return true
      //falls der ascii code zwischen : & @ ist gibt true zurück
      else if (91 <= ascii && ascii <= 96) return true
      //falls der ascii code zwischen [ % ' ist gibt true zurück
      else if (123 <= ascii && ascii <= 127) return true
      //falls der ascii code zwischen { & DEL ist gibt true zurück
    }
    return false
    //falls keine Sonderzeichen vorhanden ist gibt false zurück
  }

  export function aufgabe07 (args) {
    const input = args
    const result = []
    
    if(input[0] === "U") {
      if(input[1] === "n") {
        if(input[2] ==="d") {
          return true
        }
      }
    }
   
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if(currentElement === "u") {        
        //falls das Element ein "u" ist, wird geschaut was die folgenden Zeichen sind
        if(input[i +1] === "n") {         
        //wenn das nächste Element ein "n" ist, wird geschaut was das nächste Zeichen ist 
          if(input[i + 2] === "d") {               //wenn das dritte Element ein "d" ist, wird...
            return true 
        //wenn das dritte/letzte Zeichen ein "d" ist, und die Vorzeichen ein "u" als erstes Zeichen und ein "n" als zweites Zeichen sind, wird true zurückgegeben
          }
        }
      }
    }
    return false
    //wenn die Reihenfolge oder etwas davon nicht zurtrifft, dann gibt false hinaus
  }

export function aufgabe08(args) {
  const input = args        
  const result = []                     

  for (let i = 0; i < input.length; i++) {      
    const currentElement = input[i]        

    if (currentElement === "e") {   
      result.push(3)
      //wenn das Zeichen e vorkommmt, wird es mit einer 3 ersetzt                                                           
    } else {                                                 
      result.push(currentElement) 
      //ansonsten mache nichts und update/hänge den text (an)                            
    }
  }
  return result.join("")                                        
}

export function aufgabe09 (args) {
  const input = args
  
  if(input.length === 6) return true
  //gibt tru zurück wenn es 6 Zeichen im Text hat
  if(input.length <= 6 || 6 <= input.length) return false
  //gibt false zurück wenn der Text kleiner oder grösser als 6 Zeichen ist
}

export function aufgabe10 (args) {
  const input = args
  
  if(input.length !== 7) return false //zählt ob text 7 Zeichen lang ist (funktioniert da hex-codes immmer 7 zeichen lang sind)
  if(input[0] !== "#") return false   //falls erstes Zeichen nicht ein # ist, wird false gegeben. Das geht weil hex-codes immer mit # beginnen
  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if(48 <= ascii && ascii <=57) {
    //schaut ob der ascii code zwischen 0 und 9 ist
    } else if (65 <= ascii && ascii <= 70) {
    //schaut ob der ascii code zwischen A und F ist
    //das ganze geht weil ein hex-code nur aus den zeichen 0-9 und A-F bestehen kann
    } else {
      return false //gibt false hinaus falls etwas nicht stimmt
    }
  }

  return true //gibt true hinaus falls alles stimt
}

export function aufgabe11 (args) {
  const input = args
  
  if(input.length !== 1) return null
  //gibt 0 zurück, falls es kein zeichen im text hat
  return input[0].charCodeAt(0)
  //gibt den ascii code des Zeichens im Text hinaus
}

export function aufgabe12 (args) {
  const input = args
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  //nennt die position des ersten e's
    if (currentElement == "e") {
      return i
    }
  }
  return -1
  //wenn kein e vorhanden ist, wird -1 zurückgegeben
}

export function aufgabe13 (args) {
  const input = args
  let posE = -1
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
     if(currentElement === "e"){
     posE = i
   }
    //erkennt die position des letzten e's
  }
  return posE
  //falls kein e vorhanden ist, wird -1 zurückgegeben
 }

 export function aufgabe14 (args) {
  const input = args
 let count = 0
  let posE= -1 
  for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  if(currentElement=== "e"){
   count++
   //zählt alle e's im Text
   if (count === 3) {
    return i
   }
   //wenn der Counter momentan 3 ist wird, der aktuelle i wert zurückgegeben
  }
}

  return posE 
}

export function aufgabe15 (args) {
  const input = args
  const result = []

  if (input.lastIndexOf(' ') == input.length - 1) {
      for (let i = 0; i < input.length - 1; i++) {
        const currentElement = input[i]
        result.push(currentElement)
      }
      //wenn das letzte Zeichen ein Leerzeichen ist, wird die Schleife um 1 weniger wiederholt damit dieses eine Zeichen nicht mitgezählt wird
  } else {
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
  
      if (currentElement !== " ") {
        result.push(currentElement)
      } else {
        return result.join("")
      }
    }

  }

  return result.join("")
}

export function aufgabe16 (args) {
  const input = args
  const result1 = []
  const result2 = []
  let readText = true

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === "$" && readText !== false) {
      readText = false
      //falls das Zeichen ein $ ist, wird das readText auf false gesetzt
    } else {
      if (readText === true) {
        result1.push(currentElement)
      }
      //wenn das readText auf true ist, wird das aktuelle Element in das result1 Array gepushed
      else if (readText === false) {
        result2.push(currentElement)
      }
      //wenn das readText auf false ist, wird das aktuelle Element in das result2 Array gepushed
    }
  }
  if (result2.join("") !== "") {
  return result1.join("") + "," + result2.join("")
  //wenn result2 nicht leer ist, wird result1 und result2 zusammengerechnet
  } else {
    return result1.join("")
  }
  //sonst wird nur result1 hinausgegeben
}

export function aufgabe18 (args) {
  const input = args
  const inputName = []
  const inputAge = []
  let readText = true

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === " " && readText !== false) {
      readText = false
    } else {
      if (readText === true) {
        inputName.push(currentElement)
      }
      else if (readText === false) {
        inputAge.push(currentElement)
      }
    }
  }
  if (inputName.join("") !== "" && inputAge.join("") !== "") return "Sie heissen " + inputName.join("") + " und sind " + inputAge.join("") + " Jahre alt"
  if (inputName.join("") == "" && inputAge.join("") !== "") return "Sie heissen" + inputName.join("") + " und sind " + inputAge.join("") + " Jahre alt"
  if (inputName.join("") !== "" && inputAge.join("") == "") return "Sie heissen " + inputName.join("") + " und sind " + inputAge.join("") + "Jahre alt"
  if (inputName.join("") == "" && inputAge.join("") == "") return "Sie heissen" + inputName.join("") + " und sind " + inputAge.join("") + "Jahre alt"
  //unterschiedliche Fälle. Dadurch wird ein Problem verhindert, welches es gab, weil es laut Code zu viele Leerzeichen zwischen den Wörtern hat, wenn keine Eingabe vorhanden war
}

export function aufgabe19 (args) {
  const input = args
  const result = []
  
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  result.push(currentElement)
  result.push(currentElement)
}

  return result.join("")
}

export function aufgabe20 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement == "." && input[i+1] !== " ") return false  
    //wenn ein "." vor keinem Leerzeichen ist, wird false zurückgegeben
    else if(currentElement == "." && input[i+1] == " ") return true
    //wenn ein "." vor einem Leerzeichen ist, wird true zurückgegeben
  }

  return result.join("")
}

export function aufgabe21 (args) {
  const input = args
  const result = []
  
for (let i = 0; i < input.length; i++) {
  result.push(input[input.length - 1 - i])
}
//führt die standartschleife umgekehrt aus, damit die Reihenfolge verkehrt wird 
  return result.join("")
}


export function aufgabe22 (args) {
  const input = args
  const result = []
  let condition = false
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "k") {
      condition = true
    }
    //wenn ein "k" im Text ist, wird die Bedingung auf true gesetzt
    if (condition === true) {
      result.push(currentElement)
    } else {
      result.push("_")
    }
    //so lange die Bedingung nicht auf true ist, wird ein "_" eingefügt
  }
  return result.join("")
}

export function aufgabe23 (args) {
  const input = args
  const result = []
  
  if (input.length === 0) return input
  //wenn das Eingabefeld leer ist, wird eine leere Eingabe zurückgegeben
  result.push(input[0])
  //das erste Element wird zum ersten Element der Ausgabe hinzugefügt
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  result.push(input[0])
  //das erste Element wird zum letzten Element der Ausgabe hinzugefügt
  return result.join("")
}


export function aufgabe24 (args) {
  const input = args
  const result = []

  if (input.length === 1) return input
  //wenn das Eingabefeld nur ein Element hat, wird die Zeichen direkt zurück gegeben
  const firstElement = input[0]
  const lastElement = input[input.length - 1]


  result.push(lastElement)
  //das letzte Element wird an erster result Potition angehängt
  for (let i = 1; i < input.length - 1; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  //normale Schleife aber es fängt erst beim 2. Element an und hört schon beim vorletzten Zeichen auf
  result.push(firstElement)
  //das letzte Element wird zum ersten Element der Ausgabe hinzugefügt
  return result.join("")
}

export function aufgabe27 (args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i].charCodeAt(0)
    
    if (47 >= currentElement || currentElement >= 58) return false
    //wenn im ganzen Text ein Zeichen nicht zwischen dem bestimmten ascii code bereichs ist, wird false zurückgegeben
  }
  if (input.length < 1) return false
  //wenn das Eingabefeld leer ist, wird false zurückgegeben
  return true
  //ansonsten gibt true zurück
}



export function bubbleSort(args) {
  const input = args
  let result = []
const list = input.split("") //wandelt den Text in eine Liste um, dies ist notwendig um Zeichen zu sortieren.
for (let i = 0; i < list.length - 1; i++) {
  const currentElement = list[i]
  const nextElement = list[i + 1]
  if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
    //falls die Reihenfolge der Zeichen nicht stimmmt werden die Zeichen vertauscht
    const tmp = list[i + 1]
    list[i + 1] = list[i]
    list[i] = tmp
    i = -1 //mache alles erneut, falls etwas vertauscht wurde und noch nicht in der richtigen Reihenfolge ist
  }
}
result = list.join("")
  return result
}