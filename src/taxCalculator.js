// Illustrative brackets for the demo only; these are not official tax rates.
const TAX_BRACKETS=[{limit:10000,rate:0},{limit:40000,rate:.10},{limit:90000,rate:.20},{limit:Infinity,rate:.30}];
function calculateTax(income){
  const n=Number(income);
  if(!Number.isFinite(n)||n<0) throw new TypeError('Income must be a non-negative number.');
  let tax=0,lower=0; const breakdown=[];
  for(const b of TAX_BRACKETS){
    if(n<=lower) break;
    const upper=b.limit===Infinity?n:Math.min(n,b.limit);
    const amount=Math.max(0,upper-lower);
    if(amount>0){const due=amount*b.rate;tax+=due;breakdown.push({from:lower,to:b.limit===Infinity?null:upper,taxableAmount:+amount.toFixed(2),rate:b.rate,tax:+due.toFixed(2)});}
    if(b.limit!==Infinity) lower=b.limit;
  }
  tax=+tax.toFixed(2);
  return {income:+n.toFixed(2),tax,effectiveRate:n===0?0:+(tax/n).toFixed(4),takeHome:+(n-tax).toFixed(2),breakdown};
}
module.exports={calculateTax,TAX_BRACKETS};
