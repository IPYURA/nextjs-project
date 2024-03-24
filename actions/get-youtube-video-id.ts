"use server";

const getYoutubeVideoId = async () => {
  const recentVideoJson = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCZ6GYhx-Hs7ogWr82WhCVTQ&key=${process.env.YOUTUBE_DATA_API_KEY}&maxResults=1&videoEmbeddable=true&type=video&order=date`
  ).then((res) => res.json());
  const popularVideoJson = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCZ6GYhx-Hs7ogWr82WhCVTQ&key=${process.env.YOUTUBE_DATA_API_KEY}&maxResults=1&videoEmbeddable=true&type=video&order=viewCount`
  ).then((res) => res.json());
    // console.log(recentVideoJson.error.errors);
    

  return {
    recentVideoId: recentVideoJson.items[0]?.id.videoId || null,
    popularVideoId: popularVideoJson.items[0]?.id.videoId || null,
  };
};

export default getYoutubeVideoId;
