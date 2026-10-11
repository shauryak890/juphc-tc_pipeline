const express=require('express');
const path=require('path');
const {calculateTax}=require('./src/taxCalculator');
const app=express(), PORT=Number(process.env.PORT||3000);
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.get('/health',(_req,res)=>res.json({status:'ok'}));
app.post('/api/tax',(req,res)=>{
  const income=Number(req.body&&req.body.income);
  if(!Number.isFinite(income)||income<0) return res.status(400).json({error:'Income must be a non-negative number.'});
  res.json(calculateTax(income));
});
app.get('*',(_req,res)=>res.sendFile(path.join(__dirname,'public','index.html')));
if(require.main===module) app.listen(PORT,'0.0.0.0',()=>console.log(`Tax Calculator listening on port ${PORT}`));
module.exports=app;
