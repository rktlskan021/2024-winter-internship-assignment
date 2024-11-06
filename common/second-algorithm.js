function isEmpty(value) {
    if(value == null) return true;
    if(value instanceof Array){
        return value.every((v) => isEmpty(v));
    }else if(value instanceof Object){
        return Object.values(value).every((v) => isEmpty(v));
    } else{
        const type = typeof value;
        if(type == "undefined") return true;
        else if(type == "string" && value.length == 0) return true;
        else return false;
    }
}

console.log(isEmpty(null));          // true
console.log(isEmpty({}));            // true
console.log(isEmpty(0));             // false
console.log(isEmpty(false));         // false
console.log(isEmpty([{}, { a: [""] }])); // true
console.log(isEmpty({ a: null, b: '' })); // true
console.log(isEmpty({ a: null, b: 'ad' })); // false