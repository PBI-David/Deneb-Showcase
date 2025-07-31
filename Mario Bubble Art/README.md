# Instructions

To create your own bubble art, follow the steps below:

**1.** Find an image online that you want to turn into bubble art.

**2.** Place the image in the current directory.

**3**. In the P5 folder, there is a sketch.js file. Amend the file to refer to your newly copied image.

```
img = loadImage("/shrek.jpg")
```

**4.** Start a server and then navigate to index.html.

**5.** Open the console. In Firefox, you can do this by pressing F12.

**6.** You will see an array of colour codes has been generated.

The following options can be easily configured within the specification.

| Signal              | Description                                                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| showTooltips        | Globally enable/disable tooltips. This has no effect on long task names which will always show a tooltip when the task name length exceeds the task column width. |
| showButtons         | Enable/disable shortcut buttons at the top of the chart.                                                                                                          |
| showDomainSpanLabel | Show/hide a text box showing the current span of the chart                                                                                                        |
| textColour          | The main text colour used throughout                                                                                                                              |
| coloursDark         | The array of colours used for dark shades                                                                                                                         |
| coloursLight        | The array of colours used for light shades                                                                                                                        |
| yRowHeight          | The row heights                                                                                                                                                   |
| yRowPadding         | The padding of the rows as a percentage (do not exceed 0.5 as this is doubled to account for both sides)                                                          |
| taskColumnWidth     | Task column width                                                                                                                                                 |
| startColumnWidth    | Start date column width                                                                                                                                           |
| endColumnWidth      | End date column width                                                                                                                                             |
| daysColumnWidth     | Days column width                                                                                                                                                 |
| progressColumnWidth | Progress column width                                                                                                                                             |
| columnPadding       | The padding between the table columns                                                                                                                             |
