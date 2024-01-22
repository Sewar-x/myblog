<template><div><h1 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h1>
<h2 id="盒子模型" tabindex="-1"><a class="header-anchor" href="#盒子模型" aria-hidden="true">#</a> 盒子模型</h2>
<h3 id="标准盒子模型" tabindex="-1"><a class="header-anchor" href="#标准盒子模型" aria-hidden="true">#</a> 标准盒子模型</h3>
<p><img src="@source/images/standar-box.png" alt="标准盒子模型图示"></p>
<ul>
<li>总元素的宽度=宽度+左填充+右填充+左边框+右边框+左边距+右边距</li>
<li>总元素的高度=高度+顶部填充+底部填充+上边框+下边框+上边距+下边距</li>
</ul>
<h3 id="ie中的盒子模型" tabindex="-1"><a class="header-anchor" href="#ie中的盒子模型" aria-hidden="true">#</a> IE中的盒子模型</h3>
<ul>
<li>
<p>只有margin和content ，content中包含border,padding</p>
</li>
<li>
<p>宽度=margin+content</p>
</li>
</ul>
<h3 id="控制盒子模型的属性" tabindex="-1"><a class="header-anchor" href="#控制盒子模型的属性" aria-hidden="true">#</a> 控制盒子模型的属性</h3>
<blockquote>
<p>box-sizing 属性</p>
</blockquote>
<ul>
<li>
<p>作用</p>
<ul>
<li>
<p>用于更改用于计算元素的宽度和高度默认的CSS盒子模型</p>
<ul>
<li>可以使用此属性来模拟不正确支持CSS盒子模型规范的游览器行为</li>
</ul>
</li>
</ul>
</li>
<li>
<p>取值</p>
<ul>
<li><strong>content-box：</strong> box-sizing 属性的默认值</li>
</ul>
</li>
<li>
<p>作用：设置为 标准盒子模型</p>
<ul>
<li>
<p>宽度和高度分别应用到元素的内容框</p>
</li>
<li>
<p>在宽度和高度之外绘制元素的内边距和边框</p>
<p><img src="@source/images/standar-box2.png" alt=""></p>
<ul>
<li>设置的 width = content</li>
<li>padding和border不被包含在定义的width和height之内
<ul>
<li>对象的实际宽度等于设置的width值和border、padding之和，即 ( Element width = width + border + padding )</li>
<li>此属性表现为标准模式下的盒模型</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>border-box</strong></p>
<ul>
<li>作用：设置 IE 盒子模型</li>
</ul>
</li>
</ul>
</li>
<li>
<p>为元素设定的宽度和高度决定了元素的边框盒。
* 就是说，为元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度<img src="@source/images/IE-box.png" alt="">
* 设置的 width = content + padding + border
* padding和border被包含在定义的width和height之内</p>
<ul>
<li>对象的实际宽度就等于设置的width值，即使定义有border和padding也不会改变对象的实际宽度，即 ( Element width = width )
<ul>
<li>此属性表现为怪异模式下的盒模型</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="文档流" tabindex="-1"><a class="header-anchor" href="#文档流" aria-hidden="true">#</a> 文档流</h2>
<ul>
<li>
<p>概念</p>
<ul>
<li>将窗体自上而下分成一行一行，并在每行中按从左至右依次排放元素，称为文档流，也称为普通流</li>
</ul>
</li>
<li>
<p>HTML中全部元素都是盒模型，盒模型占用一定的空间，依次排放在HTML中，形成了文档流</p>
</li>
<li>
<p>脱离文档流</p>
<ul>
<li>概念：脱离文档流的元素的定位基于正常的文档流，当一个元素脱离文档流后，依然在文档流中的其他元素将忽略该元素并填补其原先的空间，元素脱离文档流之后，将不再在文档流中占据空间，而是处于浮动状态（可以理解为漂浮在文档流的上方）<img src="@source/images/document-flow.jpg" alt=""></li>
<li>让 div 脱离文档流方法
* position: absolute;
<ul>
<li>position: fixed;
<ul>
<li>元素的 position 值为 absolute 或 fixed 时，元素往 Z 轴方向移了一层，元素脱离了普通流，所以不再占据原来那层的空间，还会覆盖下层的元素</li>
</ul>
</li>
<li>该元素将变为块级元素，相当于给该元素设置了 display: block;（给一个内联元素，如 <code v-pre>&lt;span&gt; </code>，设置 absolute之后发现它可以设置宽高了）</li>
<li>如果该元素是块级元素，元素的宽度由原来的 width: 100%（占据一行），变为了 auto</li>
</ul>
</li>
<li>float</li>
</ul>
</li>
<li>
<p>层叠上下文和层叠顺序</p>
<ul>
<li>层叠上下文：指图层在z轴中的位置</li>
<li>一旦普通元素具有了层叠上下文，其层叠顺序就会变高</li>
<li><img src="@source/images/ceng.png" alt=""></li>
<li>特性：
* 层叠上下文的层叠水平要比普通元素高
<ul>
<li>层叠上下文可以阻断元素的混合模式</li>
<li>层叠上下文可以嵌套，内部层叠上下文及其所有子元素均受制于外部的层叠上下文</li>
<li>每个层叠上下文和兄弟元素独立，也就是当进行层叠变化或渲染的时候，只需要考虑后代元素</li>
<li>每个层叠上下文是自成体系的，当元素发生层叠的时候，整个元素被认为是在父层叠上下文的层叠顺序中</li>
</ul>
</li>
<li>分类：
<ul>
<li>根层叠上下文：
<ul>
<li>页面根元素具有层叠上下文，称之为“根层叠上下文”</li>
<li>因为根层叠上下文，所以绝对定位元素在left/top等值定位的时候，如果没有其他定位元素限制，会相对浏览器窗口定位</li>
</ul>
</li>
<li>定位元素与传统层叠上下文：
<ul>
<li>z-index值为数值的定位元素的传统层叠上下文</li>
<li>对于包含有 <code v-pre>position:relative/position:absolute/position:fixed</code> 声明的定位元素，当其z-index值不是auto的时候，会创建层叠上下文</li>
<li>当z-index嵌套错乱，看看是不是受父级的层叠上下文元素干扰了</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>层叠水平:</p>
<ul>
<li>决定了同一个层叠上下文中元素在z轴上的显示顺序</li>
</ul>
</li>
<li>
<p>普通元素的层叠水平优先由层叠上下文决定，因此，层叠水平的比较只有在当前层叠上下文元素中才有意义</p>
</li>
<li>
<p>注意：不要把层叠水平和CSS的z-index属性混为一谈，某些情况下z-index确实可以影响层叠水平，但是，只限于定位元素以及flex盒子的孩子元素，而层叠水平所有的元素都存在</p>
</li>
<li>
<p>层叠顺序：表示元素发生层叠时候有着特定的垂直显示顺序</p>
<ul>
<li>
<p>层叠顺序是一种规则<img src="@source/images/cengdieshunxu.png" alt=""></p>
</li>
<li>
<p>最低水平的border/background指的是层叠上下文元素的边框和背景色</p>
</li>
<li>
<p>每一个层叠顺序规则适用于一个完整的层叠上下文元素</p>
</li>
<li>
<p>原图没有呈现inline-block的层叠顺序，实际上，inline-block和inline水平元素是同等level级别</p>
</li>
<li>
<p>z-index:0实际上和z-index:auto单纯从层叠水平上看，是可以看成是一样的</p>
</li>
<li>
<p>层叠准则：</p>
<ul>
<li>谁大谁上：当具有明显的层叠水平标示的时候，如识别的z-indx值，在同一个层叠上下文领域，层叠水平值大的那一个覆盖小的那一个</li>
<li>后来居上：当元素的层叠水平一致、层叠顺序相同的时候，在DOM流中处于后面的元素会覆盖前面的元素</li>
</ul>
</li>
<li>
<p>在CSS和HTML领域，只要元素发生了重叠，都离不开上面这两个黄金准则</p>
</li>
</ul>
</li>
</ul>
<h2 id="position-定位" tabindex="-1"><a class="header-anchor" href="#position-定位" aria-hidden="true">#</a> Position(定位)</h2>
<ul>
<li>分类
<ul>
<li>static
<ul>
<li>HTML 元素的默认值，即没有定位，遵循正常的文档流对象</li>
<li>静态定位的元素不会受到 top, bottom, left, right影响</li>
</ul>
</li>
<li>fixed
<ul>
<li>元素的位置相对于浏览器窗口是固定位置,即使窗口是滚动的它也不会移动; Fixed定位使元素的位置与文档流无关，因此不占据空间; Fixed定位的元素和其他元素重叠</li>
<li>注意: Fixed 定位在 IE7 和 IE8 下需要描述 !DOCTYPE 才能支持</li>
</ul>
</li>
<li>sticky
<ul>
<li>粘性定位:  基于用户的滚动位置来定位; 粘性定位的元素是依赖于用户的滚动，在 position:relative 与 position:fixed 定位之间切换。 它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位; 这个特定阈值指的是 top, right, bottom 或 left 之一，换言之，指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同</li>
<li>注意: Internet Explorer, Edge 15 及更早 IE 版本不支持 sticky 定位。 Safari 需要使用 -webkit- prefix (查看以下实例)</li>
</ul>
</li>
<li>relative
<ul>
<li>相对定位元素的定位是相对其正常位置;移动相对定位元素，但它原本所占的空间不会改变; 相对定位元素经常被用来作为绝对定位元素的容器块</li>
</ul>
</li>
<li>absolute
<ul>
<li>绝对定位的元素的位置相对于最近的已定位(已经相对定位的)父元素，如果元素没有已定位的父元素，那么它的位置相对于<code v-pre>&lt;html&gt;</code>:</li>
<li>absolute 定位使元素的位置与文档流无关，因此不占据空间。</li>
<li>absolute 定位的元素和其他元素重叠</li>
<li>inherit: 从父元素继承 position 属性的值</li>
<li>控制: 位置通过top, bottom, left, right控制</li>
<li>堆叠顺序
<ul>
<li>元素的定位与文档流无关，所以它们可以覆盖页面上的其它元素</li>
<li>z-index属性: 指定了一个元素的堆叠顺序,具有更高堆叠顺序的元素总是在较低的堆叠顺序元素的前面</li>
<li>注意: 如果两个定位元素重叠，没有指定z - index，最后定位在HTML代码中的元素将被显示在最前面</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="float-浮动" tabindex="-1"><a class="header-anchor" href="#float-浮动" aria-hidden="true">#</a> Float(浮动)</h2>
<ul>
<li>作用：
<ul>
<li>使元素向左或向右移动，其周围的元素也会重新排列</li>
<li>一个浮动元素会尽量向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止</li>
</ul>
</li>
<li>浮动元素对其他元素影响：
<ul>
<li>浮动元素之后的元素将围绕它</li>
<li>浮动元素之前的元素将不会受到影响</li>
</ul>
</li>
<li>清除浮动影响： <code v-pre>clear:both;</code>
<ul>
<li>元素浮动之后，周围的元素会重新排列，为了避免这种情况，使用 clear 属性。</li>
<li>clear 属性指定元素两侧不能出现浮动元素</li>
</ul>
</li>
<li>要点
<ul>
<li>只有左右浮动，没有上下浮动。</li>
<li>元素设置 float 之后，它会脱离普通流（和 position: absolute; 一样），不再占据原来那层的空间，还会覆盖下一层的元素。</li>
<li>浮动不会对该元素的上一个兄弟元素有任何影响</li>
<li>浮动之后，该元素的下一个兄弟元素会紧贴到该元素之前没有设置 float 的元素之后</li>
<li>如果该元素的下一个兄弟元素中有内联元素（通常是文字），则会围绕该元素显示，形成类似「文字围绕图片」的效果</li>
<li>下一个兄弟元素如果也设置了同一方向的 float，则会紧随该元素之后显示</li>
<li>该元素将变为块级元素，相当于给该元素设置了 display: block;</li>
</ul>
</li>
</ul>
<h2 id="元素类型" tabindex="-1"><a class="header-anchor" href="#元素类型" aria-hidden="true">#</a> 元素类型</h2>
<p>分类</p>
<ul>
<li>
<p>块级元素(block)</p>
<ul>
<li>特性：
<ul>
<li>总是独占一行，表现为另起一行开始，而且其后的元素也必须另起一行显示;</li>
<li>宽度(width)、高度(height)、内边距(padding)和外边距(margin)都可控制;</li>
</ul>
</li>
<li>例子: div ,  form , h1 , h2 , h3 , h4 , h5 , h6 , hr , isindex , menu , noframes , noscript , ol , p , pre , table , ul , li，address , blockquote , center , dir ，dl , fieldset</li>
</ul>
</li>
<li>
<p>内联元素(inline)</p>
<ul>
<li>特性：
<ul>
<li>和相邻的内联元素在同一行;</li>
<li>宽度(width)、高度(height)、内边距的top/bottom(padding-top/padding-bottom)和外边距的top/bottom(margin-top/margin-bottom)都不可改变，就是里面文字或图片的大小;</li>
<li>例子: a , abbr , acronym , b , bdo , big , br , cite , code , dfn , em , font , i , img , input , kbd , label , q , s , samp , select , small , span , strike , strong , sub , sup ,textarea , tt , u , var</li>
</ul>
</li>
</ul>
</li>
<li>
<p>行块级元素</p>
<ul>
<li>特性：拥有内在尺寸，可设置高宽，不会自动换行</li>
<li>例子:   button,input，textarea,select, img</li>
</ul>
</li>
<li>
<p>可变元素</p>
<ul>
<li>特性:   根据上下文关系确定该元素是块元素还是内联元素</li>
<li>例子:   applet ,button ,del ,iframe , ins ,map ,object , script</li>
</ul>
</li>
<li>
<p>设置方法:</p>
</li>
<li>
<p>display:block  -- 显示为块级元素</p>
</li>
<li>
<p>display:inline  -- 显示为内联元素</p>
</li>
<li>
<p>display:inline-block -- 显示为内联块元素，表现为同行显示并可修改宽高内外边距等属性</p>
</li>
<li>
<p>display:none</p>
</li>
<li>
<p>可以隐藏某个元素，且隐藏的元素不会占用任何空间
*  该元素不但被隐藏了，而且该元素原本占用的空间也会从页面布局中消失</p>
</li>
</ul>
<p>参考资料
<a href="https://www.runoob.com/cssref/pr-class-display.html" target="_blank" rel="noopener noreferrer">display取值<ExternalLinkIcon/></a></p>
<h2 id="屏幕分辨率" tabindex="-1"><a class="header-anchor" href="#屏幕分辨率" aria-hidden="true">#</a> 屏幕分辨率</h2>
<ul>
<li>参考资料：<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/devicePixelRatio" target="_blank" rel="noopener noreferrer">物理像素、分辨率与CSS像素分辨率、渲染分辨率 、信号分辨率<ExternalLinkIcon/></a></li>
</ul>
<h2 id="像素" tabindex="-1"><a class="header-anchor" href="#像素" aria-hidden="true">#</a> 像素</h2>
<ul>
<li>参考资料：<a href="https://www.cnblogs.com/libin-1/p/7148377.html" target="_blank" rel="noopener noreferrer">《物理像素、虚拟像素、逻辑像素、设备像素，PPI, DPI, DPR 和 DIP》<ExternalLinkIcon/></a></li>
</ul>
<h2 id="单位" tabindex="-1"><a class="header-anchor" href="#单位" aria-hidden="true">#</a> 单位</h2>
<ul>
<li>
<p>分类</p>
<ul>
<li>
<p>按尺寸分类</p>
<ul>
<li>
<p>相对长度单位</p>
</li>
<li>
<p>绝对长度单位</p>
</li>
<li>
<p>固定尺寸，它们采用的是物理度量单位：cm、mm、in、px、pt以及pc</p>
</li>
</ul>
</li>
<li>
<p>按照不同的参考元素</p>
<ul>
<li>
<p>字体相对单位：em、ex、ch、rem</p>
</li>
<li>
<p>视窗相对单位：vw、vh、vmin、vmax</p>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="px" tabindex="-1"><a class="header-anchor" href="#px" aria-hidden="true">#</a> px</h3>
<ul>
<li>概念：为像素单位。它是显示屏上显示的每一个小点，为显示的最小单位</li>
<li>单位：绝对尺寸单位,不能变动</li>
<li>原理：大小是根据用户屏幕显示器的分辨率决定的（因此不同的设备显示相同的像素值也可能会有不同的结果）</li>
<li>特点：使用px作为字体单位，其字体大小将不能被更改</li>
</ul>
<h3 id="em" tabindex="-1"><a class="header-anchor" href="#em" aria-hidden="true">#</a> em</h3>
<ul>
<li>概念：相对于应用在当前元素的字体尺寸，如果当前文本的字体尺寸未被定义，则相对于浏览器的默认字体尺寸</li>
<li>单位：相对长度单位，可以变动</li>
<li>原理：根据当前元素的字号按比例计算
<ul>
<li>em作为font-size的单位时，其代表父元素的字体大小</li>
<li>em作为其他属性单位时，代表自身字体大小</li>
</ul>
</li>
<li>特点：em的值并不是固定不变的。em会继承父级元素字体的大小</li>
<li>em与px转换:
<ul>
<li>一般浏览器字体大小默认为16px，则1em =16px,那么0.625em=10px</li>
<li>当设置根元素Font-size:62.5%时,1em=10px</li>
</ul>
</li>
<li>注意：慎用em。
<ul>
<li>理由：em会叠加计算</li>
<li>实例	<img src="@source/images/em-demo.png" alt="">
<ul>
<li>解释：外层span的字号是16px（浏览器默认值），所以1.5em之后是24px。由于字号是继承的，导致内层span的字号继承过来是24px，再经过1.5em之后就成了36px</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="rem" tabindex="-1"><a class="header-anchor" href="#rem" aria-hidden="true">#</a> rem</h3>
<ul>
<li>
<p>概念：</p>
<ul>
<li>相对根节点html的字体大小来计算</li>
<li>rem作用于非根元素时，相对于根元素字体大小</li>
<li>rem作用于根元素字体大小时，相对于其出初始字体大小</li>
</ul>
</li>
<li>
<p>rem与px换算：浏览器默认的字号16px</p>
<ul>
<li>
<p>已知px换算成rem ：</p>
<ul>
<li>换算公式: rem=px/根元素字体大小</li>
<li>字号16px时px单位与rem之间的转换关系</li>
</ul>
<p><img src="@source/images/px-rem.png" alt=""></p>
<ul>
<li>注意：为了方便计算，时常将在<code v-pre>&lt;html&gt;</code>元素中设置 <code v-pre>font-size</code>值为62.5%,相当于在<code v-pre>&lt;html&gt;</code>中设置<code v-pre>font-size</code>为10px</li>
</ul>
<p><img src="@source/images/px-rem2.png" alt=""></p>
<ul>
<li>原理：浏览器默认的字号16px,设置font-size=62.5%,相当于16px*62.5%=10px</li>
</ul>
</li>
<li>
<p>已知rem换算成px：</p>
<ul>
<li>1rem等于html根元素设定的font-size的px值</li>
<li>实例：假如在css里面设定html{font-size:14px} ,则此时1rem=14px</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="百分比" tabindex="-1"><a class="header-anchor" href="#百分比" aria-hidden="true">#</a> 百分比%</h3>
<ul>
<li>概念：相对于父元素的百分比值，百分比表示法所表示的仅仅是父元素“内容”的百分比，不包括padding</li>
<li>百分比基准：
<ul>
<li>若元素不存在定位： 则基于直接父元素的宽高度</li>
<li>若元素存在定位 且 定位为 relative， 则也基于直接父元素的宽高度</li>
<li>若元素存在定位 且 定位为 absolute， 则基于最近的相对定位（relative）的祖先元素的宽高度</li>
<li>若元素存在定位 且 定位为 fixed， 则始终基于body元素的宽高度</li>
</ul>
</li>
<li>注意：
<ul>
<li>高度百分比问题：若某元素的父元素没有确定高度，则无法有效使用height=XX%的样式
<ul>
<li>让高度百分比生效方法
<ul>
<li>1.给从根的父容器到子容器的所有容器都设置好百分比高度信息</li>
<li>2.给父容器设置具体的高度信息，比如直接写死在样式中，或者用javascript来设置</li>
<li>3.给父容器设置位置信息，让其得到高度信息</li>
</ul>
</li>
<li>示例，用css使body得到高度，从而使其中的div全屏</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="vw-vh" tabindex="-1"><a class="header-anchor" href="#vw-vh" aria-hidden="true">#</a> vw/vh</h3>
<ul>
<li>视口：根据你浏览器窗口的大小的单位，不受显示器分辨率的影响
<ul>
<li>vw —— 视口宽度的 1/100</li>
<li>vh —— 视口高度的 1/100</li>
</ul>
</li>
<li>在pc端，视口宽高就是浏览器得宽高</li>
<li>在移动端，视口宽高不同，不过一般设置<code v-pre>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1, maximum-scale=1&quot;&gt;</code></li>
<li>vmin：指选择vw和vh中最小的那个</li>
<li>vmax：选择最大的那个</li>
</ul>
<h3 id="rpx" tabindex="-1"><a class="header-anchor" href="#rpx" aria-hidden="true">#</a> rpx</h3>
<ul>
<li>
<p>概念：rpx 即响应式 px，一种根据屏幕宽度自适应的动态单位。</p>
</li>
<li>
<p>rpx单位是微信小程序中css的尺寸单位，rpx可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。</p>
</li>
<li>
<p>rpx 是相对于基准宽度的单位，可以根据屏幕宽度进行自适应。小程序规定屏幕基准宽度 750rpx。</p>
</li>
<li>
<p>以 750 宽的屏幕为基准，750rpx 恰好为屏幕宽度。屏幕变宽，rpx 实际显示效果会等比放大</p>
</li>
<li>
<p>如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。
rpx 为小程序中使用的相对单位，用法和rem类似， 1rpx = 屏幕宽度/750 px, 所以在屏幕宽度为750的设计稿中，1rpx = 1px。</p>
</li>
<li>
<p>设计稿 1px 与框架样式 1rpx 转换公式如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>设计稿 1px / 设计稿基准宽度 = 框架样式 1rpx / 750rpx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>换言之，页面元素宽度在 <code v-pre>uni-app</code> 中的宽度计算公式：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>元素宽度 rpx = 750 * 元素在设计稿中的宽度 / 设计稿基准宽度
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>举例说明：</strong></p>
<ol>
<li>若设计稿宽度为 750px，元素 A 在设计稿上的宽度为 100px，那么元素 A 在小程序里面的宽度应该设为：<code v-pre>750 * 100 / 750</code>，结果为：100rpx。</li>
<li>若设计稿宽度为 640px，元素 A 在设计稿上的宽度为 100px，那么元素 A 在小程序里面的宽度应该设为：<code v-pre>750 * 100 / 640</code>，结果为：117rpx。</li>
<li>若设计稿宽度为 375px，元素 B 在设计稿上的宽度为 200px，那么元素 B 在小程序里面的宽度应该设为：<code v-pre>750 * 200 / 375</code>，结果为：400rpx</li>
</ol>
</li>
</ul>
<h3 id="css-单位选择" tabindex="-1"><a class="header-anchor" href="#css-单位选择" aria-hidden="true">#</a> CSS 单位选择</h3>
<ul>
<li>
<p>页面适配的方式</p>
<ul>
<li>使用px，结合Media Query进行阶梯式的适配；</li>
<li>使用%，按百分比自适应布局；%是参考父容器</li>
<li>使用rem，结合html元素的font-size来根据屏幕宽度适配；</li>
<li>使用vw、vh，直接根据视口宽高适配。vw和vh是参考视口</li>
</ul>
</li>
<li>
<p>移动端适配方案</p>
<ul>
<li>
<p>rem+动态计算根元素 font-size</p>
</li>
<li>
<p>rem+vw</p>
<ul>
<li>
<p>使用方式</p>
<ul>
<li>根元素设置font-size使用vw</li>
<li>代码中使用rem单位</li>
</ul>
</li>
<li>
<p>原理:
* 1vw 始终表示移动端视窗的 1/100 ，当屏幕大小改变时候，1vw表示 px 大小也在变化</p>
<ul>
<li>根元素 font-size 使用 vw 时,则显示字体大小随着屏幕宽度变化而变化</li>
<li>根元素 font-size 如果使用 px，则显示字体大小固定，不随屏幕大小变化而变化</li>
<li>使用 rem 作为元素单位，则元素大小随根元素 font-size 大小 px 变化而变化</li>
</ul>
</li>
<li>
<p>计算方式
* 根元素 font-size 计算：
* 根元素 font-size 代表根元素字体默认大小,一般为16px
* 1vw 表示移动端视窗的 1/100
* 设计稿使用屏幕宽度为 px, 设计稿中 1px = 100vw / 设计稿宽度px
* 则根元素 font-size 使用 vw 计算方式为: 100vw / 设计稿宽度px * 设置的根元素font-size大小</p>
<ul>
<li>代码中rem单位计算方式：
<ul>
<li>1 rem=设计稿px/根元素字体大小font-size</li>
<li>当设置根元素font-size: 100px, 则代码中rem计算为: 设计稿px/100</li>
</ul>
</li>
<li>示例
<ul>
<li>假设设计稿屏幕宽度为750px,为了方便设置根元素font-size: 100px，根元素font-size计算100vw / 750px  * 100px = 13.33333333 vw</li>
</ul>
</li>
<li>代码单位计算：rem = 设计稿宽度px / 100px</li>
<li>使用场景
<ul>
<li>在视觉稿要求固定尺寸的元素上使用px</li>
<li>在字号、（大多数）间距上使用rem</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>​</p>
</li>
</ul>
<p>参考资料</p>
<ul>
<li><a href="https://segmentfault.com/a/1190000015867354" target="_blank" rel="noopener noreferrer">《对于页面适配，你应该使用px还是rem》<ExternalLinkIcon/></a></li>
</ul>
<h2 id="属性继承" tabindex="-1"><a class="header-anchor" href="#属性继承" aria-hidden="true">#</a> 属性继承</h2>
<ul>
<li>
<p>无继承性的属性：
* display</p>
<ul>
<li>文本属性
* vertical-align：垂直文本对齐
<ul>
<li>text-decoration：规定添加到文本的装饰</li>
<li>text-shadow：文本阴影效果</li>
<li>white-space：空白符的处理</li>
<li>unicode-bidi：设置文本的方向</li>
</ul>
</li>
<li>盒子模型的属性：width、height、margin 、margin-top、margin-right、margin-bottom、margin-left、border、border-style、border-top-style、border-right-style、border-bottom-style、border-left-style、border-width、border-top-width、border-right-right、border-bottom-width、border-left-width、border-color、border-top-color、border-right-color、border-bottom-color、border-left-color、border-top、border-right、border-bottom、border-left、padding、padding-top、padding-right、padding-bottom、padding-left</li>
<li>背景属性：background、background-color、background-image、background-repeat、background-position、background-attachment</li>
<li>定位属性：float、clear、position、top、right、bottom、left、min-width、min-height、max-width、max-height、overflow、clip、z-index</li>
<li>生成内容属性：content、counter-reset、counter-increment</li>
<li>轮廓样式属性：outline-style、outline-width、outline-color、outline</li>
<li>页面样式属性：size、page-break-before、page-break-after</li>
<li>声音样式属性：pause-before、pause-after、pause、cue-before、cue-after、cue、play-during</li>
</ul>
</li>
<li>
<p>有继承性的属性：</p>
<ul>
<li>
<p>字体系列属性：</p>
<ul>
<li>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>  * font：组合字体
  * font-family：规定元素的字体系列
  * font-weight：设置字体的粗细
  * font-size：设置字体的尺寸
  * font-style：定义字体的风格
  * font-variant：设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小。
  * font-stretch：对当前的 font-family 进行伸缩变形。所有主流浏览器都不支持。
  * font-size-adjust：为某个元素规定一个 aspect 值，这样就可以保持首选字体的 x-height
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>文本系列属性</p>
<ul>
<li>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>   * text-indent：文本缩进
   * text-align：文本水平对齐
   * line-height：行高
   * word-spacing：增加或减少单词间的空白（即字间隔）
   * letter-spacing：增加或减少字符间的空白（字符间距）
   * text-transform：控制文本大小写
   * direction：规定文本的书写方向
   * color：文本颜色
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>元素可见性：visibility</p>
</li>
<li>
<p>表格布局属性：caption-side、border-collapse、border-spacing、empty-cells、table-layout</p>
</li>
<li>
<p>列表布局属性：list-style-type、list-style-image、list-style-position、list-style</p>
</li>
<li>
<p>生成内容属性：quotes</p>
</li>
<li>
<p>光标属性：cursor</p>
</li>
<li>
<p>页面样式属性：page、page-break-inside、windows、orphans</p>
</li>
<li>
<p>声音样式属性：speak、speak-punctuation、speak-numeral、speak-header、speech-rate、volume、voice-family、pitch、pitch-range、stress、richness、、azimuth、elevation</p>
</li>
</ul>
</li>
<li>
<p>所有元素可以继承的属性</p>
<ul>
<li>元素可见性：visibility</li>
<li>光标属性：cursor</li>
</ul>
</li>
<li>
<p>内联元素可以继承的属性：</p>
<ul>
<li>字体系列属性：除text-indent、text-align之外的文本系列属性</li>
</ul>
</li>
<li>
<p>块级元素可以继承的属性：text-indent、text-align</p>
</li>
</ul>
<h2 id="css-轮廓-outline" tabindex="-1"><a class="header-anchor" href="#css-轮廓-outline" aria-hidden="true">#</a> CSS 轮廓（outline）</h2>
<ul>
<li>轮廓（outline）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用</li>
<li>轮廓（outline）属性指定元素轮廓的样式、颜色和宽度</li>
<li>注意
<ul>
<li>1.outline是不占空间的，既不会增加额外的width或者height（这样不会导致浏览器渲染时出现reflow或是repaint）</li>
<li>2.outline有可能是非矩形的（火狐浏览器下）</li>
<li>3.outline位于margin中间</li>
</ul>
</li>
</ul>
<h2 id="font字体" tabindex="-1"><a class="header-anchor" href="#font字体" aria-hidden="true">#</a> font字体</h2>
<ul>
<li>
<p>使用外部字体 : @font-face</p>
</li>
<li>
<p>文字溢出省略</p>
<ul>
<li>
<p>单行文本的溢出显示省略号</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token property">text-overflow</span><span class="token punctuation">:</span>ellipsis<span class="token punctuation">;</span>
<span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>text-overflow:ellipsis属性: 文本的溢出显示省略号,需要加宽度width属来兼容部分浏</p>
</blockquote>
</li>
<li>
<p>多行文本溢出显示省略号</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span>
<span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span>
<span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>
<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示
-webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式</p>
<p>-webkit-line-clamp用来限制在一个块元素显示的文本的行数</p>
</blockquote>
</li>
</ul>
</li>
</ul>
<h2 id="css对齐" tabindex="-1"><a class="header-anchor" href="#css对齐" aria-hidden="true">#</a> css对齐</h2>
<ul>
<li>
<p>水平居中</p>
<ul>
<li>
<p>元素居中对齐</p>
<ul>
<li>
<p>块元素居中</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span>
<span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>设置居中的元素为块元素，设置父元素text-align:center</p>
</li>
<li>
<p>弹性居中</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>文本居中对齐: text-align: center</p>
</li>
<li>
<p>图片居中对齐</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code> <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
 <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
