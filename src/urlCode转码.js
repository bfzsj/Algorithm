/**
 * Created by xiaodong.shi on 2020/1/13.
 */
class urlCode{
    UrlEncode(str)
    {
        return this.transform(str);
    }
    transform(s)
    {
        var hex=''
        var i,j,t

        j=0
        for (i=0; i<s.length; i++)
        {
            t = this.hexfromdec( s.charCodeAt(i) );
            if (t=='25')
            {
                t='';
            }
            hex += '%' + t;
        }
        return hex;
    }

    hexfromdec(num) {
        if (num > 65535) { return ("err!") }
        let first = Math.round(num/4096 - .5);
        let temp1 = num - first * 4096;
        let second = Math.round(temp1/256 -.5);
        let temp2 = temp1 - second * 256;
        let third = Math.round(temp2/16 - .5);
        let fourth = temp2 - third * 16;
        return (""+this.getletter(third)+this.getletter(fourth));
    }

    getletter(num) {
        if (num < 10) {
            return num;
        }
        else {
            if (num == 10) { return "A" }
            if (num == 11) { return "B" }
            if (num == 12) { return "C" }
            if (num == 13) { return "D" }
            if (num == 14) { return "E" }
            if (num == 15) { return "F" }
        }
    }
}
console.log(new urlCode().UrlEncode("编程"));