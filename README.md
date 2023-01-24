<h1 style="color: #107ad8; font-size: 40px; font-weight: bold; text-align:center; padding: 36px 16px;">
    Customer Management System
</h1>

<div style="padding: 12px 36px;">
    <h2>Description</h2>
    <p>
    This simple customer management system is created using Laravel + Inertia Vue JS. You can have your own account as <strong>administrator</strong> then you can manage
    customers, invoices, products and others.<br/>
    </p>
    <h2>Features</h2>
    <ol start="1">
        <li>Create & verify accounts</li>
        <li>Create & manage users</li>
        <li>Viwe <strong>customers</strong>, <strong>sales</strong> and <strong>orders</strong> analytics on dashboard page.</li>
        <li>View, edit and create invoices, brands, products and customers</li>
        <li>Manage roles & permissions and more...</li>
    </ol>
    <h2>Requirements</h2>
    <ol start="1">
        <li>PHP 8 or above</li>
        <li>MySQL 8</li>
        <li>A local server (<a href="https://www.apachefriends.org/download.html" target="_blank">XAMPP</a>, <a href="https://www.wampserver.com/en/" target="_blank">WAMPServer</a> or <a href="https://laragon.org/" target="_blank">Laragon</a>)</li>
        <li><a href="https://getcomposer.org/" target="_blank">Composer</a></li>
        <li><a href="https://nodejs.org/en/" target="_blank">NodeJS</a></li>
    </ol>
    <h2>Clone Repo</h2>
    <code>git clone https://github.com/haghanihakimi/crm</code>
    <h2>Installation</h2>
    <ol start="1">
        <li><code>composer install</code></li>
        <li><code>npm install</code></li>
        <li><code>cp .env.example .env</code></li>
        <li>Please make sure DB_DATABASE is set to "crm" in .env file AND you have created <code>crm</code> database on your local server</li>
        <li><code>php artisan key:generate</code></li>
        <li><code>php artisan migrate:fresh --seed</code></li>
        <li><code>php artisan db:seed --class=GeneralSeeder</code></li>
    </ol>
    <h3>User with ID number 1 is always admin.</h3>
    <h3>You <strong>cannot</strong> set anyone else as admin.</h3>
</div>
