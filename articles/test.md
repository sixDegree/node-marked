---
title: Markdown Test Article
tags: web,sass
description: This is Markdown Test Article
---

# Markdown Test Article

[TOC]

ps: *,-,+ 3个符号效果都一样

## Primary Module (h2)

### HTML

<pre>
Hello
sdjfioe
</pre>

<p>
dfjieowifoenwfjwenf
sdfnjenjk
</p>

<b>dfe</b>

Do <code>Hello</code> Test

<a>sdfe</a>

<ul style="list-style:none">
	<li>Hello</li>
	<li>Welcome</li>
</ul>

### Inline

> This is Quote

**Strong Text**

*Emphasize*

++Underline++

~~Strikethrough~~

==Highlight==

^Superscript^

~~Subscript~~

### List (*,+,-)

- Hello
	+ Hello 1
	+ Hello 2
	+ Hello 3
- Welcome
	* Welcome 1
	* Welcome 2
	* Welcome 3
- Good morning
	+ GM 1
		- He 1
		- He 2
	+ GM 2 
		* We 1
		* We 2
	+ GM3
		- He3
			* We 3
		* T1
			- F1
		- T2

#### Ul List
* Hello
* Welcome
* Good morning

#### Ol List
1. Hello
2. Welcome
3. Good morning

### Link
[Baidu](http://wwww.baidu.com)

### Image
![Mou icon](http://mouapp.com/Mou_128.png)

### Table

| column | column |
|--------|--------|
|   Col1 |  Col2  |

| 为什么为什么  |   然而然而          |          但是但是     |         
|:--------|:----------------:|------------------:|
|可以     |   拒绝           |      选择         | 


### Break

Page Break
***

This is Section Break Begin

---

This is Section Break End


## Medium Module (h2)

### Inline Code
This is Inline Code `<script></script>` ! 

### Code
```
POST /task?id=1 HTTP/1.1
Host: example.org
Content-Type: application/json; charset=utf-8
Content-Length: 19

{"status": "ok", "extended": true}

//中文效果
public void main(args){
	System.out.println("Hello");
}

```

#### NoHighlight
```nohighlight
POST /task?id=1 HTTP/1.1
Host: example.org
Content-Type: application/json; charset=utf-8
Content-Length: 19

{"status": "ok", "extended": true}

//中文效果
public void main(args){
	System.out.println("Hello");
}

```

#### Markdown 
```markdown

//中文效果
# hello world

you can write text [with links](http://example.com) inline or [link references][1].

* one _thing_ has *em*phasis
* two __things__ are **bold**

[1]: http://example.com

```

#### HTTP
```http

POST /task?id=1 HTTP/1.1
Host: example.org
Content-Type: application/json; charset=utf-8
Content-Length: 19

{"status": "ok", "extended": true}

//中文效果
public void main(args){
  System.out.println("Hello");
}

```

#### HTML
```html
<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
</script>

<body>
  //中文效果
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>

```

#### SCSS

```scss

//中文效果
@import url('print.css');
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  body:first-of-type pre::after {
    content: 'highlight: ' attr(class);
  }
  body {
    background: linear-gradient(45deg, blue, red);
  }
}
@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

div.text,#content,li[lang=ru] {
  font: Tahoma, Chunkfive, sans-serif;
  background: url('hatch.png') /* wtf? */;  color: #F0F0F0 !important;
  width: 100%;
}
```

#### Ruby

```ruby
set :markdown_engine, :redcarpet
set :markdown, :tables => true,               #表格    
               :autolink => true,             #自动将url转换为链接    
               :no_intra_emphasis => true,    #减少下划线问题   
               :fenced_code_blocks => true,   #支持\`\`\`式的code block      
               #:smartypants => true,         #不需要自动转换省略号等      
               #:superscript => true,         #不需要自动转换上标，需要的时候我会用MathJax启用LaTeX    
               :space_after_headers => true   # ### 这样的token之后必须有空格，才视之后的内容为小标题
```

#### JS
```javascript

//中文效果
import {x, y} as p from 'point';
const ANSWER = 42;
function $initHighlight(block, flags) {
  try {
    if (block.className.search(/\bno\-highlight\b/) != -1)
      return processBlock(block.function, true, 0x0F) + ' class=""';
  } catch (e) {
    /* handle exception */
    var e4x =
        <div>Example
            <p>1234</p></div>;
  }
  for (var i = 0 / 2; i < classes.length; i++) { // "0 / 2" should not be parsed as regexp
    if (checkCondition(classes[i]) === undefined)
      return /\d+[\s/]/g;
  }
  console.log(Array.every(classes, Boolean));
}

```

#### Java
```java

//中文效果
/**
 * @author John Smith <john.smith@example.com>
 * @version 1.0
*/
package l2f.gameserver.model;

import java.util.ArrayList;

public abstract class L2Character extends L2Object {
  public static final Short ABNORMAL_EFFECT_BLEEDING = 0x0_0_0_1; // not sure

  public void moveTo(int x, int y, int z) {
    _ai = null;
    _log.warning("Should not be called");
    if (1 > 5) {
      return;
    }
  }

  /** Task of AI notification */
  @SuppressWarnings( { "nls", "unqualified-field-access", "boxing" })
  public class NotifyAITask implements Runnable {
    private final CtrlEvent _evt;

    List<String> mList = new ArrayList<String>()

    public void run() {
      try {
        getAI().notifyEvent(_evt, _evt.class, null);
      } catch (Throwable t) {
        t.printStackTrace();
      }
    }
  }
}
```

## Senior Module (h2)

### LaTex
  //中文效果

  $(x_i, y_i)$

  \[\frac{{ - b \pm \sqrt {{b^2} - 4ac} }}{{2a}}\]

  When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
  $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

### LaTex + `p` tag

<p>
  //中文效果

  $(x_i, y_i)$

  \[\frac{{ - b \pm \sqrt {{b^2} - 4ac} }}{{2a}}\]

  When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
  $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
</p>

### LaTex + `pre` tag

<pre>

  //中文效果

  $(x_i, y_i)$

  \[\frac{{ - b \pm \sqrt {{b^2} - 4ac} }}{{2a}}\]

  When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
  $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
</pre>


### LaTex +`pre`+`code` tag
<pre><code>
$(x_i, y_i)$
\[\frac{{ - b \pm \sqrt {{b^2} - 4ac} }}{{2a}}\]

  When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
  $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
</code></pre>

### LaTex Code without language

```
  //中文效果

  $(x_i, y_i)$

  \[\frac{{ - b \pm \sqrt {{b^2} - 4ac} }}{{2a}}\]

  When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
  $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

```

### LaTex Code with language tex
```tex

  //中文效果

  $(x_i, y_i)$

  \[\frac{{ - b \pm \sqrt {{b^2} - 4ac} }}{{2a}}\]

  When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
  $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

```

### LaTex Code with nohighlight
```nohighlight
  
  //中文效果

  $(x_i, y_i)$

  \[\frac{{ - b \pm \sqrt {{b^2} - 4ac} }}{{2a}}\]

  When $a \ne 0$, there are two solutions to \(ax^2 + bx + c = 0\) and they are
  $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
```




