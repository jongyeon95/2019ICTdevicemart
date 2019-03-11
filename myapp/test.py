import serial
import sys
ser = serial.Serial("/dev/ttyUSB0", 9600)
a =sys.argv[1]
b =sys.argv[2]
c =sys.argv[3]
a1="a"
b1="b"
c1="c"



a=a.encode('utf-8')
b=b.encode('utf-8')
c=c.encode('utf-8')
a1=a1.encode('utf-8')
b1=b1.encode('utf-8')
c1=c1.encode('utf-8')



ser.write(a1)
ser.write(a)
ser.write(b1)
ser.write(b)
ser.write(c1)
ser.write(c)

ser.close()
