//Dom Interaction

const getHistory = () => document.getElementById("history-value").innerText

const setHistory = num =>
  (document.getElementById("history-value").innerText = num)

const getOutput = () => document.getElementById("output-value").innerText

const printOutput = num =>
  (document.getElementById("output-value").innerText = getNumFormat(num))

const getNumFormat = num => {
  let n = Number(num)
  return n.toLocaleString("en")
}

const revNumFormat = num => Number(num.replace(/,/g, ""))

const operator = document.getElementsByClassName("operator")
for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", () => {
    /* console.log("id:" + operator[i].id)

    let history = getHistory()

    switch (operator[i].id) {
      case "clear":
        setHistory("")
        printOutput("")
      case "backspace":
        let output = revNumFormat(getOutput()).toString()
        if (output) {
          output = output.substr(0, output.length - 1)
          printOutput(output)
        }
      case "=":
        if (history != "") {
          let result = eval(history)
          printOutput(result)
          setHistory(History)
        } else {
          break
        }
      case "*":
      case "/":
      case "+":
      case "-":
        let newoutput = getOutput()

        if (newoutput == "" && history != "") {
          console.log("in ")
          newoutput = revNumFormat(getOutput())
          history = history + newoutput
        }
        break
    } */
    if (operator[i].id == "clear") {
      setHistory("")
      printOutput("")
    } else if (operator[i].id == "backspace") {
      var output = revNumFormat(getOutput()).toString()
      if (output) {
        //if output has a value
        output = output.substr(0, output.length - 1)
        printOutput(output)
      }
    } else {
      var output = getOutput()
      var history = getHistory()
      if (output == "" && history != "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1)
        }
      }
      if (output != "" || history != "") {
        output = output == "" ? output : revNumFormat(output)
        history = history + output
        if (operator[i].id == "=") {
          var result = eval(history)
          printOutput(result)
          setHistory("")
        } else {
          history = history + operator[i].id
          setHistory(history)
          printOutput("")
        }
      }
    }
  })
}

//chain numbers

const number = document.getElementsByClassName("number")
console.log(number)
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", () => {
    let output = revNumFormat(getOutput())
    if (output != NaN) {
      output = output + number[i].id
      console.log(output)
      printOutput(output)
    }
  })
}

//Calulations
