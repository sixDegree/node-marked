var marked=require("marked");
var fs=require("fs");
var highlight=require("highlight.js");

marked.setOptions({
    langPrefix:"hljs ",
    highlight:function (code,lang) {
	    return highlight.highlightAuto(code,[lang]).value;
	},
	headerPrefix:"header-",
});

fs.readFile("articles/test.md",'utf8',function(err,data){
	var result=marked(data);

	var tpl=fs.readFileSync("template/highlight-03.html",'utf-8');
	fs.writeFile("pages/highlight-3.html",tpl.replace("{content}",result));
});

