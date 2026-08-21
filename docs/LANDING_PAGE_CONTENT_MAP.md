# Landing Page Content and Structure Map

> This document maps the current landing page as rendered from the `main` branch. It preserves the visible copy, section order, nested content, links, interactions, and responsive layout. It does not include unused or commented-out pages and components.

## Page outline

1. Sticky header
2. Home
   1. Hero
   2. Profile and introduction
   3. Current partners
3. Portfolio
   1. Dataray: A Machine Learning SaaS
   2. This Website
   3. Research Paper: Theoretical Result for Neural Networks
   4. Research Paper: Adversarial Examples in Neural Networks
4. About
   1. About Me
   2. Job History
   3. Education
   4. Authored Books
   5. Tech Stack
5. Mobile bottom navigation

There is no footer on the current landing page.

---

## Global page shell

### Desktop and tablet header

> Sticky full-width bar at the top of the page. The content sits in one horizontal row within a centered maximum-width container.

- Circular portrait image: `/assets/informal-color.webp`
- Name: **EMILIO BALDA**
- Button: **CURRICULUM**
  - Icon: Download
  - Action: Downloads `CV-Emilio-Balda.pdf` from [Google Drive](https://drive.google.com/uc?id=1AFqS99db8Elw7b3hin9RcXHVt2zNU5pF)
- Section navigation:
  - **Home**
  - **Portfolio**
  - **About**
- Light/dark theme switch

### Mobile header and navigation

> The portrait, name, and text section navigation are hidden. The Curriculum button and theme switch remain in the top bar.

> A fixed navigation bar sits at the bottom of the screen. Each item has an icon and a text label.

- Home
- Portfolio
- About

### Main content container

> The page uses one vertical flow. Each main section sits inside a centered container with a maximum width of approximately 1280 pixels.

> The page supports light and dark themes. It uses pale gray and dark blue backgrounds, dark or light body text, mint green and blue accents, rounded cards, and soft shadows.

---

# Home

## Hero

> Centered headline. On tablet and desktop, the text appears with a typewriter animation and a blinking gradient cursor.

# Full Stack Developer

## Profile and introduction

> Desktop and tablet: two columns. The profile card sits on the left. The introduction, partners, and call to action sit on the right.

> Mobile: the columns stack. The profile card appears first. The introduction appears below it.

### Profile card

![Emilio Balda - Full Stack Developer and Machine Learning Expert](/assets/informal-color.webp)

## EMILIO BALDA

### Full Stack Developer

### PhD in Machine Learning

Contact icons:

- Email: [me@emilio-balda.com](mailto:me@emilio-balda.com)
- LinkedIn: [emiliobalda](https://www.linkedin.com/in/emiliobalda/)
- GitHub: [emilio-balda](https://github.com/emilio-balda)

### Introduction

I specialize in bringing AI-related ideas to production. From rough sketches and proof of concepts, all the way to integration into existing products.

Currently, I'm **fully booked** working with:

### Current partners

> Desktop: the partners appear as a two-column table. Each row shows a linked logo and name on the left, with the description on the right.

> Mobile and smaller tablets: each partner appears as a stacked block. The linked logo and name appear above the description.

#### [Anima](https://animaapp.com)

![Anima](/assets/anima-logo.svg)

Improving their core product's AI capabilities to turn designs into code.

#### [Joana Gomez](https://joana-gomez.com)

![Joana Gomez](/assets/joana-gomez-logo.svg)

Turning custom designs to fully functional, responsive websites in a matter of days through Anima's Figma plugin.

### Call to action

**GET IN TOUCH**

- Icon: Email
- Action: Opens a new email to [me@emilio-balda.com](mailto:me@emilio-balda.com)

---

# Portfolio

> A centered responsive card grid. Cards wrap onto new rows as space decreases.

> Each card has a large background image, an overlaid title, category tags, a description, and a **KNOW MORE** button. Category tags are hidden on mobile.

> Each **KNOW MORE** button opens a centered modal. The modal has a close icon, a scrollable content area, and a **GET IN TOUCH** button.

## Dataray: A Machine Learning SaaS

> Card background image: [industrial aerial photograph](https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)

Tags:

- `< frontend />`
- `< backend />`
- `< machine-learning />`

Dataray is a No-Code web application that brings artificial intelligence to industrial businesses.

**KNOW MORE**

### Dataray modal

#### Overview

Together with a team of 3 developers, we built a data science SaaS product called Dataray. This product is designed to monitor and operate factories with multiple industrial machines.

#### Features

- Self-service database connection to Dataray supports MSSQL, PosgreSQL and MongoDB
- Plug and play anomaly detection
- Time series forecasting
- Issue aggregation and summarization

#### Tech Stack

> Four nested accordion groups. Each item appears with its logo and label.

##### Frontend

- Vue JS
- Typescript
- Vite
- Tailwind CSS

##### Backend

- Python
- TensorFlow
- FastAPI
- mlflow
- SQL Alchemy
- Luigi

##### Infrastructure

- Helm
- GCloud
- Terraform

##### DevOps

- Git
- DVC
- GitLab CI
- PyTest
- PyPoetry

**GET IN TOUCH** — Opens a new email to [me@emilio-balda.com](mailto:me@emilio-balda.com).

---

## This Website

> Card background image: [computer workstation photograph](https://images.pexels.com/photos/3374210/pexels-photo-3374210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)

Tag:

- `< frontend />`

I built this website using Vue JS. Take a look at the source code and tech stack on my GitHub.

**KNOW MORE**

### This Website modal

#### Overview

This website is built using the Vitesse template from Anthony Fu. I open sourced the code in [this repository](https://github.com/emilio-balda/personal-website).

#### Features

- Responsive design for mobile, tablet and desktop
- Light/Dark Mode
- Tested with unit and end-to-end tests
- Managed with Continuous Integration and Deployment (CI/CD)

#### Tech Stack

> Two nested accordion groups. Each item appears with its logo and label.

##### Frontend

- Vue JS
- Typescript
- Vite
- Tailwind CSS

##### DevOps

- ESLint
- Jest
- Cypress
- GitHub Actions

**GET IN TOUCH** — Opens a new email to [me@emilio-balda.com](mailto:me@emilio-balda.com).

---

## Research Paper: Theoretical Result for Neural Networks

> Card background image: [abstract blue photograph](https://images.pexels.com/photos/4021521/pexels-photo-4021521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)

Tags:

- `< research />`
- `< machine-learning />`

I was the first author of a paper about statistical learning theory and deep neural networks.

**KNOW MORE**

### Theoretical Result modal

#### Project Goal

Publish a theoretical paper about the generalization capabilities of deep neural networks under the presence of a malicious attacker modifying the inputs of the network.

#### Approach

I used tools from statistical learning theory to derive theoretical bounds that scaled better with the input dimension and the number of classes with respect to other existing bounds.

The paper was published in AISTATS 2020.

See the full paper [here](https://proceedings.mlr.press/v108/balda20a).

#### Tech Stack

- **_TensorFlow_**: used to train neural networks and visualize the theoretical results in a simulation.

**GET IN TOUCH** — Opens a new email to [me@emilio-balda.com](mailto:me@emilio-balda.com).

---

## Research Paper: Adversarial Examples in Neural Networks

> Card background image: [abstract dark photograph](https://images.pexels.com/photos/3308588/pexels-photo-3308588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)

Tags:

- `< research />`
- `< machine-learning />`

I was the first author of a paper about computer vision and deep neural networks.

**KNOW MORE**

### Adversarial Examples modal

#### Project Goal

The goal was to publish a journal about new algorithms to generate "adversarial examples". That is, inputs that look normal to a human but are intentionally crafted to make neural networks behave in strange/unstable ways.

#### Approach

I designed a mathematical framework that allowed me to derive new algorithms suited for different computer vision tasks. These algorithms outperformed their counterparts in the task of fooling neural networks. The paper was published in the renowned journal "IEEE Transactions on Signal Processing".

Official link to the paper [here](https://ieeexplore.ieee.org/abstract/document/8846746). You can get the full paper for free with [this link](https://www.ti.rwth-aachen.de/publications/output.php?id=263&table=article&type=pdf).

#### Tech Stack

- **_TensorFlow_**: used to run compare different "attacks" on various deep neural networks and computer vision tasks.

**GET IN TOUCH** — Opens a new email to [me@emilio-balda.com](mailto:me@emilio-balda.com).

---

# About

> Desktop and tablet: a two-column layout. The accordion panel sits on the left. The About Me content sits on the right.

> Mobile: the About Me content appears first. The accordion panel appears below it.

## About Me

I learned how to keep up with the latest advances in AI during Ph.D. studies. Now, I'm a co-founding member of aiXbrain GmbH to turn these technologies into real software products.

**GET IN TOUCH**

- Icon: Email
- Action: Opens a new email to [me@emilio-balda.com](mailto:me@emilio-balda.com)

## About accordion

> Four top-level accordion groups. All groups start closed.

### Job History

#### Full Stack AI Developer

**aiXbrain GmbH**

_Nov 2019 - Present_

I develop Software-as-a-Service products for industrial monitoring, planning, scheduling problems, using artificial intelligence.

#### Researcher / PhD Student

**RWTH Aachen University**

_Feb 2017 - Oct 2019_

I worked as a Researcher PhD Candidate in the area of machine learning, with a focus on the generation and theoretical understanding of adversarial examples in deep neural networks.

### Education

#### PhD in Machine Learning

**RWTH Aachen University**

_2017 - 2019_

#### Master's degree in Telecommunications and Signal Processing

**Technische Universität Ilmenau**

_2014 - 2016_

#### Bachelor's degree in Telecommunications Engineering

**University of Navarra**

_2010 - 2014_

### Authored Books

> The current interface shows each cover as a linked image with the role below it. The titles below come from the page data but do not appear as visible text.

#### PhD Thesis

- Cover image: `/assets/emilio-balda-thesis-cover.webp`
- Visible role: _Author (PhD Thesis)_
- Link: [RWTH Aachen University thesis page](https://ti.rwth-aachen.de/diss/Emilio_Rafael_Balda)

#### Fundamentals of Data Analytics

- Cover image: [Amazon image](https://images-na.ssl-images-amazon.com/images/I/41XJPE3bpLL._SX313_BO1,204,203,200_.jpg)
- Visible role: _Co-Author_
- Link: [Amazon](https://www.amazon.de/dp/3030568334/ref=cm_sw_em_r_mt_dp_0X6N0V9V0YQYB4YH4RZ6)

#### Adversarial Examples in Deep Neural Networks: An Overview

- Cover image: [Springer image](https://media.springernature.com/w306/springer-static/cover-hires/book/978-3-030-31760-7)
- Visible role: _Co-Author of One Chapter_
- Link: [Springer chapter](https://link.springer.com/chapter/10.1007/978-3-030-31760-7_2)

### Tech Stack

> Five nested accordion groups. Each item appears with its logo and label.

#### Frontend

- Vue JS
- Typescript
- Vite
- Tailwind CSS

#### Backend

- Python
- FastAPI
- SQL Alchemy

#### Machine Learning

- TensorFlow
- Scikit Learn
- Pandas
- mlflow
- Luigi
- Plotly

#### Infrastructure

- GCloud
- Kubernetes
- Helm

#### DevOps

- Git
- DVC
- GitLab CI/CD
- PyTest
- PyPoetry

---

## Repeated interactions

### Get in Touch

The **GET IN TOUCH** button appears in these places:

- Home introduction
- Each of the four Portfolio modals
- About Me

Each button opens a new email to [me@emilio-balda.com](mailto:me@emilio-balda.com).

### Theme control

The header switch changes the full page between light and dark themes.

### Section navigation

The Home, Portfolio, and About controls scroll to page sections. They do not open separate pages.

---

## Page metadata and search copy

### Browser title

Emilio Balda - Full Stack Developer & Machine Learning Expert

### Meta description

Emilio Balda is a freelance Full Stack Developer and Machine Learning expert, specializing in web development and AI solutions. Based in Cyprus, offering professional development services worldwide.

### Keywords

Emilio Balda, Machine Learning, Web Development, Freelance, Full Stack Developer, AI Expert, Software Engineer

### Canonical URL

[https://emilio-balda.com](https://emilio-balda.com)

### Open Graph title

Emilio Balda - Full Stack Developer & Machine Learning Expert

### Open Graph description

Freelance web development and machine learning solutions by Emilio Balda. Expertise in full-stack development, AI integration, and modern web technologies.

### Twitter title

Emilio Balda - Full Stack Developer & ML Expert

### Twitter description

Freelance web development and machine learning solutions by Emilio Balda.
