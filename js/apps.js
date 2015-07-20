var colors = ['Black',
'Silver',
'Gray',
'Maroon',
'Red',
'Blue',
'Purple',
'Fuchsia',
'Green',
'Lime',
'Olive',
'Yello',
'Navy',
'Teal',
'Aqua'
];
var font = 0;
var bg = 0;

function addTextToPage()
{
	do{
    	font = Math.floor((Math.random() * 15));
		bg = Math.floor((Math.random() * 15));
	} while (font == bg);

	var ask = prompt("please enter a string.");
	
    while(!ask || typeof(ask) !== "string")
    {
        alert("You need to enter a string in the textbox provided.");
        ask = prompt("please enter a string.");
    }
	
	var leftDiv = document.createElement("div");
	p = document.createElement('p');
	p.innerHTML = '<p style="background:' + colors[bg] + ';color:' + colors[font] + '; font-size:20px; font-family: Lobster, cursive;" class="col-sm-6 col-md-4 col-lg-2"> ' + ask + '</p>';
	leftDiv.appendChild(p); // Add name to left div

	document.getElementById("updateDiv").appendChild(leftDiv);
}




