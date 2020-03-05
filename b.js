
<html>
<head>
<meta http-equiv="Refresh" content="60">
</head>
<style>
p{color:blue;
  font-size:16pt;
  font-family:標楷體；
  text-align:center；}
ul{list-style-type:square;}
</style>
<body bgcolor=ccffff>
<img src="念書.png" height="140" vspace="7" hspace="15"><br>
<ul>
<li><p><a href="關於.html" target="3">關於我們</a></p></li>
<li><p>知識補給</p></li>
<ul style=list-style-type:disc;font-size:14pt >
 <li><a href="英.html" target="3">英文English</a></li>
 <li><a href="音.html" target="3">音樂Music</a></li>
 <li><a href="數.html" target="3">數學Math</a></li>
 <li><a href="海.html" target="3">海洋Ocean</a></li>
 <li><a href="地.html" target="3">地理Geography</a></li>  	
</ul>
<li><p><a href="放鬆.html" target="3">放鬆一下</a></p></li>
<li><p><a href="網站.html" target="3">相關網站</a></p></li>
<li><p><a href="聯絡.html" target="3">聯絡我們</a></p></li>
</ul>
<script>
music=["聽海.mid", "膽小鬼.mid","music4.mp3", "如果雲知道.mid", "music1.mp3","tomorrow.mid","music2.mp3","music3.mp3"];
pickedmusic = music[Math.floor(Math.random()*music.length)];
document.writeln("<embed src="+pickedmusic+" hidden=true autostart=true loop=false>");
</script>
</body>
</html>