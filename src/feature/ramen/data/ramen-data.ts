import type { RamenShop } from "../types/ramen-shop";

export const RAMEN_SHOPS: RamenShop[] = [
  // テンプレート
  // {
  //   name: "",
  //   visitDate: "",
  //   imageUrl: "ramen/.webp",
  //   googleMapsUrl: "",
  //   // instagramUrl: "",
  //   taberoguUrl: "",
  //   notes: "",
  //   tags: [""],
  // },
  {
    name: "無敵家",
    visitDate: "2025-03-12",
    imageUrl: "ramen/無敵家.webp",
    googleMapsUrl: "https://maps.app.goo.gl/wcUDVq2mRwqg4TDN6",
    // instagramUrl: "",
    taberoguUrl: "https://tabelog.com/tokyo/A1305/A130501/13003927/",
    notes:
      "チャーシューがすごかった。平日14時くらいの雨の日でも20分くらい並んだ。",
    tags: ["ラーメン"],
  },
  {
    name: "東京油組総本店 西新宿組",
    visitDate: "2025-03-11",
    imageUrl: "ramen/東京油組総本店 西新宿組.webp",
    googleMapsUrl: "https://maps.app.goo.gl/Q24g1EoSNPB4rU7XA",
    // instagramUrl: "",
    taberoguUrl: "https://tabelog.com/tokyo/A1304/A130401/13167280/",
    notes: "大盛り無料で腹一杯食べれた。しかも安い。",
    tags: ["油そば"],
  },
  {
    name: "麺屋NOBUNAGA",
    visitDate: "2025-03-08",
    imageUrl: "ramen/麺屋NOBUNAGA.webp",
    googleMapsUrl: "https://maps.app.goo.gl/2r4penh6WmT9FLG39",
    // instagramUrl: "",
    taberoguUrl: "https://tabelog.com/tokyo/A1302/A130202/13304145/",
    notes:
      "多分自分以外全員観光客だった。Googleマップの評価が見たことないレベルで高い。",
    tags: ["ラーメン"],
  },
  {
    name: "生パスタ専門店 麦と卵 新宿西口店",
    visitDate: "2025-02-25",
    imageUrl: "ramen/生パスタ専門店 麦と卵 新宿西口店.webp",
    googleMapsUrl: "https://maps.app.goo.gl/6QJERVWtCexgE4fP9",
    // instagramUrl: "",
    taberoguUrl: "https://tabelog.com/tokyo/A1304/A130401/13264682/",
    notes: "お店が中がオシャレだった。大盛りにしてお腹いっぱい食べた。",
    tags: ["パスタ"],
  },
  {
    name: "十味や",
    visitDate: "2025-02-21",
    imageUrl: "ramen/十味や.webp",
    googleMapsUrl: "https://maps.app.goo.gl/FUCPWjcwfDGSZPnG7",
    // instagramUrl: "",
    taberoguUrl: "https://tabelog.com/tokyo/A1304/A130401/13011949/",
    notes: "とおみやって読むらしい。",
    tags: ["ラーメン"],
  },
].map((shop, index) => ({ ...shop, id: (index + 1).toString() }));
