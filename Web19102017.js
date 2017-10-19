> const [a,b,c] = [5,6,7];
undefined
> console.time('S')||void setTimeout( ()=>void setTimeout( ()=>void setTimeout( ()=>console.timeEnd('S')  ,a*1000)  ,b*1000) ,c*1000)
undefined
> S: 18017.346ms


ОТВЕТ:console.time('S')||void setTimeout( ()=>void setTimeout( ()=>void setTimeout( ()=>console.timeEnd('S')  ,a*1000)  ,b*1000) ,c*1000)
