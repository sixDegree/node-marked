var marked=require("marked");

var markdownString="### I am using marked api! \n ```js\n console.log('Hello world!'); \n```";

/*Sync parser*/
console.log(marked(markdownString));

/*Async parser*/
marked(markdownString,function(err,content){
	if(err)
		throw err;
	console.log("Callback:");
	console.log(content);
})

///////////////////////////////////////////////////////

var highlight=require("highlight.js");
marked.setOptions({
	gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    langPrefix:"hljs ",
    tableClass:"table",
    highlight:function (code,lang) {
	    return highlight.highlightAuto(code,[lang]).value;
	}
});
console.log(marked(markdownString));

