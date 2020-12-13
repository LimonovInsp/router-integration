# Project structure
### Navigation
Navigation uses redux store to manage functionality himself. There are navigation points which has three states visually:
1. First state shows that a user currently at certain point;
2. Other points are shown as disabled;
3. When a user has passed any step that step is shown as passed;
Also added escape button when passed at least one step.
### Service screen
Contains the cards with types of services. User can click on "Choose exam" to see a mark instead of clicked button.
Without chosen service button "Continue shedule" is disabled.
### Service provider screen
After clicking on a button user moves to the next step to choose a clinic. He can seek for desired clinic by city typing.
Button "Submit" is disabled until a clinic is selected.
