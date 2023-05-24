-- psql -U postgres -f db/seed.sql

\c cubic_zirconia_database;

INSERT INTO users 
(user_login_name, user_login_password, user_failed_logins, user_last_login, user_date_of_birth, user_account_create_date, user_username, user_image_type, user_image_local, user_image_url, user_subscription_type, user_access_level, user_email, user_quote, user_notepad)
VALUES
('guest_user', 'password', 0, '2023-01-01', '2023-01-01', '2023-01-01', 'Guest', 'local', '/images/guest.jpg', 'https://example.com/guest.jpg', 'Free', 1, 'noemail@notanemail.com', 'Logged in as guest.', 'Guest account settings may not be modified.  Have a nice day.'),
('bruce_wayne', 'batman123', 0, '2023-05-01', '1970-07-15', '2023-01-01', 'Bruce Wayne (Batman)', 'local', '/images/batman.jpg', 'https://example.com/bruce_wayne.jpg', 'Premium', 4, 'bruce@wayneindustries.com', 'I don''t believe in luck. I believe in preparation.', 'Gotham?  Got cheese?  Well then you got yourself a sandwich.'),
('han_solo', 'falcon456', 2, '2023-05-02', '1977-05-25', '2023-01-02', 'Han Solo (Star Wars)', 'local', '/images/hansolo.jpg', 'https://example.com/han_solo.jpg', 'Free', 2, 'han@moseisley.com', 'Never tell me the odds.', 'May the Force be with you!'),
('dirty_harry', 'make_my_day789', 1, '2023-05-03', '1971-12-23', '2023-01-03', 'Dirty Harry', 'local', '/images/dirtyharry.jpg', 'https://example.com/dirty_harry.jpg', 'Premium', 3, 'harry@precinct1.com', 'You''ve got to ask yourself one question: Do I feel lucky? Well, do ya, punk?', 'Go ahead, make my day.'),
('katniss_everdeen', 'mockingjay123', 0, '2023-05-04', '2008-09-14', '2023-01-04', 'Katniss Everdeen (The Hunger Games)', 'local', '/images/katniss.jpg', 'https://example.com/katniss_everdeen.jpg', 'Free', 2, 'katniss@district12.com', 'May the odds be ever in your favor.', 'I volunteer!'),
('forrest_gump', 'run_forrest_run', 0, '2023-05-05', '1951-06-06', '2023-01-05', 'Forrest Gump', 'local', '/images/forrest.jpg', 'https://example.com/forrest_gump.jpg', 'Premium', 3, 'forrest@greenbow.com', 'I feel lucky. Luck is everything.', 'Life is like a box of chocolates.'),
('miranda_priestly', 'fashionqueen789', 0, '2023-05-06', '2003-06-30', '2023-01-06', 'Miranda Priestly (The Devil Wears Prada)', 'local', '/images/miranda.jpg', 'https://example.com/miranda_priestly.jpg', 'Free', 2, 'miranda@runway.com', 'Sometimes the universe just conspires to give you what you want.', 'Fashion is my passion.'),
('neo', 'matrix123', 0, '2023-05-07', '1999-03-31', '2023-01-07', 'Neo (The Matrix)', 'local', '/images/neo.jpg', 'https://example.com/neo.jpg', 'Premium', 3, 'neo@thematrix.com', 'Destiny is not something we''ve invented, it''s something we''ve found.', '''Do you believe in fate, Neo?''  ''No.''  ''Why not?''  ''I don''t like the idea that I''m not in control of my life.'''),
('darth_vader', 'empire456', 0, '2023-05-08', '7-05-25', '2023-01-08', 'Darth Vader (Star Wars)', 'local', '/images/darthvader.jpg', 'https://example.com/darth_vader.jpg', 'Free', 2, 'vader@empire.com', 'I find your lack of faith disturbing.', 'When I left you, I was but the learner.  Now I am the master.');

