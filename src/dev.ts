import { crawl } from "./crawl";
import { ACCESS_TOKEN } from "./env";

crawl({
  ACCESS_TOKEN: ACCESS_TOKEN,
  SEARCH_KEYWORDS: `gibran lang:id`,
  // TWEET_THREAD_URL: "https://twitter.com/pangeransiahaan/status/1690590234009112576",
  TARGET_TWEET_COUNT: 10,
  OUTPUT_FILENAME: "gibran.csv",
  DELAY_EACH_TWEET_SECONDS: 0.1,
  DELAY_EVERY_100_TWEETS_SECONDS: 0,
  SEARCH_TAB: "TOP",
  SEARCH_FROM_DATE: "01-11-2023",
  SEARCH_TO_DATE: "30-11-2023",
});
