var a = request.body;
var obj = {
    "body": a.a,
    "headers": a.b
}
function buildMsg(obj){
   let result = new SomeKindOfClass();
   result.body = obj.body;
   result.headers = obj.headers
   return result
}
foo(buildMsg(obj))
