
<html>
<head>
<meta http-equiv="Refresh" content="60">
</head>
<style>
p{color:blue;
  font-size:16pt;
  font-family:�з���F
  text-align:center�F}
ul{list-style-type:square;}
</style>
<body bgcolor=ccffff>
<img src="����.png" height="140" vspace="7" hspace="15"><br>
<ul>
<li><p><a href="����.html" target="3">����ڭ�</a></p></li>
<li><p>���Ѹɵ�</p></li>
<ul style=list-style-type:disc;font-size:14pt >
 <li><a href="�^.html" target="3">�^��English</a></li>
 <li><a href="��.html" target="3">����Music</a></li>
 <li><a href="��.html" target="3">�ƾ�Math</a></li>
 <li><a href="��.html" target="3">���vOcean</a></li>
 <li><a href="�a.html" target="3">�a�zGeography</a></li>  	
</ul>
<li><p><a href="���P.html" target="3">���P�@�U</a></p></li>
<li><p><a href="����.html" target="3">��������</a></p></li>
<li><p><a href="�p��.html" target="3">�p���ڭ�</a></p></li>
</ul>
<script>
music=["ť��.mid", "�x�p��.mid","music4.mp3", "�p�G�����D.mid", "music1.mp3","tomorrow.mid","music2.mp3","music3.mp3"];
pickedmusic = music[Math.floor(Math.random()*music.length)];
document.writeln("<embed src="+pickedmusic+" hidden=true autostart=true loop=false>");
</script>
</body>
</html>