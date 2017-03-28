from bokeh.plotting import figure, output_notebook, show
from bokeh.charts import Bar, output_file, show
from bokeh.models import HoverTool
from bokeh.io import output_file, show
from bokeh.layouts import widgetbox
from bokeh.models.widgets.groups import RadioButtonGroup
from bokeh.models.callbacks import CustomJS
from bokeh.models.sources import ColumnDataSource
import pandas

output_file('index.html', title = 'Synthesis 2')

df = pandas.read_excel('pricedata2.xlsx', sheetname='Sheet1')


hover = HoverTool(
        tooltips=[
            ("Product: ", "@Product"),
            ("Price per unit: ", "@y{1.111}")
        ]
    )

p = Bar(df, 'Product',values='PricePerUnit', group = 'Store', tools = [hover], responsive = True, bar_width = 1)
p.yaxis.axis_label = "Price Per Unit (Dollars)"

'''cds = ColumnDataSource.from_df(df);

callback=CustomJS(args=cds, code="""

//begin js code

var a = 10;
var b = 11;
""")'''


radio_button_group = RadioButtonGroup(
        labels=["Baking", "Dairy", "Frozen", "Grocery", "Household", "Meat", "Produce", "Snacks"], active=0)

'''show(widgetbox(radio_button_group))'''

for r in p.renderers:
    try:
        r.glyph.width = .5
    except AttributeError:
        pass

show(p)