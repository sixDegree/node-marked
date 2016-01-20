var marked=require("marked");
var fs=require("fs");

fs.readFile("articles/test.md",'utf8',function(err,data){
	var result=marked(data,{langPrefix:""});

	var tpl=fs.readFileSync("template/highlight-01.html",'utf-8');
	fs.writeFile("pages/highlight-1.html",tpl.replace("{content}",result));

	tpl=fs.readFileSync("template/highlight-02.html",'utf-8');
	fs.writeFile("pages/highlight-2.html",tpl.replace("{content}",result));
});
