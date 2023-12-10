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

export function aufgabe07 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement === "u" || input[0] === "U") {
      if(input[i +1] === "n") {
        if(input[i + 2] === "d") {
          return true
        }
      }
    }
  }
  return false
}

export function aufgabe08(args) {
  const input = args        
  const result = []                     

  for (let i = 0; i < input.length; i++) {      
    const currentElement = input[i]        

    if (currentElement === "e") {   
      result.push(3)                                                           
    } else {                                                 
      result.push(currentElement)                             
    }
  }
  return result.join("")                                        
}

export function aufgabe09 (args) {
  const input = args
  
  if(input.length === 6) return true
  if(input.length <= 6 || 6 <= input.length) return false

}

export function aufgabe10 (args) {
  const input = args
  
  if(input.length !== 7) return false
  if(input[0] !== "#") return false
  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if(48 <= ascii && ascii <=57) {
      
    } else if (65 <= ascii && ascii <= 70) {
      
    } else {
      return false
    }
  }

  return true
}

export function aufgabe11 (args) {
  const input = args
  
  if(input.length !== 1) return null
  return input[0].charCodeAt(0)
}

export function aufgabe12 (args) {
  const input = args
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement == "e") {
      return i
    }
  }
  return -1
}

export function aufgabe13 (args) {
  const input = args
  let posE = -1
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
     if(currentElement === "e"){
     posE = i
   }
  }
  return posE
 }

 export function aufgabe14 (args) {
  const input = args
 let count = 0
  let posE= -1 
  for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  if(currentElement=== "e"){
   count++
   if (count === 3) {
    return i
   }
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
