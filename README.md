# CS 4277: Cybersecurity
# Final Project

## Overview
For my final project, I decided to look into a new form of user authentication,specifically graphical password authentication. 

### Context of Password Authentication:
User authentication is a fundamental component in most computer security contexts. It provides the basis for access control and user accountability. While there are various types of user authentication systems, alphanumeric username/password combinations are the most common type of user authentication. They are versatile and easy to implement and use. However, alphanumeric passwords are required to satisfy two contradictory requirements: they have to be easily memorable for users but also have to be hard to guess by imposters. Several techniques have been proposed to reduce the limitations of alphanumeric passwords. One proposed solution is to use an easy to remember long phrase rather than a single word. Another proposed solution, one that we will focus on in the project, is to use graphical passwords.

Graphical passwords refer to using pictures as passwords. Graphical passwords provide a promising alternative to traditional alphanumeric passwords. They are attractive since people usually remember pictures better than words. Additionally, this type of user authentication is difficult to break since neither brute force nor dictionary attacks could breach it.

In general, graphical passwords techniques are classified into two main categories: recognition-based and recall-based graphical techniques. In recognition-based techniques, a user is authenticated by challenging him/herself to identify one or more images he or she chose during the registration stage. In recall-based techniques, a user is asked to reproduce something he or she created or selected earlier during the registration stage.

### Proposed System:
The proposed authentication system works as follows. At the time of registration, a user creates a username and password combination as well as a graphical password by choosing a particular combination of three sets of images. Each set has three images and these images share a common theme. In this current implementation, the first set has the theme of marvel characters (Iron Man, The Hulk, Thor). The second set has the theme of types of vehicles (Mini-Van, Truck, Sports Car) whereas the third set has the theme of fast-food restaurants (McDonald's, Burger King, Wendy's). Once the user has completed his registration by filling out the fields and selecting the register button, the user's account information will be stored. For authentication, the user enters his or her username and password as well as his particular selections of the three different sets of images. If the provided user information is accurate on file, the system prompts the user that the login attempt was successful. Else, the user is given an error message that the user is unauthorized.

## How to Build/Run Software
Download the package and its dependencies
    
    npm install

Run the start script using npm to start your application with the special configuration options

    npm run start

Switch to your browser and go to the specific address

    http://localhost:8080/register.html

After you have registered, you will be notified in the console if your registration was successful. If it is successful, move to the login.html page.

    http://localhost:8080/login.html

After you have attempted to log in, if the login information is properly authenticated, the user will be notified of the success in the console.
