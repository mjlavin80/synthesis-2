# pie chart obamacare

import matplotlib.pyplot as plt
from matplotlib.pylab import title
from collections import Counter

labels = 'Positive', 'Negative'

pullData = open('twitter_output_obama.txt', 'r').read()
lines = pullData.split('\n')

counted = Counter(lines)

pos = counted['pos']
neg = counted['neg']

sizes = [pos, neg]
colors = ['lightskyblue', 'red']
explode = (0.2, 0)

fig1, ax1 = plt.subplots()
ax1.pie(sizes, explode=explode, labels=labels, autopct='%1.1f%%', colors=colors, shadow=True, startangle=160)
ax1.axis('equal')

title('Tracking ObamaCare')

plt.show()
