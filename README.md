# Tate Braeckel Developer Portfolio
Welcome to Tate Braeckel's Web Developer Portfolio Site. This is a space for me to share my development and design accomplishments with others. Please enjoy.

This is a simple React front end SPA.

<!-- Live demo [_here_](https://youtu.be/RZ5tK-JDJkA). If you have the project hosted somewhere, include the link here. -->

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)
<!-- * [License](#license) -->


## General Information
-  Experienced in Ruby on Rails and JavaScript-based programming, with expertise in design, UX, and UI. Known for strong logistical and data organization skills and a collaborative approach to project management. Dedicated to creating seamless user experiences and contributing to team growth.


## Technologies Used
- Frontend: ReactJS 18.2.0
- VS Code - version 1.81.1

## Features
List the ready features here:
- Navbar
- Routes
- Fancy clickable links
- Beautiful styling


## Screenshots
(https://github.com/tbraeck/tbraeckel-portfolio/blob/master/Screenshot%202024-03-25%20at%203.25.34%20PM.png)

## Setup
To setup this project go to my Github repository.
Full App: https://github.com/tbraeck/tbraeckel-portfolio

Start with the README file and then open the CSS, React, and Rails files in a text editor like VS Code.

<!-- ## Usage -->
<!-- Below are snippets of some code within the project.

//React example for FreeStuffsCard component//

` const handleClaim = () => {

      if (stuff.user_id === user.id) {
        setErrors(["You cannot claim your own item."]);
        return;
      }

      fetch(`/user_free_stuffs/${stuff.id}/claim`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(stuff)
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to claim item. Please try again.');
          }
        })
        .then((newStuff) => {
          handleUpdateFreeStuffs(newStuff);
        })
        .catch((error) => {
          console.error('Error claiming item:', error);
          setErrors(['Failed to claim item. Please try again.']);
        });
  };` 

//Rails example for FreeStuffs Controller actions//

`def return
    @free_stuff = FreeStuff.find(params[:id])

    if @free_stuff.claimant_id 
      @free_stuff.update(claimant_id: nil)

      render json: @free_stuff
    else
      render json: { error: 'Item could not be returned' }, status: :unprocessable_entity
    end
  end

  def update
    if @free_stuff.update(free_stuffs_params)
      render json: @free_stuff
    else
      render json: @free_stuff.errors, status: :unprocessable_entity
    end
  end` -->


## Project Status
Project is: _in progress_ The project is still growing. I want to keep building my portfolio again and again as  I grow as a developer. 


## Room for Improvement

Room for improvement:
- I need to improve the aesthetics of the overall site. 
- Improve the use interface/ experience
- The functionality needs to be usable across the whole site.
- Utilize a CSS framework to unify styling

To do:
- Work on the styling/ placement of elements
- Add or subtract other features, interactions, experiences


<!-- ## Acknowledgements

- People are struggling and at the same time have fewer people in their own communities they can lean on for help or support. This site can help alleviate some of those problems by cutting out the monetary side of goods and services and returning to a bartering system.
- I see that many people feel disconnected from their own communities and this is a way to help reconnect people. -->

## Contact
Created by [Tate Braeckel](www.linkedin.com/in/tate-braeckel) - feel free to contact me!


