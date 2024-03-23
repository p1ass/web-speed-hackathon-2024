DROP INDEX IF EXISTS `book_created_at_idx`;--> statement-breakpoint
CREATE INDEX `author_name_idx` ON `author` (`name`);--> statement-breakpoint
CREATE INDEX `episode_page_episode_id_idx` ON `episode_page` (`episode_id`,`page`);--> statement-breakpoint
CREATE INDEX `release_day_of_week_idx` ON `release` (`day_of_week`);--> statement-breakpoint
CREATE INDEX `user_email_idx` ON `user` (`email`);--> statement-breakpoint
CREATE INDEX `book_created_at_idx` ON `book` (`name`);
