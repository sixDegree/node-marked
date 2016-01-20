var marked=require("./marked-extend");
var fs=require("fs");

fs.readFile("articles/test.md",'utf8',function(err,data){
	var result=marked(data);
	//console.log(result);
	fs.writeFile("pages/extend-1.html",result);
});

fs.readFile("articles/test.md",'utf8',function(err,data){
	var Lexer=marked.Lexer;
	var lexer=new Lexer();
	var tokens=lexer.lex(data);

	var tocToken=lexer.getToken(tokens,"toc");
	console.log("toc:");
	console.log(tocToken);

	var metaToken=lexer.getToken(tokens,"meta");
	console.log("meta:");
	console.log(metaToken);

	var result=marked.parser(tokens);
	fs.writeFile("pages/extend-2.html",result);

});

fs.readFile("articles/01.md",'utf8',function(err,data){
	var Lexer=marked.Lexer;
	var tokens=Lexer.lex(data);

	var tocToken=Lexer.getToken(tokens,"toc");
	console.log("toc:");
	console.log(tocToken);

	var metaToken=Lexer.getToken(tokens,"meta");
	console.log("meta:");
	console.log(metaToken);

	var result=marked.parser(tokens);
	fs.writeFile("pages/extend-3.html",result);

});

