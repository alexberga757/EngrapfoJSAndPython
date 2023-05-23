"""
create by lengoccuong
contact me on: https://lengoccuong.carrd.co
"""

import Engrapfo.stringparse as mparse
import Engrapfo.EngrapfoExcept as Exc;

import os;

class load:
	def __init__(self,value):
		self.arr = value.split('\n');

	#get value
	def getvalue(self,name):
		arr_ = self.arr;
		token = "";

		#list from arr
		for line in arr_:
			n = line.split(":");

			#check name
			if (mparse.removefrstspc(n[0]) == name):

				for i in range(len(n)):
					#skip name
					if (i == 0):
						pass;
					else: 
						token += f":{n[i]}"
				break;
			else:
				pass;

		if (token == ""):
			return None;
		else:
			return mparse.rmvfrstchr(token);

	def toArrays(self,name):
		return mparse.toArrays(self.getvalue(name));

	def withEsc(self,name):
		return mparse.oneEscChar(self.getvalue(name));


    #check exist or no
	def exists(self,name):
		arr_ = self.arr;
		token = "";
		ready_exist = False;

		#list from arr
		for line in arr_:
			n = line.split(":");
			if (mparse.removefrstspc(n[0]) == name):
				ready_exist = True;
				break;
			else:
				ready_exist = False;

		return ready_exist;

	#add value 
	def push(self,name,value):
		arr_ = self.arr;
		if (self.exists(name)):
			raise Exc.Comms("This value is exists");
		else:
			arr_.append(f"{name}:{value}");
    #remove value
	def remove(self,name):
		arr_ = self.arr;
		newarr = [];

		if (self.exists(name)):
			for line in arr_:
				n = line.split(":");
				if (mparse.removefrstspc(n[0]) == name):
					pass;
				else:
					newarr.append(line);
		else:
			raise Exc.Comms("This value is not exists.");

		self.arr = newarr;

	#list name value
	def list(self):
		arr_ = self.arr;
		lstnm = [];

		for line in arr_:
			n = line.split(':');
			lstnm.append(mparse.removefrstspc(n[0]));

		return lstnm;

	def change(self,value):
		self.arr = value.split('\n');

	def reget(self):
		token = "";
		state = 0;
		arr_ = self.arr;

		for i in arr_:
			state = 1+state;

			if (state == 1):
				token += i;
			else:
				token += f"\n{i}";

		return token;

	def autoWrite(self,path):
		with open(path,"w") as f:
			f.write(self.reget());








