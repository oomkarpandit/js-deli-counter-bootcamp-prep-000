function takeANumber(currentLineNo,custname){
  console.log(currentLineNo+" Line number console msg firt line of code")
  currentLineNo.push(custname)
  console.log(currentLineNo + "new line no added a new line")
  console.log(`Welcome, ${custname}.You are number ${currentLineNo.length} in line`)
  return `Welcome, ${custname}.You are number ${currentLineNo.length} in line`
  
}
function nowServing(katzDeliLine){
  var test=[]
   console.log(test.length)
  console.log(test.length + 'Length of new array')
  if (!test.length){console.log('zeroooo')}
  if (!katzDeliLine.length){
    console.log('length '+katzDeliLine.length)
     console.log('There is nobody waiting to be served!')
    return 'There is nobody waiting to be served!'
  }
  console.log(`Currently serving ${katzDeliLine[0]}`)
  return `Currently serving ${katzDeliLine.shift()}`
}

