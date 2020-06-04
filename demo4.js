
function demo4(){
	
	var p1= document.preguntas.p1.value; 
	var p2= document.preguntas.p2.value;
	var p3= document.preguntas.p3.value; 
	var p4= document.preguntas.p4.value;
	var p5= document.preguntas.p5.value; 
	var p6= document.preguntas.p6.value;
	var p7= document.preguntas.p7.value; 
	var p8= document.preguntas.p8.value;
	var p9= document.preguntas.p9.value; 
	var p10= document.preguntas.p10.value;
	var p11= document.preguntas.p11.value; 
	var p12= document.preguntas.p12.value;
	var p13= document.preguntas.p13.value; 
	var p14= document.preguntas.p14.value;
	var p15= document.preguntas.p15.value; 
	var p16= document.preguntas.p16.value;
	var p17= document.preguntas.p17.value;

	
	 
	var contador=0;
	var porcentaje;
 
	 
	if(p1 == 'A')
	{
		contador++;
	}
	if(p2 == 'C')
	{
		contador++;
	}
	if(p3 == 'F')
	{
		contador++;
	}
	if(p4 == 'G')
	{
		contador++;
	}
	if(p5 == 'I')
	{
		contador++;
	}
	if(p6 == 'K')
	{
		contador++;
	}
	if(p7 == 'N')
	{
		contador++;
	}
	if(p8 == 'P')
	{
		contador++;
	}
	if(p9 == 'Q')
	{
		contador++;
	}
	if(p10 == 'S')
	{
		contador++;
	}
	if(p11 == 'V')
	{
		contador++;
	}
	if(p12 == 'X')
	{
		contador++;
	}
	if(p13 == 'Y')
	{
		contador++;
	}
	if(p14 == '1')
	{
		contador++;
	}
	if(p15 == '3')
	{
		contador++;
	}
	if(p16 == '5')
	{
		contador++;
	}
	if(p17 == '8')
	{
		contador++;
	}

	

 
	porcentaje = contador *100/17;
	
	return porcentaje;
	
}