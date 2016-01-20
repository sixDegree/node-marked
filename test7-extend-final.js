var marked=require("./marked-extend");
var fs=require("fs");
var highlight=require("highlight.js");

var renderer=new marked.Renderer();
renderer.toc=function(datas){
  console.log("render toc");
  var tocStr='';
  var indentStr='';
  var item=undefined;
  for(var i=0;i<datas.length;i++){
    item=datas[i];
    indentStr='';
    for(var j=0;j<item.depth-1;j++)
      indentStr+='<span class="tree-indent"></span>';
    var id=this.options.headerPrefix+(item.index?item.index:item.raw.toLowerCase().replace(/[^\w]+/g, '-'));
    tocStr+="<li>"+indentStr+"<a href='#"+id+"'>"+item.text+"</a></li>";
  }
  return "<ul class='toc'>"+tocStr+"</ul>";
};
renderer.codespan=function(text){
	return '<code class="inline-code">' + text + '</code>';
}

marked.setOptions({
    langPrefix:"hljs ",
    highlight:function (code,lang) {
	    return highlight.highlightAuto(code,[lang]).value;
	},
	headerPrefix:"header-",
	renderer:renderer
});

var buildHtmlMeta=function(meta){
	var metaStr='';
	for(var key in meta){
		metaStr+='<meta name="'+key+'" content="'+meta[key]+'" />\n'
	}
	return metaStr;
};

fs.readFile("articles/test.md",'utf8',function(err,data){
	//var result=marked(data);

	var Lexer=marked.Lexer;
	var tokens=Lexer.lex(data);

	var metaToken=Lexer.getToken(tokens,"meta");
	console.log("meta:");
	console.log(metaToken);
	var metaStr='';
	if(metaToken && metaToken.datas){
		metaStr=buildHtmlMeta(metaToken.datas);
		console.log("meta tags:")
		console.log(metaStr);
	}
	
	var result=marked.parser(tokens);

	var tpl=fs.readFileSync("template/final.html",'utf-8');
	fs.writeFile("pages/final.html",
		tpl.replace("{content}",result).replace("{meta}",metaStr)
	);
});

