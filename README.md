# Image Gallery with SimpleLightbox

A responsive image gallery built with vanilla JavaScript.  
The project dynamically renders gallery items from an array of image objects and
uses the SimpleLightbox library to display full-size images in a modal window.

## Live Demo

[View live project](https://your-live-link-here)

## Repository

[GitHub repository](https://github.com/your-username/your-repository-name)

## Preview

![Project preview](./preview.png)

## Features

- Dynamic gallery rendering from a JavaScript data array
- Responsive image grid layout
- Full-size image preview on click
- Modal lightbox functionality using SimpleLightbox
- Image captions from the `alt` attribute
- Clean and semantic HTML structure
- Modern JavaScript syntax
- Organized project structure

## Technologies Used

- HTML5
- CSS3
- JavaScript
- SimpleLightbox
- Vite

## Project Structure

```txt
.
├── index.html
├── src
│   ├── main.js
│   └── css
│       └── styles.css
├── package.json
└── README.md

```

### Main Logic

### The gallery is rendered dynamically using JavaScript.

const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = images .map( ({ preview, original, description })
=>
`       <li class="gallery-item">         <a class="gallery-link" href="${original}">           <img class="gallery-image" src="${preview}" alt="${description}" />         </a>       </li>     `
) .join('');

Each object from the images array is transformed into an HTML gallery item. The
preview image is displayed on the page, while the original image is opened in
the lightbox after clicking.

SimpleLightbox is initialized after the gallery markup is added to the DOM:

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt',
captionDelay: 250, captionPosition: 'bottom', });

How It Works The script selects the gallery container from the DOM. The images
array is mapped into a list of HTML elements. The generated markup is inserted
into the page using innerHTML. SimpleLightbox is initialized for all gallery
links. When a user clicks an image, the full-size version opens in a modal
window. Installation and Setup

Clone the repository: git clone
https://github.com/Larimar4you/goit-advancedjs-hw-01

Install dependencies: npm install Start the development server: npm run dev
Build the project for production: npm run build Preview the production build:
npm run preview

### Created by Lara Kosta
