var me=`<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="page_style.css">
     <
    <title>Innovation Capital Registration</title>
    <style>
        
    </style>
</head>
<body>
    <div class="container" >
        <h1>Innovation Capital Registration</h1>
		<h2><img src="Screenshot (32).png" clas="center" width="150" height="150"></h2>
           
			<form action="file:///F:/innovation_capital/html%20folder/index1.html" method="post" >
            <label for="fullname">Full Name:</label>
            <input type="text" id="fullname" name="fullname" placeholder="enter your name" required autofocus >
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required >
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
			
			<label for="age">age:</label>
            <input type="number" id="age"name="age" min="18" max="100" placeholder="write your age" required />
			<input type="number" list="pudget"placeholder="Enter your budget (optional)"  />
             <datalist id="pudget">
	             <option value="100">100</option>
	             <option value="1000">1000</option>
	             <option value="10000">10000</option>
	             <option value="100000">100000</option>
	            <option value="1000000">1000000</option>
             </datalist>
            <label for ="picture" >national id:<br></labe>
	        <input type="file" id="picture" name="picture" accept="image/*" capture="environment"  required/>
          <br>
		  
		  <div>
			<input id="male" type="radio" name ="gender" value="male" checked/>
		  <label for="male">male</label>
		</div>
		<div>
		  <input type="radio" id="female" name ="gender" value="female"/>
		  <label for="female">female</label>
		</div>
		<input type="submit" value="submit" class="submit">
		</form>
    </div>

</body>
</html>
"
`;
document.write(me);