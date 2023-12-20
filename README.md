

# Install

Clone the repository and open terminal in the cloned directory.

Here's commands for setting up Laravel back-end:
```sh
composer install
cp .env.example .env
php artisan key:generate
```

After configurating .env file run
```sh
php artisan migrate
```

Now we need to install everything for React front-end:
```sh
npm i
```

That's all, for front-end you will need to run Vite, with `npm run dev` and back-end with `php artisan serve` and you will be able to access React on **localhost:8000** ( default Laravel port )

**Happy Hacking !**

# Deploy

This is tutorial on how to deploy to a server subfolder, server I'm using is **apache2**

We need to start with compiling all of our JS and CSS code, by running
```sh
npm run build
```

All of our built JavaScript/CSS code now is stored in **Laravel_dir/public/build**, When we transfer our project files to the server. Let's assume, that we transfered files to directory **/var/www/html/** which would mean that our projects directory is **/var/www/html/project_name** and using apache2 server, we can access our Laravel project by going to the **public folder link**
