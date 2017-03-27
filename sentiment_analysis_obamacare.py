import matplotlib.pyplot as plt
import matplotlib.animation as animation
from matplotlib import style
import time
import mpld3
import json

style.use("fivethirtyeight")

fig = plt.figure()
ax1 = fig.add_subplot(1,1,1)
ax2 = fig.add_subplot(1,1,1)

def animate1(i):
    pullData = open("twitter_output_obama.txt","r").read()
    lines = pullData.split('\n')

    xar = []
    yar = []

    x = 0
    y = 0

    for l in lines:
        x += 1
        if "pos" in l:
            y += 1
        elif "neg" in l:
            y -= 1

        xar.append(x)
        yar.append(y)
        
    ax1.clear()
    ax1.set_xlabel('Number of Tweets')
    ax1.set_ylabel('Sentiment')
    ax1.set_title('Tracking ObamaCare', size=20)
    ax1.plot(xar,yar)

    

   
plt.tight_layout()
ani1 = animation.FuncAnimation(fig, animate1, interval=1000)
#ani2 = animation.FuncAnimation(fig, animate2, interval=1000)
##f = open("twitter_output_trump.txt", 'r')
##labels = f.read()
##f.close()
##mylabels = labels.split('\n')

##tooltips = mpld3.plugins.PointLabelTooltip(lines[0], labels=y)
##mpld3.plugins.connect(plt.gcf(), tooltips)

#tooltip = mpld3.plugins.PointLabelTooltip(fig, labels=mylabels)
#mpld3.plugins.connect(fig, tooltip)
json02 = json.dumps(mpld3.fig_to_dict(fig))
mpld3.show()