<li>
<p>垂直居中</p>
<ul>
<li>vertical-align: middle;</li>
<li>父元素使用 padding; 设置padding的上下距离相同</li>
<li>line-height 属性值和 height 属性值相等，居中元素设置    line-height,  display: inline-block; 和vertical-align: middle;</li>
</ul>
</li>
<li>
<p>水平并且垂直居中</p>
<ul>
<li>父元素使用 padding 和 text-align: center</li>
<li>使用 position 和 transform</li>
</ul>
</li>
<li>
<p>左右对齐</p>
<ul>
<li>定位方式 : position: absolute; right: 0px;或则right: 0px;
<ul>
<li>提示： 当使用 position 来对齐元素时, 通常 <code v-pre>&lt;body&gt;</code> 元素会设置 margin 和 padding，这样可以避免在不同的浏览器中出现可见的差异，当使用 position 属性时，请始终设置 !DOCTYPE 声明</li>
</ul>
</li>
<li>使用 float 方式</li>
</ul>
</li>
</ul>
<h2 id="css-样式重置" tabindex="-1"><a class="header-anchor" href="#css-样式重置" aria-hidden="true">#</a> CSS 样式重置</h2>
<ul>
<li>HTML 标签在不设置任何样式的情况下，也会有一个默认的 CSS 样式，而不同内核浏览器对于这个默认值的设置则不尽相同，这样可能会导致同一套代码在不同浏览器上的显示效果不一致，而出现兼容性问题</li>
<li>因此，在初始化时，需要对常用标签的样式进行初始化，使其默认样式统一，这就是 CSS Reset方式</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">*</span><span class="token punctuation">{</span> <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span> <span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="引入-css-方式" tabindex="-1"><a class="header-anchor" href="#引入-css-方式" aria-hidden="true">#</a> 引入 CSS 方式</h2>
<p>引入 CSS 的方式有 4 种方式可以在 HTML 中引入 CSS。其中有 2 种方式是在 HTML 文件中直接添加 CSS 代码，另外两种是引入 外部 CSS 文件。下面我们就来看看这些方式和它们的优缺点。</p>
<h3 id="内联方式" tabindex="-1"><a class="header-anchor" href="#内联方式" aria-hidden="true">#</a> 内联方式</h3>
<p>内联方式指的是直接在 HTML 标签中的 <strong>style</strong> 属性中添加 CSS。</p>
<p>示例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">background</span><span class="token punctuation">:</span> red</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这通常是个很糟糕的书写方式，它只能改变当前标签的样式，如果想要多个**<code v-pre>&lt;div&gt;</code>** 拥有相同的样式，你不得不重复地为每个 <strong><code v-pre>&lt;div&gt;</code></strong> 添加相同的样式，如果想要修改一种样式，又不得不修改所有的 style 中的代码。很显然，内联方式引入 CSS 代码会导致 HTML 代码变得冗长，且使得网页难以维护。</p>
<h3 id="嵌入方式" tabindex="-1"><a class="header-anchor" href="#嵌入方式" aria-hidden="true">#</a> 嵌入方式</h3>
<p>嵌入方式指的是在 HTML 头部中的 <strong><code v-pre>&lt;style&gt;</code></strong> 标签下书写 CSS 代码。</p>
<p>示例：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.content</span> <span class="token punctuation">{</span>
        <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>嵌入方式的 CSS 只对当前的网页有效。因为 CSS 代码是在 HTML 文件中，所以会使得代码比较集中，当我们写模板网页时这通常比较有利。因为查看模板代码的人可以一目了然地查看 HTML 结构和 CSS 样式。因为嵌入的 CSS 只对当前页面有效，所以当多个页面需要引入相同的 CSS 代码时，这样写会导致代码冗余，也不利于维护。</p>
<h3 id="链接方式" tabindex="-1"><a class="header-anchor" href="#链接方式" aria-hidden="true">#</a> 链接方式</h3>
<p>链接方式指的是使用 HTML 头部的 <strong><code v-pre>&lt;head&gt;</code></strong> 标签引入外部的 CSS 文件。</p>
<p>示例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;head>
    &lt;link rel="stylesheet" type="text/css" href="style.css">
&lt;/head>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是最常见的也是最推荐的引入 CSS 的方式。使用这种方式，所有的 CSS 代码只存在于单独的 CSS 文件中，所以具有良好的可维护性。并且所有的 CSS 代码只存在于 CSS 文件中，CSS 文件会在第一次加载时引入，以后切换页面时只需加载 HTML 文件即可。</p>
<h3 id="导入方式" tabindex="-1"><a class="header-anchor" href="#导入方式" aria-hidden="true">#</a> 导入方式</h3>
<p>导入方式指的是使用 CSS 规则引入外部 CSS 文件。</p>
<p>示例：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;style>
    @import url(style.css);
&lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="比较链接方式和导入方式" tabindex="-1"><a class="header-anchor" href="#比较链接方式和导入方式" aria-hidden="true">#</a> 比较链接方式和导入方式</h3>
<p>链接方式（下面用 link 代替）和导入方式（下面用 <strong>@import</strong> 代替）都是引入外部的 CSS 文件的方式，下面我们来比较这两种方式，并且说明为什么不推荐使用 <strong>@import</strong>。</p>
<ul>
<li>link 属于 HTML，通过 <strong><link></strong> 标签中的 href 属性来引入外部文件，而 <strong>@import</strong> 属于 CSS，所以导入语句应写在 CSS 中，要注意的是导入语句应写在样式表的开头，否则无法正确导入外部文件；</li>
<li><strong>@import</strong> 是 CSS2.1 才出现的概念，所以如果浏览器版本较低，无法正确导入外部样式文件；</li>
<li>当 HTML 文件被加载时，link 引用的文件会同时被加载，而 <strong>@import</strong> 引用的文件则会等页面全部下载完毕再被加载；</li>
</ul>
<hr>
<p><strong>小结</strong>：我们应尽量使用 <strong><link></strong> 标签导入外部 CSS 文件，避免或者少用使用其他三种方式。</p>
<h2 id="样式优先级" tabindex="-1"><a class="header-anchor" href="#样式优先级" aria-hidden="true">#</a> 样式优先级</h2>
<ul>
<li>
<p>多重样式优先级</p>
<ul>
<li>
<p>优先级是浏览器是通过判断哪些属性值与元素最相关以决定并应用到该元素上的。优先级仅由选择器组成的匹配规则决定的。</p>
</li>
<li>
<p>优先级就是分配给指定的CSS声明的一个权重，它由匹配的选择器中的每一种选择器类型的数值决定</p>
</li>
<li>
<p>优先级顺序：</p>
<ul>
<li>通用选择器（*）&gt;元素(类型)选择器 &gt; 类选择器 &gt; 属性选择器 &gt; 伪类 &gt; ID 选择器 &gt; 内联样式</li>
<li>!important 规则例外： 当 !important 规则被应用在一个样式声明中时,该样式声明会覆盖CSS中任何其他的声明, 无论它处在声明列表中的哪里. 尽管如此, !important规则还是与优先级毫无关系.</li>
</ul>
</li>
<li>
<p>经验法则</p>
<ul>
<li>Always 要优化考虑使用样式规则的优先级来解决问题而不是 !important
<ul>
<li>Only 只在需要覆盖全站或外部 css（例如引用的 ExtJs 或者 YUI ）的特定页面中使用 !important</li>
</ul>
</li>
<li>Never 永远不要在全站范围的 css 上使用 !important
<ul>
<li>Never 永远不要在你的插件中使用 !important</li>
</ul>
</li>
</ul>
</li>
<li>
<p>权重计算 <img src="@source/images/quanzhong.png" alt=""></p>
<ul>
<li>
<blockquote>
<p>1.内联样式表的权值最高 1000；</p>
<p>2.ID 选择器的权值为 100</p>
</blockquote>
</li>
</ul>
<blockquote>
<p>3.Class 类选择器的权值为 10</p>
<p>4.HTML 标签选择器的权值为 1</p>
</blockquote>
</li>
</ul>
</li>
<li>
<p>优先级：</p>
<ul>
<li>内联样式&gt;内部样式&gt;外部样式&gt;浏览器默认样式</li>
<li>外部样式放在内部样式后面,则外部样式会覆盖内部样式</li>
<li>连接样式的优先级
<ul>
<li>设置的优先顺序： link-visited-hover-actived</li>
</ul>
</li>
</ul>
</li>
<li>
<p>CSS 优先级法则</p>
<ul>
<li>选择器都有一个权值，权值越大越优先；</li>
<li>当权值相等时，后出现的样式表设置要优于先出现的样式表设置；</li>
<li>创作者的规则高于浏览者：即网页编写者设置的CSS 样式的优先权高于浏览器所设置的样式；</li>
<li>继承的CSS 样式不如后来指定的CSS 样式；</li>
<li>在同一组属性设置中标有“!important”规则的优先级最大
<img src="@source/images/css优先级.png" alt=""></li>
</ul>
</li>
<li>
<p>元素选择器：</p>
<ul>
<li>
<p>选择器优先级: !important&gt;id选择器&gt;类选择器&gt;标签&gt;通配符&gt;继承&gt;浏览器默认</p>
</li>
<li>
<p>越具体的对象的选择器优先级越高</p>
</li>
</ul>
</li>
</ul>
<p>参考资料</p>
<p><a href="https://www.runoob.com/w3cnote/css-style-priority.html" target="_blank" rel="noopener noreferrer">CSS 样式优先级<ExternalLinkIcon/></a></p>
<h2 id="css-sprites" tabindex="-1"><a class="header-anchor" href="#css-sprites" aria-hidden="true">#</a> CSS Sprites</h2>
<ul>
<li>简介：
<ul>
<li>CSS Sprites在国内很多人叫css精灵，是一种网页图片应用处理方式</li>
<li>它允许将一个页面涉及到的所有零星图片都包含到一张大图中， 利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位， 访问页面时避免图片载入缓慢的现象。</li>
</ul>
</li>
<li>优点
<ul>
<li>CSS Sprites能很好地减少网页的http请求，从而大大的提高页面的性能，这是CSS Sprites最大的优点，也是其被广泛传播和应用的主要原因；</li>
<li>CSS Sprites能减少图片的字节；</li>
<li>CSS Sprites解决了网页设计师在图片命名上的困扰，只需对一张集合的图片命名，不需要对每一个小图片进行命名，从而提高了网页制作效率。</li>
<li>CSS Sprites只需要修改一张或少张图片的颜色或样式来改变整个网页的风格。</li>
</ul>
</li>
<li>缺点
<ul>
<li>图片合并麻烦：图片合并时，需要把多张图片有序的合理的合并成一张图片，并留好足够的空间防止版块出现不必要的背景。</li>
<li>图片适应性差：在高分辨的屏幕下自适应页面，若图片不够宽会出现背景断裂。</li>
<li>图片定位繁琐：开发时需要通过工具测量计算每个背景单元的精确位置。</li>
<li>可维护性差：页面背景需要少许改动，可能要修改部分或整张已合并的图片，进而要改动css。在避免改动图片的前提下，又只能（最好）往下追加图片，但这样增加了图片字节。</li>
</ul>
</li>
</ul>
<h2 id="css-hack" tabindex="-1"><a class="header-anchor" href="#css-hack" aria-hidden="true">#</a> CSS Hack</h2>
<ul>
<li>概念：不同的浏览器对CSS的解析结果是不同的，因此会导致相同的CSS输出的页面效果不同，这就需要CSS Hack来解决浏览器局部的兼容性问题。而这个针对不同的浏览器写不同的CSS 代码的过程，就叫CSS Hack</li>
<li>Hack主要针对IE浏览器</li>
<li>常见的形式
<ul>
<li>CSS属性Hack</li>
<li>CSS选择符Hack</li>
<li>IE条件注释Hack</li>
</ul>
</li>
</ul>
<h2 id="居中方案" tabindex="-1"><a class="header-anchor" href="#居中方案" aria-hidden="true">#</a> 居中方案</h2>
<p><img src="@source/images/居中方案.png" alt="image-20210713092852324"></p>
<p>一般常见的几种居中的方法有：</p>
<h3 id="水平居中" tabindex="-1"><a class="header-anchor" href="#水平居中" aria-hidden="true">#</a> 水平居中</h3>
<p>水平居中分为块级元素和行内元素的居中方案。</p>
<ul>
<li>
<p>块级元素居中：</p>
<ul>
<li>
<p>设置 display:block; 块状元素的宽度width为固定值 和 块元素 margin: 0 auto；</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>行内元素居中：行内元素居中分为定宽块元素居中 和 不定宽块元素 居中。</p>
<ul>
<li>
<p>定宽块状元素居中：容器 div 添加  text-align:center;</p>
<ul>
<li>块状元素属性display 被设置为inline时，也是可以使用这种方法。</li>
<li>但子元素必须没有被float影响，否则无效</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.container</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token selector">.box</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>不定宽块状元素居中：块状元素的宽度width不固定。</p>
<ul>
<li>
<p>在实际工作中我们会遇到需要为“不定宽度的块状元素”设置居中，比如网页上的分页导航，因为分页的数量是不确定的，所以我们不能通过设置宽度来限制它的弹性。</p>
</li>
<li>
<p>方法1：</p>
<ul>
<li>
<p>实现：</p>
<ul>
<li>使用 display : table；然后设该元素“左右margin”值为“auto”来实现居中；</li>
<li>或则 将要显示的元素加入到 table 标签当中，然后为 table 标签设置“左右margin”值为“auto”来实现居中。</li>
</ul>
</li>
<li>
<p>使用 table 原理:</p>
<ul>
<li>
<p>利用table标签的长度自适应性，table其长度根据其内文本长度决定，因此可以看做一个定宽度块元素，然后再利用定宽度块状居中的margin的方法，使其水平居中。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.wrap</span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span>#ccc<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span>table<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

&lt;div class=<span class="token string">"wrap"</span>>
  Hello world  
&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
<li>
<p>方法2：</p>
<ul>
<li>
<p>实现：</p>
<ul>
<li>给父元素设置 float， position:relative 和 left:50%，子元素设置 position:relative 和 left: -50% 来实现水平居中</li>
</ul>
</li>
<li>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.wrap</span><span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span>left<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrap-center</span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span>#ccc<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span>-50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

&lt;div class=<span class="token string">"wrap"</span>>
    &lt;div class=<span class="token string">"wrap-center"</span>>Hello world&lt;/div>
&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>方法3：</p>
<ul>
<li>
<p>设置块级元素的 display 为 inline 类型（设置为 行内元素 显示），然后使用 text-align:center 来实现居中效果</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.container</span><span class="token punctuation">{</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token selector">.container ul</span><span class="token punctuation">{</span>
    <span class="token property">list-style</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span>inline<span class="token punctuation">;</span>  
 <span class="token punctuation">}</span>

&lt;div class=<span class="token string">"container"</span>>
    &lt;ul>
        &lt;li>Hello world&lt;/li>
        &lt;li>Hello world&lt;/li>
    &lt;/ul>
&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>优点：不用增加无语义标签；</li>
<li>缺点：将块状元素的 display 类型改为 inline，变成了行内元素，所以少了一些功能，比如设定长度值（变成inline-block就可以设置宽高）</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="垂直居中" tabindex="-1"><a class="header-anchor" href="#垂直居中" aria-hidden="true">#</a> 垂直居中</h3>
<p>垂直居中可分为父元素高度确定的单行文本、父元素高度确定的多行文本。</p>
<ul>
<li>
<p>父元素高度确定的单行文本：</p>
<ul>
<li>
<p>实现：设置父元素的 height 和 line-height 高度一致。(height: 该元素的高度，line-height: 行高，指在文本中、行与行之间的 基线间的距离 )</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.wrap h2</span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>#ccc<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

&lt;div class=<span class="token string">"wrap"</span>>
    &lt;h2>Hello world&lt;/h2>
&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>父元素高度确定的多行文本：两种实现方式。</p>
<ul>
<li>
<p>方法1：</p>
<ul>
<li>
<p>设置  display:table; vertical-align：middle；</p>
</li>
<li>
<p>或则 使用 table (包括tbody、tr、td)标签，同时设置 vertical-align：middle。</p>
</li>
<li>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.wrap</span><span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span>#ccc<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span>table<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span>middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

&lt;div class=<span class="token string">"wrap"</span>>
    &lt;p>Hello world&lt;/p>
    &lt;p>Hello world&lt;/p>
    &lt;p>Hello world&lt;/p>
&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.wrap</span><span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>#ccc<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span>middle<span class="token punctuation">;</span><span class="token comment">/* td 标签默认情况下就默认设置了 vertical-align 为 middle，可以不需要显式地设置 */</span>
<span class="token punctuation">}</span>

