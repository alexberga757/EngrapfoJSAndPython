import Engrapfo;
import Engrapfo.stringparse as mp;

s = Engrapfo.load(open("test.utd","r").read());

print(s.getvalue("name"));
print(s.getvalue("age"));
print(s.getvalue("Vietnam"));
