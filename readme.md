# Mongoose Creation, Updates, & Queries Homework

## Introduction

We've seen how to use MongoDB in a Node environment, so now, let's practice Mongo, Node and Mongoose in this homework. Imagine you work for a pet shelter, and you've been asked to create an MVP for a user interface that will allow you to keep track of adoptions, abandonments, and drop-offs.  You'll have to build a small web application that will allow a user to manipulate records through links and a form.


## Exercise

#### Requirements

- The application will represent an animal shelter and the user will have options to:
  - Adopt a pet
  - Abandon a pet
  - Leave a new pet in the shelter
- The root page will show the list of animals
- For each animal on the index, a link will be displayed
  - If the animal is "orphan", then the link will be to "adopt" the animal
  - If the animal is "adopted", then the link will be to "abandon" the animal
- Create a model Animal with these fields:
  - name(String)
  - breed(String)
  - dob(Date)
  - gender(String)
  - family(String)
  - status(String)
- Everything can be in one page, and this page will contain some links and a form

**Bonus:**

- Add some style
- Add a field image to link pictures from the web
- Add validations with Mongoose

#### Starter code

In the [starter code](starter-code) folder, you'll find a Node js app containing all the packages you need; run `npm install` to set the packages and create a mongo database named `animalshelter`. Then, run the app!

#### Deliverable

![Example Image](http://s30.postimg.org/uv04jcwox/Screen_Shot_2015_07_21_at_16_00_59.png)

## Additional Resources


- [Express JS documentation](http://expressjs.com/api.html)
- [MongooseJS documentation](http://mongoosejs.com/docs/api.html)