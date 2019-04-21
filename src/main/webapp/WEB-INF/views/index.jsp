<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>OBJ Loader</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <style>
  	body{ margin: 0; }
  	canvas {width: 100%; height: 100%}
  </style>
</head>
<script src="<%=application.getContextPath()%>/resources/js/three/three.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/loaders/DDSLoader.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/loaders/MTLLoader.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/loaders/OBJLoader.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/controls/OrbitControls.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/loaders/EquirectangularToCubeGenerator.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/controls/OrbitControls.js"></script>
<body>
<script type="text/javascript" src="<%=application.getContextPath()%>/resources/js/modelLoder.js"></script>
	<div id="threejs_scene"></div>



</body>
</html>