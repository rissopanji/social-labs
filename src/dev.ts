import { crawl } from "./crawl";
import { ACCESS_TOKEN } from "./env";

// Kata kunci pencarian yang mengandung tanggal (misalnya, "until:2023-12-02 since:2023-12-01")
const kataKunciPencarian = "until:2023-12-01 since:2023-11-30";

// Ekstrak tanggal dari kata kunci pencarian
const tanggalCrawl = kataKunciPencarian.match(/\d{4}-\d{2}-\d{2}/g)[0];

// Variabel untuk kata kunci (misalnya, "anies")
const kataKunci = "anies";


// Gabungkan variabel kata kunci dengan tanggal dalam nama file keluaran
const namaFileKeluaran = `${kataKunci}_${tanggalCrawl}.csv`;

crawl({
  ACCESS_TOKEN: ACCESS_TOKEN,
  SEARCH_KEYWORDS: `${kataKunci} lang:id ${kataKunciPencarian}`,
  TARGET_TWEET_COUNT: 15000,
  OUTPUT_FILENAME: namaFileKeluaran, // Gunakan nama file yang telah digabungkan
  DELAY_EACH_TWEET_SECONDS: 0.1,
  DELAY_EVERY_100_TWEETS_SECONDS: 0,
  SEARCH_TAB: "TOP",
});
