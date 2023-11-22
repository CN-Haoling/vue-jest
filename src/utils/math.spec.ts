import { sum, mul, sub, div } from './math'

test('测试搜索组件组件挂载',()=>{
    /**
    * 测试各个组件是否正常挂载
    */
   const caseList = [{a:12, b:23, c:35}]
   caseList.forEach((e)=>expect(sum(e.a,e.b)).toEqual(e.c))
   caseList.forEach((e)=>expect(mul(e.a,e.b)).toEqual(276))
   caseList.forEach((e)=>expect(sub(e.a,e.b)).toEqual(-11))
   caseList.forEach((e)=>expect(div(e.a,e.b)).toEqual(12/23))
 })
 