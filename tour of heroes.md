
# Angular vs React   

| **Philosophical Lens**         | **Angular**                                                                 | **React**                                                                  |
|-------------------------------|------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **Configuration vs. Convention** | Convention over configuration – strong defaults and structure               | Configuration over convention – you choose your stack                      |
| **Framework vs. Library**     | Full-fledged framework – batteries included                                 | UI library – minimal core, bring your own tools                           |
| **Programming Paradigm**      | Mix of OOP and declarative; class-based with dependency injection           | Functional and declarative; hooks and pure components                     |
| **Flexibility vs. Structure** | Emphasizes structure and consistency – ideal for large teams                | Emphasizes flexibility and composability – ideal for rapid innovation     |
| **Learning Curve Philosophy** | Steeper upfront learning – once learned, standardized and guided            | Easy to start, harder to scale – requires more architectural decisions     |
| **Ecosystem Philosophy**      | Centralized control (Google) – slower but stable and integrated             | Community-driven (Meta) – fast-paced innovation and experimentation       |
| **Testing Philosophy**        | Built-in testing tools and philosophy (Jasmine, Karma, TestBed)             | Encourages testing, but you pick the tools (Jest, React Testing Library)  |
| **Type System**               | TypeScript-first – strong type safety and tooling baked in                  | TypeScript optional – more flexible, but requires discipline               |
| **Rendering Philosophy**      | Uses HTML-like templates with structural directives (e.g. *ngIf, *ngFor)     | Uses JSX – logic and markup live together, more JavaScript-centric        |
| **State Management**          | Services and RxJS for reactive state; NgRx for larger apps                  | Multiple options – built-in hooks, context API, Redux, Zustand, etc.      |
| **Routing Philosophy**        | Built-in, declarative and config-based routing module                       | External – usually React Router, more flexible but requires setup         |
| **Tooling Philosophy**        | CLI-driven – scaffolding, code generation, testing all integrated           | DIY with tools like Vite, Create React App, Next.js, etc.                 |


   
# [Tour of heros application](https://v17.angular.io/tutorial/tour-of-heroes)   

## Topics covered include   
* Gets a list of heroes.   
* Displays the heroes in a list.   
* Edits a selected hero's details.    
* Navigates between different views of heroic data.   

## Create a project.   

### Workspaces (Similar to a solution file in C#)  

- There is no concept of a workspace in React. However, Nx or Turbo repo can be used to achieve similar results to host multiple applications.

### Angular (ng new)  
`
ng new angular-tour-of-heroes
`

* Creates a new Angular workspace and app called angular-tour-of-heroes.   
* Sets up routing, testing, TypeScript config, and a component-based structure.   
* Installs dependencies and scaffolds the folder structure.   

### React    

There are multiple ways to create a React App.      
* Vite (newer and faster).   
* CRA (create react app)  older but still in use.   

Typescript is not used by default in React. You need to opt in by configuring typescript. We'll use Vite. It is also important to note that React does not have a CLI. It primarily depends on NPM.

`
npm create vite@latest react-tour-of-heroes --template react-ts
`

* Creates a React App called react-tour-of-heroes.   
* Configures typescript for a React app.   

| Angular                               | React                                     |
|--------------------------------------|--------------------------------------------|
| `src/app/app.component.ts`           | `src/App.tsx`                              |
| `src/app/components/...`             | `src/components/...`                       |
| `angular.json`, `tsconfig.json`      | `vite.config.ts` or CRA’s hidden config    |
| Routing via `RouterModule`           | Routing via `react-router-dom`             |


## Serve an application   
### Angular   
`
cd angular-tour-of-heroes
` 
   
`
ng serve --open
`

The ng serve command:   
* Builds the application.     
* Starts the development server.   
* Watches the source files.   
* Rebuilds the application as you make changes.   


The --open flag opens a browser to http://localhost:4200.   


### React   

`
cd react-tour-of-heroes
`
   
It is also important to note that npm packages will not be installed by default when using Vite.
`
npm install
`
   
Update the port number in the package.json file such that.   

```json
"scripts": {
  "dev": "vite --port 3000",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview --port 3001"
}
```
   
RUN   
`
npm run dev   
` 

The npm run dev command:   
* Builds the application.   
* Starts the development server.   
* Watches the source files.   
* Rebuilds the application as you make changes.   

The application will start on http://localhost:3000.   

## Making changes to the application    

### Angular (app.component.ts) - Standalone component   
```ts
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Heroes';
}

```

### React (App.tsx) - Function component   