&lt;table>
    &lt;tbody>
        &lt;tr>
            &lt;td class=<span class="token string">"wrap"</span>>
                &lt;div>
                    &lt;p>Hello world&lt;/p>
                    &lt;p>Hello world&lt;/p>
                    &lt;p>Hello world&lt;/p>
                &lt;/div>
            &lt;/td>
        &lt;/tr>
    &lt;/tbody>
&lt;/table>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>方法2：设置块级元素的 display 为 table-cell（设置为表格单元显示），激活 vertical-align 属性；</p>
<ul>
<li>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.wrap</span><span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span>#ccc<span class="token punctuation">;</span>
    
    <span class="token property">display</span><span class="token punctuation">:</span>table-cell<span class="token punctuation">;</span><span class="token comment">/*IE8以上及Chrome、Firefox*/</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span>middle<span class="token punctuation">;</span><span class="token comment">/*IE8以上及Chrome、Firefox*/</span>
<span class="token punctuation">}</span>

&lt;div class=<span class="token string">"wrap"</span>>
    &lt;p>Hello world&lt;/p>
    &lt;p>Hello world&lt;/p>
    &lt;p>Hello world&lt;/p>
&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>缺点：兼容性比较差， IE6、7 并不支持这个样式</p>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="水平垂直居中" tabindex="-1"><a class="header-anchor" href="#水平垂直居中" aria-hidden="true">#</a> 水平垂直居中</h3>
<p><strong>已知高度和宽度的元素：</strong></p>
<ul>
<li>
<p>方法1：</p>
<ul>
<li>
<p>实现：</p>
<ul>
<li>
<p>父元素相对定位，居中元素绝对定位</p>
</li>
<li>
<p>设置四个方向的值都为 0，并将 margin 设置为 auto;</p>
</li>
<li>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.wrap</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>auto<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>原理：子元素依然相对于父元素定位，但是由于 <code v-pre>top:0</code> 和 <code v-pre>bottom:0</code> 无法同时满足，且该元素的 <code v-pre>margin</code> 又是自适应，因此最终变成了由上下外边距平分尺寸，从而达到垂直居中。至于水平居中，原理也是一样。</p>
</li>
</ul>
</li>
<li>
<p>方法2：</p>
<ul>
<li>
<p>实现：</p>
<ul>
<li>
<p>父元素相对定位，居中元素绝对定位</p>
</li>
<li>
<p>将元素的左上角通过 top:50% 和 left:50%定位到页面的中心</p>
</li>
<li>
<p>然后再通过 margin 负值来调整元素 的中心点到页面的中心</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.wrap</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span> <span class="token comment">/*绝对定位*/</span>
    <span class="token property">width</span><span class="token punctuation">:</span>500px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span>-150px 0 0 -250px<span class="token punctuation">;</span><span class="token comment">/*外边距为自身宽高的一半*/</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>pink<span class="token punctuation">;</span><span class="token comment">/*方便看效果*/</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>原理：<img src="@source/images/水平垂直居中原理.png" alt="image-20210713090208312"></p>
