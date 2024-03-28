# Conversational Interface

This project is developed for a technical test.  
It won't look like the exact detail but I sucessfully developed the concept.  
(E.g. detail-1 and detail-2 have same concept but with differnt colors or design)  
I have omitted these similar details as it would require more time to refactor and I do not want the professionals who are going to review my code to wait for my submission.  
I have developed similar concepts d I am fully confident to implement others if I am told to do so.  

Here is the demonstration of my creation.
https://chat.bhonesithu.tech/

You can also see my progress in this repository's commits.

## Documentation

### Challenge 1 Mock Data  
The first problem that I encounter during development is mock data creation. I tried to find online json data or free api for users and their chat data but could not find one.   
  
I overcame this problem by designing my own json data with user object along with their message list array. I used Typescript for with NextJS therefore I also create user data model (interface) file for type safety. In addition, I used Enum types for some fixed input such as LeadingStatus. 
	
	

### Challenge 2 State Management  

   As this technical test contain only one page, I underestimated that I did not need to use state management tools and I could do it only by using useState react hook. The moment I realized, I was managing and tossing around User data between components and parents to children and the code became very messy and difficult to debug.  
  
   As a solution, I put effort in refactoring the code by migrating User data component states to Redux state. By using Redux state management I was able to develop core functionalities like clicking the conversation row from left panel open up their messages and sending messages and retain that messages until the browser is refreshed and it will be reset to initial state data.

### Challenge 3 Third party components or libraries  

   In this project, I relied on many third party components ( Material UI Core , as instructed ) and libraries ( Tailwind CSS ). Due to these tools, I was able to develop and design this conversational interface in a short amount of time. However, there are some obstacles and limitations when it comes to customization.  
  
   To develop identical to Sales Mind AI theme, I had to manually configure some of their class in the config files, create a theme file that would match the color scheme of Sales Mind. 

### Conclusion  
  The development of this Conversational Interface is an interesting project for me and I would like to add more features for practical use such as connecting with backend and create real-time communication. Connecting with AI model with API and create AI-integrated softwares is the only thing that excite me the most. 

