/**
 * Created by xiaodong.shi on 2019/10/16.
 */
let cc='{"results":[{"normResult":"php","rewriteVersion":"v0","score":10000}],"srcTitle":"php研发工程师"}';
console.log(syntaxHighlight(cc))
/*let sxd=cc.replace(/\[{/g,"[{\n   ").replace(/\:/g,": ").replace(/\,/g,",\n   ").replace(/\[/g,"[").replace(/\}],/g,"}],\n")
console.log(sxd)*/
/* {  <tr><td>
 *   :  </td><td>
 *     ,   </td></tr><tr><td>
 *       [ <table>
 *       }  </td></tr>
 *       ]  </table>
 * */
function syntaxHighlight(json) {
    if (typeof json == 'string') {
        json = JSON.parse(json);
    }

    json = JSON.stringify(json, undefined, 2);

    json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
};