```tsx
// App.tsx
import React from 'react';
import './App.css';

const App: React.FC = () => {
  const title = 'Tour of Heroes';

  return (
    <div className="app-root">
      <h1>{title}</h1>
    </div>
  );
};

export default App;

```

###  Breakdown of Equivalents   

| Angular                            | React                                        |
|------------------------------------|----------------------------------------------|
| `@Component` decorator             | Component function + JSX return              |
| `selector: 'app-root'`             | `<App />` usage in `index.tsx`               |
| `templateUrl: '...'`               | JSX inside the component (`return (...)`)    |
| `styleUrls: ['...']`               | CSS import (`import './App.css'`)            |
| `title = '...'`                    | `const title = '...'` (or `useState` if dynamic) |

### Angular (app.component.css) and React (App.css)   

CSS works exactly the same in both frameworks.

```css
/* Application-wide Styles */
h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
}
h2, h3 {
  color: #444;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
body {
  margin: 2em;
}
body, input[type="text"], button {
  color: #333;
  font-family: Cambria, Georgia, serif;
}
button {
  background-color: #eee;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: black;
  font-size: 1.2rem;
  padding: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
}
button:hover {
  background-color: black;
  color: white;
}
button:disabled {
  background-color: #eee;
  color: #aaa;
  cursor: auto;
}

/* everywhere else */
* {
  font-family: Arial, Helvetica, sans-serif;
}
```

## 1. The hero editor   

Create a new component to display hero information and place that component in the shell.   

### Create the heroes component   

#### Angular   
`
ng generate component heroes
`   

The CLI above will generate a new folder called heroes i.e. src/app/heroes/ and three files. 

* heroes.component.ts     
* heroes.component.html   
* heroes.component.css   

Initial code snippets   
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
}
```

#### React   

Add a new folder called components and a new file called heroes.tsx such that src/components/Heroes.tsx. Add the following code.   

```tsx
import React from "react";

const Heroes: React.FC = () => {
  const hero = "Windstorm";
  return <h2>{hero}</h2>;
};

export default Heroes;
```
### Show the HeroesComponent view   

#### Angular   
Add a reference to src/app/app.component.html such that. 

```html
<h1>{{title}}</h1>
<app-heroes></app-heroes>
```

#### React   
Add a reference to src/App.tsx such that.   

```tsx
import './App.css'
import Heroes from './components/Heroes'

function App() {
  const title = 'Tour of Heroes';
  return (
    <>
     <h1>{title}</h1>
     <Heroes></Heroes>
    </>
  )
}

export default App
```

### Create a Hero interface   

Create a Hero interface in its own file in the src/app directory . Give it id and name properties.   
Note that an interface works exactly the same between Angular and React.   

```ts
export interface Hero {
  id: number;
  name: string;
}
```


#### Angular   
Update the HeroesComponent such that.   

src/app/heroes/heroes.component.ts   
```ts
import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
```
   
heroes.component.html   
```html
<h2>{{hero.name}} Details</h2>
<div><span>id: </span>{{hero.id}}</div>
<div><span>name: </span>{{hero.name}}</div>
```

#### React   
Update the Heroes component such that.   

Heroes.tsx   

```tsx
import React from "react";
import { Hero } from "../app/Hero";

const Heroes: React.FC = () => {
  const hero: Hero = {
    id: 1,
    name: "Windstorm",
  };

  return (
    <>
      <h2>{hero.name} Details</h2>
      <div>
        <span>id: </span>
        {hero.id}
      </div>
      <div>
        <span>name: </span>
        {hero.name}
      </div>
    </>
  );
};

export default Heroes;

```

### Format Uppercase   

#### Angular   

```html
<h2>{{hero.name | uppercase}} Details</h2>
```

#### React   
```tsx
 <h2>{hero.name.toUpperCase()} Details</h2>
```   

### Edit the hero   

Users should be able to edit the heros name in an <input> textbox.

#### Angular   
Setup two way binding.   

1. Add the ngModel attribute such that.   
```html
<div>
  <label for="name">Hero name: </label>
  <input id="name" [(ngModel)]="hero.name" placeholder="name">
</div>
```
2. Import the Forms module in the app.module.ts   
```ts
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
```
3. Update the imports in the app.module.ts   
```ts
imports: [
  BrowserModule,
  FormsModule
],
```


### React   
Setup two way binding.   

useState manages internal state. Convert. 
```ts
  const hero: Hero = {
    id: 1,
    name: "Windstorm",
  };
```
   
To:
```ts
 const [hero, setHero] = useState<Hero>({
    id: 1,
    name: "Windstorm",
  });
