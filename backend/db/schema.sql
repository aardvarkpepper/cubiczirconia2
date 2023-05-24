-- psql -U postgres -f db/schema.sql

-- IF already exists, drop it.
DROP DATABASE IF EXISTS cubic_zirconia_database;

-- Create database
CREATE DATABASE cubic_zirconia_database;

-- Connect to database
\c cubic_zirconia_database;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(40) NOT NULL,
    pswd VARCHAR(40) NOT NULL,
    failed_logins SMALLINT NOT NULL CHECK (user_failed_logins >= 0),
    last_failed_login DATE,
    date_of_birth DATE NOT NULL,
    account_create_date DATE NOT NULL,
    image_source VARCHAR(20) NOT NULL,
    image_local VARCHAR(80) NOT NULL,
    image_url VARCHAR(200) NOT NULL,
    subscription_type SMALLINT NOT NULL,
    access_level SMALLINT NOT NULL,
    default_theme VARCHAR(20) NOT NULL, 
    email VARCHAR(60) NOT NULL,
    quote VARCHAR (200),
    notepad TEXT
);

CREATE TABLE themes (
    id SERIAL PRIMARY KEY,
    named VARCHAR(40) NOT NULL,
    show_badges BOOLEAN NOT NULL,
    background_color VARCHAR(20) DEFAULT 'transparent',
    color VARCHAR(20) DEFAULT 'black',
    font_family VARCHAR(40) DEFAULT 'Arial, sans-serif',
    font_weight VARCHAR(20) DEFAULT 'normal',
    font_size VARCHAR(20) DEFAULT '14px',
    border_color VARCHAR(20) DEFAULT 'transparent',
    border_style VARCHAR(20) DEFAULT 'none',
    border_width VARCHAR(20) DEFAULT '0',
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE badges (
    badge_id SERIAL PRIMARY KEY,
    badge_name VARCHAR(40) NOT NULL,
    badge_description VARCHAR(120) NOT NULL,
    badge_image_local VARCHAR(80) NOT NULL
);

CREATE TABLE jas_users_badges (
    jas_user_badge_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    badge_id INT NOT NULL,
    jas_user_badge_display BOOLEAN NOT NULL,
    jas_user_badge_image_type VARCHAR(20) NOT NULL,
    jas_user_badge_image_url VARCHAR(80) NOT NULL,
    jas_user_badge_for VARCHAR(160) NOT NULL,
    jas_user_badge_date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (badge_id) REFERENCES badges(badge_id) ON UPDATE CASCADE ON DELETE CASCADE
);