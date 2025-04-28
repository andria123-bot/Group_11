let varada = "mfrinavi varada :D"

varada = "1"

function doubledNum(num: number): number {
  return num * 2
}

function stringReturn(word: string): string {
  if(word.length <= 5){
    return word
  }else{
    return word.slice(0, 5)
  }
}

function evenOrOdd(nums: number): string {
  if(nums % 2 === 0){
    return "Odd"
  }else{
    return "Even"
  }
}

function zeroNumGenerator(zeros: number): number[] {
  let res: number[] = []
  for(let i = 0; i < zeros; i++){
    res.push(0)
  }

  return res
}