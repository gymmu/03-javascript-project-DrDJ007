export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
    }

    if (currentElement.toLowerCase() !== "e"){
      result.push(currentElement)
    }

    
   
  }
  return result.join("")
  }



export function aufgabe02 (args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] 
  result.push (currentElement.toUpperCase())
  }
  return result.join("")
}


export function aufgabe03 (args) {
  const input = args
  const result = []
  let count = 0
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") { 
     count = count + 1   
    }

    else if (currentElement === "E") {
      count = count + 1
    }

    }
  return count

  }

  export function aufgabe04(args) {
    const input = args
    let count = 1
    
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
  
      if (currentElement === " ") {
        count++
      }
    }
    return count
  }

  export function aufgabe05(args) {
    const input = args
    
    for (let i = 0; i < input.length; i++) {
      const currentAscii = input[i].charCodeAt(0)
     
      if (65 <= currentAscii && currentAscii <=90) return true
      
    }
    return false
  }

  export function aufgabe06(args) {
    const input = args
  
    if (input.length <= 0) return false
    
    for (let i = 0; i < input.length; i++) {
      const ascii = input[i].charCodeAt(0)
  
      if(0 <= ascii && ascii <=31) return true
      else if (33 <= ascii && ascii <= 47) return true
      else if (58 <= ascii && ascii <= 64) return true
      else if (91 <= ascii && ascii <= 96) return true
      else if (123 <= ascii && ascii <= 127) return true
    
    }
    return false
  }