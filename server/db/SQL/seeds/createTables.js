export const CREATE_TABLES_IN_DATABASE = `
    if not exists (select * from sysobjects where id = object_id(N'users') and sysstat & 0xf = 3)
    CREATE TABLE users(
        user_id [int] PRIMARY KEY,
        user_name [nvarchar](20) NOT NULL,
        user_avatar [varbinary](max) NULL
    );
    if not exists (select * from sysobjects where id = object_id(N'gifs') and sysstat & 0xf = 3)
    CREATE TABLE gifs(
        gif_id [nvarchar](40) PRIMARY KEY,
        user_id [int] NOT NULL,
        gif_title [nvarchar](20) NOT NULL,
        gif_description [nvarchar](50) NULL,
        gif_publicationdate [datetime] NULL,
        gif_src [varchar](max) NULL,
        CONSTRAINT fk_gifs_user_id
        FOREIGN KEY (user_id)
        REFERENCES users (user_id)
    )
    if not exists (select * from sysobjects where id = object_id(N'tags') and sysstat & 0xf = 3)
    CREATE TABLE tags(
        tag_title [nvarchar](20) PRIMARY KEY,
    )
    if not exists (select * from sysobjects where id = object_id(N'gifs_tags') and sysstat & 0xf = 3)
    CREATE TABLE gifs_tags(
        gif_id [nvarchar](40) NOT NULL,
        tag_title [nvarchar](20) NOT NULL,
        PRIMARY KEY (tag_title, gif_id),
        CONSTRAINT fk_gifs_tags
        FOREIGN KEY (gif_id)
        REFERENCES gifs (gif_id),
        CONSTRAINT fk_gifs_tags1
        FOREIGN KEY (tag_title)
        REFERENCES tags (tag_title)
)
`