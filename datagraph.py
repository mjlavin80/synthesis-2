import plotly.plotly as py
import plotly.graph_objs as go
import random
import numpy as np
import pandas as pd

l= []
y= []

data= pd.read_csv('..\Documents\synthesis_2\synthesis_2_editdata2.csv', encoding='latin-1')
#Setting colors for plot.
N= 53
c= ['hsl('+str(h)+',50%'+',50%)' for h in np.linspace(0, 360, N)]

for i in range(int(N)):
    y.append((2000+i))
    trace0= go.Scatter(
        x= data['year'],
        y= data['movie_pop'],
        mode= 'markers',
        marker= dict(size= 14,
                    line= dict(width=1),
                    color= c[i],
                    opacity= 0.3
                   ),name= y[i],
        text= data['movie_name']) # The hover text goes here... 
    l.append(trace0);

layout= go.Layout(
    title= 'Popular Movies since 1990s',
    hovermode= 'closest',
    xaxis= dict(
        title= 'year',
        ticklen= 5,
        zeroline= False,
        gridwidth= 2,
    ),
    yaxis=dict(
        title= 'movie popularities',
        ticklen= 5,
        gridwidth= 2,
    ),
    showlegend= False
)

fig= go.Figure(data=l, layout=layout)
py.iplot(fig)