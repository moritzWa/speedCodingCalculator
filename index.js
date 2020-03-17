//Dom Interaction

const getHistory = () => document.getElementById("history-value").innerText

const printHistory = num =>
  (document.getElementById("history-value").innerText = num)

const getOutput = () => document.getElementById("output-value").innerText

const printOutup = num =>
  (document.getElementById("output-value").innerText = getNumFormat(num))

const getNumFormat = num => {
  let n = Number(num)
  return n.toLocaleString("en")
}

const revNumFormat = num => Number(num.replace(/,/g, ""))

//Calulations
