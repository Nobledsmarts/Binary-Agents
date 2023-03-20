function binaryAgent(str) {
    const charCaseoObj = {
      '010' : 'toUpperCase',
      '011' : 'toLowerCase',
    };
    let chars = str.split(" ");
    let sentence = "";
  
    for(let i = 0; i < chars.length; i++){
      let charCase = chars[i].slice(0, 3);
      let isAlphabet = /^(010|011)/.test(chars[i]);
      let binary = isAlphabet ? chars[i].slice(3) : chars[i];
      let binaryPowers = [];
      let truthyBinaryPowers = [];
      let binaryArr = binary.split("");
      let power = 1;
      let sum;
      
      for(let i = 0; i < binaryArr.length; i++, power *= i == 0 ? 1 : 2 ) {
        binaryPowers.push(power);
      }
  
      binaryPowers.reverse();
  
      binaryArr.forEach((i, idx) => {
        !!+i && truthyBinaryPowers.push(binaryPowers[idx]);
      });
    
      sum = truthyBinaryPowers.reduce((sum, i) => sum + i);
  
      sentence+= (String.fromCharCode(sum + (isAlphabet ? 64 : 0)))[charCaseoObj[charCase] ? charCaseoObj[charCase] : 'toLowerCase']();
  
    }
    return sentence;
  }
  
  console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));
