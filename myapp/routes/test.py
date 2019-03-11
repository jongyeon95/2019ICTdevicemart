import serial
import sys
ser = serial.Serial("/dev/ttyUSB0", 9600)

print ser.portstr

ser.write(sys.argv[0])
ser.write(sys.argv[1])
ser.write(sys.argv[2])
ser.close()
