# SoftUni-React-Web-Applications-Masterclass-Swapp

**Swapp** is a **React Web Application** for the course **React Web Applications Masterclass** at SoftUni.
Swapp is an app that **retrieves data from GraphQL server** and **explores some interesting Star Wars data**.

## Data
- Data is fetched from **GraphQL Server**
- There is **only one user** available
  - email: demo@st6.io, password: demo1234
- Authenticating the queries happens by adding **Authorization header** to the request with the value **`Bearer <token>`**

## Routers

### Routes that don't require authentication (accessible only when the user hasn't been signed in)
- **`/login`**
  - Displays **Login Page**
  - The user should **always be redirected to login page if s/he hasn't signed in**

### Authorized Routes (accessible only when the user has signed in)
- **`/episodes`** 
  - Displays the **Episodes Page** (list of episodes)
  - When the **user logs in, s/he should be redirected** to this page
  - This is also our **default page**
  - Clicking on the **Episodes button** in the **AppBar** should also **navigate to this page**
- **`/characters`**
  - Displays the **Characters Page**
  - Clicking on the **Characters button** in the **AppBar** should also **navigate to this page**
- **`/episodes/:episodeId`**
  - Displays the data for the **episode with id = episodeId** (**Episode Page**)
- **`/characters/:characterId`**
  - Displays the data for the **character with id = characterId** (**Character Page**)
  - Clicking on the **Character Preview** in the **Characters Page** must **navigate to this page**
  - Clicking on the **Character Preview** in the **Episode Page** must **navigate to this page**
- **`/starships/:starshipId`**
  - Displays the data for the **starship with id = starshipId** (**Starship Page**)
  - Clicking on the **Starship Preview** in the **Character Page** must **navigate to this page**
  
  ## UI/UX
  - Clicking on the **SWAPP logo** must change the theme from **dark** to **light** and vice versa
  - The selected theme should be **stored accross sessions**
  - An appropriate **info message** should be shown if there is some kind of an **error during login**
  - **Navigation** between different pages should result in **changing the URL address** in the browser's navigation bar
  - The pages and components should have a **similar look** as shown in our **Project Description**
  - The application should be **responsive**
  
  ## Navigation Behavior
  - **Episodes Page** - all episodes should be loaded
  - **Episode Page** - only **5 characters** should be loaded (fetched)
    - If the users clicks on the **Load More** button, **5 more characters** should be fetched from the server and presented
  - **Characters Page** - only **12 characters** should be loaded (fetched)
     - If the users clicks on the **Load More** button, **12 more characters should be fetched from the server and presented
  - **Character Page** - **all starships** should be loaded
