#!/bin/bash
echo "Script name: $0"
a=$1
b=$2
mult=$((a * b))
echo "$a * $b = $mult"
host=`hostname`
echo "$host"
ping -c 4 $host
filename="out.txt"
echo "Trying to find $filename"
find . -type f -name $filename
file $filename
