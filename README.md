# To-Do List App

# Overview
A sleek, modern to-do list application with a beautiful dark theme interface that helps you stay organized and productive.

## Description
This To-Do List Application is a sleek, modern task management tool designed with a dark theme and glassmorphism UI for an immersive user experience. It allows users to add, complete, and delete tasks while maintaining persistence across sessions using localStorage.

## Table of Contents
 - [Features](#features)
 - [How-to-Run-the-Application](#How-to-Run-the-Application)
 - [File-Structure](#File-Structure)
 - [Customization](#Customization)
 - [Browser-Compatibility](#Browser-Compatibility)

## Features
- **Add Tasks**: Easily add new tasks with a simple input field
- **Task Completion**: Mark tasks as complete with checkboxes
- **Delete Tasks**: Remove tasks you no longer need
- **Persistent Storage**: Tasks are saved in localStorage so they persist between sessions
- **Responsive Design**: Works well on both desktop and mobile devices
- **Visual Feedback**:
  - Error messages for empty inputs
  - Animated transitions
  - Task counter
- **Beautiful UI**:
  - Gradient background
  - Glassmorphism design elements
  - Custom checkboxes
  - Empty state illustration

## How to Run the Application
1. **Prerequisites**:
   - A modern web browser (Chrome, Firefox, Safari, Edge)
   - No server required - runs directly in the browser

2. **Running the Application**:
   - Simply open the `index.html` file in your web browser
   - Alternatively, you can host these files on any web server

3. **Using the Application**:
   - Type your task in the input field and click "Add Task" or press Enter
   - Click the checkbox to mark a task as complete
   - Click the "×" button to delete a task
   - Your tasks will automatically save and persist between sessions

## File Structure
- `index.html`: The main HTML file containing the application structure
- `style.css`: Contains all custom styling for the application
- `script.js`: Contains all the JavaScript functionality for the to-do list

## Customization
You can customize the application by:
- Modifying the color scheme in the Tailwind config (in script.js)
- Changing the background image in style.css
- Adjusting the glassmorphism effect opacity in the task items

## Browser Compatibility
The application uses modern CSS features like:
- backdrop-filter (for the glassmorphism effect)
- CSS variables
- Flexbox and Grid layout
