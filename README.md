# Setup Guide

Follow these steps to set up the Laravel application on your local machine.

---


# 1. SETTING UP THE BACKEND

## Prerequisites

- **PHP**: Version 8.0 or later  
- **Composer**: Dependency manager for PHP   

---

## Setup Instructions

### 1. Clone the Repository
Clone the repository to your local machine:

```bash
git clone https://github.com/codexcancerion/assistify-laravel.git
```
Navigate into the project folder:
```bash
cd assistify-laravel
```

### 2. Install Dependencies
Install PHP dependencies using Composer:
```bash
composer install
```

### 3. Set Up Environment File
Copy the .env.example file to .env:

```bash
cp .env.example .env
```

If it does not work, just make a copy of the `.env.example` and rename it to `.env` on the root directory

> Note: The SQLite database is already included, so you don't need to configure the database unless specified.

### 4. Generate Application Key
Run the following command to generate the application key:

```bash
php artisan key:generate
```

### 5. Start the Development Server
Serve the application locally:

```bash
php artisan serve
```
Visit the app in your browser at http://127.0.0.1:8000. The frontend of the app was serparate so you might only see `Hello World` on the screen. Setting up the frontend is on Step 2.

### Additional Notes

If you encounter any issues, clear the Laravel cache:

```bash
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear
```


--- 

# 2. SETTING UP THE FRONTEND

The frontend repository is located at https://github.com/codexcancerion/assistify-front


## Prerequisites

- **VSCode**: The IDE wich will enable us to run the code on live server.
- **Live Server Extension**: Any Live Server Extension on VSCode that will enable us to run the entire frontend   

---

## Setup Instructions

### 1. Clone the Repository
Clone the repository to your local machine, ensure not to put it on the directory of the backend.

```bash
git clone https://github.com/codexcancerion/assistify-front.git
```
Navigate into the project folder:
```bash
cd assistify-front
```

Open it on VSCode:
```bash
code .
```

### 2. Run Live Server
Run Live Server on VSCode and open the web endpoint like http://127.0.0.1:5501/

### 3. Check Homepage
If you see the homepage of the app, the set up was successful.

---
# TESTING


## Sample Authentication Accounts
| Account Type | Email | Password |
| ----------- | ----------- | ----------- |
| Working Scholar | carol.davis@example.com | 1234 |
| Supervisor | john.doe@example.com | 1234 |
| OSAS | osa@example.com | 1234 |