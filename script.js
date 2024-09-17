
let score1 = inp1.value
let score2 = inp2.value

function checkTable() {
   let sign = signing.value
   table = "<table>"
   table += "<tr>"

   for (let i = 1; i <= Number(inp1.value); i++) {
   table += "<td>"

   for (let j = 1; j <= Number(inp2.value); j++)      
      
   {  
      console.log (eval(inp1.value + signing.value + inp2.value));

   let  Result = Number(eval(i + signing.value + j));

   table += i + signing.value + j + "=" + Result + "<br>"
   }
}
tableRes.innerHTML = table
}