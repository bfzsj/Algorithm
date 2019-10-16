/**
 * Created by xiaodong.shi on 2019/10/16.
 */
let cc='{"results":[{"normResult":"php","rewriteVersion":"v0","score":10000}],"srcTitle":"php研发工程师"}';
let sxd=cc.replace(/\{/g,"<tr ><td>").replace(/\:/g,": </td><td>").replace(/\,/g,"</td></tr><tr><td>").replace(/\[/g,"<table class='table table-bordered'>").replace(/\}/g,"</td></tr>").replace(/\]/g,"</table>");
console.log(sxd)
/* {  <tr><td>
 *   :  </td><td>
 *     ,   </td></tr><tr><td>
 *       [ <table>
 *       }  </td></tr>
 *       ]  </table>
 * */