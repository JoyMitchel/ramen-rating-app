# Ramen Review App

This is a simple web application that allows users to display ramen dishes, view their details and add new ramen entries using a form.

## Features

- Display a list of ramen images with names.
- Click on a ramen image to view detailed information (name, restaurant, rating, and comment).
- Add new ramen entries via a form, which includes ramen name, restaurant, image URL prefered image urls from (https://www.dreamstime.com/photos-images/url-food.html), rating, and comment.

## Technologies Used

- HTML
- CSS (for styling)
- JavaScript
- Research on how to write a good readme from ``https://www.makeareadme.com/``

## Setup

1. Clone this repository to your local machine:
    ``git clone https://github.com/your-username/ramen-review-app.git``
  

2. Navigate to the project directory:
    ``cd ramen-review-app``
    

3. Open the `index.html` file in your preferred web browser to run the app.

## How it Works

### Display Ramen

The app starts by displaying a list of ramen dishes. Each ramen dish is shown as an image, and when clicked, detailed information about that ramen is displayed (name, restaurant, rating, and comment).

### Add New Ramen

Users can add new ramen dishes through a form. The form includes the following fields:

- **Name**: Name of the ramen.
- **Restaurant**: The restaurant serving the ramen.
- **Image**: The URL of the ramen image.
- **Rating**: Rating of the ramen (1-5).
- **Comment**: A short comment about the ramen.

When the form is submitted, a new ramen dish is added to the list, and the page updates to show the newly added ramen image.

## Code Overview

- `ramens` array: Holds the initial list of ramen objects, each with properties like `id`, `name`, `restaurant`, `image`, `rating`, and `comment`.
- `displayRamens()`: Displays ramen images on the page.
- `handleClick()`: Handles the click event on a ramen image, showing the ramen details.
- `addSubmitListener()`: Listens for form submission to add a new ramen entry.
- `main()`: Initializes the app by displaying the ramen and setting up the form submit event listener.

## Contribution

Feel free to fork this repository and contribute by making improvements or adding new features. Pull requests are welcome

## Contact

For any questions or issues, feel free to open an issue or contact [joy.mitchel@student.moringaschool.com]

