def removefrstspc(value):
	state = 0;
	token = "";
	for chrs in value:
		if (chrs == " " or chrs  == "\t"):
			if (state == 0):
				pass;
			elif (state == 1):
				token += chrs;
		else:
			token += chrs;
			state = 1;
	return token;

def rmvfrstchr(value):
	state = 0;
	token = "";

	for chrs in value:
		state = state+1;
		if (state == 1):
			pass;
		else:
			token += chrs;

	return token;


def toArrays(value):
    result = []
    current_element = ""
    escape_next = False
    
    for char in value:
        if escape_next:
            current_element += char
            escape_next = False
        elif char == "\\":
            escape_next = True
        elif char == ",":
            result.append(current_element)
            current_element = ""
        else:
            current_element += char
    
    result.append(current_element)  # Add the last element
    
    return  result;

def oneEscChar(value):
	token = "";
	state = 0;

	for i in value:
		if (i == "\\"):
			if (state == 0):
				state = 1;
			elif (state == 1):
				token += "\\";
				state = 0;
		elif (i == "n"):
			if (state == 1):
				token += "\n";
				state = 0;
			elif (state == 0):
				token += i;
		elif (i == "b"):
			if (state == 1):
				token += "\b";
				state = 0;
			elif (state == 0):
				token += i;

		elif (i == "t"):
			if (state == 1):
				token += "\t";
				state = 0;
			elif (state == 0):
				token += i;
		elif (i == "f"):
			if (state == 1):
				token += "\f";
				state = 0;
			elif (state == 0):
				token += i;
		else:
			token += i;
			state = 0;

	return token;




