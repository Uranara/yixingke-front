
const s = "7s";

const reg = /^(\d+)([dhms]?)$/i;

const res = s.match(reg);
console.log(res);
if (res) {
    console.log(res[0])
}