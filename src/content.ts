import { createContext, useContext, createElement } from "react";
import type { ReactNode } from "react";

export interface BlocksMeta {
  order: string[];
  hidden: string[];
  media: Record<string, any[]>;
  custom: Record<string, { title: string; body: string }>;
}

export interface SkillCard {
  n: string;
  title: string;
  desc: string;
  warn?: string;
  gif?: string;
  youtubeId?: string;
  aspectRatio?: string;
}
export interface Stage { n: string; title: string; sub?: string; desc?: string; gif?: string }
export interface ValueLine { label: string; price: string }

export interface PageContent {
  _v?: number;
  price: string;
  value: string;

  heroBadge: string;
  heroHeadline1: string;
  heroHeadline2: string;
  heroAccentLine: string;
  heroSub: string;
  heroCta: string;
  heroSubPrice?: string;
  heroVideoYoutubeId?: string;
  heroPoem?: string[];

  painLabel: string;
  painHeading: string;
  painQuote: string;
  painSub: string;
  pains: string[];
  painConclusion?: string;

  // ── Attention (3 cách gây chú ý) ──
  attentionLabel: string;
  attentionHeading: string;
  attentionPara: string;
  attentionItems: { icon: string; title: string; desc: string }[];

  // ── Rule 7-11-4 ──
  ruleLabel: string;
  ruleHeading: string;
  rulePara: string;
  ruleItems: { fail: string; why: string }[];
  ruleConclusion: string;

  cycleLabel: string;
  cycleHeading: string;
  cyclePara: string;
  cycleItems: { fail: string; why: string }[];
  
  discoveryLabel: string;
  discoveryHeading: string;
  discoverySub: string;
  discoveryItems: { title: string; desc: string }[];

  solutionLabel: string;
  solutionHeading: string;
  solutionSub: string;
  solutionItems: string[];

  skillsLabel: string;
  skillsHeading: string;
  skillCards: SkillCard[];

  midCtaHeading: string;
  midCtaSub: string;
  midCtaBtn: string;

  baLabel: string;
  baHeading: string;
  baSub: string;
  baBeforeMedia?: string;
  baAfterMedia?: string;
  beforeLabel: string;
  afterLabel: string;
  beforeItems: string[];
  afterItems: string[];

  roadmapLabel: string;
  roadmapHeading: string;
  roadmapPreviewHeading?: string;
  roadmapPreviewDesc?: string;
  roadmapIframeUrl?: string;
  roadmapChaptersHeading?: string;
  stages: Stage[];

  instructorLabel: string;
  instructorHeading: string;
  instructorInitials: string;
  instructorName: string;
  instructorTitle: string;
  instructorBio: string[];
  instructorInsight?: string;

  urgencyBar: string;
  ctaLabel: string;
  ctaHeading: string;
  ctaSub: string;
  countdownLabel: string;
  valueStackTitle: string;
  valueStack: ValueLine[];
  guarantee: string;

  footerBrand: string;
  footerDot: string;
  footerTagline: string;
  footerLinks: string[];
  bonusLabel: string;
  bonusHeading: string;
  bonusSub: string;
  bonusItems: { id: string; title: string; desc: string; audioDemo?: string }[];

  blocksMeta: BlocksMeta;
}

const CONTENT_SCHEMA_VERSION = 7;

