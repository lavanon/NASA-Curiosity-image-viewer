# NASA-Curiosity-image-viewer
Select a day and see what Curiosity was so curious about!


## Prompt
Nasa has deployed multiple rovers to Mars over the years with the goal of better understanding the planets characteristics,
and if life ever existed on its dusty surface. The Curiosity rover has been working tirelessly capturing martian images since
2011 and has since been joined by his cousin, Perseverance, in hopes to finally uncover the secrets of Mars and prepare it
for human exploration. We would like see these images for any given day to help the public realize the tireless effort
Curiosity is putting sol in and sol out.

### Requirements
Build a web app that provides the user a form to enter any given day. 

Return the images that curiosity captured on that day.

Allow the user to filter the images by camera:

Cameras to choose from:
  Front Hazard Avoidance
  Rear Hazard Avoidance
  Mast
  Navigation Cameras

If no images are available provide a message that says "No available images"

These images captured by Curiosity are maintained in a database accessible from this api,
https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY
Reference Api Documentation HERE. Mars Rover Photos tab will provide documentation for searching for pictures.

API Key: SJtLy0wNppl58fwcHcMcFKo9i4tkASgJlgLSmXkJ.
