import { crawl } from "./crawl";
import { ACCESS_TOKEN } from "./env";

// Fungsi untuk menghasilkan tanggal dalam format YYYY-MM-DD
function getFormattedDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Tanggal awal dan akhir dalam format YYYY-MM-DD
const startDate = new Date("2024-1-24");
const endDate = new Date("2024-1-26");
const keyword = "timnas";

// Fungsi untuk melakukan crawling pada tanggal tertentu
async function crawlForDate(startDate, endDate) {
  const formattedStartDate = getFormattedDate(startDate);
  const formattedEndDate = getFormattedDate(endDate);

  const config = {
    ACCESS_TOKEN,
    SEARCH_KEYWORDS: `${keyword} lang:id until:${formattedEndDate} since:${formattedStartDate}`,
    TARGET_TWEET_COUNT: 1500,
    OUTPUT_FILENAME: `${keyword}_${formattedStartDate}.csv`,
    DELAY_EACH_TWEET_SECONDS: 0.1,
    DELAY_EVERY_100_TWEETS_SECONDS: 5,
    SEARCH_TAB: "TOP",
  };

  try {
    await crawl(config);
  } catch (error) {
    console.error(`Error crawling for date ${formattedStartDate}: ${error}`);
    console.log(error);
  }
  
}

// Fungsi untuk menjalankan crawling pada rentang tanggal tertentu
async function crawlRange(startDate, endDate) {
  while (startDate <= endDate) {
    const nextDate = new Date(startDate);
    nextDate.setDate(nextDate.getDate() + 1);
    await crawlForDate(startDate, nextDate);
    startDate.setDate(startDate.getDate() + 1);
  }
}

// Mulai menjalankan crawling
crawlRange(startDate, endDate);
