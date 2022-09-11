## Inspiration

In a post-COVID world struggling with short-staffed hospitals, unnecessary ER visits can mean the world of difference.  
  
Over 19% of hospitals in the US are suffering critical staffing shortages (_Data Brief: Health Care Workforce Challenges Threaten Hospitals’ Ability to Care for Patients | AHA_, 2021). Such shortages have costed hospitals over $24 Billion, just over the course of the pandemic.

So… we set off to explore how to solve such a looming issue.

We have all been there. You search some cold symptoms and it tells you that you MAY have a cold, pneumonia, or about 20 hours left to live.  
  
_What’s up, Doc?_ aims to give more accurate information on what sickness you may have.  

## What it does

After users submit their symptoms (cough, sneeze, etc.), the model predicts and returns what sickness the user is most likely to have along with some additional information/articles.

## Challenges we ran into

During the hackathon, we ran into a few issues that slowed us down temporarily.

When working on connecting the frontend (react app) and backend (machine learning disease predictor model hosted on flask) of the application, we had trouble when connecting the flask api and connect it with react. After debugging and trying to find the root cause, re-training our ML model fixed the issue.

Usually, we were familiar with API’s that were hosted on websites but for _What’s up, Doc?_ we had to adapt to using an API that sent calls locally—which posed to be an interesting challenging.
  
Finally, the main challenge we ran into was combining our very different skills as a mix of machine learning enthusiasts and web app creators to create _What’s up, Doc?_.

## Accomplishments that we're proud of

-   talk about how getting the react app to work and api connections
-   integrate the mL model into a frontend application
-   training a model on a list of symptoms, figuring out what architecture to use

## What we learned

- Collaborating in a hybrid work environment
- Managing a backend and frontend efficiently
- Deploying a machine learning model on a web interface
- Spline 3D tool for react

## What's next for What's up, Doc?

- CT scan reports can be submitted and analyzed automatically by our model allowing doctors to process scans more accurately and efficiently.
- Connect a database that stores severity of diseases to notify a user if we recommend they go to the doctor; also more information about the disease that could help a user confirm the diagnosis.
- Increase even more diseases within the disease set including more rare ones, while providing additional conditions that can be resulting from these symptoms.
