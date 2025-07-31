# Features

The Gantt chart is built using Vega and Deneb and has now been updated with the most requested features including:
- 	Day, month and year periods now fully supported
- 	Use the mouse wheel to zoom in/out to dynamically change the granularity
- 	Use the shortcut buttons to zoom to days, months, years or the entire project timeline with a single click
- 	Hold down the left mouse button to pan the chart in all directions and keep the axes in view
- 	Click on a phase to expand collapse the child tasks
- 	Use the shortcut buttons to expand and collapse all phases at once
- 	Tasks now support multiple dependencies
- 	Hover over a task to highlight all its dependencies
- 	Different tasks with the same name now supported
- 	Resize the Deneb container in PowerBI and the chart will now autoscale 
- 	Enable/disable tooltips in config
- 	Enable/disable buttons in config
- 	Easily change the colours throughout
- 	Double click the chart to reset the view

If you'd like help with customising these charts, feel free to reach out to me on LinkedIn for consultancy services.

# Instructions

To use the chart with your own data, follow the steps below:


**1.** Install the Deneb visual within Power BI 

![](https://github.com/PBI-David/Deneb-Showcase/blob/32c054b7c07a89f5d0fba96de64a308427f8e676/Gantt%20Chart/1.png?raw=true)

**2.** Your data must follow the structure below:

|Column Name <img width="150" height="1">   |<img width="140" height="1">Type                |Description                                                                                                                                                                                |
|---------------------------------------------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|id          |Text or number   |Each task must have a unique id                                                                                                                                                            |
|phase       |Text             |The phase the task belongs to                                                                                                                                                              |
|task        |Text             |The task name                                                                                                                                                                              |
|milestone   |Boolean (Logical)|Whether the task is a milestone or not. The can be left blank if not a milestone.                                                                                                          |
|start       |Date (UK format) |The start date of the task                                                                                                                                                                 |
|end         |Date (UK format) |The end date of the task (set to the same as start date for milestones)                                                                                                                    |
|completion  |Number           |The completion level of the task from 0-100                                                                                                                                                |
|dependencies|Text             |The dependencies of the task supplied as a comma separated list of task ids. This can be left blank if no dependencies.                                                                    |
|assignee    |Text             |The task assignee. The assignee is shown on the chart but not as a column to save space. You can easily edit the Vega if you want to add a column. This can be left blank if no assignees. |


**3**.  Add all the fields to the Deneb visual ensuring hierarchy is not being used for the date fields.

![](https://github.com/PBI-David/Deneb-Showcase/blob/main/Gantt%20Chart/2.png?raw=true)

**4.** Create a new empty Vega specification

![](https://github.com/PBI-David/Deneb-Showcase/blob/main/Gantt%20Chart/3.png?raw=true)

**5.** Paste the specification from the sample .pbix 

**6.** Close the Deneb editor and the Gannt will now be fully functional.

The following options can be easily configured within the specification.

|Signal      |Description      |
|------------|-----------------|
|showTooltips|Globally enable/disable tooltips. This has no effect on long task names which will always show a tooltip when the task name length exceeds the task column width. |
|showButtons |Enable/disable shortcut buttons at the top of the chart.|
|showDomainSpanLabel|Show/hide a text box showing the current span of the chart|
|textColour  |The main text colour used throughout |
|coloursDark |The array of colours used for dark shades|
|coloursLight|The array of colours used for light shades|
|yRowHeight  |The row heights  |
|yRowPadding |The padding of the rows as a percentage (do not exceed 0.5 as this is doubled to account for both sides)|
|taskColumnWidth|                 Task column width|
|startColumnWidth|                 Start date column width|
|endColumnWidth|               End date column width  |
|daysColumnWidth|     Days column width            |
|progressColumnWidth|Progress column width|
|columnPadding|The padding between the table columns|



