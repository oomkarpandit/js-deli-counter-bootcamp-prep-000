function takeANumber(currentLineNo,custname){
  console.log(currentLineNo+" Line number console msg firt line of code")
  currentLineNo.push(custname)
  console.log(currentLineNo + "new line no added a new line")
  console.log(`Welcome, ${custname}.You are number ${currentLineNo.length} in line`)
  return `Welcome, ${custname}.You are number ${currentLineNo.length} in line`
  
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length>0){
  var cust=katzDeliLine[0]
  katzDeliLine.shift()
  return `Now Serving ${katzDeliLine.shift()}cust
}
else
return 'There is nobody waiting to be served!'
}