```

Update the component such that.   
```tsx
import React, { ChangeEvent, useState } from "react";
import { Hero } from "../app/Hero";

const Heroes: React.FC = () => {
    
  const [hero, setHero] = useState<Hero>({
    id: 1,
    name: "Windstorm",
  });

  const handleHeroNameChanged = (event: ChangeEvent<HTMLInputElement>) => {
    const newHeroName = event.target.value;
    setHero((prevHero) => ({
      ...prevHero,
      name: newHeroName,
    }));
  };

  return (
    <>
      <h2>{hero.name.toUpperCase()} Details</h2>
      <div>
        <span>id: </span>
        {hero.id}
      </div>

      <div>
        <label htmlFor="name">Hero name: </label>
        <input
          id="name"
          value={hero.name}
          onChange={handleHeroNameChanged}
          placeholder="name"
        />
      </div>
    </>
  );
};

export default Heroes;
```

## 2. Display a list   

Create a file called mock-heroes.ts in the src/app/ directory. This will be exactly the same in Angular and React.   

src/app/mock-heroes.ts   
```ts
import { Hero } from './hero';

export const HEROES: Hero[] = [
  { id: 12, name: 'Dr. Nice' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr. IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
```

### Display Heroes   

#### Angular 

src/app/heroes/heroes.component.ts    
```ts
import {Component} from '@angular/core';
import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
  ],
})