INSERT INTO themes 
(theme_name, theme_show_badges, background_color, color, font_family, font_weight, font_size, border_color, border_style, border_width, user_id)
VALUES
('Spring Theme', true, 'MintCream', 'DarkGreen', 'Verdana, sans-serif', 'normal', '16px', 'LimeGreen', 'solid', '1px', 2),
('Summer Theme', true, 'SkyBlue', 'DarkBlue', 'Arial, sans-serif', 'bold', '18px', 'DodgerBlue', 'solid', '2px', 2),
('Autumn Theme', false, 'PapayaWhip', 'DarkOrange', 'Georgia, serif', 'normal', '16px', 'SaddleBrown', 'solid', '2px', 2),
('Winter Theme', false, 'AliceBlue', 'MidnightBlue', 'Helvetica, Arial, sans-serif', 'normal', '14px', 'SteelBlue', 'solid', '1px', 2),
('Sunset Theme', true, 'PeachPuff', 'DarkRed', 'Courier New, monospace', 'bold', '14px', 'Crimson', 'solid', '1px', 2),
('Ocean Theme', true, 'PowderBlue', 'DarkSlateBlue', 'Arial, sans-serif', 'normal', '18px', 'RoyalBlue', 'dotted', '2px', 2),
('Blossom Theme', true, 'LavenderBlush', 'MediumVioletRed', 'Verdana, sans-serif', 'normal', '14px', 'HotPink', 'solid', '1px', 2),
('Harvest Theme', true, 'Linen', 'Sienna', 'Georgia, serif', 'bold', '16px', 'DarkGoldenRod', 'solid', '2px', 3),
('Frost Theme', true, 'Azure', 'DarkCyan', 'Helvetica, Arial, sans-serif', 'normal', '16px', 'LightCyan', 'solid', '1px', 3),
('Rainforest Theme', true, 'Honeydew', 'ForestGreen', 'Verdana, sans-serif', 'bold', '18px', 'MediumSeaGreen', 'solid', '2px', 4),
('Sunny Theme', true, 'PaleGoldenRod', 'DarkOliveGreen', 'Georgia, serif', 'normal', '16px', 'OliveDrab', 'solid', '2px', 4),
('Snowfall Theme', true, 'WhiteSmoke', 'MidnightBlue', 'Arial, sans-serif', 'bold', '14px', 'LightSteelBlue', 'solid', '1px', 4);

INSERT INTO badges 
(badge_name, badge_description, badge_image_local)
VALUES
('Courage Badge', 'Courage!', '/images/courage_badge.png'),
('Sonic Badge', 'Gotta go fast!', '/images/sonic_badge.jpg'),
('Wile E. Coyote Badge', 'I am a genius by trade.', '/images/coyote_badge.png'),
('Luffy Badge', 'Aren''t we friends?', '/images/luffy_badge.jpg');

INSERT INTO jas_users_badges 
(user_id, badge_id, jas_user_badge_display, jas_user_badge_image_type, jas_user_badge_image_url, jas_user_badge_for, jas_user_badge_date)
VALUES
(1, 1, true, 'local', 'https://example.com/courage_badge.png', 'Persistence 2020 Campaign', '2023-05-01'),
(1, 1, false, 'local', 'https://example.com/courage_badge.png', 'Persistence 2020 Tournament Final Four', '2023-05-02'),
(1, 1, true, 'url', 'https://example.com/courage_badge.png', 'Persistence 2022 Invitational', '2023-05-03'),
(1, 3, true, 'local', 'https://example.com/coyote_badge.png', 'Calculated Odds 2023 All Stars', '2023-05-04'),
(2, 4, true, 'local', 'https://example.com/luffy_badge.jpg', '20 Friends 2023 January 14', '2023-05-05'),
(3, 1, true, 'local', 'https://example.com/courage_badge.png', 'Persistence 2022 Campaign', '2023-05-06'),
(3, 2, true, 'local', 'https://example.com/sonic_badge.jpg', 'Fast Game 2023 January 12', '2023-05-07'),
(3, 3, true, 'local', 'https://example.com/coyote_badge.png', 'Calculated Odds', '2023-05-08'),
(4, 1, true, 'local', 'https://example.com/courage_badge.png', 'Persistence', '2023-05-09'),
(4, 4, true, 'local', 'https://example.com/luffy_badge.jpg', '20 Friends', '2023-05-10'),
(5, 2, true, 'local', 'https://example.com/sonic_badge.jpg', 'Fast Game', '2023-05-11'),
(5, 3, true, 'local', 'https://example.com/coyote_badge.png', 'Calculated Odds', '2023-05-12'),
(6, 1, true, 'local', 'https://example.com/courage_badge.png', 'Persistence', '2023-05-13');