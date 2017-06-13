Table 
	youtube_account
Columns
	id BIGSERIAL PRIMARY KEY NOT NULL,
	username VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL

Table 
	vimeo_account
Columns
	id BIGSERIAL PRIMARY KEY NOT NULL,
	username VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL

Table 
	dailymotion_account
Columns
	id BIGSERIAL PRIMARY KEY NOT NULL,
	username VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL

Table
	user_videos
Columns
	id PRIMARY KEY NOT NULL,
	videoname VARCHAR(255) NOT NULL,
	siteorigin VARCHAR(255) NOT NULL,

Table
	video_data
Columns
	userID FOREIGN KEY NOT NULL,
	timeposted INTEGER NOT NULL,
	category VARCHAR(255) NOT NULL,
	length INTEGER NOT NULL,