</li>
</ul>
</li>
</ul>
<p><strong>未知高度和宽度的元素</strong></p>
<ul>
<li>
<p>实现：</p>
<ul>
<li>
<p>父元素相对定位，居中元素绝对定位</p>
</li>
<li>
<p>将元素的左上角通过 top:50% 和 left:50%定位到页面的中心</p>
</li>
<li>
<p>通过 translate 来调整 元素 的中心点到页面的中心</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.wrap</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span>100px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span>50%<span class="token punctuation">;</span>
    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>原理：由于 不知道子元素高度和宽度，因此通过 <code v-pre>transform: translateY(50%，50%);</code> 方式移动元素中心到页面中心。</p>
</li>
</ul>
<p><strong>任意元素水平垂直居中</strong></p>
<ul>
<li>
<p><strong>flex 弹性布局</strong></p>
<ul>
<li>
<p>方法1：</p>
<ul>
<li>
<p>实现：设置 弹性布局，通过 align-items:center 和 justify-content:center 设置容器的垂直和水平 方向上为居中对 ，它的子元素也可以实现垂直和水平的居中</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.wrap</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>方法2：</p>
<ul>
<li>
<p>实现：设置父元素弹性布局 display:flex；子元素边距自动 margin:auto;</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.wrap</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span><span class="token punctuation">{</span> <span class="token comment">/*子元素边距自动 margin:auto;*/</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>网格布局</strong></p>
<ul>
<li>
<p>方法1：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.wrap</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">justify-self</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
    <span class="token property">align-self</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>方法2：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.wrap</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong>伪元素实现</strong></p>
<ul>
<li>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.wrap</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>  <span class="token comment">/* 消除空隙 */</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>  <span class="token comment">/* 实现水平居中*/</span>
    <span class="token selector">&amp;::before</span> <span class="token punctuation">{</span>
        <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
        <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
        <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">div</span><span class="token punctuation">{</span> <span class="token comment">/*子元素*/</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="常见布局方式" tabindex="-1"><a class="header-anchor" href="#常见布局方式" aria-hidden="true">#</a> 常见布局方式</h2>
<p><img src="@source/images/常见布局.png" alt="image-20210712191310316"></p>
<p><strong>参考资料</strong></p>
<p><a href="https://juejin.cn/post/6844903710070407182#heading-18" target="_blank" rel="noopener noreferrer">几种常见的CSS布局<ExternalLinkIcon/></a></p>
<h3 id="响应式布局" tabindex="-1"><a class="header-anchor" href="#响应式布局" aria-hidden="true">#</a> 响应式布局</h3>
<h4 id="flexbox" tabindex="-1"><a class="header-anchor" href="#flexbox" aria-hidden="true">#</a> Flexbox</h4>
<p>弹性盒布局模型:</p>
<ul>
<li>Flex 是 FlexibleBox 的缩写，意为&quot;弹性布局&quot;，弹性布局中的元素是有伸展和收缩自身的能力的。 相比于原来的布局方式，如float、position，根据盒子模型，就可以计算出元素的展示尺寸（长宽非百分比），除非溢出，否则不依赖于父容器的大小。</li>
<li>“伸缩性”：目标就是为了撑满父元素</li>
<li>任何一个容器都可以指定为 Flex 布局。行内元素也可以使用 Flex 布局。
<ul>
<li>注意，设为 Flex 布 局以后，子元素的 float、cl ear 和 vertical-align 属性将失效。</li>
</ul>
</li>
<li>采用 Flex 布局的元素，称为 Flex 容器（flexcontainer），简称&quot;容器&quot;。它的所有子元素自动成 为容器成员，称为 Flex 项目（flexitem），简称&quot;项目&quot;。</li>
<li>容器默认存在两根轴：水平的主轴（mainaxis）和垂直的交叉轴（crossaxis），项目默认沿主 轴排列。</li>
<li>flex 属性有两类：设置在 flex 容器的属性 和 设置在 item 项目中的属性：
<ul>
<li>设置在 flex 容器上属性：</li>
<li>display: flex 设置 flex 布局</li>
<li>flex-direction 属性决定主轴的方向（即项目的排列方向）。包含 x 轴（横向排列）和 y 轴（纵向排列）</li>
<li>justify-content 属性定义了项目在主轴上的对齐方式。</li>
<li>align-items 属性定义项目在交叉轴上如何对齐。</li>
<li>flex-wrap 属性定义，如果一条轴线排不下，如何换行。</li>
<li>flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 rownowrap。</li>
<li>align-content 属性定义了多根轴线的对齐方式。
<ul>
<li>如果项目只有一根轴线，该属性不起作用。</li>
</ul>
</li>
<li>设置在项目 item 上6 个属性：
<ul>
<li>order 属性：定义项目的排列顺序。数值越小，排列越靠前，默认为 0。</li>
<li>flex-grow 属性：定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。</li>
<li>flex-shrink 属性：定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。</li>
<li>flex-basis 属性：定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计 算主轴是否有多余空间。它的默认 值为 auto，即项目的本来大小。</li>
<li>flex 属性：是 flex-grow，flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。</li>
<li>align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认 值为 auto，表示继承父 元素的 align-items 属性，如果没有父元素，则等同于 stretch。</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>总结：</p>
<ul>
<li>flex 布局是 CSS3 新增的一种布局方式，我们可以通过将一个元素的 display 属性值设置为 flex 从而使它成为一个 flex 容器，它的所有子元素都会成为它的项目。</li>
<li>一个容器默认有两条轴，一个是水平的主轴，一个是与主轴垂直的交叉轴。我们可以使用 flex-direction 来指定主轴的方向。</li>
<li>可以使用 justify-content 来指定元素在主轴上的排列方式，使用 align-items 来指定元素 在交叉轴上的排列方式。</li>
<li>还可以使用 flex-wrap 来规定当一行排列不下时的换行方式。</li>
<li>对于容器中的项目，我们可以使用 order 属性来指定项目的排列顺序，还可以使用 flex-grow 来指定当排列空间有剩余的时候， 项目的放大比例。还可以使用 flex-shrink 来指定当排列空间不足时，项目的缩小比例</li>
</ul>
<p><strong>参考资料</strong></p>
<p><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag" target="_blank" rel="noopener noreferrer">viewport meta tag<ExternalLinkIcon/></a></p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries" target="_blank" rel="noopener noreferrer">CSS media queries<ExternalLinkIcon/></a></p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout" target="_blank" rel="noopener noreferrer">Flexbox<ExternalLinkIcon/></a></p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout" target="_blank" rel="noopener noreferrer">CSS Grid<ExternalLinkIcon/></a></p>
</div></template>


