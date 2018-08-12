function takeANumber(currentLineNo,custname){
  console.log(currentLineNo+" Line number")
  currentLineNo.push(custname)
  console.log(currentLineNo + "new line no")
  console.log(`Welcome, ${custname}.You are number ${currentLineNo.length} in line`)
  return `Welcome, ${custname}.You are number ${currentLineNo.length} in line`
  
}
