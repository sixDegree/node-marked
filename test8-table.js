var marked=require("./marked-extend");
var fs=require("fs");

marked.setOptions({
  // gfm: true,
  // tables: true,
  // breaks: false,
  // pedantic: false,
  // sanitize: false,
  // sanitizer: null,
  // mangle: true,
  // smartLists: false,
  // silent: false,
  // smartypants: false
  tableClass:"table",
  reHeader:true
});

fs.readFile("articles/table.md",'utf8',function(err,data){
	var result=marked(data);
	console.log(result);
});
