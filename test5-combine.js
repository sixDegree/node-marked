var marked=require("marked");
var fs=require("fs");
var highlight=require("highlight.js");

fs.readFile("articles/test.md",'utf8',function(err,data){
	var result=marked(data);
	var tpl=fs.readFileSync("template/combine-01.html",'utf-8');
	fs.writeFile("pages/combine-01.html",tpl.replace("{content}",result));

	marked.setOptions({
	    langPrefix:"hljs ",
	    highlight:function (code,lang) {
		    return highlight.highlightAuto(code,[lang]).value;
		}
	});
	result=marked(data);
	tpl=fs.readFileSync("template/combine-02.html",'utf-8');
	fs.writeFile("pages/combine-02.html",tpl.replace("{content}",result));
});