export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
```
   

src/app/heroes/heroes.component.html
```html
<h2>My Heroes</h2>
<ul class="heroes">
  <li *ngFor="let hero of heroes">
    <button [class.selected]="hero === selectedHero" type="button" (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span>
      <span class="name">{{hero.name}}</span>
    </button>
  </li>
</ul>

<div *ngIf="selectedHero">
  <h2>{{selectedHero.name | uppercase}} Details</h2>
  <div>id: {{selectedHero.id}}</div>
  <div>
    <label for="hero-name">Hero name: </label>
    <input id="hero-name" [(ngModel)]="selectedHero.name" placeholder="name">
  </div>
</div>
```
   
##### Summary   

- The **Tour of Heroes** application displays a list of heroes with a detail view.   
- The user can select a hero and see that hero's details.   
- You used *ngFor to display a list.   
- You used *ngIf to conditionally include or exclude a block of HTML.   
- You can toggle a CSS style class with a class binding.   


#### React - Import list of heroes      

src/components/Hereos.tsx   
```tsx
import React, { useState } from "react";
import { Hero } from "../app/Hero";
import { HEROES } from "../app/mock-heroes";
import "./Heroes.css";

const Heroes: React.FC = () => {
  
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [heroes, setHeroes] = useState<Hero[]>(HEROES);

  const onSelect = (hero: Hero) => {
    setSelectedHero(hero);
  };

  const updateHeroName = (name: string) => {
    if (selectedHero) {
      const updated = { ...selectedHero, name };
      setSelectedHero(updated);
      setHeroes(heroes.map(h => h.id === updated.id ? updated : h));
    }
  };

  return (
    <div>
      <h2>My Heroes</h2>

      <ul className="heroes">
        {heroes.map((hero) => (
          <li key={hero.id}>
            <button
              type="button"
              className={hero === selectedHero ? "selected" : ""}
              onClick={() => onSelect(hero)}
            >
              <span className="badge">{hero.id}</span>
              <span className="name">{hero.name}</span>
            </button>
          </li>
        ))}
      </ul>

      {selectedHero && (
        <div>
          <h2>{selectedHero.name.toUpperCase()} Details</h2>
          <div>id: {selectedHero.id}</div>
          <div>
            <label htmlFor="hero-name">Hero name: </label>
            <input
              id="hero-name"
              value={selectedHero.name}
              onChange={(e) => updateHeroName(e.target.value)}
              placeholder="name"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Heroes;
```
##### Summary  
- The **Tour of Heroes** React application displays a list of heroes with a selectable detail view.  
- Users can click on a hero to view and edit their details.  
- The hero list is rendered using JavaScript's `.map()` function.  
- The detail section is conditionally rendered using standard React conditional logic (`&&`).  
- CSS classes are conditionally applied using dynamic `className` values to highlight the selected hero.   
- Hero name updates are handled using controlled form inputs and state updates with `useState`.   


## 3. Create a feature component   

Move the hero details into a separate, reusable HeroDetailComponent.   

### Angular   

Generate a hero detail component (src/app/hero-detail).   
`
ng generate component hero-detail
`
   
Write the template file (src/app/hero-detail/hero-detail.component.html).   
```html
<div *ngIf="hero">

  <h2>{{hero.name | uppercase}} Details</h2>
  <div><span>id: </span>{{hero.id}}</div>
  <div>
    <label for="hero-name">Hero name: </label>
    <input id="hero-name" [(ngModel)]="hero.name" placeholder="name">
  </div>

</div>
```

Import Hero type (src/app/hero-detail/hero-detail.component.ts).   
```ts
import {Hero} from '../hero';
```
   

Update the HeroesComponent to display the HeroesDetailComponent.

heroes.component.html

```html
<h2>My Heroes</h2>

<ul class="heroes">
  <li *ngFor="let hero of heroes">
    <button [class.selected]="hero === selectedHero" type="button" (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span>
      <span class="name">{{hero.name}}</span>
    </button>
  </li>
</ul>

<app-hero-detail [hero]="selectedHero"></app-hero-detail>
```   

Final Code review.


src/app/hero-detail/hero-detail.component.ts   
```ts
import {Component, Input} from '@angular/core';
import {NgIf, UpperCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Hero} from '../hero';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  imports: [FormsModule, NgIf, UpperCasePipe],
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
```   


src/app/hero-detail/hero-detail.component.html   
```html
<div *ngIf="hero">

  <h2>{{hero.name | uppercase}} Details</h2>
  <div><span>id: </span>{{hero.id}}</div>
  <div>
    <label for="hero-name">Hero name: </label>
    <input id="hero-name" [(ngModel)]="hero.name" placeholder="name">
  </div>

</div>
```



src/app/heroes/heroes.component.html
```html
<h2>My Heroes</h2>

<ul class="heroes">
  <li *ngFor="let hero of heroes">
    <button [class.selected]="hero === selectedHero" type="button" (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span>
      <span class="name">{{hero.name}}</span>
    </button>
  </li>
</ul>

<app-hero-detail [hero]="selectedHero"></app-hero-detail>
```

#### Summary
- You created a separate, reusable HeroDetailComponent.   
- You used a property binding to give the parent HeroesComponent control over the child HeroDetailComponent.   
- You used the @Input decorator to make the hero property available for binding by the external HeroesComponent.   

### React   

Generate a hero detail component (src/component/HeroDetail.tsx).

```tsx
import React from "react";
import { Hero } from "../app/Hero";

interface HeroDetailProps {
  hero: Hero | null;
  updateHeroName: (name: string) => void;
}

const HeroDetail: React.FC<HeroDetailProps> = ({ hero, updateHeroName }) => {
 
  if (!hero) {
    return null;  
  }

  return (
    <div>
      <h2>{hero.name.toUpperCase()} Details</h2>
      <div>id: {hero.id}</div>
      <div>
        <label htmlFor="hero-name">Hero name: </label>
        <input
          id="hero-name"
          value={hero.name}
          onChange={(e) => updateHeroName(e.target.value)}
          placeholder="name"
        />
      </div>
    </div>
  );
};

export default HeroDetail;

```

#### Take aways   

A reference to a hero object and a function is passed into a component using Props (properties) defined using the interface HeroDetailProps. This is a way to pass data from a parent to a child component in React.


Update the heroes component.   

```tsx
import React, { useState } from "react";
import { Hero } from "../app/Hero";
import { HEROES } from "../app/mock-heroes";
import "./Heroes.css";
import HeroDetail from "./HeroDetail";

const Heroes: React.FC = () => {
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
  const [heroes, setHeroes] = useState<Hero[]>(HEROES);

  const onSelect = (hero: Hero) => {
    setSelectedHero(hero);
  };

  const updateHeroName = (name: string) => {
    if (selectedHero) {
      const updated = { ...selectedHero, name };
      setSelectedHero(updated);
      setHeroes(heroes.map(h => h.id === updated.id ? updated : h));
    }
  };

  return (
    <div>
      <h2>My Heroes</h2>

      <ul className="heroes">
        {heroes.map((hero) => (
          <li key={hero.id}>
            <button
              type="button"
              className={hero === selectedHero ? "selected" : ""}
              onClick={() => onSelect(hero)}
            >
              <span className="badge">{hero.id}</span>
              <span className="name">{hero.name}</span>
            </button>
          </li>
        ))}
      </ul>

      <HeroDetail
        hero={selectedHero}
        updateHeroName={updateHeroName}
      />
    </div>
  );
};

export default Heroes;
```

#### Summary

- You created a separate, reusable `HeroDetail` component.  
- You passed data from the parent `Heroes` component to the child `HeroDetail` component using props.  
- You accessed the `hero` prop inside the `HeroDetail` component to display the passed-in data from `Heroes`.