export const DEFAULT_CONTENT: PageContent = {
  _v: CONTENT_SCHEMA_VERSION,
  price: "149.000",
  value: "799.000",

  // ── Hero ──
  heroBadge: "Dành cho người muốn kể chuyện bằng video mà không cần lộ mặt",
  heroHeadline1: "Biến Câu Chuyện Của Bạn",
  heroHeadline2: "Thành thước phim hoạt hình Ghibli\nnghệ thuật mà không cần lộ mặt.",
  heroPoem: [
    "Chẳng cần lộ mặt trước quay,",
    "Ghibli AI vẽ, đắp xây chuyện mình."
  ],
  heroAccentLine: "Thứ tạo ra video hoạt hình triệu view không phải kỹ năng vẽ hay phần mềm đắt tiền.",
  heroSub: "Phần lớn người muốn làm video kể chuyện không kém về ý tưởng. Họ kẹt vì sợ camera, vì nhân vật AI bị lệch mặt mỗi cảnh, và vì quy trình AI quá rối rắm. Trợ lý GIBI AI giải quyết đúng ba thứ đó.",
  heroCta: "SỞ HỮU TRỢ LÝ GIBI AI NGAY",
  heroVideoYoutubeId: "YOUR_HERO_VIDEO_ID",
  heroSubPrice: "(Trọn bộ Extension + Video hướng dẫn & Bộ Prompt + 5 Quà tặng. Truy cập trọn đời)",

  // ── Pain (Nỗi đau) ──
  painLabel: "DẤU HIỆU NHẬN BIẾT",
  painHeading: "Bạn có đang viết những kịch bản rất hay... nhưng chỉ để chúng nằm lại trên giấy?",
  painQuote: "Tôi có những bài học xương máu muốn chia sẻ. Nhưng cứ nhìn vào chấm đỏ của camera là mặt đơ cứng, não trống rỗng, nói lắp bắp...",
  painSub: "Là một người hướng nội, bạn khát khao dùng video để tạo sự tin tưởng. Nhưng mỗi lần bật máy quay lên là một cuộc chiến:",
  pains: [
    "❌ Lỗi lệch mặt nhân vật (Facial Drift): Cảnh đầu tiên là bạn, sang cảnh thứ hai đã biến thành người lạ hoắc. Khuôn mặt biến đổi liên tục khiến video trông cực kỳ \"giả trân\".",
    "❌ Quy trình AI \"rối não\": Mờ mắt vì phải copy-paste hàng chục câu lệnh tiếng Anh qua lại giữa chat AI, web tạo ảnh, phần mềm tạo video rồi lại đưa vào CapCut.",
    "❌ Giọng đọc Voiceover ngập ngừng: Vừa phải cố nhớ kịch bản vừa ghi âm khiến giọng đọc bị ngắt quãng, thiếu tự nhiên."
  ],
  painConclusion: "Chi phí thuê ngoài vẽ storyboard hoạt hình 2D Ghibli: 5 - 10 triệu đồng cho mỗi phút phim. Một ngân sách không tưởng.",

  // ── Attention ──
  attentionLabel: "BA RÀO CẢN LỚN NHẤT",
  attentionHeading: "Ba thứ đang cản bạn kể chuyện bằng video",
  attentionPara: "Dù ý tưởng có hay đến mấy, ba rào cản sau đây sẽ khiến bạn mãi không bấm nút quay:",
  attentionItems: [
    {
      icon: "✦",
      title: "Sợ camera & ngại lộ diện",
      desc: "Tim đập chân run, xóa đi quay lại 20 lần vẫn thấy giả trân. Bạn muốn giữ sự riêng tư nhưng vẫn cần video để xây dựng uy tín."
    },
    {
      icon: "✦",
      title: "AI tạo ảnh bị \"lệch mặt\" liên tục",
      desc: "Dùng AI miễn phí, mỗi cảnh ra một khuôn mặt khác nhau. Người xem không nhận ra đó là bạn, mất hết niềm tin vào thương hiệu."
    },
    {
      icon: "✦",
      title: "Quy trình quá phức tạp",
      desc: "Copy-paste hàng chục câu lệnh tiếng Anh, nhảy qua lại giữa 4-5 công cụ khác nhau. Mất cả đêm vẫn không ra được một video hoàn chỉnh."
    }
  ],

  // ── Rule ──
  ruleLabel: "SỰ THẬT VỀ VIDEO KỂ CHUYỆN",
  ruleHeading: "Vì sao video hoạt hình cá nhân hóa tạo sự tin tưởng mạnh hơn?",
  rulePara: "85% người xem sẵn sàng tin tưởng và xem hết một video kể chuyện bằng hoạt hình CÁ NHÂN HÓA, hơn là video ghép ảnh mạng vô hồn.",
  ruleItems: [
    {
      fail: "Khuôn mặt đồng nhất là chìa khóa của lòng tin",
      why: "Nhân vật phải giữ nguyên nét mặt xuyên suốt bộ phim thì người xem mới nhận diện được thương hiệu cá nhân của bạn."
    },
    {
      fail: "Hoạt hình Ghibli khơi gợi cảm xúc sâu sắc",
      why: "Phong cách nghệ thuật ấm áp, dễ dàng kết nối với người nghe hơn so với video ghép ảnh stock lạnh lẽo."
    },
    {
      fail: "Quy trình 1-Click tiết kiệm 90% thời gian",
      why: "Thay vì mất 4-5 tiếng thủ công, Trợ lý GIBI AI tự động hóa toàn bộ chỉ trong 30 phút."
    }
  ],
  ruleConclusion: "Đừng để nỗi sợ camera cản trở sự nghiệp xây dựng thương hiệu cá nhân của bạn.",

  // ── Cycle ──
  cycleLabel: "VÒNG LẶP THỬ SAI",
  cycleHeading: "Sự mệt mỏi khi cứ thử rồi lại thất bại...",
  cyclePara: "Bạn đã thử mọi lời khuyên trên mạng, và đây là kết quả:",
  cycleItems: [
    { fail: "Cố ép bản thân nói trước ống kính", why: "Video nhận về vô cùng gượng gạo, và bạn nhanh chóng xóa đi vì quá áp lực." },
    { fail: "Sử dụng các web AI tạo ảnh miễn phí đại trà", why: "Bị lệch mặt nhân vật, bối cảnh méo mó không nhất quán, làm giảm uy tín thương hiệu." },
    { fail: "Mua các khóa học dựng phim cơ bản", why: "Chỉ dạy cắt ghép khô khan, không dạy cách kết hợp nhịp điệu kể chuyện bằng hình ảnh anime." },
    { fail: "Dùng AI viết kịch bản tự động", why: "Nội dung sáo rỗng, rập khuôn và không chạm được đến cảm xúc của khách hàng." }
  ],

  // ── Discovery ──
  discoveryLabel: "GIẢI PHÁP ĐỘT PHÁ",
  discoveryHeading: "Trợ lý AI chạy ngầm bên góc phải màn hình, tự động hóa mọi thứ.",
  discoverySub: "Bằng việc cài đặt một Trợ lý AI siêu nhẹ ngay trên trình duyệt Chrome, hệ thống này giúp bạn:",
  discoveryItems: [
    {
      title: "Khóa mặt nhân vật giống bạn 95%",
      desc: "Đóng băng khuôn mặt thật của bạn thành nét vẽ Ghibli, giữ đồng nhất 100% qua mọi cảnh phim. Không bao giờ bị lệch mặt nhân vật nữa."
    },
    {
      title: "Quét bối cảnh thật thành Anime 1-Click",
      desc: "Chụp ảnh bạn đang mặc đồ, ngồi trong bối cảnh thật. AI tự bóc tách trang phục, góc phòng và bối cảnh để đưa vào phim hoạt hình Ghibli của bạn."
    }
  ],

  // ── Solution ──
  solutionLabel: "HỆ THỐNG GIBI AI STUDIO",
  solutionHeading: "Đừng cố làm thủ công. Hãy dùng Trợ lý tự động hóa.",
  solutionSub: "Đây là 3 năng lực cốt lõi mà Trợ lý GIBI trang bị cho bạn (điều mà các công cụ AI thông thường không hỗ trợ):",
  solutionItems: [
    "❌ Nhân vật AI lệch mặt ➞ ✅ Khóa mặt bất biến: Mã hóa khuôn mặt thật thành nét vẽ anime Ghibli 2D, đồng nhất 100% qua mọi phân cảnh.",
    "❌ Kịch bản rời rạc ➞ ✅ Storyboard 16 khung hình (Lưới 4x4): Phân cảnh chặt chẽ, video có nhịp điệu điện ảnh hấp dẫn.",
    "❌ Video đơ cứng ➞ ✅ Đạo diễn chuyển động Veo 3 & Hậu kỳ CapCut: Biến ảnh tĩnh thành phim hoạt hình sống động với âm thanh cảm xúc."
  ],

  // ── Skills ──
  skillsLabel: "3 TÍNH NĂNG CỐT LÕI CỦA TRỢ LÝ GIBI",
  skillsHeading: "Ba công nghệ được hệ thống hóa để bạn áp dụng ngay:",
  skillCards: [
    { n: "01", title: "Khóa Mặt Nhân Vật Giống Bạn 95%", desc: "AI phân tích cấu trúc khuôn mặt và kiểu tóc để đóng băng khuôn mặt thật thành nét vẽ Ghibli độc bản. Nhân vật giữ nguyên nét mặt đồng nhất từ cận cảnh đến toàn cảnh." },
    { n: "02", title: "Tự Động Phân Cảnh Phim (Lưới 16 Khung Hình)", desc: "AI tự động chia kịch bản thành 16 phân cảnh điện ảnh chặt chẽ, bóc tách thời lượng lời thoại khớp từng khung hình — giúp phim có nhịp điệu lôi cuốn." },
    { n: "03", title: "Cầu Nối Tự Động 1-Click Sang Veo 3", desc: "Tự động chuyển toàn bộ câu lệnh tạo video và hình ảnh sang công cụ AI Veo 3 chỉ với 1-Click. Giúp bạn tạo ra các thước phim chuyển động mượt mà, tự nhiên." }
  ],

  // ── Mid CTA ──
  midCtaHeading: "Trải nghiệm cảm giác tự tay tạo ra thước phim hoạt hình Ghibli đầu tiên.",
  midCtaSub: "Đầu tư một lần, sở hữu trọn bộ Trợ lý AI + Video hướng dẫn & Bộ Prompt + Tài nguyên âm thanh. Truy cập trọn đời.",
  midCtaBtn: "Cài Đặt Trợ Lý GIBI Ngay",

  // ── Before & After ──
  baLabel: "SỰ THAY ĐỔI VƯỢT TRỘI",
  baHeading: "Sự khác biệt khi có Trợ lý GIBI AI đồng hành:",
  baSub: "",
  baBeforeMedia: "",
  baAfterMedia: "",
  beforeLabel: "Trước khi có GIBI",
  afterLabel: "Sau khi có GIBI",
  beforeItems: [
    "Bị camera-shy, ngại lộ mặt nên bỏ lỡ cơ hội thương hiệu",
    "Tạo ảnh AI bị lệch mặt, méo hình giữa các cảnh",
    "Quy trình thủ công rườm rà, mất 4-5 tiếng mới xong",
    "Video đơ cứng không có chuyển cảnh tự nhiên",
    "Âm thanh rời rạc, không có nhạc nền phù hợp"
  ],
  afterItems: [
    "Tự tin ra hàng loạt video Ghibli mà không cần lộ diện",
    "Khuôn mặt nhân vật đồng nhất 100% mọi phân cảnh",
    "Quy trình 1-Click tự động, hoàn thành trong 30 phút",
    "Video chuyển động mượt mà qua Google Flow Veo 3",
    "Âm thanh Ghibli hòa quyện, giữ chân người xem tuyệt đỉnh"
  ],

  // ── Roadmap ──
  roadmapLabel: "LỘ TRÌNH THỰC CHIẾN 7 NGÀY",
  roadmapHeading: "Bên trong bộ sản phẩm có gì?",
  roadmapPreviewHeading: "Xem trước video hướng dẫn cài đặt Extension",
  roadmapPreviewDesc: "Đây là video thực tế hướng dẫn bạn cài đặt Trợ lý GIBI AI lên Chrome chỉ trong 3 bước — trực quan, dễ hiểu, ai cũng làm được.",
  roadmapIframeUrl: "https://www.youtube.com/embed/YOUR_TUTORIAL_VIDEO_ID?rel=0&modestbranding=1",
  roadmapChaptersHeading: "Lộ trình chinh phục video hoạt hình AI của bạn:",
  stages: [
    { n: "[1]", title: "Tạo Nhân Vật Hoạt Hình Khóa Mặt Giống Bạn 95%", desc: "AI phân tích đường nét khuôn mặt và kiểu tóc của bạn để tạo ra một nhân vật hoạt hình Ghibli độc bản — giữ nguyên nét mặt giống bạn qua mọi phân cảnh.", sub: "Ngày 1 — Sở hữu nhân vật Ghibli độc bản" },
    { n: "[2]", title: "Tự Động Phân Cảnh & Lập Kịch Bản Phim", desc: "AI tự phân chia câu chuyện của bạn thành từng cảnh phim chi tiết, khớp từng lời thoại và thời lượng — giúp bộ phim có nhịp điệu cuốn hút như phim điện ảnh.", sub: "Ngày 2 — Kịch bản & phân cảnh hoàn chỉnh" },
    { n: "[3]", title: "Biến Bối Cảnh Thật Thành Phim Hoạt Hình", desc: "Chụp ảnh đời thực của bạn (trang phục, góc làm việc, không gian sống). AI tự động chuyển hóa thành phim hoạt hình Ghibli — nơi nhân vật chính là chính bạn và bối cảnh hoàn toàn từ cuộc sống thực của bạn.", sub: "Ngày 3-4 — Cá nhân hóa nhân vật & bối cảnh thực" },
    { n: "[4]", title: "Biến Ảnh Tĩnh Thành Video Chuyển Động Sống Động", desc: "Trợ lý AI tự động trích xuất câu lệnh và chuyển sang công cụ tạo video Veo 3 chỉ với 1-Click. Biến các bức ảnh Ghibli tĩnh thành những thước phim hoạt hình mượt mà, chuyển động tự nhiên.", sub: "Ngày 5-6 — Tạo chuyển động mượt mà" },
    { n: "[5]", title: "Dựng Phim CapCut & Ghép Âm Thanh Ghibli Cảm Xúc", desc: "Hướng dẫn chi tiết từng bước cắt ghép phim trên CapCut (PC & Điện thoại), tự động tạo phụ đề và lồng ghép âm thanh Ghibli giúp video chạm đến cảm xúc người xem.", sub: "Ngày 7 — Phim hoàn chỉnh, sẵn sàng xuất bản" }
  ],

  // ── Instructor ──
  instructorLabel: "NGƯỜI ĐỒNG HÀNH",
  instructorHeading: "Người đồng hành cùng bạn\ntrên hành trình chinh phục AI",
  instructorInitials: "NĐV",
  instructorName: "Nguyễn Đức Việt",
  instructorTitle: "Chuyên gia đào tạo làm phim, thiết kế đồ họa & Founder FEDU Academy (video.fedu.vn)",
  instructorBio: [
    "Với hơn 10 năm kinh nghiệm giảng dạy Multimedia trực tuyến và hơn 50.000 học viên trên toàn Việt Nam, mình hiểu rất rõ những rào cản kỹ thuật, sự hoang mang vì rối loạn công cụ và đặc biệt là nỗi sợ camera của người hướng nội. Triết lý của mình là: Không lý thuyết suông — Chỉ có thực hành và ra sản phẩm ngay lập tức. Với GIBI AI Studio, mình đã biến mọi sự phức tạp thành những nút bấm 1-Click dành riêng cho bạn!"
  ],

  // ── Bonus ──
  bonusLabel: "QUÀ TẶNG ĐI KÈM KHÔNG THỂ BỎ QUA",
  bonusHeading: "Tặng kèm bộ \"vũ khí\" thúc đẩy kết quả trị giá 650.000đ",
  bonusSub: "Chỉ dành cho những ai đăng ký trong đợt này — không bán riêng lẻ",
  bonusItems: [
    {
      id: "01",
      title: "Thư Viện Âm Thanh Hoạt Hình Ghibli Độc Quyền",
      desc: "Video AI tĩnh lặng, vô hồn? Kho hiệu ứng chất lượng cao (tiếng mưa rào, piano sâu lắng, tiếng lật sách, gió rì rào...) chỉ cần kéo thả vào CapCut, video của bạn lập tức chạm đáy cảm xúc người xem."
    },
    {
      id: "02",
      title: "Bộ Video Hướng Dẫn Dựng Phim Ghibli Bằng CapCut",
      desc: "Lóng ngóng không biết cắt ghép? Hướng dẫn cầm tay chỉ việc làm chủ CapCut trên cả PC & Mobile. Sử dụng các công cụ AI miễn phí của Gemini để tạo phim hoạt hình và biến kho ảnh tĩnh thành video hoàn chỉnh chỉ trong 15 phút."
    },
    {
      id: "03",
      title: "Bộ 50 Mẫu Kịch Bản Kể Chuyện Thu Hút Nhất",
      desc: "Ngồi hàng giờ bí ý tưởng? Các mẫu kịch bản điền vào chỗ trống chuyên về kể câu chuyện hành trình cá nhân. Bỏ qua giai đoạn ngồi cắn bút, viết kịch bản chạm đến người nghe chỉ trong 5 phút."
    },
    {
      id: "04",
      title: "Bản Đồ Logic Quy Trình Dựng Video AI",
      desc: "Sơ đồ trực quan hướng dẫn chính xác loại dữ liệu cần cung cấp (ảnh thật, văn bản, âm thanh) và công cụ AI tương ứng cho từng bước (Gemini, GIBI Extension, Veo 3, CapCut). Giúp bạn làm chủ quy trình dựng video AI hiệu quả gấp 3 lần."
    },
    {
      id: "05",
      title: "Quyền Tham Gia Cộng Đồng Học Viên Trên Skool",
      desc: "Tham gia nhóm kín trên Skool để xem video hướng dẫn, hỏi đáp thắc mắc, giao lưu cùng mọi người và nhận sự hỗ trợ trực tiếp từ tác giả Viet Mac trong quá trình thực hành."
    }
  ],

  // ── CTA ──
  urgencyBar: "⚠ ĐẶC QUYỀN ĐĂNG KÝ HÔM NAY — CHỈ CÒN 149.000 VNĐ",
  ctaLabel: "// BƯỚC CUỐI CÙNG",
  ctaHeading: "Hãy để Trợ lý GIBI đồng hành cùng bạn ngay hôm nay.",
  ctaSub: "Sở hữu trọn bộ Chrome Extension + Video hướng dẫn & Bộ Prompt chuẩn hóa + 5 Quà tặng độc quyền — chỉ với mức phí 149.000đ. Hiểu cách tạo video AI hiệu quả ngay hôm nay.",
  countdownLabel: "⏳ Ưu đãi kết thúc sau:",
  valueStackTitle: "TỔNG GIÁ TRỊ BẠN NHẬN ĐƯỢC:",
  valueStack: [
    { label: "Trợ lý GIBI AI Studio (Chrome Extension)", price: "399.000 VNĐ" },
    { label: "Bộ Video Hướng Dẫn & Bộ Prompt AI Chuẩn Hóa", price: "350.000 VNĐ" }
  ],
  guarantee: "Cam kết đồng hành: Bất kể bạn gặp khó khăn nào — từ cài Extension, khóa mặt AI đến dựng CapCut — nhắn Zalo mình sẽ gỡ rối 1-1 cho bạn.",

  // ── Footer ──
  footerBrand: "GIBI",
  footerDot: ".",
  footerTagline: "\"Kể chuyện đâu cần lộ diện,\nGhibli AI vẽ, tạo nên phim hay.\"",
  footerLinks: [],
  footerCopyright: "COPYRIGHT 2025 | GIBI AI STUDIO — FEDU ACADEMY",

  blocksMeta: {
    order: ["hero", "pain", "cycle", "discovery", "solution", "skills", "midCta", "before-after", "roadmap", "instructor", "bonus", "cta", "footer"],
    hidden: ["attention", "rule", "solutions"],
    media: {},
    custom: {},
  },
};

export const ContentCtx = createContext<PageContent>(DEFAULT_CONTENT);

export function useContent(): PageContent {
  return useContext(ContentCtx);
}

export function ContentProvider({ children }: { children: ReactNode }) {
  return createElement(ContentCtx.Provider, { value: DEFAULT_CONTENT }, children);
}
