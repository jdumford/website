new=open('ncaa-smaller.csv', 'w+')

with open('ncaa.csv') as f:
    content = f.readlines()
content = [x.strip() for x in content] 
newcontent = content[0:10]

for line in newcontent:
	new.write(line)
	new.write('\n')
